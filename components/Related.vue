<template>
  <div class="py-10">
    <div class="flex gap-4">
      <div
        v-for="(related, indexRelated) in relateds"
        :key="`related-${indexRelated}`">
        <Button
          :name="related.name"
          :active="checkButtonActive(related.id, relatedId)"
          @click="setInputId(related.id)" />
      </div>
    </div>
    <div class="mb-4">
      <div v-if="relatedId === 1">
        <div class="grid grid-cols-4 gap-4 mt-[28px]" v-if="careers.length">
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
        <div v-else class="py-20 my-6 border-2 border-gray-200 rounded-lg">
          <p class="text-2xl font-semibold text-center text-gray-500">
            NO CAREERS
          </p>
        </div>
      </div>
      <div v-if="relatedId === 2">
        <div class="grid grid-cols-4 gap-4 mt-[28px]" v-if="skills.length">
          <div
            v-for="(skill, indexSkill) in skills"
            :key="`skill-${indexSkill}`">
            <NuxtLink :to="`/skills/${skill.skillId}`">
              <CardSkill
                :name="skill.skill.name"
                :desc="skill.skill.description || '-'"
                :type="skill.skill.type"
                :level-id="skill.levelId"
                :image="skill.skill.imageUrl" />
            </NuxtLink>
          </div>
        </div>
        <div v-else class="py-20 my-6 border-2 border-gray-200 rounded-lg">
          <p class="text-2xl font-semibold text-center text-gray-500">
            NO SKILLS
          </p>
        </div>
      </div>
      <div v-if="relatedId === 3">
        <div class="grid grid-cols-4 gap-4 mt-[28px]" v-if="courses.length">
          <div
            v-for="(course, indexCourse) in courses"
            :key="`course-${indexCourse}`">
            <NuxtLink :to="`/courses/${course.courseId}`">
              <CardCourse
                :name="course.name"
                :desc="course.description || '-'"
                :type="course.courseType"
                :image="course?.organization?.imageUrl || ''"
                :organization-name="course?.organization?.name || '-'" />
            </NuxtLink>
          </div>
        </div>
        <div v-else class="py-20 my-6 border-2 border-gray-200 rounded-lg">
          <p class="text-2xl font-semibold text-center text-gray-500">
            NO COURSES
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MainStores } from '~/stores'
import SkillProvider from '~/resources/SkillProvider';
import CareerProvider from '~/resources/CareerProvider';
import CourseProvider from '~/resources/CourseProvider';
import LevelProvider from '~/resources/LevelProvider'

export default {
  props: {
    removeId: {
      type: Number,
      required: true,
    },
    idParams: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      LevelService: new LevelProvider(),
      SkillService: new SkillProvider(),
      CareerService: new CareerProvider(),
      CourseService: new CourseProvider(),
      Stores: MainStores(),
      relateds: [],
      careers: [],
      skills: [],
      courses: [],
      relatedId: 0
    }
  },
  mounted () {
    this.relateds = this.Stores.RelatedStore.getRelatedByRemoveId(this.removeId)
    this.relatedId = this.relateds[0].id
    if (!this.Stores.LevelStore.level.length) {
      this.getLevel()
    }
    if (this.removeId === 1) {
      this.getSkillByCareerId(this.idParams)
      this.getCourseByCareerId(this.idParams)
    }
    if (this.removeId === 2) {
      this.getCareerBySkillId(this.idParams)
      this.getCourseBySkillId(this.idParams)
    }
    if (this.removeId === 3) {
      this.getCareerByCourseId(this.idParams)
      this.getSkillByCourseId(this.idParams)
    }
  },
  methods: {
    async getCareerBySkillId (id) {
      const status = await this.CareerService.getCareerBySkillId(id)
      if (status.message === 'success') {
        const { data } = status
        this.careers = data.careers
      }
    },
    async getCareerByCourseId (id) {
      const status = await this.CareerService.getCareerByCourseId(id)
      if (status.message === 'success') {
        const { data } = status
        this.careers = data.careers
      }
    },
    async getSkillByCareerId (id) {
      const status = await this.CareerService.getCareerById(id)
      if (status.message === 'success') {
        const { data } = status
        this.skills = data.skillsLevels
      }
    },
    async getSkillByCourseId (id) {
      const status = await this.CourseService.getCourseById(id)
      if (status.message === 'success') {
        const { data } = status
        this.skills = data.skillsLevels
      }
    },
    async getCourseByCareerId (id) {
      const status = await this.CourseService.getCourseByCareerId(id)
      if (status.message === 'success') {
        const { data } = status
        this.courses = data.courses
      }
    },
    async getCourseBySkillId (id) {
      const status = await this.CourseService.getCourseBySkillId(id)
      if (status.message === 'success') {
        const { data } = status
        this.courses = data.courses
      }
    },
    async getLevel() {
      const status = await this.LevelService.getLevel()
      if (status.message === 'success') {
        this.Stores.LevelStore.setLevel(status.data)
      }
    },
    setInputId(id) {
      this.relatedId = id
    },
    checkButtonActive (id, input) {
      return id === input
    }
  }
}
</script>
