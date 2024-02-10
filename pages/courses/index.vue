<template>
  <div>
    <div class="space-y-12">
      <div id="header-jobs" class="flex justify-center mt-16">
        <div class="space-y-7">
          <p class="text-6xl font-semibold text-center font-poppin">COURSES</p>
          <div class="space-y-4">
            <Search placeholder="ค้นหาคอร์สเรียนที่คุณสนใจ" />
          </div>
        </div>
      </div>
      <div>
        <p class="text-2xl font-semibold">คอร์สเรียนทั้งหมด</p>
        <div class="grid grid-cols-4 gap-6 my-6">
          <NuxtLink to="/courses/1">
            <CardCourse />
          </NuxtLink>
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
