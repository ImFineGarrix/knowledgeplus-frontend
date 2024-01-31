<template>
  <div>
    <p class="text-4xl font-semibold">
      <span class="mx-2 text-emerald-600">|</span>{{ title }}
    </p>
    <div class="my-4 ml-4 mr-10">
      <div>{{ desc }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => ''
    },
    desc: {
      type: String,
      default: () => ''
    },
  }
}
</script>
