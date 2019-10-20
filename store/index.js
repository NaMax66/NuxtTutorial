export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
};

export const actions = {
  nuxtServerInit({dispatch}) {
    /*Здесь можно формировать логику по авторизации пользователя, получать данные и проч.*/
    console.log('server started');
  },

  login({commit}) {
    commit('setToken', 'trueToken');
  },
  logout({commit}) {
    commit('clearToken')
  }
};

export const getters = {
  /*!! - приводим к булево значению*/
  hasToken: s => !!s.token
};
