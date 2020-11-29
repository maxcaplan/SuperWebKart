<template>
  <div id="lobby" class="container py-3 h-100">
    <div class="row g-2">
      <div class="col">
        <h1 class="m-0">Lobby</h1>
      </div>
      <div class="col-auto">
        <button class="btn btn-danger mr-2" @click="$router.go(-1)">
          <svg class="feather mr-1">
            <use xlink:href="@/assets/icons/feather-sprite.svg#arrow-left" />
          </svg>
          Back
        </button>

        <button class="btn btn-success" disabled>
          Start
          <svg class="feather ml-1">
            <use xlink:href="@/assets/icons/feather-sprite.svg#arrow-right" />
          </svg>
        </button>
      </div>
    </div>

    <hr />

    <div class="row g-2">
      <div class="col-12 col-sm d-flex align-items-center">
        <h5 class="m-0 text-muted">
          Lobby ID:
        </h5>
      </div>
      <div class="col-12 col-sm-auto d-flex justify-content-end">
        <div class="bg-secondary px-2 d-flex align-items-center h-100 rounded">
          <p class="m-0 text-light">{{ roomId }}</p>
        </div>
      </div>
      <div class="col-12 col-sm-auto d-flex justify-content-end">
        <div class="dropdown h-100">
          <button
            class="btn btn-sm btn-secondary dropdown-toggle d-flex align-items-center h-100"
            type="button"
            id="copyDropdown"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <svg class="feather">
              <use xlink:href="@/assets/icons/feather-sprite.svg#clipboard" />
            </svg>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-dark dropdown-menu-right mt-2"
            aria-labelledby="copyDropdown"
          >
            <li>
              <button class="dropdown-item" href="" @click="copy(0)">
                Copy Link
              </button>
            </li>
            <li>
              <button class="dropdown-item" href="" @click="copy(1)">
                Copy ID
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col d-none d-lg-flex">
        <div class="card card-body">
          <div class="row">
            <div class="col-auto">
              <h4 class="mb-1">Chat</h4>
              <p class="text-muted m-0">
                Feature in progress
              </p>
            </div>
          </div>

          <hr />
        </div>
      </div>
      <div class="col">
        <div class="card card-body">
          <div class="row">
            <div class="col-auto"><h4 class="m-0">Players:</h4></div>
            <div class="col">
              <h5 class="m-0">{{ players.length }} / 12</h5>
            </div>
          </div>

          <hr />

          <div id="player-list" class="row gy-2">
            <div class="col-12" v-for="player in players" :key="player.id">
              <player-card :player="player" :userId="socket.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

import PlayerCard from "../components/PlayerCard.vue";

export default {
  name: "Lobby",

  components: {
    PlayerCard,
  },

  data() {
    return {
      socket: null,
      players: [],
      copying: false,
    };
  },

  computed: {
    roomId() {
      return this.$route.params.id;
    },
    name() {
      return this.$store.state.name;
    },
  },

  methods: {
    async copy(mode) {
      if (!this.copying) {
        let val = mode ? this.roomId : window.location.href;
        try {
          this.copying = true;
          await navigator.clipboard.writeText(val);
          this.copying = false;
        } catch (e) {
          console.error(e);
        }
      }
    },
  },

  mounted() {
    this.socket = new io("https://super-web-kart.uc.r.appspot.com");
    this.socket.on("connect", () => {
      console.log(this.socket.id);
      this.socket.emit("join-room", this.roomId, this.name);
    });

    this.socket.on("user-connected", (val) => {
      console.log("User connected");
      this.players = val;
    });

    this.socket.on("user-disconnected", (val) => {
      console.log("User disconnected");
      this.players = val;
    });
  },

  beforeDestroy() {
    // Disconnect socket from server before leaving lobby
    if (this.socket) {
      this.socket.disconnect();
    }
  },
};
</script>

<style></style>
