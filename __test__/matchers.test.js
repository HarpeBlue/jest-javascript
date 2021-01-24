describe('Comparadores comunes', () => {
  const user = {
    name: "Harold",
    lastname: "Peñaloza",
  }

  const user1 = {
    name: "Oscar",
    lastname: "Barajas",
  }

  const user2 = {
    name: "Harold",
    lastname: "Peñaloza",
  }

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2)
  })

  test('No son exactamente iguales', () => {
    expect(user1).not.toEqual(user2)
  })
})