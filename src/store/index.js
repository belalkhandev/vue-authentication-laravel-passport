import { createStore } from 'vuex'

import auth from '@/store/modules/auth/'
import user from '@/store/modules/user/'

export default createStore({
  state: {
  },
  getters: {
    validation_errors (state) {
      return state.validation_errors
    },

    error_message (state) {
        return state.error_message
    }
  },
  mutations: {
    SET_VALIDATION_ERRORS (state, errors) {
      state.validation_errors = errors
    },
    
    SET_ERROR_MESSAGE (state, error) {
      state.error_message = error
    }
  },
  actions: {
  },
  modules: {
    auth, user
  }
})
