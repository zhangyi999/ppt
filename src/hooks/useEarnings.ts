import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../may/utils'
import useMay from './useMay'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const may = useMay()
  const masterChefContract = getMasterChefContract(may)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, may])

  useEffect(() => {
    if (account && masterChefContract && may) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, may])

  return balance
}

export default useEarnings
