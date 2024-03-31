<template>
  <div class="space-y-12">
    <div id="header-skills" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">SKILLS</p>
        <div class="space-y-4">
          <Search
            @search="searchItem"
            @update-search="handleSearch"
            placeholder="Search skills" />
        </div>
      </div>
    </div>
    <div>
      <p class="text-2xl font-semibold">All Skills</p>
      <div v-if="ready">
        <div v-if="!error.isError">
          <div v-if="skills.length">
            <div class="grid grid-cols-4 gap-4 my-12">
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
            <div
              class="flex justify-center mt-20 mb-5"
              v-if="pagination.page < pagination.pages">
              <button
                @click="getSkillWithBtnMore()"
                class="flex px-4 py-2 text-white rounded-lg bg-emerald-600">
                MORE
              </button>
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
      skills: [],
      pagination: {
        page: 1,
        pages: 1,
        total: 0,
        limit: 20
      },
      search: '',
      defaultSearch: '',
      ready: false,
      error: {
        isError: false,
        message: '',
      }
    }
  },
  mounted() {
    this.defaultSearch = JSON.parse(JSON.stringify(this.search))
    this.getSkill(this.search, this.defaultSearch)
  },
  methods: {
    async getSkill(search, defaultSearch) {
      const status = await this.SkillService.getSkill(this.pagination.page, this.pagination.limit, search)
      if (status.message === 'success') {
        const  { data } = status
        if (search !== defaultSearch) {
          this.skills = data.skills
          this.defaultSearch = JSON.parse(JSON.stringify(this.search))
        } else {
          this.skills.push(...data.skills)
        }

        const pagination = data.pagination
        this.pagination = {
          ...pagination,
          pages: this.getPages(pagination.total, pagination.limit)
        }
      } else {
        this.error.isError = true
      }
      this.ready = true
    },
    getPages(total, limit) {
      return Math.ceil(total / limit)
    },
    getSkillWithBtnMore () {
      this.pagination.page++
      this.getSkill(this.search, this.defaultSearch)
    },
    handleSearch(newSearch) {
      this.search = newSearch
    },
    searchItem () {
      this.getSkill(this.search, this.defaultSearch)
    }
  },
}
</script>
