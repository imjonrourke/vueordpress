<template>
  <component
    :is="''"
    :head="head"
  >
    <main class="pg-page">
      <template v-slot:hero="{ heroImage: featuredMedia, heroDescription: featuredDescription }">
        <hero-main
          v-if="featuredMedia.length"
          :hero-image="heroImage"
          :hero-description="heroDescription"
        />
      </template>
      <template v-slot:default>
        <section class="pg-page__content">
          <h1>{{ title }}</h1>
          <p>{{ content }}</p>
        </section>
      </template>
    </main>
  </component>
</template>
<script>
  export default {
    name: 'PagePage',
    components: {
      HeroMain: () => import('../components/hero/HeroMain.vue'),
    },
    data() {
      return {
        headData: {
          links: [],
          meta: [],
        },
        featuredMedia: '',
        featuredDescription: '',
        title: '',
        content: '',
        author: {},
      };
    },
    computed: {
      head() {
        return {
          title: this.title,
          links: this.headData.links,
          meta: this.headData.meta,
        };
      },
    },
    methods: {
      loadView() {},
    },
  };
</script>
