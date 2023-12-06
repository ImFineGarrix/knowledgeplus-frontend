<template>
  <div class="my-6 space-y-10">
    <div class="flex items-center gap-10">
      <div class="w-7/12 space-y-2">
        <div class="flex">
          <p class="bg-[#319F43] text-white font-medium px-3 py-1 rounded-full">
            {{ job.categories[0].name }}
          </p>
        </div>
        <p class="pt-2 text-6xl font-bold">{{ job.name }}</p>
        <p class="text-[#319F43] text-base" v-if="job.shortDesc">
          {{ `"${job.shortDesc}"` }}
        </p>
        <div class="py-2">
          <div class="border-2 border-[#319F43] w-40 rounded-full"></div>
        </div>
        <p class="w-10/12 text-sm text-gray-600">
          {{ job.description }}
        </p>
      </div>
      <div class="w-5/12">
        <img :src="imageUrl" class="object-contain w-full h-96" />
      </div>
    </div>
    <div class="pt-10">
      <div class="flex space-x-3">
        <p
          class="cursor-pointer bg-[#319F43] flex items-center py-2 px-8 rounded-full font-semibold text-white">
          ทักษะที่เกี่ยวข้อง
        </p>
        <!-- <p
          class="cursor-pointer px-8 flex items-center font-semibold bg-white border-2 rounded-full border-[#D3D3D3] transition-all duration-300 hover:bg-[#d7d7d7b2]">
          คอร์สที่เกี่ยวข้อง
        </p> -->
      </div>
      <div class="mb-4">
        <div
          class="grid grid-cols-4 gap-4 my-6 mt-[28px]"
          v-if="job.skills.length">
          <div
            v-for="(skill, indexSkill) in job.skills"
            :key="`skill-${indexSkill}`">
            <NuxtLink :to="`/skills/${skill.skillId}`">
              <CardSkill
                :level="skill.levelId"
                :name="skill.name"
                :desc="skill.description"
                :image="`${config.public.firebaseBaseUrl}${skill.imageUrl}`" />
            </NuxtLink>
          </div>
        </div>
        <div v-else class="py-20 my-6 border-2 border-gray-200 rounded-lg">
          <p class="text-2xl font-semibold text-center text-gray-500">
            NO SKILL
          </p>
        </div>
        <!-- <Pagination /> -->
      </div>
    </div>
  </div>
</template>
<script>
import JobProvider from '~/resources/JobProvider'
import { useRuntimeConfig } from 'nuxt/app'

export default {
  data() {
    return {
      JobService: new JobProvider(),
      config: useRuntimeConfig(),
      job: {
        name: '',
        description: '',
        shortDesc: '',
        categories: [{ imageUrl: '' }],
        skills: [],
      },
      recommendSkill: [
        {
          name: 'Coding',
          link: '/images/icon/good-code.png',
        },
        {
          name: 'Coding',
          link: '/images/icon/good-code.png',
        },
        {
          name: 'Coding',
          link: '/images/icon/good-code.png',
        },
        {
          name: 'Coding',
          link: '/images/icon/good-code.png',
        },
        {
          name: 'CodingCodingCodingCodingCodingCodingCodingCoding',
          link: '/images/icon/good-code.png',
        },
      ],
    }
  },
  computed: {
    idParams() {
      return this.$route.params.id || ''
    },
    imageUrl() {
      return `${this.config.public.firebaseBaseUrl}${this.job.categories[0].imageUrl}`
    },
  },
  mounted() {
    this.getJobById(this.idParams)
  },
  methods: {
    async getJobById(id) {
      const status = await this.JobService.getJobById(id)
      if (status.message === 'success') {
        this.job = status.data
      }
    },
  },
}
</script>
