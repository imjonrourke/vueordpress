<template>
  <div>
    <header-main />
    <template v-slot:default></template>
    <footer-main />
  </div>
</template>
<script>

  export default {
    name: 'LayoutMain',
    components: {
      HeaderMain: () => import('../components/header/HeaderMain.vue'),
      FooterMain: () => import('../components/footer/FooterMain.vue'),
    },
    props: {},
    methods: {
      loadView() {},
    },
  };
</script>
