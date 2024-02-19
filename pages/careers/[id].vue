<template>
  <div class="my-6 space-y-10">
    <div class="flex items-center gap-10">
      <div class="w-7/12 space-y-2">
        <div class="flex space-x-2">
          <p class="bg-[#319F43] text-white font-medium px-3 py-1 rounded-full">
            {{ career?.groups[0]?.name || '' }}
          </p>
          <p
            class="bg-[#319F43] text-white font-medium px-3 py-1 rounded-full"
            v-if="career.groups.length > 1">
            {{ career?.groups[1]?.name || ''}}
          </p>
        </div>
        <p class="pt-2 text-6xl font-bold">{{ career?.name || '' }}</p>
        <div class="py-2">
          <div class="border-2 border-[#319F43] w-40 rounded-full"></div>
        </div>
        <p class="w-10/12 text-sm text-gray-600 two-lines-ellipsis">
          <span>{{ career?.description || '' }}</span>
        </p>
      </div>
      <div class="w-5/12">
        <img
          :src="`${config.public.firebaseBaseUrl}${imageSection}`"
          class="object-contain w-full h-96" />
      </div>
    </div>
    <div class="px-6 py-6 my-20 space-y-6 rounded-md shadow-lg">
      <div class="grid grid-cols-12 gap-10">
        <div class="col-span-9 space-y-6">
          <Explain
            id="description"
            title="Description"
            :desc="career?.description || '-'" />
        </div>
        <div class="col-span-3">
          <NavbarExplain :navbars="navbarExplain" />
        </div>
      </div>
    </div>
    <div>
      <Related :remove-id="1" :id-params="idParams" />
    </div>
  </div>
</template>
<script>
import CareerProvider from '~/resources/CareerProvider'
import SectionProvider from '~/resources/SectionProvider'
import GroupProvider from '~/resources/GroupProvider'
import { useRuntimeConfig } from 'nuxt/app'
import { MainStores } from '~/stores'

export default {
  data() {
    return {
      CareerService: new CareerProvider(),
      SectionService: new SectionProvider(),
      GroupService: new GroupProvider(),
      Stores: MainStores(),
      config: useRuntimeConfig(),
      career: {
        name: '',
        description: '',
        shortDesc: '',
        groups: [{ name: '' }],
        skillsLevels: [],
      },
      navbarExplain: [
        {
          label: 'Description',
          val: 'description'
        }
      ],
      imageSection: ''
    }
  },
  computed: {
    idParams() {
      return this.$route.params.id || ''
    },
  },
  mounted() {
    this.getCareerById(this.idParams)
  },
  methods: {
    async getCareerById(id) {
      const status = await this.CareerService.getCareerById(id)
      if (status.message === 'success') {
        this.career = status.data
        this.getGroupById(status.data.groups[0].groupId)
      }
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
    }
  },
}
</script>
