<template>
  <div>
    <div
      class="flex justify-center transition-all cursor-pointer hover:scale-105">
      <div class="relative">
        <img
          :src="link"
          class="absolute w-24 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        <IconBgSkill class="w-40" />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-40">
        <p class="my-6 text-lg font-semibold text-center truncate">
          {{ name }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: () => '',
    },
    link: {
      type: String,
      default: () => '',
    },
  },
}
</script>
