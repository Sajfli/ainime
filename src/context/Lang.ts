import { createContext } from 'react'

export default createContext({lang: '', change: (val: string) => {val}})