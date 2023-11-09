<template>
  <div class="py-8 space-y-12">
    <div id="header-jobs" class="flex justify-center mt-16">
      <div class="space-y-7">
        <p class="text-6xl font-semibold text-center font-poppin">JOBS</p>
        <div class="space-y-4">
          <input
            type="text"
            placeholder="ค้นหาชีพที่คุณสนใจ"
            class="w-[1000px] px-4 py-3 rounded-2xl border-[3px] border-[#D3D3D3] font-medium" />
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
    <div id="recommend-job">
      <p class="text-2xl font-semibold">อาชีพที่คุณอาจจะสนใจ</p>
      <div class="grid grid-cols-4 gap-6 my-4">
        <div
          v-for="(recommend, indexRecommend) in recommendJob"
          :key="`job-recommend-${indexRecommend}`">
          <CardJob :name="recommend.name" :desc="recommend.desc" />
        </div>
      </div>
    </div>
    <div>
      <p class="text-2xl font-semibold">อาชีพทั้งหมด</p>
      <div class="grid grid-cols-4 gap-6 my-4">
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
}
</script>

<style lang="scss" scoped></style>
