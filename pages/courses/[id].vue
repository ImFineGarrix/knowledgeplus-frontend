<template>
  <div class="my-6 space-y-10">
    <div class="flex items-center gap-10">
      <div class="w-7/12 space-y-2">
        <p class="pt-1 text-6xl font-bold">{{ course.name }}</p>
        <div class="py-2">
          <div class="border-2 border-[#319F43] w-40 rounded-full"></div>
        </div>
        <p class="w-10/12 pt-1 text-sm text-gray-600">
          {{ course.description }}
        </p>
        <div class="flex py-6">
          <a
            :href="course.courseLink"
            target="_blank"
            class="px-10 py-2 text-white transition-all rounded-lg shadow-lg bg-emerald-600 hover:scale-105">
            SEE MORE
          </a>
        </div>
      </div>
      <div class="w-5/12">
        <img
          :src="`${config.public.firebaseBaseUrl}${course.organization.imageUrl}`"
          class="object-contain w-full h-96" />
      </div>
    </div>
    <div class="px-6 py-6 my-20 space-y-6 rounded-md shadow-lg">
      <div class="grid grid-cols-12 gap-10">
        <div class="col-span-9 space-y-6">
          <Explain
            id="description"
            title="Description"
            :desc="course.description || '-'" />
          <Explain
            id="learning"
            title="Learning Outcome"
            :desc="course.learningOutcome || '-'" />
          <Explain
            id="organization"
            title="Organization"
            have-image
            :image="course.organization.imageUrl"
            :desc="course.organization.name || '-'" />
          <Explain
            id="learnHours"
            title="Learn Hours"
            :desc="course.learnHours !== '' ? `${course.learnHours} ชั่วโมง` : '-'" />
          <Explain
            id="academicYear"
            title="Academic Year"
            :desc="course.academicYear || '-'" />
        </div>
        <div class="col-span-3">
          <NavbarExplain :navbars="navbarExplain" />
        </div>
      </div>
    </div>
    <Related :remove-id="3" :id-params="idParams" />
  </div>
</template>
<script>
import CourseProvider from '~/resources/CourseProvider'
import { useRuntimeConfig } from 'nuxt/app'
export default {
  data () {
    return {
      CourseService: new CourseProvider(),
      config: useRuntimeConfig(),
      course: {
        name: '',
        description: '',
        learnHours: '',
        academicYear: '',
        courseLink: '',
        learningOutcome: '',
        organization: {
          name: '',
          imageUrl: ''
        }
      },
      navbarExplain: [
        {
          label: 'Description',
          val: 'description'
        },
        {
          label: 'Learning Outcome',
          val: 'learning'
        },
        {
          label: 'Organization',
          val: 'organization'
        },
        {
          label: 'Learn Hours',
          val: 'learnHours'
        },
        {
          label: 'Academic Year',
          val: 'academicYear'
        }
      ]
    }
  },
  computed: {
    idParams() {
      return this.$route.params.id || ''
    },
  },
  mounted () {
    this.getCourseById(this.idParams)
  },
  methods: {
    async getCourseById (id) {
      const status = await this.CourseService.getCourseById(id)
      if (status.message === 'success') {
        this.course = status.data
      }
    }
  }
}
</script>
