<template>
  <div class="space-y-16">
    <div class="grid grid-cols-3">
      <div class="flex items-center mt-12">
        <div class="ml-12 space-y-4 text-6xl font-bold">
          <div class="font-poppin">
            <span class="font-poppin text-[#5D95F5]">L</span>EARN.
          </div>
          <div class="font-poppin">
            <span class="font-poppin text-[#319F43]">SK</span>ILL.
          </div>
          <div class="font-poppin">
            <span class="font-poppin text-[#5D95F5]">KNOW</span>LEDGE.
          </div>
          <div class="text-2xl font-light">
            เรียนรู้ และค้นพบตัวตนในที่เดียว
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="flex items-center justify-end">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/knowledge-project-7e224.appspot.com/o/homepage.png?alt=media&token=65838527-c734-4116-9548-6f5a5a43e910"
            class="w-[650px] ml-2" />
        </div>
      </div>
    </div>
    <div class="space-y-10" v-if="careers.length">
      <TextSection
        text="ค้นหาอาชีพที่เหมาะกับตัวคุณ"
        text-button="ดูอาชีพทั้งหมด"
        link="/careers" />
      <div class="grid grid-cols-2">
        <div class="flex items-center justify-start">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/knowledge-project-7e224.appspot.com/o/it.png?alt=media&token=9fc5261d-9cc2-48a4-bfe3-61d2c20433ad" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="(career, indexCareer) in careers"
            :key="`career-${indexCareer}`">
            <NuxtLink :to="`/careers/${career.careerId}`">
              <CardCareer
                :group="career.groups[0].name"
                :name="career.name"
                :desc="career.description || '-'" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-10" v-if="courses.length">
      <TextSection
        text="คอร์สที่เปิดสอน"
        text-button="ดูคอร์สทั้งหมด"
        link="/courses" />
      <div class="grid grid-cols-4 gap-6 my-6">
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
    </div>
  </div>
</template>
<script>
import { MainStores } from '~/stores'
import SectionProvider from '~/resources/SectionProvider'
import LevelProvider from '~/resources/LevelProvider'
import CareerProvider from '~/resources/CareerProvider'
import GroupProvider from '~/resources/GroupProvider'
import CourseProvider from '~/resources/CourseProvider'

export default {
  data() {
    return {
      LevelService: new LevelProvider(),
      SectionService: new SectionProvider(),
      CareerService: new CareerProvider(),
      GroupService: new GroupProvider(),
      CourseService: new CourseProvider(),
      Stores: MainStores(),
      careers: [],
      courses: []
    }
  },
  mounted() {
    if (!this.Stores.SectionStore.sections.length) {
      this.getSection()
    }
    if (!this.Stores.LevelStore.level.length) {
      this.getLevel()
    }
    if (!this.Stores.GroupStore.group.length) {
      this.getGroup()
    }
    this.getCareer()
    this.getCourse()
  },
  methods: {
    async getSection() {
      const status = await this.SectionService.getSection()
      if (status.message === 'success') {
        this.Stores.SectionStore.setSection(status.data)
      }
    },
    async getLevel() {
      const status = await this.LevelService.getLevel()
      if (status.message === 'success') {
        this.Stores.LevelStore.setLevel(status.data)
      }
    },
    async getGroup() {
      const status = await this.GroupService.getGroup()
      if (status.message === 'success') {
        this.Stores.GroupStore.setGroup(status.data)
      }
    },
    async getCareer() {
      const status = await this.CareerService.getCareer(1, 4)
      if (status.message === 'success') {
        this.careers = status.data.careers
      }
    },
    async getCourse () {
      const status = await this.CourseService.getCourse(1, 4)
      if (status.message === 'success') {
        this.courses = status.data.courses
      }
    }
  },
}
</script>
