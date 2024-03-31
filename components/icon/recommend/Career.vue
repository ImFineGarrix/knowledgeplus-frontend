<template>
  <svg
    :width="width"
    :height="width"
    viewBox="0 0 36 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35 39V35C35 32.8783 34.1045 30.8434 32.5104 29.3431C30.9163 27.8429 28.7543 27 26.5 27H9.5C7.24566 27 5.08365 27.8429 3.48959 29.3431C1.89553 30.8434 1 32.8783 1 35V39"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M18.5 18C23.1944 18 27 14.1944 27 9.5C27 4.80558 23.1944 1 18.5 1C13.8056 1 10 4.80558 10 9.5C10 14.1944 13.8056 18 18.5 18Z"
      stroke="#319F43"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: () => '32px'
    }
  }
}
</script>
