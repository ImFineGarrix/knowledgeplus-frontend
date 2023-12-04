<template>
  <div class="space-y-10">
    <div class="flex items-center gap-10">
      <div class="w-7/12 space-y-2">
        <p class="text-6xl font-bold">{{ job.name }}</p>
        <p class="text-[#319F43] text-base" v-if="job.shortDesc">
          {{ `"${job.shortDesc}"` }}
        </p>
        <p class="w-10/12 pt-4 text-sm font-light">
          {{ job.description }}
        </p>
      </div>
      <div class="w-5/12">
        <img :src="imageUrl" class="w-[500px]" />
      </div>
    </div>
    <div>
      <div class="flex space-x-3">
        <p
          class="cursor-pointer bg-[#319F43] flex items-center py-2 px-8 rounded-full font-semibold text-white">
          ทักษะที่เกี่ยวข้อง
        </p>
        <p
          class="cursor-pointer px-8 flex items-center font-semibold bg-white border-2 rounded-full border-[#D3D3D3] transition-all duration-300 hover:bg-[#d7d7d7b2]">
          คอร์สที่เกี่ยวข้อง
        </p>
      </div>
      <div class="my-4">
        <div class="grid grid-cols-5 gap-4 my-6 mt-12">
          <div
            v-for="(recommend, indexRecommend) in recommendSkill"
            :key="`skill=recommend-${indexRecommend}`">
            <CardSkill :name="recommend.name" :link="recommend.link" />
          </div>
        </div>
        <Pagination />
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
