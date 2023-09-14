<script>
import ListCards from "./Cards/ListCards.vue";

export default {
  data() {
    return {};
  },

  components: {
    ListCards,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <ListCards />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #434343;
  height: 100vh;
  color: white;
}
</style>
