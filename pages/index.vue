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
          <img src="/images/homepage.png" class="w-[650px] ml-2" />
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
          <img src="/images/categories/it.png" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="(career, indexCareer) in careers"
            :key="`career-${indexCareer}`">
            <NuxtLink :to="`/careers/${career.careerId}`">
              <CardCareer
                :category="career.categories[0].name"
                :name="career.name"
                :desc="career.description" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useSectionStore } from '~/stores/Sections'
import { useLevelStore } from '~/stores/Levels'
import SectionProvider from '~/resources/SectionProvider'
import LevelProvider from '~/resources/LevelProvider'
import CareerProvider from '~/resources/CareerProvider'

export default {
  data() {
    return {
      LevelService: new LevelProvider(),
      SectionService: new SectionProvider(),
      CareerService: new CareerProvider(),
      LevelStore: useLevelStore(),
      SectionStore: useSectionStore(),
      careers: [],
    }
  },
  mounted() {
    if (!this.SectionStore.category.length) {
      this.getSection()
    }
    if (!this.LevelStore.level.length) {
      this.getLevel()
    }
    this.getCareer()
  },
  methods: {
    async getSection() {
      const status = await this.SectionService.getSection()
      if (status.message === 'success') {
        this.SectionStore.setSection(status.data)
      }
    },
    async getLevel() {
      const status = await this.LevelService.getLevel()
      if (status.message === 'success') {
        this.LevelStore.setLevel(status.data)
      }
    },
    async getCareer() {
      const status = await this.CareerService.getCareer(1, 4)
      if (status.message === 'success') {
        this.careers = status.data.careers
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
~/resources/SectionProvider ~/stores/Sections
