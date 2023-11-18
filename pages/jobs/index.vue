<template>
  <div class="space-y-12">
    <div id="header-jobs" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">JOBS</p>
        <div class="space-y-4">
          <Search @input="handleSearch" placeholder="ค้นหาอาชีพที่คุณสนใจ" />
          <div class="flex justify-center space-x-3">
            <p
              class="cursor-pointer bg-[#319F43] flex items-center py-2 px-8 rounded-full font-semibold text-white">
              All
            </p>
            <p
              class="cursor-pointer px-8 flex items-center font-semibold bg-white border-2 rounded-full border-[#D3D3D3] transition-all duration-300 hover:bg-[#d7d7d7b2]">
              IT
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="my-4">
      <p class="text-2xl font-semibold">อาชีพที่คุณอาจจะสนใจ</p>
      <div class="grid grid-cols-4 gap-6 mt-6 mb-12">
        <div
          v-for="(recommend, indexRecommend) in recommendJob"
          :key="`job-recommend-${indexRecommend}`">
          <NuxtLink to="/jobs/1">
            <CardJob :name="recommend.name" :desc="recommend.desc" />
          </NuxtLink>
        </div>
      </div>
      <Pagination />
    </div>
    <div>
      <p class="text-2xl font-semibold">อาชีพทั้งหมด</p>
      <div class="grid grid-cols-4 gap-6 my-6">
        <div
          v-for="(recommend, indexRecommend) in recommendJob"
          :key="`job-recommend-${indexRecommend}`">
          <CardJob :name="recommend.name" :desc="recommend.desc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      recommendJob: [
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
      ],
    }
  },
  methods: {
    handleSearch(newSearch) {
      this.search = newSearch.target.value
    },
  },
}
</script>

<style lang="scss" scoped></style>
