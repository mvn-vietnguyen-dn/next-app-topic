import { configureStore } from '@reduxjs/toolkit'

import favouriteReducer from './favouriteSlice'

export function makeStore() {
  return configureStore({
    reducer: { favourite: favouriteReducer },
  })
}

const store = makeStore()

export default store