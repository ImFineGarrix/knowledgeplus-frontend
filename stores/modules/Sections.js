import { defineStore } from 'pinia'

export const useSectionStore = defineStore('section', {
  state: () => ({
    sections: [],
  }),

  getters: {
    section: (state) => state.sections,
  },

  actions: {
    setSection(item) {
      this.sections = [{ name: 'All', sectionId: 0 }, ...item]
    },
    getSectionById(id) {
      return this.sections.find((section) => section.sectionId === id)
    }
  },
})
