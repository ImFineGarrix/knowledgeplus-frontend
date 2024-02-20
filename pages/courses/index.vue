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
              placeholder="ค้นหาคอร์สเรียนที่คุณสนใจ" />
          </div>
        </div>
      </div>
      <div>
        <p class="text-2xl font-semibold">คอร์สเรียนทั้งหมด</p>
        <div v-if="ready">
          <div v-if="!error.isError">
            <div v-if="courses.length" class="grid grid-cols-4 gap-6 my-6">
              <div
                v-for="(course, indexCourse) in courses"
                :key="`course-${indexCourse}`">
                <NuxtLink :to="`/courses/${course.courseId}`">
                  <CardCourse
                    :name="course.name"
                    :desc="course.description"
                    :image="course?.organization?.imageUrl || ''"
                    :organization-name="course?.organization?.name || ''" />
                </NuxtLink>
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
      search: '',
      error: {
        isError: false,
        message: ''
      },
      ready: false,
      Composables: MainComposables()
    }
  },
  mounted () {
    this.getCourse(this.search)
  },
  methods: {
    async getCourse (search) {
      const status = await this.CourseService.getCourse(1, 9999, search)
      if (status.message === 'success') {
        this.courses = status.data.courses
      } else {
        this.error.isError = true
      }
      this.ready = true
    },
    handleSearch(newSearch) {
      this.search = newSearch.trim()
    },
    searchItem () {
      this.getCourse(this.search)
    }
  }
}
</script>
