<template>
  <div class="flex justify-center space-x-3 shadow-xl">
    <div
      v-for="(pagi, indexPagi) in pagination"
      :key="`pagination-${indexPagi}`">
      <div v-if="pagi.isPage" class="w-24 bg-[#5D95F5] h-3 rounded-full"></div>
      <div
        v-else
        @click="gotoPage(pagi.page)"
        class="w-5 bg-[#D9D9D9] h-3 rounded-full cursor-pointer"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      pages: 4,
      pagination: [],
    }
  },
  mounted() {
    this.setupPagination()
  },
  methods: {
    setupPagination() {
      this.pagination = []
      for (let i = 0; i < this.pages; i++) {
        this.pagination.push({
          page: i + 1,
          isPage: i + 1 === this.page,
        })
      }
    },
    gotoPage(page) {
      this.page = page
      this.setupPagination()
    },
  },
}
</script>
