<template>
  <div>
    <div class="space-y-12">
      <div id="header-jobs" class="flex justify-center mt-16">
        <div class="space-y-7">
          <p class="text-6xl font-semibold text-center font-poppin">COURSES</p>
          <div class="space-y-4">
            <Search placeholder="ค้นหาคอร์สเรียนที่คุณสนใจ" />
            <!-- <div class="flex justify-center space-x-3">
            <div
              v-for="(category, indexCategory) in categoryStore.category"
              :key="`category-${indexCategory}`">
              <Button
                :name="category.name"
                :active="checkButtonActive(category.categoryId, categoryId)"
                @click="setInputId(category.categoryId)" />
            </div>
          </div> -->
          </div>
        </div>
      </div>
      <div class="my-4">
        <!-- <p class="text-2xl font-semibold">อาชีพที่คุณอาจจะสนใจ</p>
      <div class="grid grid-cols-4 gap-6 mt-6 mb-12">
        <div
          v-for="(recommend, indexRecommend) in recommendJob"
          :key="`job-recommend-${indexRecommend}`">
          <CardJob :name="recommend.name" :desc="recommend.desc" />
        </div>
      </div>
      <Pagination /> -->
      </div>
      <div>
        <p class="text-2xl font-semibold">คอร์สเรียนทั้งหมด</p>
        <div class="grid grid-cols-4 gap-6 my-6">
          <CardCourse />
        </div>
        <!-- <div v-if="ready">
        <div
          class="grid grid-cols-4 gap-6 my-6"
          v-if="Composables.check.checkEmpty(jobs)">
          <div v-for="(job, indexJob) in searchJob" :key="`job-${indexJob}`">
            <NuxtLink :to="`/jobs/${job.careerId}`">
              <CardJob
                :category="job.categories[0].name"
                :category2="
                  job.categories.length > 1 ? job.categories[1].name : ''
                "
                :name="job.name"
                :desc="job.description" />
            </NuxtLink>
          </div>
        </div>
        <EmptyData
          :active="Composables.check.checkSearch(search, categoryId)"
          v-else />
      </div>
      <Loading v-else /> -->
      </div>
    </div>
  </div>
</template>
