<template>
  <div>
    <footer class="sn-footer">
      <template v-slot:subFooterTop></template>
      <template v-slot:subFooterBottom></template>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'FooterMain',
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
