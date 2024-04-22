import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../store'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export default api
export const { useGetProdutosQuery } = api
