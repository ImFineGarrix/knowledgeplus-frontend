import { defineStore } from "pinia"

export const useGroupStore = defineStore('group', {
  state: () => ({
    groups: []
  }),

  getters: {
    group: (state) => state.groups
  },

  actions: {
    setGroup(item) {
      this.groups = [{ name: 'All', groupId: 0 }, ...item]

    },
    getGroupById(id) {
      return this.groups.find((group) => group.id === id)
    },
    getGroupByPagination(page, limit) {
      --page
      return this.groups.slice(page * limit, (page + 1) * limit)
    }
  }
})