<template>
  <div class="host">
    <div class="row d-flex justify-content-center mb-3">
      <div class="col-auto">
        <h1 class="text-center d-flex align-items-center">
          Host:
          <a
            href="#"
            @click.prevent="copyID"
            ref="copy"
            class="copy badge bg-secondary text-decoration-none fs-4 ml-2"
          >
            <span class="copy-text">
              <span ref="copyText">{{ peerID }}</span>
              <svg class="feather ml-2">
                <use
                  xlink:href="@/assets/icons/feather-sprite.svg#clipboard"
                /></svg
            ></span>

            <transition name="fade">
              <span class="copied" v-if="copied">
                Copied!
                <svg class="feather ml-2">
                  <use xlink:href="@/assets/icons/feather-sprite.svg#check" />
                </svg>
              </span>
            </transition>
          </a>
        </h1>
      </div>
    </div>

    <div class="row d-flex justify-content-center mb-3">
      <div class="col col-md-6">
        <div class="row">
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
      </div>
    </div>

    <div class="row d-flex justify-content-center mb-3">
      <div class="col">
        <h3 class="text-center">Players:</h3>
        <h4 class="text-center">0/10</h4>
      </div>
    </div>

    <div class="row d-flex justify-content-center mb-3">
      <div class="col col-md-6">
        <div class="w-100 d-flex justify-content-end">
          <button
            class="btn btn-success btn-lg"
            :disabled="!name || !connected"
          >
            Start
            <svg class="feather mr-1">
              <use xlink:href="@/assets/icons/feather-sprite.svg#arrow-right" />
            </svg>
          </button>
        </div>

        <hr />
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="col-auto">
        <button
          @click="closeServer"
          class="btn btn-lg btn-danger d-flex justify-content-center align-items-center"
        >
          <svg class="feather mr-1">
            <use xlink:href="@/assets/icons/feather-sprite.svg#arrow-left" />
          </svg>
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Host",
  data() {
    return {
      peerID: "",
      copied: false,
      name: "",
    };
  },

  computed: {
    peer() {
      return this.$store.state.Networking.peer;
    },
    connected() {
      if (this.peer) {
        return this.peer.connections;
      } else {
        return null;
      }
    },
  },

  watch: {
    name() {
      this.checkName();
    },
  },

  methods: {
    genID(len) {
      const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let out = "";

      for (let i = 0; i < len; i++) {
        out += alph[Math.round(Math.random() * (alph.length - 1))];
      }

      return out;
    },

    async copyID() {
      if (!this.copied) {
        try {
          await navigator.clipboard.writeText(this.$refs.copyText.innerHTML);
          this.copied = true;
          await new Promise((resolve) => setTimeout(resolve, 1000));
          this.copied = false;
        } catch (e) {
          console.error(e);
        }
      }
    },

    checkName() {
      this.name = this.name.replace(/[^\w\s]/gi, "");
      if (this.name.length > 20) this.name = this.name.slice(0, 20);

      this.$store.dispatch("setName", this.name);
    },

    closeServer() {
      this.$store.dispatch("Networking/destroyPeer");
      this.$router.push("/play");
    },
  },

  mounted() {
    this.peerID = this.genID(6);
    this.$store.dispatch("Networking/setHostID", this.peerID);
    this.$store.dispatch("Networking/createPeer");
    console.log(this.$store.state.Networking.peer);

    this.name = this.$store.state.name || "";
  },
};
</script>

<style scoped>
.copy {
  position: relative;
  overflow: hidden;
}

.copy:hover {
  color: var(--bs-light);
}

.copied {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bs-secondary);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
