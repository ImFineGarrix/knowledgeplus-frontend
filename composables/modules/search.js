class SearchModule {
  searchByText(items, text) {
    return items.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
  }

  searchByTextAndSection(items, text, sectionId) {
    if ((!text && typeof text !== 'string') && sectionId === 0) {
      return items
    }

    return items.filter((item) => {
      const searchText = item.name.toLowerCase().includes(text.toLowerCase())
      const searchSection = item.categories.some((category) => category.sectionId === sectionId)

      return searchText && (searchSection || !sectionId)
    })
  }

}

export default SearchModule