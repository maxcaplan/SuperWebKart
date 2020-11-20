<template>
  <div class="menu">
    <div class="row d-flex justify-content-center">
      <div class="col col-lg-4">
        <div class="d-grid gap-2">
          <router-link
            to="/play"
            class="btn btn-block btn-lg btn-primary shadow-sm d-flex justify-content-center align-items-center"
          >
            <svg class="feather mr-2">
              <use xlink:href="@/assets/icons/feather-sprite.svg#play-circle" />
            </svg>
            Play
          </router-link>

          <button
            class="btn btn-block btn-lg btn-secondary shadow-sm d-flex justify-content-center align-items-center"
            disabled
          >
            <svg class="feather mr-2">
              <use xlink:href="@/assets/icons/feather-sprite.svg#settings" />
            </svg>
            Settings
          </button>

          <button
            class="btn btn-block btn-lg btn-info shadow-sm d-flex justify-content-center align-items-center"
            disabled
          >
            <svg class="feather mr-2">
              <use xlink:href="@/assets/icons/feather-sprite.svg#info" />
            </svg>
            About
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style></style>
