<template>
  <div class="flex justify-center mt-6 space-x-3 shadow-xl">
    <div
      v-for="(pagi, indexPagi) in pagination"
      :key="`pagination-${indexPagi}`">
      <div v-if="pagi.isPage" class="w-12 bg-[#5D95F5] h-3 rounded-full"></div>
      <div
        v-else
        @click="gotoPage(pagi.page)"
        class="w-5 bg-[#D9D9D9] h-3 rounded-full cursor-pointer"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      default: () => 1
    },
    pages: {
      type: Number,
      default: () => 1
    }
  },
  data() {
    return {
      pagination: [],
      pagePagination: 1
    }
  },
  mounted() {
    this.setupPagination()
    this.pagePagination = this.page
  },
  methods: {
    setupPagination() {
      this.pagination = []
      console.log(this.pages)
      for (let i = 0; i < this.pages; i++) {
        this.pagination.push({
          page: i + 1,
          isPage: i + 1 === this.pagePagination,
        })
      }
      console.log(this.pagination)
    },
    gotoPage(page) {
      this.pagePagination = page
      this.setupPagination()
      this.$emit('pagination', page)
    },
  },
}
</script>
