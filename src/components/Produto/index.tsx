import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType, RootReducer } from '../../store'
import * as S from './styles'
import { favoritar } from '../../store/reducers/favoritos'
import { adicionar } from '../../store/reducers/carrinho'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const produtoEstaNosFavoritos = (
  produto: ProdutoType,
  favoritos: ProdutoType[]
) => {
  const produtoId = produto.id
  const IdsDosFavoritos = favoritos.map((f) => f.id)

  return IdsDosFavoritos.includes(produtoId)
}

const ProdutoComponent = ({ produto }: Props) => {
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.favoritos
  )
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
        {produtoEstaNosFavoritos(produto, favoritos)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
