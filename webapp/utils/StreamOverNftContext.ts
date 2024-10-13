import { createContext, useContext } from 'react'

interface iStreamOverNftContextInterface {
  state: StreamOverNftContextInterface | null
  setState: React.Dispatch<React.SetStateAction<StreamOverNftContextInterface | null>>
}

const initialState = {
  state: null,
  setState: () => {}
}

export const StreamOverNftContext = createContext<iStreamOverNftContextInterface>(initialState)
