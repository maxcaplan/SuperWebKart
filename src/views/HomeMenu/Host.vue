<template>
  <div id="host">
    <h1 class="text-center mb-3">Host:</h1>

    <div class="row d-flex justify-content-center mb-3">
      <div class="col col-md-6">
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

        <div class="row">
          <div class="col-auto">
            <h3 class="m-0">Public:</h3>
          </div>
          <div class="col d-flex align-items-center">
            <div class="form-check form-switch m-0">
              <input
                class="form-check-input"
                type="checkbox"
                id="publicSwitch"
                v-model="isPublic"
                disabled
              />
              <label class="form-check-label" for="publicSwitch"
                >Feature in progress</label
              >
            </div>
          </div>
        </div>

        <hr />

        <div class="row g-2">
          <div class="col-12 col-sm">
            <router-link to="/play" class="btn btn-lg btn-danger w-100">
              <svg class="feather mr-1">
                <use
                  xlink:href="@/assets/icons/feather-sprite.svg#arrow-left"
                /></svg
              >Back</router-link
            >
          </div>
          <div class="col-12 col-sm">
            <button
              class="btn btn-lg btn-success w-100"
              @click="createRoom"
              :disabled="!name"
            >
              Create Lobby
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Host",

  data() {
    return {
      name: "",
      isPublic: false,
      id: null,
    };
  },

  watch: {
    name() {
      this.checkName();
    },
  },

  methods: {
    checkName() {
      this.name = this.name.replace(/[^\w\s]/gi, "");
      if (this.name.length > 20) this.name = this.name.slice(0, 20);

      this.$store.dispatch("setName", this.name);
    },
    async createRoom() {
      try {
        const response = await this.$http.get(
          "http://localhost:8080/api/createroom/"
        );
        console.log(response);
        this.id = response.data;

        this.$router.push("/lobby/" + this.id);
      } catch (e) {
        console.error(e);
      }
    },
  },

  mounted() {
    this.name = this.$store.state.name || "";
  },
};
</script>

<style scoped></style>
