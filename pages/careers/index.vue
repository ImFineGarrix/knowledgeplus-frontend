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
              v-for="(group, indexGroup) in Stores.GroupStore.group"
              :key="`group-${indexGroup}`">
              <Button
                :name="group.name"
                :active="checkButtonActive(group.groupId, groupId)"
                @click="setInputId(group.groupId)" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-2xl font-semibold">อาชีพทั้งหมด</p>
      <div v-if="ready">
        <div v-if="!error.isError">
          <div class="grid grid-cols-4 gap-6 my-6" v-if="careers.length">
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
          <EmptyData
            :active="Composables.check.checkSearch(search, groupId)"
            v-else />
        </div>
        <MessageError v-else />
      </div>
      <Loading v-else />
    </div>
  </div>
</template>
<script>
import { MainStores } from '~/stores'
import { MainComposables } from '~/composables/index'
import GroupProvider from '~/resources/GroupProvider'
import CareerProvider from '~/resources/CareerProvider'

export default {
  data() {
    return {
      GroupService: new GroupProvider(),
      CareerService: new CareerProvider(),
      Composables: MainComposables(),
      Stores: MainStores(),
      search: '',
      groupId: 0,
      careers: [],
      ready: false,
      error: {
        isError: false,
        message: ''
      }
    }
  },
  mounted() {
    if (!this.Stores.GroupStore.group.length) {
      this.getGroup()
    }
    this.getCareer()
  },
  methods: {
    async getCareer() {
      const status = await this.CareerService.getCareer(1, 9999)
      if (status.message === 'success') {
        this.careers = status.data.careers
      } else {
        this.error.isError = true
      }
      this.ready = true
    },
    async getGroup() {
      const status = await this.GroupService.getGroup()
      if (status.message === 'success') {
        this.Stores.GroupStore.setGroup(status.data)
      }
    },
    handleSearch(newSearch) {
      this.search = newSearch.trim()
    },
    setInputId(id) {
      this.sectionId = id
    },
    checkButtonActive(id, input) {
      return id === input
    },
  },
}
</script>
