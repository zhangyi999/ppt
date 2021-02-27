import { useCallback } from 'react'

import useMay from './useMay'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../may/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const may = useMay()
  const masterChefContract = getMasterChefContract(may)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, may],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
