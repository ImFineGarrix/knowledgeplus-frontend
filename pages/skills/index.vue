<template>
  <div class="space-y-12">
    <div id="header-jobs" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">SKILLS</p>
        <div class="space-y-4">
          <Search
            @update-search="handleSearch"
            placeholder="ค้นหาทักษะคุณสนใจ" />
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
      <div v-if="ready">
        <div
          class="grid grid-cols-4 gap-4 my-12"
          v-if="Composables.check.checkEmpty(skills)">
          <div
            v-for="(skill, indexSkill) in searchSkill"
            :key="`skill-${indexSkill}`">
            <NuxtLink :to="`/skills/${skill.skillId}`">
              <CardSkill
                :name="skill.name"
                :desc="skill.description"
                :level="skill.levelId"
                :image="`${config.public.firebaseBaseUrl}${skill.imageUrl}`" />
            </NuxtLink>
          </div>
        </div>
        <EmptyData v-else :active="Composables.check.checkSearch(search)" />
      </div>
      <Loading v-else />
    </div>
  </div>
</template>

<script>
import { useRuntimeConfig } from 'nuxt/app'
import { MainComposables } from '~/composables/index'
import SkillProvider from '~/resources/SkillProvider'
export default {
  data() {
    return {
      SkillService: new SkillProvider(),
      Composables: MainComposables(),
      search: '',
      skills: [],
      config: useRuntimeConfig(),
      skills: [],
      ready: false,
    }
  },
  computed: {
    searchSkill() {
      return this.Composables.search.searchByText(this.skills, this.search)
    },
  },
  mounted() {
    this.getSkill()
  },
  methods: {
    async getSkill() {
      const status = await this.SkillService.getSkill()
      if (status.message === 'success') {
        this.skills = status.data.skills
        this.ready = true
      }
    },
    handleSearch(newSearch) {
      this.search = newSearch
    },
  },
}
</script>

<style lang="scss" scoped></style>
