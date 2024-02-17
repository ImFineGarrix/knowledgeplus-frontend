<template>
  <div class="my-6 space-y-10">
    <div class="flex items-center gap-10">
      <div class="w-7/12 space-y-2">
        <div class="flex">
          <p class="bg-[#319F43] text-white font-medium px-3 py-1 rounded-full">
            Level 1
          </p>
        </div>
        <p class="pt-1 text-6xl font-bold">INT 100 Information</p>
        <div class="py-2">
          <div class="border-2 border-[#319F43] w-40 rounded-full"></div>
        </div>
        <p class="w-10/12 pt-1 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          cupiditate, eligendi quas quam tenetur soluta laboriosam? Accusamus
          illum sint fugiat tempora eum, in fuga. Iusto eligendi quaerat
          recusandae saepe corrupti?
        </p>
        <div class="flex py-6">
          <p class="px-10 py-2 text-white rounded-lg shadow-lg bg-emerald-600">
            REGISTER
          </p>
        </div>
      </div>
      <div class="w-5/12">
        <img src="/images/kmutt-logo.png" class="object-contain w-full h-96" />
      </div>
    </div>
    <div class="px-6 py-6 my-20 space-y-6 rounded-md shadow-lg">
      <div class="grid grid-cols-12 gap-10">
        <div class="col-span-9 space-y-6">
          <Explain
            id="description"
            title="Description"
            desc="Lorem Ipsum description of the skill description" />
          <Explain
            id="learning"
            title="Learning Outcome"
            desc="Lorem Ipsum description of the skill description Lorem Ipsum description of the skill descriptionLorem Ipsum description of the skill descriptionLorem Ipsum description of the skill description" />
          <Explain
            id="organization"
            title="Organization"
            desc="Lorem Ipsum description of the skill description Lorem Ipsum description of the skill descriptionLorem Ipsum description of the skill descriptionLorem Ipsum description of the skill description" />
        </div>
        <div class="col-span-3">
          <NavbarExplain :navbars="navbarExplain" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navbarExplain: [
        {
          label: 'Description',
          val: 'description'
        },
        {
          label: 'Learning Outcome',
          val: 'learning'
        },
        {
          label: 'Organization',
          val: 'organization'
        }
      ]
    }
  }
}
</script>
