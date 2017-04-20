const addCounter = (list) => {
  return [...list, 0]
  // return list.concat([0]) -> this is an old way
}

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index), //  gives part of array from begining to index
    ...list.slice(index + 1) // get a new array
  ]
  // return list.list(0, index)
  //            .concat(list.slice(index + 1))
}

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ]
}

const testAddCounter = () => {
  const listBefore = []
  const listAfter = [0]

  deepFreeze(listBefore)

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter)
}

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 20]

  deepFreeze(listBefore)

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter)
}

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 11, 20]

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter)
}

testAddCounter()
testRemoveCounter()
testIncrementCounter()
console.log('All tests passed!')
