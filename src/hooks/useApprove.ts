import { useCallback } from 'react'

import useMay from './useMay'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { approve, getMasterChefContract } from '../may/utils'

const useApprove = (lpContract: Contract) => {
  const { account }: { account: string; ethereum: provider } = useWallet()
  const may = useMay()
  const masterChefContract = getMasterChefContract(may)

  const handleApprove = useCallback(async () => {
    
    try {
      // console.log({
      //   lpContract, masterChefContract, account
      // })
      const tx = await approve(lpContract, masterChefContract, account)
      return tx
    } catch (e) {
      console.log(e)
      return false
    }
  }, [account, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

export default useApprove
