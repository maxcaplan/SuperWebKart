<template>
  <div class="player">
    <div
      v-if="player && player.name && player.joined && player.id"
      class="card card-body shadow-sm p-2"
    >
      <div class="row gx-4 gy-2">
        <div v-if="player.host" class="col-12">
          <h5 class="badge bg-warning text-dark m-0 w-100 text-center">Host</h5>
        </div>

        <div class="col-auto border-right d-none d-sm-flex">
          <div
            class="player-icon text-light shadow-sm"
            :class="player.id == userId ? 'bg-primary' : 'bg-secondary'"
          >
            {{ player.name[0].toUpperCase() }}
          </div>
        </div>

        <div class="col">
          <h6 class="m-0 text-truncate">
            {{ player.name }}
          </h6>
          <small class="m-0"> joined: {{ formatDate(player.joined) }} </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",

  props: {
    player: Object,
    userId: String,
  },

  methods: {
    formatDate(time) {
      let D = new Date(time);
      let m = D.getMinutes();
      m = m >= 10 ? m : m + "0";
      return D.getHours() + ":" + m;
    },
  },
};
</script>

<style scoped>
.player-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>
