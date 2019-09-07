<template>
  <main>
    <template v-slot:hero="{ heroImage: featuredMedia, heroDescription: featuredDescription }">
      <hero-main
        :hero-image="heroImage"
        :hero-description="heroDescription"
      />
    </template>
    <template v-slot:default>
      <div>content</div>
      <div>content</div>
    </template>
  </main>
</template>
<script>
  export default {
    name: 'PagePage',
    components: {
      HeroMain: () => import('../components/hero/HeroMain.vue'),
    },
    data() {
      return {
        featuredMedia: '',
        featuredDescription: '',
        title: '',
        content: '',
        author: {},
      };
    },
    computed: {
    },
  };
</script>
