<template>
  <div>
    <button
      v-if="active"
      class="cursor-pointer bg-[#319F43] flex items-center py-2 px-8 rounded-full font-semibold text-white">
      {{ name }}
    </button>
    <button
      v-else
      class="cursor-pointer px-8 py-2 flex items-center font-semibold bg-white border-2 rounded-full border-[#D3D3D3] transition-all duration-300 hover:bg-[#d7d7d7b2]">
      {{ name }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: () => '',
    },
    active: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>
