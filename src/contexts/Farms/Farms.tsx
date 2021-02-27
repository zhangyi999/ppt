import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useMay from '../../hooks/useMay'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../may/utils'
import { getFarms } from '../../may/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const may = useMay()
  const { account } = useWallet()

  const farms = getFarms(may)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
