class SearchModule {
  searchByText(items, text) {
    return items.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
  }

  searchByTextAndCategory(items, text, categoryId) {
    if ((!text && typeof text !== 'string') && categoryId === 0) {
      return items
    }

    return items.filter((item) => {
      const searchText = item.name.toLowerCase().includes(text.toLowerCase())
      const searchCategory = item.categories.some((category) => category.categoryId === categoryId)

      return searchText && (searchCategory || !categoryId)
    })
  }

}

export default SearchModule