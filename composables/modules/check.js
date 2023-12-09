class CheckModule {
  checkEmpty(items) {
    return !!items.length
  }

  checkSearch(text, categoryId = 0) {
    return !text && categoryId === 0
  }
}
export default CheckModule