import { useCallback } from 'react'

import useMay from './useMay'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../may/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const may = useMay()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(may),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, may],
  )

  return { onStake: handleStake }
}

export default useStake
