import { sumar, multiplicar, restar, dividir } from '../maths.js'

describe('Calculos matemáticos', () => {
  test('Prueba de sumas', () => {
    expect(sumar(2, 2)).toBe(4)
  })

  test('Multiplicar', () => {
    expect(multiplicar(2,2)).toBe(4)
  })

  test('restar', () => {
    expect(restar(2,2)).toBe(0)
  })

  test('dividir', () => {
    expect(dividir(2,2)).toBe(1)
  })
})