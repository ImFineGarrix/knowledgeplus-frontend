import { defineStore } from 'pinia'

export const useSkillStore = defineStore('skill', {
  state: () => ({
    skills: [],
    recommends: []
  }),

  getters: {
    skill: (state) => state.skills,
    recommend: (state) => state.recommends
  },

  actions: {
    setSkill(item) {
      this.skills = item
    },
    setRecommended(item) {
      this.recommends = item
    }
  },
})
