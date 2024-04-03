<template>
  <div>
    <div class="space-y-12">
      <div id="header-jobs" class="flex justify-center mt-16">
        <div class="space-y-7">
          <p class="text-6xl font-semibold text-center font-poppin">COURSES</p>
          <div class="space-y-4">
            <Search
              @update-search="handleSearch"
              @search="searchItem"
              placeholder="Search courses" />
          </div>
        </div>
      </div>
      <div>
        <p class="text-2xl font-semibold">All Courses</p>
        <div v-if="ready">
          <div v-if="!error.isError">
            <div v-if="courses.length">
              <div class="grid grid-cols-4 gap-6 my-6">
                <div
                  v-for="(course, indexCourse) in courses"
                  :key="`course-${indexCourse}`">
                  <NuxtLink :to="`/courses/${course.courseId}`">
                    <CardCourse
                      :name="course.name"
                      :desc="course.description"
                      :type="course.courseType"
                      :image="course?.organization?.imageUrl || ''"
                      :organization-name="course?.organization?.name || ''" />
                  </NuxtLink>
                </div>
              </div>
              <div
                class="flex justify-center mt-20 mb-5"
                v-if="pagination.page < pagination.pages">
                <button
                  @click="getSkillWithBtnMore()"
                  class="flex px-4 py-2 text-white rounded-lg bg-[#319F43]">
                  MORE
                </button>
              </div>
            </div>
            <EmptyData :active="Composables.check.checkSearch(search)" v-else />
          </div>
          <MessageError v-else />
        </div>
        <Loading v-else />
      </div>
    </div>
  </div>
</template>
<script>
import CourseProvider from '~/resources/CourseProvider'
import { MainStores } from '~/stores'
import { MainComposables } from '~/composables'

export default {
  data () {
    return {
      CourseService: new CourseProvider(),
      Stores: MainStores(),
      courses: [],
      pagination: {
        page: 1,
        pages: 1,
        total: 0,
        limit: 20
      },
      search: '',
      defaultSearch: '',
      error: {
        isError: false,
        message: ''
      },
      ready: false,
      Composables: MainComposables()
    }
  },
  mounted () {
    this.defaultSearch = JSON.parse(JSON.stringify(this.search))
    this.getCourse(this.search, this.defaultSearch)
  },
  methods: {
    async getCourse (search, defaultSearch) {
      if (search !== defaultSearch) {
        this.pagination.page = 1
      }
      const status = await this.CourseService.getCourse(this.pagination.page, this.pagination.limit, search)
      if (status.message === 'success') {
        const { data } = status
        if (search !== defaultSearch) {
          this.courses = data.courses
          this.defaultSearch = JSON.parse(JSON.stringify(this.search))
        } else {
          this.courses.push(...data.courses)
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
      this.getCourse(this.search, this.defaultSearch)
    },
    handleSearch(newSearch) {
      this.search = newSearch.trim()
    },
    searchItem () {
      this.getCourse(this.search, this.defaultSearch)
    }
  }
}
</script>
