import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../index'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (
        state.itens.find((produtoListado) => produtoListado.id === produto.id)
      ) {
        alert('Item já está adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export default carrinhoSlice.reducer
export const { adicionar } = carrinhoSlice.actions
