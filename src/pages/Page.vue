<template>
  <component
    :is="''"
    :head="head"
  >
    <main class="pg-page">
      <template
        v-if="featuredMedia.length"
        v-slot:hero="{ heroImage: featuredMedia, heroDescription: featuredDescription }"
      >
        <hero-main
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
    props: {
      id: {
        type: Number,
        default() {
          return 0;
        },
      },
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
    created() {
      if (this.id) {
        this.loadView(this.id);
      }
    },
    methods: {
      loadView(id) {
        return new Promise((resolve, reject) => {
          if (id) {
            return resolve;
          }
          return reject;
        })
          .then((pageData) => {
            const {
              title,
              content
            } = pageData;
            this.title = title;
            this.content = content;
          })
          .catch(() => {});
      },
    },
  };
</script>
