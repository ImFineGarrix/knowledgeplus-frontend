<template>
  <div>
    <p class="mt-24 text-2xl text-center text-gray-500" v-if="active">
      เร็ว ๆ นี้
    </p>
    <p class="mt-24 text-2xl text-center text-gray-500" v-else>ไม่พบรายการ</p>
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
