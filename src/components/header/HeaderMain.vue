<template>
  <header class="sn-header">
    <template v-slot:headerTop></template>
    <template v-slot:logo>
      <a
        class="sn-header__logo"
        :href="logoLink"
      ></a>
    </template>
    <template v-slot:navSide="navigation"></template>
    <template v-slot:navBottom="navigation">
      <navigation-main
        :navigation-items="navigation.navigation"
      />
    </template>
    <template v-slot:headerBottom></template>
  </header>
</template>

<script>
  export default {
    name: 'HeaderMain',
    components: {
      NavigationMain: () => import('../navigation/NavigationMain.vue')
    },
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
      /**
       * @property {object} navigation
       * - Object containing full header navigation
       */
      navigation: {
        type: Object,
        default() {
          return {};
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
