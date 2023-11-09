<template>
  <div
    class="flex items-center px-10 space-y-3 transition-all bg-white border shadow-lg cursor-pointer py-14 rounded-2xl hover:scale-105">
    <div>
      <p class="text-[#319F43] text-4xl font-medium">
        {{ name }}
      </p>
      <p class="mt-3 text-xs w-52">
      <div class="two-lines-ellipsis">
        <span>{{ desc }}</span>
      </div>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: () => ''
    },
    desc: {
      type: String,
      default: () => ''
    }
  }
}
</script>