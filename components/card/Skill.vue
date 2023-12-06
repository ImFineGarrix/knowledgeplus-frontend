<template>
  <div
    class="h-56 transition-all bg-white border shadow-lg cursor-pointer rounded-2xl hover:scale-105">
    <div class="flex mx-5 mt-4">
      <p
        class="px-3 py-1 text-xs font-medium text-white rounded-full bg-[#319F43] uppercase">
        {{ levelStore.getLevelNameById(level) }}
      </p>
    </div>
    <div class="px-8 py-5">
      <div class="space-y-5">
        <div>
          <img :src="image" class="w-auto h-10" />
        </div>
        <div>
          <p class="text-xl font-semibold leading-5">
            {{ name }}
          </p>
          <div class="my-2 text-xs font-thin one-lines-ellipsis">
            <span>{{ desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useLevelStore } from '~/stores/Levels'
import LevelProvider from '~/resources/LevelProvider'

export default {
  props: {
    name: {
      type: String,
      default: () => '',
    },
    desc: {
      type: String,
      default: () => '',
    },
    image: {
      type: String,
      default: () => '',
    },
    level: {
      type: Number,
      default: () => 1,
    },
  },
  data() {
    return {
      levelStore: useLevelStore(),
      LevelService: new LevelProvider(),
    }
  },
  mounted() {
    if (!this.levelStore.level.length) {
      this.getLevel()
    }
  },
  methods: {
    async getLevel() {
      const { data } = await this.LevelService.getLevel()
      this.levelStore.setLevel(data)
    },
  },
}
</script>
