import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [],
  }),

  getters: {
    category: (state) => state.categories,
  },

  actions: {
    setCategory(item) {
      this.categories = [{ name: 'All', categoryId: 0 }, ...item]
    },
  },
})
