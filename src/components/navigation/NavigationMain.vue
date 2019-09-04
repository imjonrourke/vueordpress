<template>
  <nav class="sn-navigation--main">
    <ul>
      <li
        v-for="(item, index) in parentItems"
        :key="index"
      >
        <a :href="item.link">
          {{ item.label }}
        </a>
        <template
          v-if="item.children.length"
          v-slot:dropdown="item"
        >
          <navigation-main-dropdown
            :navigation-items="item.children"
          />
        </template>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'NavigationMain',
    components: {
      NavigationMainDropdown: () => import('./NavigationDropdown.vue'),
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
