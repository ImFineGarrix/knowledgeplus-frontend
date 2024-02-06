class CheckModule {
  checkEmpty(items) {
    return !!items.length
  }

  checkSearch(text, sectionId = 0) {
    return !text && sectionId === 0
  }
}
export default CheckModule