import { defineStore } from 'pinia'

export const useCareerStore = defineStore('career', {
  state: () => ({
    careers: [],
    recommends: []
  }),

  getters: {
    career: (state) => state.careers,
    recommend: (state) => state.recommends
  },

  actions: {
    setCareer(item) {
      this.careers = item
    },
    setRecommended(item) {
      this.recommends = item
    }
  },
})
