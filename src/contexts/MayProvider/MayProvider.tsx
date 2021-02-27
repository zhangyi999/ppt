import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { May } from '../../may'

export interface MayContext {
  may?: typeof May
}

export const Context = createContext<MayContext>({
  may: undefined,
})

declare global {
  interface Window {
    maysauce: any
  }
}

const MayProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [may, setMay] = useState<any>()

  // @ts-ignore
  window.may = may
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const mayLib = new May(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setMay(mayLib)
      window.maysauce = mayLib
    }
  }, [ethereum])

  return <Context.Provider value={{ may }}>{children}</Context.Provider>
}

export default MayProvider
