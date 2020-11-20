<template>
  <div class="play">
    <div class="row d-flex justify-content-center mb-3">
      <div class="col-auto">
        <h1 class="text-center">Play:</h1>
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="col col-md-6">
        <div class="row gx-3">
          <div class="col">
            <router-link
              to="/host"
              class="btn btn-lg btn-primary w-100 d-flex justify-content-center align-items-center"
            >
              <svg class="feather mr-2">
                <use xlink:href="@/assets/icons/feather-sprite.svg#server" />
              </svg>
              Host
            </router-link>
          </div>
          <div class="col">
            <router-link
              to="/join"
              class="btn btn-lg btn-success w-100 d-flex justify-content-center align-items-center"
            >
              <svg class="feather mr-2">
                <use xlink:href="@/assets/icons/feather-sprite.svg#wifi" />
              </svg>
              Join
            </router-link>
          </div>
        </div>

        <hr class="my-4" />
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="col-auto">
        <router-link
          to="/"
          class="btn btn-lg btn-danger d-flex justify-content-center align-items-center"
        >
          <svg class="feather mr-1">
            <use xlink:href="@/assets/icons/feather-sprite.svg#arrow-left" />
          </svg>
          Back
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "play",
};
</script>

<style></style>
