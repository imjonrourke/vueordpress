<template>
  <nav class="sn-navigation--main">
    <ul>
      <li></li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'HeaderMain',
    components: {},
    props: {
      navigationLinks: {
        type: Array,
        default() {
          return [];
        },
      },
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
