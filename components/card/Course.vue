<template>
  <div
    class="transition-all bg-white border shadow-lg cursor-pointer h-72 rounded-2xl hover:scale-105">
    <div class="px-4 pt-5">
      <img src="/images/kmutt-logo.png" class="w-20" />
    </div>
    <div class="pt-1 space-y-1 px-7">
      <div class="text-xl font-medium">
        <span class="two-lines-ellipsis"
          >INT105 DatabaseINT105 DatabaseINT105 DatabaseINT105 DatabaseINT105
          DatabaseINT105 Database</span
        >
      </div>
      <div class="leading-none two-lines-ellipsis">
        <span class="text-xs text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id amet
          consequatur nobis blanditiis eius, illum autem, nemo voluptas
          reiciendis esse unde! Tempore in enim eos vero culpa totam aperiam?
        </span>
      </div>
    </div>
    <div class="flex mx-6 mt-5">
      <div
        class="bg-[#EEEEEE] px-3 py-1 rounded-md space-x-1 flex items-center">
        <img src="/images/kmutt-logo.png" class="w-5" />
        <p class="text-sm font-medium ">KMUTT</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: () => ''
    },
    desc: {
      type: String,
      default: () => ''
    },
    img: {
      type: String,
      default: () => ''
    },
    organization: {
      type: String,
      default: () => ''
    }
  }
}
</script>
