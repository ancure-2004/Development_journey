import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//steps for redux
//1. create store
//2. wrap app component under provider
//3. create slice
//4. register reducer in store