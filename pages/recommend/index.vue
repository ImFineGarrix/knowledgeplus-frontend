<template>
  <div>
    <HeaderRecommend :status-header="statusPage" :recommends="headers" />
    <div v-if="statusPage === 'skill'">
      <div class="my-10 space-y-2">
        <div class="text-4xl font-semibold">All Skills</div>
        <div class="flex justify-between">
          <SmallSearch
            placeholder="Search"
            type="skill"
            @update-search="handleSearch"
            @search="searchItem"
            class="-ml-1" />
          <button
            @click="setStatusPage('career')"
            class="bg-[#319F43] py-2 px-5 font-medium rounded-md text-white">
            Next
          </button>
        </div>
      </div>
      <div v-if="ready.skills">
        <div v-if="!error.skills.isError">
          <div v-if="skills.length">
            <div class="grid grid-cols-4 gap-4 my-6">
              <div
                v-for="(skill,indexSkill) in skills"
                :key="`skill-${indexSkill}`">
                <CardSkill
                  class="cursor-pointer"
                  @click="setSelectedSkill(skill.skillsLevelsId)"
                  :selected="Composables.check.checkSome(selected.skillId, skill.skillsLevelsId)"
                  :name="skill.skill.name"
                  :desc="skill.skill.description || '-'"
                  :type="skill.skill.type"
                  :level-id="skill.levelId"
                  :image="skill.skill.imageUrl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="statusPage === 'career'">
      <div class="my-10 space-y-2">
        <div class="text-4xl font-semibold">All Careers</div>
        <div class="flex justify-between">
          <SmallSearch
            placeholder="Search"
            type="career"
            @update-search="handleSearch"
            @search="searchItem"
            class="-ml-1" />
          <div class="space-x-4">
            <button
              @click="setStatusPage('skill')"
              class="px-5 py-2 font-medium text-white rounded-md bg-rose-700">
              Back
            </button>
            <button
              @click="setStatusPage('recommend')"
              class="bg-[#319F43] py-2 px-5 font-medium rounded-md text-white">
              Next
            </button>
          </div>
        </div>
      </div>
      <div v-if="ready.careers">
        <div v-if="!error.careers.isError">
          <div v-if="careers.length">
            <div class="grid grid-cols-4 gap-4 my-6">
              <div
                v-for="(career, indexCareer) in careers"
                :key="`career-${indexCareer}`">
                <CardCareer
                  class="cursor-pointer"
                  @click="setSelectedCareer(career)"
                  :selected="Composables.check.checkSameData(selected.career?.careerId || 0, career.careerId)"
                  :group="career.groups[0].name"
                  :name="career.name"
                  :desc="career.description || '-'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="statusPage === 'recommend'">
      <div class="border-[1.5px] border-[#319F92] rounded-md mt-10"></div>
      <div class="my-10 space-y-4">
        <div>
          <div class="grid grid-cols-4">
            <div class="flex justify-end col-span-2 mr-5">
              <img
                :src="`${config.public.firebaseBaseUrl}${imageSection}`"
                class="w-48 h-48" />
            </div>
            <div class="flex items-center justify-start col-span-2 ml-5">
              <div class="w-96">
                <p class="text-4xl font-semibold font-poppin">
                  {{ selected.career.name || 'Career' }}
                </p>
                <div class="flex justify-start pt-2 w-[300px]">
                  <p class="text-sm text-gray-600 font-meduim">
                    {{ selected.career.description || '' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TextSection close-btn text="Lack Skills" />
          <div>
            <div v-if="recommends.lackSkill.length">
              <div class="grid grid-cols-4 gap-4 my-6">
                <div
                  v-for="(skill, indexSkill) in recommends.pageLackSkill"
                  :key="`lack-skill-${indexSkill}`">
                  <NuxtLink :to="`/skills/${skill.skillId}`" target="_blank">
                    <CardSkill
                      :name="skill.skill.name"
                      :desc="skill.skill?.description || '-'"
                      :type="skill.skill.type"
                      :level-id="skill.levelId"
                      :image="skill.skill.imageUrl" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div v-else class="py-20 my-6 border-2 border-gray-200 rounded-lg">
              <p class="text-2xl font-semibold text-center text-gray-500">
                NO LACK SKILLS
              </p>
            </div>
          </div>
          <Pagination
            v-if="pagination.lackSkill.pages > 1"
            type="skills"
            :page="pagination.lackSkill.page"
            :pages="pagination.lackSkill.pages"
            @pagination="slidePage" />
        </div>
        <div>
          <TextSection close-btn text="Recommend Course" />
          <div>
            <div v-if="recommends.courses.length">
              <div class="grid grid-cols-4 gap-4 my-6">
                <div
                  v-for="(course, indexCourse) in recommends.pageCourse"
                  :key="`recommend-course-${indexCourse}`">
                  <NuxtLink :to="`/courses/${course.courseId}`" tagrte="_blank">
                    <CardCourse
                      :name="course.name"
                      :desc="course?.description || '-'"
                      :type="course.courseType"
                      :image="course?.organization?.imageUrl || ''"
                      :organization-name="course?.organization?.name || '-'" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div v-else class="py-20 my-6 border-2 border-gray-200 rounded-lg">
              <p class="text-2xl font-semibold text-center text-gray-500">
                NO RECOMMEND COURSES
              </p>
            </div>
          </div>
          <Pagination
            v-if="pagination.courses.pages > 1"
            type="courses"
            :page="pagination.courses.page"
            :pages="pagination.courses.pages"
            @pagination="slidePage" />
        </div>
        <div class="flex justify-center py-10">
          <button
            @click="resetRecommend()"
            class="bg-[#319F92] py-2 px-5 rounded-md font-medium text-white">
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CareerProvider from '~/resources/CareerProvider'
import SkillProvider from '~/resources/SkillProvider'
import SectionProvider from '~/resources/SectionProvider'
import GroupProvider from '~/resources/GroupProvider'
import RecommendProvider from '~/resources/RecommendProvider'
import LevelProvider from '~/resources/LevelProvider'
import { MainComposables } from '~/composables'
import { MainStores } from '~/stores'
import { useRuntimeConfig } from 'nuxt/app'

export default {
  data () {
    return {
      CareerService: new CareerProvider(),
      SkillService: new SkillProvider(),
      SectionService: new SectionProvider(),
      GroupService: new GroupProvider(),
      RecommendService: new RecommendProvider(),
      LevelService: new LevelProvider(),
      careers: [],
      skills: [],
      headers: [
        {
          icon: 'skill',
          title: 'Skill',
          desc: 'description',
          status: 'skill'
        },
        {
          icon: 'career',
          title: 'Career',
          desc: 'description',
          status: 'career'
        },
        {
          icon: 'result',
          title: 'Recommend',
          desc: 'description',
          status: 'recommend'
        }
      ],
      pagination: {
        careers: {
          page: 1,
          pages: 1,
          total: 0,
          limit: 20
        },
        skills: {
          page: 1,
          pages: 1,
          total: 0,
          limit: 20
        },
        lackSkill: {
          page: 1,
          pages: 1,
          total: 0,
          limit: 4,
        },
        courses: {
          page: 1,
          pages: 1,
          total: 0,
          limit: 4
        }
      },
      error: {
        careers: {
          isError: false,
          message: ''
        },
        skills: {
          isError: false,
          message: ''
        },
        recommends: {
          isError: false,
          message: ''
        }
      },
      search: {
        careers: '',
        skills: ''
      },
      ready: {
        careers: false,
        skills: false
      },
      selected: {
        career: null,
        skillId: []
      },
      recommends: {
        lackSkill: [],
        courses: [],
        pageLackSkill: [],
        pageCourse: []
      },
      imageSection: '',
      statusPage: 'skill',
      Composables: MainComposables(),
      Stores: MainStores(),
      config: useRuntimeConfig()
    }
  },
  mounted () {
    if (!this.Stores.LevelStore.levels.length) {
      this.getLevel()
    }
    this.getCareer(this.search.careers, 0)
    this.getSkill(this.search.skills)
  },
  methods: {
    async getLevel() {
      const status = await this.LevelService.getLevel()
      if (status.message === 'success') {
        this.Stores.LevelStore.setLevel(status.data)
      }
    },
    async getCareer (search, id) {
      const status = await this.CareerService.getCareer(this.pagination.careers.page, this.pagination.careers.limit, search, id)
      if (status.message === 'success') {
        const { data } = status
        this.careers = data.careers

        const pagination = data.pagination
        this.pagination.careers = {
          ...pagination,
          pages: this.getPages(pagination.total, pagination.limit)
        }
      } else {
        this.error.careers.isError = true
      }
      this.ready.careers = true
    },
    async getSkill (search) {
      const status = await this.SkillService.getSkillLevel(this.pagination.skills.page, this.pagination.skills.limit, search)
      if (status.message === 'success') {
        const { data } = status
        this.skills = data.skillsLevels

        const pagination = data.pagination
        this.pagination.skills = {
          ...pagination,
          pages: this.getPages(pagination.total, pagination.limit)
        }
      } else {
        this.error.skills.isError = true
      }
      this.ready.skills = true
    },
    async getGroupById (id) {
      const status = await this.GroupService.getGroupById(id)
      if (status.message === 'success') {
        this.getSectionById(status.data.sections[0].sectionId)
      }
    },
    async getSectionById (id) {
      const status = await this.SectionService.getSectionById(id)
      if (status.message === 'success') {
        this.imageSection = status.data?.imageUrl || ''
      }
    },
    async createRecommendSkill (careerId, skillLevelId) {
      const form = {
        currentCareerId: careerId,
        userSkillsLevels: skillLevelId
      }

      const status = await this.RecommendService.createRecommendSkill(form)
      if (status.message === 'success') {
        const data = status.data.differenceSkillsLevels
        this.recommends.lackSkill = [...data]
        const courses = [...data.flatMap((item) => (item.courses))]
        this.recommends.courses = this.removeDuplicate(courses)
        this.pagination.lackSkill.pages = this.getPages(this.recommends.lackSkill.length, this.pagination.lackSkill.limit)
        this.pagination.courses.pages = this.getPages(this.recommends.courses.length, this.pagination.courses.limit)
        this.getRecommendByPagination(this.pagination.lackSkill.page, this.pagination.lackSkill.limit, 'skills')
        this.getRecommendByPagination(this.pagination.courses.page, this.pagination.courses.limit, 'courses')
      }
    },
    removeDuplicate (data, type = 'course') {
      const unique = new Set()
      const filtered = []
      data.forEach((item) => {
        if (!unique.has(item.courseId) && type === 'course') {
          unique.add(item.courseId)
          filtered.push(item)
        }
      })
      return filtered
    },
    getPages(total, limit) {
      return Math.ceil(total / limit)
    },
    getRecommendByPagination (page, limit, type) {
      --page
      if (type === 'courses') {
        this.recommends.pageCourse = this.recommends.courses.slice(page * limit, (page + 1) * limit)
      }
      if (type === 'skills') {
        this.recommends.pageLackSkill = this.recommends.lackSkill.slice(page * limit, (page + 1) * limit)
      }
    },
    slidePage (item) {
      if (item.type === 'skills') {
        this.pagination.lackSkill.page = item.page
        this.getRecommendByPagination(this.pagination.lackSkill.page, this.pagination.lackSkill.limit, 'skills')
      }

      if (item.type === 'courses') {
        this.pagination.courses.page = item.page
        this.getRecommendByPagination(this.pagination.courses.page, this.pagination.courses.limit, 'courses')
      }
    },
    setStatusPage (text) {
      if (text === 'recommend') {
        this.getGroupById(this.selected.career.groups[0].groupId)
        this.createRecommendSkill(this.selected.career?.careerId, this.selected.skillId)
      }
      this.statusPage = text
    },
    setSelectedCareer (data) {
      if (this.selected.career === data.careerId) {
        this.selected.career = null
      } else {
        this.selected.career = data
      }
    },
    setSelectedSkill (id) {
      const check = this.Composables.check.checkSome(this.selected.skillId, id)
      if (!check) {
        this.selected.skillId.push(id)
      } else {
        const index = this.selected.skillId.indexOf(id)
        this.selected.skillId.splice(index, 1)
      }
    },
    handleSearch (newSearch) {
      if (newSearch.type === 'career') {
        this.search.careers = newSearch.search.trim()
      }

      if (newSearch.type === 'skill') {
        this.search.skills = newSearch.search.trim()
      }
    },
    searchItem (type) {
      if (type === 'career') {
        this.getCareer(this.search.careers, 0)
      }

      if (type === 'skill') {
        this.getSkill(this.search.skills)
      }
    },
    resetRecommend () {
      this.selected = {
        career: null,
        skillId: []
      }
      this.imageSection = ''
      this.statusPage = 'skill'
      this.search = {
        careers: '',
        skills: ''
      }
    }
  },
}
</script>
