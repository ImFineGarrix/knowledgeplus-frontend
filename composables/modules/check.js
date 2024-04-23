class CheckModule {
  checkEmpty(items) {
    return !!items.length
  }

  checkSearch(search, defaultSearch = '', id = 0) {
    if (search === '' && defaultSearch === '' && id === 0) {
      return true
    }

    if (search !== '' && defaultSearch === '' && id === 0) {
      return true
    }

    return false
  }

  checkSome(data, id) {
    return data.some((dat) => dat === id)
  }

  checkSameData(data1, data2) {
    return data1 === data2
  }
}
export default CheckModule