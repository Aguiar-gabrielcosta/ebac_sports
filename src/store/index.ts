import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'
import api from '../services/api'

export type RootReducer = ReturnType<typeof store.getState>

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
