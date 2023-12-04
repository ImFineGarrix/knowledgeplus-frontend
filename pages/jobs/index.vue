<template>
  <div class="space-y-12">
    <div id="header-jobs" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">JOBS</p>
        <div class="space-y-4">
          <Search @input="handleSearch" placeholder="ค้นหาอาชีพที่คุณสนใจ" />
          <div class="flex justify-center space-x-3">
            <div
              v-for="(category, indexCategory) in categoryStore.category"
              :key="`category-${indexCategory}`">
              <Button
                :name="category.name"
                :active="checkButtonActive(category.categoryId, inputId)"
                @click="setInputId(category.categoryId)" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-4">
      <p class="text-2xl font-semibold">อาชีพที่คุณอาจจะสนใจ</p>
      <div class="grid grid-cols-4 gap-6 mt-6 mb-12">
        <div
          v-for="(recommend, indexRecommend) in recommendJob"
          :key="`job-recommend-${indexRecommend}`">
          <CardJob :name="recommend.name" :desc="recommend.desc" />
        </div>
      </div>
      <Pagination />
    </div>
    <div>
      <p class="text-2xl font-semibold">อาชีพทั้งหมด</p>
      <div class="grid grid-cols-4 gap-6 my-6">
        <div v-for="(job, indexJob) in jobs" :key="`job-${indexJob}`">
          <NuxtLink :to="`/jobs/${job.careerId}`">
            <CardJob :name="job.name" :desc="job.description" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCategoryStore } from '~/stores/Categories'
import CategoryProvider from '~/resources/CategoryProvider'
import JobProvider from '~/resources/JobProvider'

export default {
  data() {
    return {
      CategoryService: new CategoryProvider(),
      JobService: new JobProvider(),
      categoryStore: useCategoryStore(),
      search: '',
      inputId: 0,
      jobs: [],
      recommendJob: [
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
      ],
    }
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
      }
    },
    async getCategory() {
      const status = await this.CategoryService.getCategory()
      if (status.message === 'success') {
        this.categoryStore.setCategory(status.data)
      }
    },
    handleSearch(newSearch) {
      this.search = newSearch.target.value
    },
    setInputId(id) {
      this.inputId = id
    },
    checkButtonActive(id, input) {
      return id === input
    },
  },
}
</script>

<style lang="scss" scoped></style>
