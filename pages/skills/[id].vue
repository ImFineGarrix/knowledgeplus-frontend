<template>
  <div class="my-6 space-y-10">
    <div class="flex items-center gap-10">
      <div class="w-7/12 space-y-2">
        <div class="flex">
          <p class="bg-[#319F43] text-white font-medium px-3 py-1 rounded-full">
            {{ types[skill.type] }}
          </p>
        </div>
        <p class="w-10/12 pt-1 text-6xl font-bold">
          {{ skill.name }}
        </p>
        <div class="py-2">
          <div class="border-2 border-[#319F43] w-40 rounded-full"></div>
        </div>
        <p class="pt-1 overflow-auto text-sm text-gray-600 two-lines-ellipsis">
          <span>{{ skill.description || '-' }}</span>
        </p>
      </div>
      <div class="w-5/12">
        <img
          :src="`${config.public.firebaseBaseUrl}${skill.imageUrl}`"
          class="object-contain w-full h-64" />
      </div>
    </div>
    <div class="px-6 py-6 my-20 space-y-6 rounded-md shadow-lg">
      <div class="grid grid-cols-12 gap-10">
        <div class="col-span-9 space-y-6">
          <Explain
            id="description"
            title="Description"
            :desc="skill.description || '-'" />
          <Explain
            id="knowledge"
            title="Knowledge"
            have-level
            :desc-levels="skill.knowledge || '-'" />
          <Explain
            id="ability"
            title="Ability"
            have-level
            :desc-levels="skill.ability || '-'" />
        </div>
        <div class="col-span-3">
          <NavbarExplain :navbars="navbarExplain" />
        </div>
      </div>
    </div>
    <div>
      <Related :remove-id="2" :id-params="idParams" />
    </div>
  </div>
</template>
<script>
import LevelProvider from '~/resources/LevelProvider'
import SkillProvider from '~/resources/SkillProvider'
import { MainStores } from '~/stores'
import { useRuntimeConfig } from 'nuxt/app'

export default {
  data() {
    return {
      LevelService: new LevelProvider(),
      SkillService: new SkillProvider(),
      Stores: MainStores(),
      config: useRuntimeConfig(),
      skill: {
        name: '',
        description: '',
        imageUrl: '',
        skillsLevels: [],
        knowledge: [],
        ability: []
      },
      careers: [],
      navbarExplain: [
        {
          label: 'Description',
          val: 'description'
        },
        {
          label: 'Knowledge',
          val: 'knowledge'
        },
        {
          label: 'Ability',
          val: 'ability'
        }
      ],
      types: {
        HARD: 'Hard Skill',
        SOFT: 'Soft Skill'
      },
      relatedId: 0,
      relateds: []
    }
  },
  computed: {
    idParams() {
      return this.$route.params.id || ''
    },
  },
  mounted() {
    if (!this.Stores.LevelStore.level.length) {
      this.getLevel()
    }
    this.getSkillById(this.idParams)
  },
  methods: {
    async getSkillById(id) {
      const status = await this.SkillService.getSkillById(id)
      if (status.message === 'success') {

        const knowledge = status.data.skillsLevels.map((sl) => ({
          desc: sl?.knowledgeDesc || '',
          levelId: sl?.levelId || 0
        }))

        const ability = status.data.skillsLevels.map((sl) => ({
          desc: sl?.abilityDesc || '',
          levelId: sl?.levelId || 0
        }))

        this.skill = {
          ...status.data,
          knowledge,
          ability
        }
      }
    },
    async getLevel() {
      const status = await this.LevelService.getLevel()
      if (status.message === 'success') {
        this.Stores.LevelStore.setLevel(status.data)
      }
    },
  },
}
</script>
