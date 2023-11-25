<template>
  <div class="space-y-10">
    <div class="flex items-center gap-10">
      <div class="w-7/12 space-y-2">
        <p class="text-2xl font-medium leading-none">IT Skill</p>
        <p class="text-6xl leading-none text-[#319F43] font-bold">
          Skill detail
        </p>
        <p class="w-10/12 pt-4 text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          cupiditate repellendus odio ullam atque omnis illo culpa quo placeat
          saepe sit, quam, consequatur ab assumenda, sunt dolore fugiat
          quibusdam. Mollitia?
        </p>
      </div>
      <div class="w-5/12 py-10">
        <div class="flex justify-center">
          <div class="relative">
            <img
              src="/images/icon/good-code.png"
              class="absolute w-40 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            <IconBgSkill class="w-64" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex space-x-3">
        <p
          class="cursor-pointer bg-[#319F43] flex items-center py-2 px-8 rounded-full font-semibold text-white">
          อาชีพที่เกี่ยวข้อง
        </p>
        <p
          class="cursor-pointer px-8 flex items-center font-semibold bg-white border-2 rounded-full border-[#D3D3D3] transition-all duration-300 hover:bg-[#d7d7d7b2]">
          คอร์สที่เกี่ยวข้อง
        </p>
      </div>
      <div class="my-4">
        <div class="grid grid-cols-4 gap-4 mt-12 mb-8">
          <div
            v-for="(recommend, indexRecommend) in recommendJob"
            :key="`job-recommend-${indexRecommend}`">
            <CardJob :name="recommend.name" :desc="recommend.desc" />
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recommendJob: [
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
        {
          name: 'Front-End Developer',
          desc: 'Lorem ipsum dolor sit amet consectetur. Nunc nec ultricies mauris lectus sollicitudin ut eget nam purus.',
        },
      ],
    }
  },
  computed: {
    idParams() {
      return this.$route.params.id || ''
    },
  },
}
</script>
