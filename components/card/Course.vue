<template>
  <div
    class="transition-all bg-white border shadow-lg cursor-pointer h-72 rounded-2xl hover:scale-105">
    <div class="px-4 pt-5">
      <img :src="`${config.public.firebaseBaseUrl}${image}`" class="w-20" />
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
      config: useRuntimeConfig()
    }
  }
}
</script>
