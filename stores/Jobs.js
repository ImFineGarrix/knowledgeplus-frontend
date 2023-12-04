import { defineStore } from 'pinia'

export const useJobStore = defineStore('job', {
  state: () => ({
    jobs: [],
    recommends: []
  }),

  getters: {
    job: (state) => state.jobs,
    recommend: (state) => state.recommends
  },

  actions: {
    setJob(item) {
      this.jobs = item
    },
    setRecommended(item) {
      this.recommends = item
    }
  },
})
