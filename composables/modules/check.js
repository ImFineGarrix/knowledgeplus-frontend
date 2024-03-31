class CheckModule {
  checkEmpty(items) {
    return !!items.length
  }

  checkSearch(search, id = 0) {
    return search === '' && id === 0
  }

  checkSome(data, id) {
    return data.some((dat) => dat === id)
  }

  checkSameData(data1, data2) {
    return data1 === data2
  }
}
export default CheckModule