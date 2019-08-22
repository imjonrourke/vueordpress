<template>
  <main>
    <template v-slot:default>
      <section class="pg-author">
        <template v-slot:user-summary>
          <user-summary
            class="pg-author__user"
          />
        </template>
      </section>
    </template>
  </main>
</template>
<script>
export default {
  name: 'AuthorPage',
  components: {
    UserSummary: () => import('../components/UserSummary.vue'),
  },
  props: {
    pageData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {

  },
  created() {

  },
};
</script>
