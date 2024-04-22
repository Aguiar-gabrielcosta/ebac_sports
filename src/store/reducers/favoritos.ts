import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../index'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (
        state.favoritos.find(
          (produtoFavoritado) => produtoFavoritado.id === produto.id
        )
      ) {
        const favoritosSemProduto = state.favoritos.filter(
          (produtoFavoritado) => produtoFavoritado.id !== produto.id
        )
        state.favoritos = favoritosSemProduto
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export default favoritosSlice.reducer
export const { favoritar } = favoritosSlice.actions
