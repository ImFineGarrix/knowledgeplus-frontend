<template>
  <div
    :class="selected ? 'border-4 border-[#319F92]' : 'border'"
    class="h-64 transition-all bg-white shadow-lg cursor-pointer rounded-2xl hover:scale-105">
    <div class="flex mx-5 mt-4">
      <p
        class="px-3 py-1 text-xs font-medium text-white rounded-full bg-[#319F43] uppercase">
        {{ types[type] }}
      </p>
    </div>
    <div class="flex mx-5 mt-2" v-if="levelId !== 0">
      <p
        class="px-3 py-1 text-xs font-medium text-white rounded-full bg-[#5D95F5]">
        {{ getNameSkillWithLevel(levelId) }}
      </p>
    </div>
    <div class="px-8 py-4">
      <div class="space-y-5">
        <div v-if="image">
          <img
            :src="`${config.public.firebaseBaseUrl}${image}`"
            class="w-auto h-10" />
        </div>
        <div>
          <div class="leading-none two-lines-ellipsis">
            <span class="text-xl font-semibold">{{ name }}</span>
          </div>
          <div
            class="my-2 text-xs font-normal text-gray-500 one-lines-ellipsis">
            <span>{{ desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MainStores } from '~/stores'
import { useRuntimeConfig } from 'nuxt/app'

export default {
  props: {
    name: {
      type: String,
      default: () => '',
    },
    desc: {
      type: String,
      default: () => '',
    },
    image: {
      type: String,
      default: () => '',
    },
    type: {
      type: String,
      default: () => '',
    },
    levelId: {
      type: Number,
      default: () => 0
    },
    selected: {
      type: Boolean,
      default: () => false,
    }
  },
  data() {
    return {
      Stores: MainStores(),
      config: useRuntimeConfig(),
      types: {
        HARD: 'Hard Skill',
        SOFT: 'Soft Skill'
      }
    }
  },
  methods: {
    getNameSkillWithLevel (levelId) {
      let levelName = this.Stores.LevelStore.getLevelNameById(levelId)
      return `Level: ${levelName}`
    }
  },
}
</script>
