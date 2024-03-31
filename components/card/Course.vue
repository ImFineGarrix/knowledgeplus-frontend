<template>
  <div
    class="transition-all bg-white border shadow-lg cursor-pointer h-72 rounded-2xl hover:scale-105">
    <div class="flex mx-5 mt-5">
      <p
        class="px-3 py-1 text-xs font-medium text-white rounded-full bg-[#319F43] uppercase">
        {{ types[type] }}
      </p>
    </div>
    <div class="px-5 py-3">
      <img
        :src="`${config.public.firebaseBaseUrl}${image}`"
        class="w-12 h-12" />
    </div>
    <div class="pt-1 space-y-1 px-7">
      <div class="text-xl font-medium two-lines-ellipsis">
        <span>{{ name }}</span>
      </div>
      <div class="leading-none two-lines-ellipsis">
        <span class="text-xs text-gray-500 ">{{ desc }}</span>
      </div>
    </div>
    <div class="flex mx-6 mt-5">
      <div
        class="bg-[#EEEEEE] px-3 py-1 rounded-md space-x-1 flex items-center">
        <img :src="`${config.public.firebaseBaseUrl}${image}`" class="w-5" />
        <p class="text-sm font-medium ">{{ organizationName }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { useRuntimeConfig } from 'nuxt/app';

export default {
  props: {
    name: {
      type: String,
      default: () => ''
    },
    desc: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => ''
    },
    image: {
      type: String,
      default: () => ''
    },
    organizationName: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      config: useRuntimeConfig(),
      types: {
        HARD: 'Hard Skill',
        SOFT: 'Soft Skill'
      }
    }
  }
}
</script>
