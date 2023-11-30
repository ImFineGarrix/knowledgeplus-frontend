<template>
  <div class="space-y-16">
    <div class="grid grid-cols-3">
      <div class="flex items-center mt-12">
        <div class="ml-12 space-y-4 text-6xl font-bold">
          <div class="font-poppin">
            <span class="font-poppin text-[#5D95F5]">L</span>EARN.
          </div>
          <div class="font-poppin">
            <span class="font-poppin text-[#319F43]">SK</span>ILL.
          </div>
          <div class="font-poppin">
            <span class="font-poppin text-[#5D95F5]">KNOW</span>LEDGE.
          </div>
          <div class="text-2xl font-light">
            เรียนรู้ และค้นพบตัวตนในที่เดียว
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="flex items-center justify-end">
          <img src="/images/homepage.png" class="w-[650px] ml-2" />
        </div>
      </div>
    </div>
    <div class="space-y-10">
      <TextSection
        text="ค้นหาอาชีพที่เหมาะกับตัวคุณ"
        text-button="ดูอาชีพทั้งหมด"
        link="/jobs" />
      <div class="grid grid-cols-2">
        <div class="flex items-center justify-start">
          <img src="/images/categories/it.png" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="(recommend, indexRecommend) in recommendJob"
            :key="`recommend-job-${indexRecommend}`">
            <CardJob :name="recommend.name" :desc="recommend.desc" />
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-10">
      <TextSection
        text="ทักษะที่เหมาะสำหรับสาย IT"
        textButton="ดูทักษะทั้งหมด"
        link="/skills" />
      <div class="grid grid-cols-5">
        <div
          v-for="(recommend, indexRecommend) in recommendSkill"
          :key="`recommend-skill=${indexRecommend}`">
          <CardSkill :name="recommend.name" :link="recommend.link" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendSkill: [
        {
          name: 'Coding',
          link: '/images/icon/good-code.png',
        },
        {
          name: 'Coding',
          link: '/images/icon/good-code.png',
        },
        {
          name: 'Coding',
          link: '/images/icon/good-code.png',
        },
        {
          name: 'Coding',
          link: '/images/icon/good-code.png',
        },
        {
          name: 'CodingCodingCodingCodingCodingCodingCodingCoding',
          link: '/images/icon/good-code.png',
        },
      ],
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
}
</script>

<style lang="scss" scoped></style>
