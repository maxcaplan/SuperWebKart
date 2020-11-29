<template>
  <div id="join">
    <h1 class="text-center mb-3">Join:</h1>

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
        <div class="row mb-3">
          <div class="col-auto"><h3>Id:</h3></div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="John Smith"
              v-model="id"
              required
            />
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
              @click="joinRoom"
              :disabled="!name || !id"
            >
              Join Lobby
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validate as uuidValidate } from "uuid";

export default {
  name: "join",

  data() {
    return {
      name: "",
      id: "",
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
    joinRoom() {
      if (uuidValidate(this.id)) {
        this.$router.push("/lobby/" + this.id);
      }
    },
  },

  mounted() {
    this.name = this.$store.state.name || "";
    if (
      this.$route.params &&
      this.$route.params.id &&
      uuidValidate(this.$route.params.id)
    ) {
      this.id = this.$route.params.id;
    }
  },
};
</script>

<style></style>
