<template>
  <div>
    <p class="text-4xl font-semibold">
      <span class="mx-2 text-emerald-600">|</span>{{ title }}
    </p>
    <div>
      <div v-if="haveLevel" class="my-4 ml-4 mr-10">
        <div
          v-for="(descLevel, indexDescLevel) in descLevels"
          :key="`desc-level-${indexDescLevel}`">
          <p class="mt-6 text-2xl font-bold">
            Level: {{ Stores.LevelStore.getLevelNameById(descLevel.levelId) }}
          </p>
          <div>
            <p class="mt-2 text-base" v-if="descLevel.desc">
              {{ descLevel.desc }}
            </p>
            <p v-else>-</p>
          </div>
        </div>
      </div>
      <div v-else class="my-4 ml-4 mr-10">
        <div v-if="haveImage" class="flex items-center text-lg">
          <img :src="`${config.public.firebaseBaseUrl}${image}`" class="w-10" />
          <p class="font-medium">{{ desc }}</p>
        </div>
        <div v-else class="text-lg">{{ desc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { MainStores } from '~/stores'
import { useRuntimeConfig } from 'nuxt/app'

export default {
  props: {
    title: {
      type: String,
      default: () => ''
    },
    desc: {
      type: String,
      default: () => ''
    },
    haveLevel: {
      type: Boolean,
      default: () => false
    },
    descLevels: {
      type: Array,
      default: () => []
    },
    haveImage: {
      type: Boolean,
      default: () => false
    },
    image: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      Stores: MainStores(),
      config: useRuntimeConfig()
    }
  },
}
</script>
