<template>
  <div class="space-y-16">
    <div class="grid grid-cols-3">
      <div class="flex items-center mt-12">
        <div class="ml-12 space-y-4 text-6xl font-bold">
          <div class="font-poppin">
            <span class="font-poppin text-[#5D95F5]">L</span>EARN.
          </div>
          <div class="font-poppin">
            <span class="font-poppin text-[#319F43]">SK</span>ILL.
          </div>
          <div class="font-poppin">
            <span class="font-poppin text-[#5D95F5]">KNOW</span>LEDGE.
          </div>
          <div class="text-2xl font-light">
            เรียนรู้ และค้นพบตัวตนในที่เดียว
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="flex items-center justify-end">
          <img src="/images/homepage.png" class="w-[650px] ml-2" />
        </div>
      </div>
    </div>
    <div class="space-y-10" v-if="jobs.length">
      <TextSection
        text="ค้นหาอาชีพที่เหมาะกับตัวคุณ"
        text-button="ดูอาชีพทั้งหมด"
        link="/jobs" />
      <div class="grid grid-cols-2">
        <div class="flex items-center justify-start">
          <img src="/images/categories/it.png" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(job, indexJob) in jobs" :key="`job-${indexJob}`">
            <NuxtLink :to="`/jobs/${job.careerId}`">
              <CardJob
                :category="job.categories[0].name"
                :name="job.name"
                :desc="job.description" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- Recommend Skill -->
    <!-- <div class="space-y-10">
      <TextSection
        text="ทักษะที่เหมาะสำหรับสาย IT"
        textButton="ดูทักษะทั้งหมด"
        link="/skills" />
      <div class="grid grid-cols-5">
        <div
          v-for="(recommend, indexRecommend) in recommendSkill"
          :key="`recommend-skill=${indexRecommend}`">
          <CardSkill :name="recommend.name" :link="recommend.link" />
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import { useCategoryStore } from '~/stores/Categories'
import { useLevelStore } from '~/stores/Levels'
import CategoryProvider from '~/resources/CategoryProvider'
import LevelProvider from '~/resources/LevelProvider'
import JobProvider from '~/resources/JobProvider'

export default {
  data() {
    return {
      LevelService: new LevelProvider(),
      CategoryService: new CategoryProvider(),
      JobService: new JobProvider(),
      levelStore: useLevelStore(),
      categoryStore: useCategoryStore(),
      jobs: [],
    }
  },
  mounted() {
    if (!this.categoryStore.category.length) {
      this.getCategory()
    }
    if (!this.levelStore.level.length) {
      this.getLevel()
    }
    this.getJob()
  },
  methods: {
    async getCategory() {
      const status = await this.CategoryService.getCategory()
      if (status.message === 'success') {
        this.categoryStore.setCategory(status.data)
      }
    },
    async getLevel() {
      const status = await this.LevelService.getLevel()
      if (status.message === 'success') {
        this.levelStore.setLevel(status.data)
      }
    },
    async getJob() {
      const status = await this.JobService.getJob(1, 4)
      if (status.message === 'success') {
        this.jobs = status.data.careers
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
