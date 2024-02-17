<template>
  <div class="space-y-12">
    <div id="header-careers" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">CAREERS</p>
        <div class="space-y-4">
          <Search
            @update-search="handleSearch"
            placeholder="ค้นหาอาชีพที่คุณสนใจ" />
          <div class="flex justify-center space-x-3">
            <div
              v-for="(category, indexCategory) in SectionStore.category"
              :key="`category-${indexCategory}`">
              <Button
                :name="category.name"
                :active="checkButtonActive(category.categoryId, categoryId)"
                @click="setInputId(category.categoryId)" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-2xl font-semibold">อาชีพทั้งหมด</p>
      <div v-if="ready">
        <div
          class="grid grid-cols-4 gap-6 my-6"
          v-if="Composables.check.checkEmpty(careers)">
          <div
            v-for="(career, indexCareer) in searchCareer"
            :key="`career-${indexCareer}`">
            <NuxtLink :to="`/careers/${career.careerId}`">
              <CardCareer
                :category="career.categories[0].name"
                :category2="
                  career.categories.length > 1 ? career.categories[1].name : ''
                "
                :name="career.name"
                :desc="career.description" />
            </NuxtLink>
          </div>
        </div>
        <EmptyData
          :active="Composables.check.checkSearch(search, categoryId)"
          v-else />
      </div>
      <Loading v-else />
    </div>
  </div>
</template>

<script>
import { useSectionStore } from '~/stores/Sections'
import { MainComposables } from '~/composables/index'
import SectionProvider from '~/resources/SectionProvider'
import CareerProvider from '~/resources/CareerProvider'

export default {
  data() {
    return {
      SectionService: new SectionProvider(),
      CareerService: new CareerProvider(),
      SectionStore: useSectionStore(),
      Composables: MainComposables(),
      search: '',
      categoryId: 0,
      careers: [],
      ready: false,
    }
  },
  computed: {
    searchCareer() {
      return this.Composables.search.searchByTextAndSection(
        this.careers,
        this.search,
        this.categoryId
      )
    },
  },
  mounted() {
    if (!this.SectionStore.category.length) {
      this.getSection()
    }
    this.getCareer()
  },
  methods: {
    async getCareer() {
      const status = await this.CareerService.getCareer(1, 9999)
      if (status.message === 'success') {
        this.careers = status.data.careers
        this.ready = true
      }
    },
    async getSection() {
      const status = await this.SectionService.getSection()
      if (status.message === 'success') {
        this.SectionStore.setSection(status.data)
      }
    },
    handleSearch(newSearch) {
      this.search = newSearch.trim()
    },
    setInputId(id) {
      this.categoryId = id
    },
    checkButtonActive(id, input) {
      return id === input
    },
  },
}
</script>
~/resources/SectionProvider ~/stores/Sections
