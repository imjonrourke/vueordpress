<template>
  <main class="pg-product">
    <div class="sn-product">
      <template v-slot:image></template>
      <template v-slot:description></template>
    </div>
    <template v-slot:default></template>
  </main>
</template>

<script>
  export default {
    name: 'ProductPage',
  }
</script>

<style>
</style>
