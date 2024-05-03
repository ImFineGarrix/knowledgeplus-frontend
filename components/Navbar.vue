<template>
  <div id="site-header" class="fixed shadow-lg">
    <div class="flex items-center justify-between px-10 py-5">
      <NuxtLink to="/"><IconLogo class="w-48" /></NuxtLink>
      <div class="flex items-center mt-2 space-x-4 text-base font-medium">
        <div v-for="(menu, indexMenu) in menus" :key="`menu-${indexMenu}`">
          <NuxtLink :to="menu.link">
            <p class="cursor-pointer font-poppin">{{ menu.name }}</p>
          </NuxtLink>
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
          name: 'HOME',
          link: '/'
        },
        {
          name: 'CAREERS',
          link: '/careers',
        },
        {
          name: 'SKILLS',
          link: '/skills',
        },
        {
          name: 'COURSES',
          link: '/courses',
        },
        {
          name: 'RECOMMENDED',
          link: '/recommend',
        }
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
  z-index: 99;
  background-color: #ffffff;
}
</style>
