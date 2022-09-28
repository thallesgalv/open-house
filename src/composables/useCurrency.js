export const useCurrency = (value) => {
  if (typeof value === 'string' || typeof value === 'number') {
    const valueToFormat = +value
    return valueToFormat.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
}
