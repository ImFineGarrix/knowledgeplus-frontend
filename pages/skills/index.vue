<template>
  <div class="space-y-12">
    <div id="header-jobs" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">SKILLS</p>
        <div class="space-y-4">
          <Search @input="handleSearch" placeholder="ค้นหาทักษะคุณสนใจ" />
          <div class="flex justify-center space-x-3">
            <button
              class="cursor-pointer bg-[#319F43] flex items-center py-2 px-8 rounded-full font-semibold text-white">
              All
            </button>
            <button
              class="cursor-pointer px-8 flex items-center font-semibold bg-white border-2 rounded-full border-[#D3D3D3] transition-all duration-300 hover:bg-[#d7d7d7b2]">
              IT
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="my-4">
      <p class="text-2xl font-semibold">ทักษะแนะนำสำหรับคุณ</p>
      <div class="grid grid-cols-5 gap-4 my-6 mt-12">
        <div
          v-for="(recommend, indexRecommend) in recommendSkill"
          :key="`skill=recommend-${indexRecommend}`">
          <CardSkill :name="recommend.name" :link="recommend.link" />
        </div>
      </div>
      <Pagination />
    </div>
    <div>
      <p class="text-2xl font-semibold">ทักษะทั้งหมด</p>
      <div class="grid grid-cols-5 gap-4 my-12">
        <div
          v-for="(recommend, indexRecommend) in recommendSkill"
          :key="`skill=recommend-${indexRecommend}`">
          <CardSkill :name="recommend.name" :link="recommend.link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillProvider from '~/resources/SkillProvider'
export default {
  data() {
    return {
      SkillService: new SkillProvider(),
      search: '1',
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
      skills: [],
      error: null,
    }
  },
  mounted() {
    this.getSkill()
  },
  methods: {
    async getSkill() {
      const data = await this.SkillService.getSkill()
      if (data.message === 'success') {
        this.skills = JSON.parse(JSON.stringify(data.data))
      } else {
        this.error = data
      }
    },
    handleSearch(newSearch) {
      this.search = newSearch.target.value
    },
  },
}
</script>

<style lang="scss" scoped></style>
