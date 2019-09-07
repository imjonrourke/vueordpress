<template>
  <section class="sn-hero">
    <template v-slot:default="{ heroImage, heroDescription }">
      <article
        v-if="heroImage.length"
        class="sn-hero__banner"
      >
        <img :src="heroImage" :alt="heroDescription" />
      </article>
    </template>
  </section>
</template>

<script>
  export default {
    name: 'HeroMain',
    props: {
      heroImage: {
        type: String,
        default() {
          return '';
        },
      },
      heroDescription: {
        type: String,
        default() {
          return '';
        },
      },
    },
  };
</script>

<style>
</style>
