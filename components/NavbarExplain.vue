<template>
  <div
    class="overflow-y-auto block max-h-[calc(100vh-var(4rem))] space-y-1 sticky top-[4rem] py-8 px-4 -mx-4">
    <div v-if="navbars.length">
      <a
        class="block w-64 px-2 py-2 text-xl transition-all duration-150 border-b-2 hover:border-b-[#319F43]"
        v-for="(navbar, indexNavbar) in navbars"
        :key="`navbar-explain-${indexNavbar}`"
        :href="`#${navbar.val}`">
        <span class="mr-1 text-sm text-[#319F43]">#</span>
        <span>{{ navbar.label }}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navbars: {
      type: Array,
      default: () => []
    }
  }
}
</script>
