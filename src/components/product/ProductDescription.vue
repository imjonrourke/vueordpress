<template>
  <section class="sn-product__description">
    <template
      v-if="title.length"
      v-slot:title
    >
      <h1>{{ title }}</h1>
    </template>
    <template
      v-if="description.length"
      v-slot:description
    >
      <p>{{ description }}</p>
    </template>
  </section>
</template>

<script>
  export default {
    name: 'ProductDescription',
    props: {
      title: {
        type: String,
        default() {
          return '';
        },
      },
      description: {
        type: String,
        default() {
          return '';
        },
      },
    }
  }
</script>

<style>
</style>
