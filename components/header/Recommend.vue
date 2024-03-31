<template>
  <div class="flex justify-center gap-20">
    <div
      v-for="(recommend, indexRecommend) in recommends"
      :key="`header-recommend-${indexRecommend}`">
      <div
        :class="statusHeader === recommend.status ? 'border-4 border-[#319F92]' : 'border border-black'"
        class="px-10 py-5 rounded-md shadow-lg">
        <div class="flex justify-center w-[200px]">
          <IconRecommendSkill
            v-if="recommend.icon === 'skill'"
            width="60px"
            class="mt-3" />
          <IconRecommendCareer
            v-if="recommend.icon === 'career'"
            width="60px"
            class="mt-3" />
          <IconRecommendResult
            v-if="recommend.icon === 'result'"
            width="60px"
            class="mt-3" />
        </div>
        <div class="mt-6 text-center font-poppin">
          <p class="text-2xl font-semibold">{{ recommend.title }}</p>
          <p class="text-sm text-slate-700">{{ recommend.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: () => []
    },
    statusHeader: {
      type: String,
      default: () => ''
    }
  },
}
</script>
