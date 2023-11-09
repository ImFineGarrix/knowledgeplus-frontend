<template>
  <div>
    <Navbar />
    <main id="site-content">
      <NuxtPage />
    </main>
  </div>
</template>
<style>
#site-content {
  margin-top: 80px;
  margin-left: 100px;
  margin-right: 100px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
