<template>
  <div>
    <p class="mt-24 text-2xl text-center text-gray-500" v-if="active">
      COMING SOON
    </p>
    <p class="mt-24 text-2xl text-center text-gray-500" v-else>
      NO LISTINGS FOUND
    </p>
  </div>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      deafult: () => true,
    },
  },
}
</script>
