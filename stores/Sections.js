import { defineStore } from 'pinia'

export const useSectionStore = defineStore('section', {
  state: () => ({
    sections: [],
  }),

  getters: {
    category: (state) => state.sections,
  },

  actions: {
    setSection(item) {
      this.sections = [{ name: 'All', categoryId: 0 }, ...item]
    },
  },
})
