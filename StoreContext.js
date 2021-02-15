import{ createContext } from 'react';

export const storeDef = {
  errors: [],
  applications: {}
}

export const StoreContext = createContext(storeDef)
