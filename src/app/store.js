import { configureStore } from '@reduxjs/toolkit'
import empresasReducer from '../features/empresas/empresaSlice'


export const store = configureStore({
  reducer: {
    empresas:empresasReducer
  },
})