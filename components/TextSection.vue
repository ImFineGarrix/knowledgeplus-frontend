<template>
  <div class="flex items-center justify-between">
    <p class="text-2xl font-semibold">{{ text }}</p>
    <div v-if="!closeBtn">
      <NuxtLink :to="link">
        <button
          class="text-[#319F43] border-[3px] font-semibold border-[#319F43] py-2 px-5 rounded-full hover:bg-[#e4ffe7] transition-all">
          {{ textButton }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: () => '',
    },
    textButton: {
      type: String,
      default: () => '',
    },
    link: {
      type: String,
      default: () => '/',
    },
    closeBtn: {
      type: Boolean,
      default: () => false
    }
  },
}
</script>
