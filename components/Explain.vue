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
          <p>Level: 1</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            repudiandae deserunt id quasi, alias nemo architecto error ex
            quaerat veniam temporibus consequuntur, voluptatum voluptatem
            tenetur dolorem quod esse accusamus illum.
          </p>
        </div>
      </div>
      <div v-else class="my-4 ml-4 mr-10">
        <div>{{ desc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
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
    }
  }
}
</script>
