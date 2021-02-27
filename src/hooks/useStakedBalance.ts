import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../may/utils'
import useMay from './useMay'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const may = useMay()
  const masterChefContract = getMasterChefContract(may)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, may])

  useEffect(() => {
    if (account && may) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, may])

  return balance
}

export default useStakedBalance
