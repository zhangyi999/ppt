import { useCallback } from 'react'

import useMay from './useMay'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../may/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const may = useMay()
  const masterChefContract = getMasterChefContract(may)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, may])

  return { onReward: handleReward }
}

export default useReward
