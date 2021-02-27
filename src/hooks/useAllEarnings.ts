import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../may/utils'
import useMay from './useMay'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const may = useMay()
  const farms = getFarms(may)
  const masterChefContract = getMasterChefContract(may)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, may])

  useEffect(() => {
    if (account && masterChefContract && may) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, may])

  return balances
}

export default useAllEarnings
