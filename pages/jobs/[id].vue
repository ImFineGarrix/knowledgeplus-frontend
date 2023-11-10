<template>
  <div class="space-y-10">
    <div class="flex items-center gap-10">
      <div class="w-7/12 space-y-2">
        <p class="text-6xl font-bold">Front-End Developer</p>
        <p class="text-[#319F43] text-base">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          ratio.."
        </p>
        <p class="w-10/12 pt-4 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          cupiditate repellendus odio ullam atque omnis illo culpa quo placeat
          saepe sit, quam, consequatur ab assumenda, sunt dolore fugiat
          quibusdam. Mollitia?
        </p>
      </div>
      <div class="w-5/12">
        <img src="/images/categories/it.png" class="w-[500px]" />
      </div>
    </div>
    <div>
      <div class="flex space-x-3">
        <p
          class="cursor-pointer bg-[#319F43] flex items-center py-2 px-8 rounded-full font-semibold text-white">
          ทักษะที่เกี่ยวข้อง
        </p>
        <p
          class="cursor-pointer px-8 flex items-center font-semibold bg-white border-2 rounded-full border-[#D3D3D3] transition-all duration-300 hover:bg-[#d7d7d7b2]">
          คอร์สที่เกี่ยวข้อง
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    idParams() {
      return this.$route.params.id || ''
    },
  },
}
</script>
