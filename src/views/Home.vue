<template>
  <div class="home d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-auto">
          <h1 class="display-1 fw-bold text-center m-0">
            Super
            <br class="d-inline d-sm-none" />
            Web Kart
          </h1>

          <hr class="border border-3 border-secondary mb-5" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100%;
  border: 0;
  margin: 0;
}
</style>
