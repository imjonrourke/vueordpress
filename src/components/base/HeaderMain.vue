<template>
  <div>
    <header class="sn-header">
      <template v-slot:logo>
        <a
          class="sn-header__logo"
          :href="logoLink"
        ></a>
      </template>
      <template v-slot:sideNavigation></template>
      <template v-slot:mainNavigation></template>
    </header>
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
        }
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
