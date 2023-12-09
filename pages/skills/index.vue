<template>
  <div class="space-y-12">
    <div id="header-jobs" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">SKILLS</p>
        <div class="space-y-4">
          <Search @input="handleSearch" placeholder="ค้นหาทักษะคุณสนใจ" />
        </div>
      </div>
    </div>
    <div class="my-4">
      <!-- <p class="text-2xl font-semibold">ทักษะแนะนำสำหรับคุณ</p>
      <div class="grid grid-cols-4 gap-4 my-6 mt-12">
        <div
          v-for="(recommend, indexRecommend) in recommendSkill"
          :key="`skill=recommend-${indexRecommend}`">
          <CardSkill :name="recommend.name" :image="recommend.link" />
        </div>
      </div>
      <Pagination /> -->
    </div>
    <div>
      <p class="text-2xl font-semibold">ทักษะทั้งหมด</p>
      <div class="grid grid-cols-4 gap-4 my-12" v-if="Check.checkEmpty(skills)">
        <div v-for="(skill, indexSkill) in skills" :key="`skill-${indexSkill}`">
          <NuxtLink :to="`/skills/${skill.skillId}`">
            <CardSkill
              :name="skill.name"
              :desc="skill.description"
              :level="skill.levelId"
              :image="`${config.public.firebaseBaseUrl}${skill.imageUrl}`" />
          </NuxtLink>
        </div>
      </div>
      <EmptyData v-else />
    </div>
  </div>
</template>

<script>
import { useRuntimeConfig } from 'nuxt/app'
import UseCheck from '~/composables/check'
import SkillProvider from '~/resources/SkillProvider'
export default {
  data() {
    return {
      SkillService: new SkillProvider(),
      Check: new UseCheck(),
      search: '1',
      skills: [],
      config: useRuntimeConfig(),
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
      ],
      skills: [],
    }
  },
  mounted() {
    this.getSkill()
  },
  methods: {
    async getSkill() {
      const status = await this.SkillService.getSkill()
      if (status.message === 'success') {
        this.skills = status.data.skills
      }
    },
    handleSearch(newSearch) {
      this.search = newSearch.target.value
    },
  },
}
</script>

<style lang="scss" scoped></style>
