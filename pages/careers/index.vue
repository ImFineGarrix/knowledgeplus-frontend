<template>
  <div class="space-y-12">
    <div id="header-careers" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">CAREERS</p>
        <div class="flex justify-center space-y-4">
          <Search
            @update-search="handleSearch"
            @search="searchItem"
            placeholder="Search careers" />
        </div>
        <div v-if="groupReady">
          <div class="flex justify-center gap-4">
            <div
              v-for="(group, indexGroup) in groups"
              :key="`group-${indexGroup}`">
              <Button
                :name="group.name"
                :active="checkButtonActive(group.groupId, groupId)"
                @click="setInputId(group.groupId)" />
            </div>
          </div>
          <Pagination
            v-if="groupPages > 1"
            :page="groupPage"
            :pages="groupPages"
            @pagination="slidePage" />
        </div>
      </div>
    </div>
    <div>
      <p class="text-2xl font-semibold">All Careers</p>
      <div v-if="ready">
        <div v-if="!error.isError">
          <div v-if="careers.length">
            <div class="grid grid-cols-4 gap-6 my-6">
              <div
                v-for="(career, indexCareer) in careers"
                :key="`career-${indexCareer}`">
                <NuxtLink :to="`/careers/${career.careerId}`">
                  <CardCareer
                    :group="career?.groups[0]?.name || '-'"
                    :name="career?.name || '-'"
                    :desc="career.description || '-'" />
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
      defaultSearch: '',
      defaultGroupId: 0,
      careers: [],
      pagination: {
        page: 1,
        pages: 1,
        total: 0,
        limit: 20
      },
      ready: false,
      error: {
        isError: false,
        message: ''
      },
      groups: [],
      groupId: 0,
      groupPage: 1,
      groupPages: 0,
      groupLimit: 4,
      groupReady: false
    }
  },
  mounted() {
    if (!this.Stores.GroupStore.group.length) {
      this.getGroup()
    } else {
      this.getGroupByPagination()
      this.groupPages = Math.ceil(this.Stores.GroupStore.group.length / this.groupLimit)
      this.groupReady = true
    }
    this.defaultSearch = JSON.parse(JSON.stringify(this.search))
    this.defaultGroupId = JSON.parse(JSON.stringify(this.groupId))
    this.getCareer(this.search, this.defaultSearch, this.groupId)
  },
  methods: {
    async getCareer(search, defaultSearch, id) {
      const status = await this.CareerService.getCareer(this.pagination.page, this.pagination.limit, search, id)
      if (status.message === 'success') {
        const { data } = status
        if (search !== defaultSearch || id !== this.defaultGroupId) {
          this.careers = data.careers
          this.defaultSearch = JSON.parse(JSON.stringify(this.search))
          this.defaultSearch = JSON.parse(JSON.stringify(this.groupId))
        } else {
          this.careers.push(...data.careers)
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
    async getGroup() {
      const status = await this.GroupService.getGroup()
      if (status.message === 'success') {
        this.Stores.GroupStore.setGroup(status.data)
        this.getGroupByPagination()
        this.groupPages = Math.ceil(status.data.length / this.groupLimit)
        this.groupReady = true
      }
    },
    getPages(total, limit) {
      return Math.ceil(total / limit)
    },
    getGroupByPagination () {
      this.groups = this.Stores.GroupStore.getGroupByPagination(this.groupPage, this.groupLimit)
    },
    slidePage (page) {
      this.groupPage = page
      this.getGroupByPagination()
    },
    handleSearch(newSearch) {
      this.search = newSearch.trim()
    },
    setInputId(id) {
      this.groupId = id
      this.searchItem()
    },
    getSkillWithBtnMore () {
      this.pagination.page++
      this.getCareer(this.search, this.defaultSearch, this.groupId)
    },
    checkButtonActive(id, input) {
      return id === input
    },
    searchItem () {
      this.getCareer(this.search, this.defaultSearch, this.groupId)
    }
  },
}
</script>
