<template>
  <div class="popup-active">
    <div class="w-[1000px] px-12 py-8 space-y-8 bg-white rounded-xl">
      <div class="flex justify-between py-2">
        <div class="px-1 text-4xl font-semibold font-poppin">
          Description<span class="text-[#319F92]"> Level</span>
        </div>
        <div></div>
        <div
          @click="closePopup()"
          class="p-2 bg-gray-200 rounded-full cursor-pointer">
          <IconClose width="24px" />
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="w-5/12">
          <img
            class="w-auto h-80"
            src="https://firebasestorage.googleapis.com/v0/b/knowledge-project-7e224.appspot.com/o/online-education.png?alt=media&token=341b101b-b056-48d1-a38d-b2ffdd02e7d9" />
        </div>
        <div class="flex items-center justify-center w-7/12">
          <div>
            <div class="flex mt-2">
              <div
                class="px-5 py-2 text-base font-semibold uppercase text-white rounded-full bg-[#319F92] font-poppin">
                {{ getLevelDesc?.type || '' }}
              </div>
            </div>
            <div class="pt-2 pr-2 text-5xl font-semibold font-poppin">
              {{ getLevelDesc?.name || '' }}
            </div>
            <div class="pt-1 pr-10 text-sm text-gray-700 o">
              {{ getLevelDesc?.desc || '-' }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-5">
        <div
          v-if="indexLevel !== 0"
          @click="countPage('back')"
          class="bg-[#319F92] p-2 text-white rounded-full cursor-pointer">
          <IconPageRight class="rotate-180" width="28px" />
        </div>
        <div
          v-if="indexLevel !== Stores.LevelStore.levelDesc.length - 1"
          @click="countPage('next')"
          class="bg-[#319F92] p-2 text-white rounded-full cursor-pointer">
          <IconPageRight width="28px" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { MainStores } from '~/stores'

export default {
  data () {
    return {
      indexLevel: 0,
      Stores: MainStores(),
    }
  },
  computed: {
    getLevelDesc () {
      return this.Stores.LevelStore.levelDesc[this.indexLevel]
    }
  },
  methods: {
    countPage (status = '') {
      const lengthLevel = this.Stores.LevelStore.levelDesc.length - 1
      if (status === 'next' && lengthLevel > this.indexLevel) {
        this.indexLevel++
      }
      if (status === 'back') {
        this.indexLevel--
      }
    },
    closePopup () {
      this.$emit('closePopup', false)
    }
  }
}
</script>
