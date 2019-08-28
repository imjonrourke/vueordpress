<template>
  <div>
    <footer class="sn-footer">

    </footer>
  </div>
</template>
<script>
  export default {
    name: 'HeaderMain',
    components: {},
    props: {
      /**
       * @property {string | object} logoLink
       * - The purpose of this is to overwrite the link for the logo.
       * - If using Vue Router, use a programmatic navigation link as the object
       */
      logoLink: {
        type: [String, Object],
        default() {
          return '/';
        },
      },
    },
    data() {
      return {};
    },
    computed: {},
    created() {},
  };
</script>
