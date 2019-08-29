<template>
  <section class="sn-navigation__dropdown--main">
    <ul v-if="navigationItems.length">
      <li
        v-for="(item, index) in parentItems"
        :key="index"
      >
        <a :href="item.link">
          {{ item.label }}
        </a>
        <navigation-dropdown
          v-if="item.children.length"
        />
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    name: 'NavigationDropdown',
    components: {
      NavigationDropdown: () => import('./NavigationDropdown.vue'),
    },
    props: {
      navigationItems: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {};
    },
    computed: {
      parentItems() {
        return this.navigationItems.map(navigationLink => ({
          label: navigationLink.label,
          link: navigationLink.link,
          children: [],
        }));
      }
    },
    created() {},
  };
</script>
