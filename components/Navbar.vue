<template>
  <div id="site-header" class="fixed shadow-lg">
    <div class="flex items-center justify-between px-10 py-5">
      <NuxtLink to="/"><IconLogo class="w-48" /></NuxtLink>
      <div class="flex items-center space-x-4 text-base font-medium">
        <div v-for="(menu, indexMenu) in menus" :key="`menu-${indexMenu}`">
          <NuxtLink :to="menu.link">
            <p class="cursor-pointer font-poppin">{{ menu.name }}</p>
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-4 font-normal">
          <p class="cursor-pointer">เข้าสู่ระบบ</p>
          <p
            class="cursor-pointer bg-[#319F43] px-4 py-2 text-white rounded-full">
            ลงทะเบียน
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          name: 'JOBS',
          link: '/jobs',
        },
        {
          name: 'SKILLS',
          link: '/skills',
        },
      ],
    }
  },
}
</script>
<style>
#site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 999;
  background-color: #ffffff;
}
</style>
