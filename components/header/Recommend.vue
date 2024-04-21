<template>
  <div class="my-10">
    <div class="flex justify-center gap-20">
      <div class="relative flex justify-center ml-6 font-poppin">
        <div class="mr-20">
          <IconPageRight
            @click="setStatusPage('decrease')"
            v-if="checkPageDecrease()"
            width="28px"
            class="rotate-180 bg-[#319F43] text-white rounded-full p-4 shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer" />
        </div>
        <div>
          <span
            class="text-2xl font-semibold font-poppin bg-[#319F43] text-white py-4 px-7 rounded-full"
            >1</span
          >
          <p class="text-lg font-semibold text-center font-poppin mt-7">
            SKILLS
          </p>
        </div>
        <div
          :class="statusHeader !== 'skill' ? 'border-[#319F43]' : 'border-black'"
          class="w-40 h-0 mt-4 border-2 "></div>
        <div>
          <span
            :class="statusHeader !== 'skill' ? 'bg-[#319F43] text-white' : 'border-black border-2'"
            class="py-4 text-2xl font-semibold rounded-full font-poppin px-7"
            >2</span
          >
          <p class="text-lg font-semibold text-center font-poppin mt-7">
            CAREER
          </p>
        </div>
        <div
          :class="statusHeader === 'recommend' ? 'border-[#319F43]' : 'border-black'"
          class="w-40 h-0 mt-4 border-2"></div>
        <div>
          <span
            :class="statusHeader === 'recommend' ? 'bg-[#319F43] text-white' : 'border-black border-2'"
            class="py-4 text-2xl font-semibold rounded-full font-poppin px-7"
            >3</span
          >
          <p class="-ml-4 text-lg font-semibold text-center font-poppin mt-7">
            RECOMMEND
          </p>
        </div>
        <div class="ml-16">
          <IconPageRight
            v-if="checkPageIncrease()"
            @click="setStatusPage('increase')"
            width="28px"
            class="bg-[#319F43] text-white rounded-full p-4 shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
    <div
      v-for="(recommend, indexRecommend) in recommends"
      :keys="`header-recommend-${indexRecommend}`">
      <div v-if="statusHeader === recommend.status">
        <div class="flex justify-center my-6">
          <p class="w-4/12 text-sm text-center text-slate-700">
            {{ recommend.desc }}
          </p>
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
    },
    selectedCareer: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    setStatusPage (statusCount) {
      if (statusCount === 'increase') {
        ++this.count
        this.$emit('setStatusPage', this.count)
      }
      if (statusCount === 'decrease') {
        --this.count
        this.$emit('setStatusPage', this.count)
      }
    },
    checkPageDecrease () {
      if (this.count <= 0 || this.statusHeader === 'skill') {
        this.count = 0
        return false
      }
      if (this.statusHeader === 'recommend' || this.count === 2) {
        this.count = 2
        return false
      }
      return true
    },
    checkPageIncrease () {
      if (this.statusHeader === 'recommend' || this.count === 2) {
        this.count = 2
        return false
      }
      if (this.selectedCareer === null && this.statusHeader === 'career') {
        return false
      }
      return true
    }
  }
}
</script>
