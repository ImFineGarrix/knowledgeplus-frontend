import { defineStore } from "pinia"

export const useRelatedStore = defineStore('related', {
  state: () => ({
    relateds: [
      {
        id: 1,
        name: 'Relevant Careers'
      },
      {
        id: 2,
        name: 'Relevant Skills'
      },
      {
        id: 3,
        name: 'Relevant Courses'
      }
    ]
  }),

  getters: {
    related: (state) => state.relateds
  },

  actions: {
    getRelatedByRemoveId(id) {
      return this.relateds.filter((related) => related.id !== id);
    }
  }
})