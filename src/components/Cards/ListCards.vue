<script>
import { store } from "../../data/store";
import Cards from "./Cards.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Cards,
  },
};
</script>

<template>
  <section>
    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
      <Cards
        class="col"
        v-for="card in store.movies"
        :key="card.id"
        :card="card"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
