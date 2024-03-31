<template>
  <div
    :class="selected ? 'border-4 border-[#319F92]' : 'border'"
    class="h-56 transition-all bg-white shadow-lg cursor-pointer rounded-2xl hover:scale-105">
    <div class="flex space-x-2 pt-7 px-7">
      <p
        v-if="group"
        class="px-3 py-1 text-xs font-medium text-white rounded-full bg-[#319F43] one-lines-ellipsis w-40">
        <!-- {{ group }} -->
        <span>
          dasdasdsfjasdljfldksajflksajdfklsdjaklfjklsdajfkasjdfkjdsaklfjlasddjflsdjflksdajlkfasjdlfjasd
        </span>
      </p>
    </div>
    <div class="px-8 py-4">
      <div>
        <p class="text-2xl font-medium leading-7 two-lines-ellipsis">
          <span>{{ name }}</span>
        </p>
        <div class="w-20 my-4 border rounded-full border-[#319F43]"></div>
        <div class="mt-2 text-xs font-normal text-gray-500 w-52">
          <div class="two-lines-ellipsis">
            <span>{{ desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: () => '',
    },
    desc: {
      type: String,
      default: () => '',
    },
    group: {
      type: String,
      default: () => '',
    },
    selected: {
      type: Boolean,
      default: () => false,
    }
  },
}
</script>
