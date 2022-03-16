import { configureStore } from '@reduxjs/toolkit'

import counterSlice from "./slice"

export const Store = configureStore({
  reducer: {

    counter: counterSlice,
  },
})