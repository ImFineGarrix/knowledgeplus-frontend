<template>
  <div class="relative">
    <IconSearch
      class="absolute top-[50%] left-[95%] translate-y-[-50%] text-[#898989]"
      width="28px" />
    <input
      :value="search"
      @input="updateSearch($event)"
      type="text"
      :placeholder="placeholder"
      class="w-[1000px] pl-4 py-3 pr-14 rounded-2xl border-[3px] border-[#D3D3D3]" />
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    updateSearch(e) {
      this.search = e.target.value
      this.$emit('update-search', e.target.value)
    },
  },
}
</script>
