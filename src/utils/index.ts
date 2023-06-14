export const getTotalPrice = (items: MenuItem[]) => {
  return items.reduce((acc, totalPrice) => (acc += totalPrice.preco), 0)
}

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
