import { defineStore } from 'pinia'

export const useLevelStore = defineStore('level', {
  state: () => ({
    levels: [],
  }),

  getters: {
    level: (state) => state.levels,
  },

  actions: {
    setLevel(item) {
      this.levels = item
    },
    getLevelNameById(id) {
      return this.levels.find((level) => level.levelId === id ? level : '')?.name || ''
    }
  },
})
