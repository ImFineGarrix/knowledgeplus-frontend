import { defineStore } from "pinia"

export const useRelatedStore = defineStore('related', {
  state: () => ({
    relateds: [
      {
        id: 1,
        name: 'อาชีพเกี่ยวข้อง'
      },
      {
        id: 2,
        name: 'ทักษะที่เกี่ยวข้อง'
      },
      {
        id: 3,
        name: 'คอร์สที่เกี่ยวข้อง'
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