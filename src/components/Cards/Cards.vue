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
  methods: {
    printHello() {
      console.log("ciao");
    },
  },
};
</script>

<template>
  <ul>
    <li>{{ card.title }}</li>
    <li>{{ card.original_title }}</li>
    <li>
      <img v-if="card.original_language" :src="card.original_language" alt="" />
      <span v-else>not found</span>
    </li>
    <li>{{ card.vote_average }}</li>
  </ul>
</template>

<style lang="scss" scoped>
img {
  width: 20px;
  height: 10px;
}
</style>
