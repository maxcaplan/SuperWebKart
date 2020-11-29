<template>
  <div class="w-100 h-100 d-flex align-items-center justify-content-center">
    <div>
      <div class="row mb-3">
        <div class="col">
          <h1 class="text-center">Page Not Found :/</h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-auto">
          <router-link to="/" class="btn btn-primary">Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>
