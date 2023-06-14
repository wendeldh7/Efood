declare interface MenuItem {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}
