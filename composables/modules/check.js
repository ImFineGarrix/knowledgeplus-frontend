class CheckModule {
  checkEmpty(items) {
    return !!items.length
  }

  checkSearch(search, id = 0) {
    return search === '' && id === 0
  }
}
export default CheckModule