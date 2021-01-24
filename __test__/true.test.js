import { isNull, isTrue, isFalse, isUndefined } from '../true';

describe('Probar resultados nulos', () => {
  test('null', () => {
    expect(isNull()).toBeNull();
  })
})

describe('Probar resultados verdaderos', () => {
  test('verdadero', () => {
    expect(isTrue()).toBeTruthy();
  })
})

describe('Probar resultados falsos', () => {
  test('falso', () => {
    expect(isFalse()).toBeFalsy();
  })
})

describe('Probar resultados undefined', () => {
  test('undefined', () => {
    expect(isUndefined()).toBeUndefined();
  })
})

describe('Probar resultados no verdaderos', () => {
  test('falso o verdadero', () => {
    expect(isFalse()).not.toBeTruthy();
  })
})