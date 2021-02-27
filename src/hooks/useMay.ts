import { useContext } from 'react'
import { Context } from '../contexts/MayProvider'

const useMay = () => {
  const { may } = useContext(Context)
  return may
}

export default useMay
