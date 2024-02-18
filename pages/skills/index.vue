<template>
  <div class="space-y-12">
    <div id="header-skills" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">SKILLS</p>
        <div class="space-y-4">
          <Search
            @update-search="handleSearch"
            placeholder="ค้นหาทักษะคุณสนใจ" />
        </div>
      </div>
    </div>
    <div>
      <p class="text-2xl font-semibold">ทักษะทั้งหมด</p>
      <div v-if="ready">
        <div v-if="!error.isError">
          <div class="grid grid-cols-4 gap-4 my-12" v-if="skills.length">
            <div
              v-for="(skill, indexSkill) in skills"
              :key="`skill-${indexSkill}`">
              <NuxtLink :to="`/skills/${skill.skillId}`">
                <CardSkill
                  :name="skill.name"
                  :desc="skill.description || '-'"
                  :type="skill.type"
                  :image="skill.imageUrl" />
              </NuxtLink>
            </div>
          </div>
          <EmptyData v-else :active="Composables.check.checkSearch(search)" />
        </div>
        <MessageError v-else />
      </div>
      <Loading v-else />
    </div>
  </div>
</template>
<script>
import { MainComposables } from '~/composables/index'
import SkillProvider from '~/resources/SkillProvider'
export default {
  data() {
    return {
      SkillService: new SkillProvider(),
      Composables: MainComposables(),
      search: '',
      skills: [],
      skills: [],
      ready: false,
      error: {
        isError: false,
        message: '',
      }
    }
  },
  mounted() {
    this.getSkill()
  },
  methods: {
    async getSkill() {
      const status = await this.SkillService.getSkill(1, 9999)
      if (status.message === 'success') {
        this.skills = status.data.skills
      } else {
        this.error.isError = true
      }
      this.ready = true
    },
    handleSearch(newSearch) {
      this.search = newSearch
    },
  },
}
</script>
