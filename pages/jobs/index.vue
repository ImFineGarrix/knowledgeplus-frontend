<template>
  <div class="space-y-12">
    <div id="header-jobs" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">JOBS</p>
        <div class="space-y-4">
          <Search
            @update-search="handleSearch"
            placeholder="ค้นหาอาชีพที่คุณสนใจ" />
          <div class="flex justify-center space-x-3">
            <div
              v-for="(category, indexCategory) in categoryStore.category"
              :key="`category-${indexCategory}`">
              <Button
                :name="category.name"
                :active="checkButtonActive(category.categoryId, categoryId)"
                @click="setInputId(category.categoryId)" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-4">
      <!-- <p class="text-2xl font-semibold">อาชีพที่คุณอาจจะสนใจ</p>
      <div class="grid grid-cols-4 gap-6 mt-6 mb-12">
        <div
          v-for="(recommend, indexRecommend) in recommendJob"
          :key="`job-recommend-${indexRecommend}`">
          <CardJob :name="recommend.name" :desc="recommend.desc" />
        </div>
      </div>
      <Pagination /> -->
    </div>
    <div>
      <p class="text-2xl font-semibold">อาชีพทั้งหมด</p>
      <div v-if="ready">
        <div
          class="grid grid-cols-4 gap-6 my-6"
          v-if="Composables.check.checkEmpty(jobs)">
          <div v-for="(job, indexJob) in searchJob" :key="`job-${indexJob}`">
            <NuxtLink :to="`/jobs/${job.careerId}`">
              <CardJob
                :category="job.categories[0].name"
                :name="job.name"
                :desc="job.description" />
            </NuxtLink>
          </div>
        </div>
        <EmptyData
          :active="Composables.check.checkSearch(search, categoryId)"
          v-else />
      </div>
      <Loading v-else />
    </div>
  </div>
</template>

<script>
import { useCategoryStore } from '~/stores/Categories'
import { MainComposables } from '~/composables/index'
import CategoryProvider from '~/resources/CategoryProvider'
import JobProvider from '~/resources/JobProvider'

export default {
  data() {
    return {
      CategoryService: new CategoryProvider(),
      JobService: new JobProvider(),
      categoryStore: useCategoryStore(),
      Composables: MainComposables(),
      search: '',
      categoryId: 0,
      jobs: [],
      ready: false,
    }
  },
  computed: {
    searchJob() {
      return this.Composables.search.searchByTextAndCategory(
        this.jobs,
        this.search,
        this.categoryId
      )
    },
  },
  mounted() {
    if (!this.categoryStore.category.length) {
      this.getCategory()
    }
    this.getJob()
  },
  methods: {
    async getJob() {
      const status = await this.JobService.getJob(1, 9999)
      if (status.message === 'success') {
        this.jobs = status.data.careers
        this.ready = true
      }
    },
    async getCategory() {
      const status = await this.CategoryService.getCategory()
      if (status.message === 'success') {
        this.categoryStore.setCategory(status.data)
      }
    },
    handleSearch(newSearch) {
      this.search = newSearch.trim()
    },
    setInputId(id) {
      this.categoryId = id
    },
    checkButtonActive(id, input) {
      return id === input
    },
  },
}
</script>

<style lang="scss" scoped></style>
