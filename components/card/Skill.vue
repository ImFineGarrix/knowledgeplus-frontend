<template>
  <div
    class="h-56 transition-all bg-white border shadow-lg cursor-pointer rounded-2xl hover:scale-105">
    <div class="flex mx-5 mt-4">
      <p
        class="px-3 py-1 text-xs font-medium text-white rounded-full bg-[#319F43] uppercase">
        {{ types[type] }}
      </p>
    </div>
    <div class="px-8 py-5">
      <div class="space-y-5">
        <div v-if="image">
          <img
            :src="`${config.public.firebaseBaseUrl}${image}`"
            class="w-auto h-10" />
        </div>
        <div>
          <div class="text-xl font-semibold leading-5 two-lines-ellipsis">
            <span>{{ name }}</span>
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
  },
}
</script>
