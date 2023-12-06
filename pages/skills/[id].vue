<template>
  <div class="my-6 space-y-10">
    <div class="flex items-center gap-10">
      <div class="w-7/12 space-y-2">
        <div class="flex">
          <p class="bg-[#319F43] text-white font-medium px-3 py-1 rounded-full">
            {{ levelStore.getLevelNameById(skill.levelId) }}
          </p>
        </div>
        <p class="pt-1 text-6xl font-bold">
          {{ skill.name }}
        </p>
        <div class="py-2">
          <div class="border-2 border-[#319F43] w-40 rounded-full"></div>
        </div>
        <p class="w-10/12 pt-1 text-sm text-gray-600">
          {{ skill.description }}
        </p>
      </div>
      <div class="w-5/12">
        <img
          :src="`${config.public.firebaseBaseUrl}${skill.imageUrl}`"
          class="object-contain w-full h-80" />
      </div>
    </div>
    <div>
      <div class="flex space-x-3">
        <p
          class="cursor-pointer bg-[#319F43] flex items-center py-2 px-8 rounded-full font-semibold text-white">
          อาชีพที่เกี่ยวข้อง
        </p>
        <!-- <p
          class="cursor-pointer px-8 flex items-center font-semibold bg-white border-2 rounded-full border-[#D3D3D3] transition-all duration-300 hover:bg-[#d7d7d7b2]">
          คอร์สที่เกี่ยวข้อง
        </p> -->
      </div>
      <div class="mb-4">
        <div class="grid grid-cols-4 gap-4 mt-[28px]" v-if="jobs.length">
          <div v-for="(job, indexJob) in jobs" :key="`job-${indexJob}`">
            <NuxtLink :to="`/jobs/${job.careerId}`">
              <CardJob
                :category="job.categories[0].name"
                :name="job.name"
                :desc="job.description" />
            </NuxtLink>
          </div>
        </div>
        <div v-else class="py-20 my-6 border-2 border-gray-200 rounded-lg">
          <p class="text-2xl font-semibold text-center text-gray-500">
            NO CAREER
          </p>
        </div>
        <!-- <Pagination /> -->
      </div>
    </div>
  </div>
</template>
<script>
import LevelProvider from '~/resources/LevelProvider'
import SkillProvider from '~/resources/SkillProvider'
import JobProvider from '~/resources/JobProvider'
import { useLevelStore } from '~/stores/Levels'
import { useRuntimeConfig } from 'nuxt/app'

export default {
  data() {
    return {
      LevelService: new LevelProvider(),
      SkillService: new SkillProvider(),
      JobService: new JobProvider(),
      levelStore: useLevelStore(),
      config: useRuntimeConfig(),
      skill: {
        name: '',
        description: '',
        imageUrl: '',
        levelId: '',
      },
      jobs: [],
    }
  },
  computed: {
    idParams() {
      return this.$route.params.id || ''
    },
  },
  mounted() {
    if (!this.levelStore.level.length) {
      this.getLevel()
    }
    this.getSkillById(this.idParams)
    this.getJob()
  },
  methods: {
    async getSkillById(id) {
      const status = await this.SkillService.getSkillById(id)
      if (status.message === 'success') {
        this.skill = status.data
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
