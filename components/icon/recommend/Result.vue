<template>
  <svg
    :width="width"
    :height="width"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M38.9995 39.0006L29.8164 29.8174"
      stroke="#319F43"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M17.8885 34.7774C27.2158 34.7774 34.777 27.2161 34.777 17.8887C34.777 8.56133 27.2158 1 17.8885 1C8.56125 1 1 8.56133 1 17.8887C1 27.2161 8.56125 34.7774 17.8885 34.7774Z"
      stroke="black"
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
