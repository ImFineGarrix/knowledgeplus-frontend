<template>
  <div class="flex gap-4 ">
    <div class="relative w-[250px]">
      <input
        :value="search"
        type="text"
        :placeholder="placeholder"
        @input="updateSearch($event)"
        class="w-full px-2 py-1.5 rounded-lg border-[3px] border-[#D3D3D3]" />
    </div>
    <div
      @click="clickSearch"
      class="flex items-center justify-center px-5 py-1 text-sm font-medium text-white rounded-lg cursor-pointer bg-[#319F43]">
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
    type: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    updateSearch(e) {
      this.search = e.target.value
      this.$emit('update-search', { search: e.target.value, type:  this.type })
    },
    clickSearch () {
      this.$emit('search', this.type)
    }
  },
}
</script>
