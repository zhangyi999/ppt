import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
} from '../may/utils'
import useMay from './useMay'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const may = useMay()
  const farms = getFarms(may)
  const masterChefContract = getMasterChefContract(may)
  const wethContact = getWethContract(may)
  const block = useBlock()
  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) =>
          getTotalLPWethValue(
            masterChefContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
          ),
      ),
    )
            // console.log({balances},'balances')
    setBalance(balances)
  }, [account, masterChefContract, may])

  useEffect(() => {
    if (account && masterChefContract && may) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, may])

  return balances
}

export default useAllStakedValue
