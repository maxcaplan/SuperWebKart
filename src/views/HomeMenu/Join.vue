<template>
  <div class="join">
    <h1 class="text-center mb-3">Join:</h1>

    <div class="row d-flex justify-content-center mb-3">
      <div class="col col-md-6">
        <div class="row mb-3">
          <div class="col-auto"><h3>Host ID:</h3></div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="ID"
              v-model="hostID"
              required
            />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-auto"><h3>Name:</h3></div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="John Smith"
              v-model="name"
              required
            />
          </div>
        </div>

        <div class="row d-flex justify-content-end">
          <div class="col-auto">
            <button class="btn btn-lg btn-success">
              Play
              <svg class="feather mr-1">
                <use
                  xlink:href="@/assets/icons/feather-sprite.svg#arrow-right"
                />
              </svg>
            </button>
          </div>
        </div>

        <hr />
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="col-auto">
        <router-link
          to="/play"
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
  name: "Join",

  data() {
    return {
      hostID: "",
      name: "",
    };
  },

  watch: {
    name() {
      this.checkName();
    },
    hostID() {
      this.checkID();
    },
  },

  methods: {
    checkID() {
      this.hostID = this.hostID.replace(/[^\w\s]/gi, "");
      if (this.hostID.length > 6) this.hostID = this.hostID.slice(0, 6);
      this.hostID = this.hostID.toUpperCase();
    },
    checkName() {
      this.name = this.name.replace(/[^\w\s]/gi, "");
      if (this.name.length > 20) this.name = this.name.slice(0, 20);
    },
  },
};
</script>

<style scoped></style>
