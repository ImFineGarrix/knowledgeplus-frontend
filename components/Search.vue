<template>
  <div class="flex items-center gap-4">
    <div class="relative w-[900px]">
      <input
        :value="search"
        type="text"
        :placeholder="placeholder"
        @input="updateSearch($event)"
        class="w-full pl-4 py-3 pr-14 rounded-2xl border-[3px] border-[#D3D3D3]" />
    </div>
    <div
      @click="clickSearch"
      class="px-5 py-3 font-medium text-white cursor-pointer rounded-2xl bg-emerald-600">
      Search
    </div>
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
    clickSearch () {
      this.$emit('search', '')
    }
  },
}
</script>
