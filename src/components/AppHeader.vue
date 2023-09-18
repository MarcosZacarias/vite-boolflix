<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      textSearch: "",
    };
  },

  emits: ["form-submit"],

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <header class="d-flex justify-content-between p-2">
    <div class="logo">
      <img src="../../public/img/logo/580b57fcd9996e24bc43c529.png" alt="" />
    </div>
    <div class="input-group mb-3 w-25">
      <nav class="navbar">
        <div class="container-fluid">
          <form
            @submit.prevent="$emit(`form-submit`, textSearch)"
            class="d-flex"
            role="search"
          >
            <input
              v-model="textSearch"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  .logo {
    width: 200px;
    // background-color: red;
    img {
      width: 100%;
    }
  }
}
</style>
