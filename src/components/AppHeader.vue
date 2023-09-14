<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <header class="d-flex justify-content-between p-2">
    <div class="logo"></div>
    <div class="input-group mb-3 w-25">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Button
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  .logo {
    width: 100px;
    background-color: red;
  }
}
</style>
