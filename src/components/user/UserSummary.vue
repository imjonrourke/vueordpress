<template>
  <main>
    <template v-slot:default>
      <section>

      </section>
    </template>
  </main>
</template>
<script>
export default {
  name: 'UserSummary',
  props: {
    orientation: {
      type: String,
      default() {
        return 'ltr';
      },
    },
    userImage: {
      type: String,
      default() {
        return '';
      },
    },
    userName: {
      type: String,
      default() {
        return '';
      },
    },
    userId: {
      type: Number,
      default() {
        return 0;
      },
    },
    userDescription: {
      type: String,
      default() {
        return '';
      },
    },
  },
  computed: {}
};
</script>
