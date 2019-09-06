<template>
  <div>
    <img
      v-if="mainUrl.length"
      :src="mainUrl"
      :alt="mainDescription"
    />
  </div>
</template>

<script>
  export default {
    name: 'ProductImage',
    props: {
      mainUrl: {
        type: String,
        default() {
          return '';
        },
      },
      mainDescription: {
        type: String,
        default() {
          return '';
        },
      },
    },
  }
</script>

<style>
</style>
