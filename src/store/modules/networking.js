import Peer from "peerjs";

const state = () => ({
  hostID: null,
  joinID: null,
  peer: null,
  connection: null,
  host: false,
});

const getters = {};

const actions = {
  setHostID({ commit }, id) {
    commit("SET_HOSTID", id);
    commit("SET_JOINID", null);
    commit("SET_HOST", true);
  },

  setJoinID({ commit }, id) {
    commit("SET_JOINID", id);
    commit("SET_HOSTID", null);
    commit("SET_HOST", false);
  },

  createPeer({ state, commit }) {
    let peer;

    if (state.host) {
      peer = new Peer(state.hostID);
    } else {
      peer = new Peer();
    }

    commit("SET_PEER", peer);
  },

  connectToPeer({ state, commit }) {
    const connection = state.peer.connect(state.joinID);
    commit("SET_CONNECTION", connection);
  },

  destroyPeer({ state, commit }) {
    state.peer.destroy();
    commit("SET_PEER", null);
    commit("SET_HOST", false);
  },
};

const mutations = {
  SET_HOST(state, val) {
    state.host = val;
  },
  SET_HOSTID(state, id) {
    state.hostID = id;
  },
  SET_JOINID(state, id) {
    state.joinID = id;
  },
  SET_PEER(state, peer) {
    state.peer = peer;
  },
  SET_CONNECTION(state, connection) {
    state.connection = connection;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
