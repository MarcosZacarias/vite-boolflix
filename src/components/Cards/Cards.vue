<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  props: {
    card: Object,
    key: String,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <ul>
    <li>{{ card.title }}</li>
    <li>{{ card.original_title }}</li>
    <li>{{ card.original_language }}</li>
    <li>{{ card.vote_average }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
