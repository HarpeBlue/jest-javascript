describe('Comparadores comunes', () => {
  const user = {
    name: "Harold",
    lastname: "Peñaloza",
  }

  const user2 = {
    name: "Oscar",
    lastname: "Barajas",
  }

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2)
  })

  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user2)
  })
})