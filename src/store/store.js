import Vue from 'vue'
import Vuex from 'vuex'

//import todos from './todos';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import api from '@/common/api';
import ls from '@/common/localStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    //todos
  },
  state: {
    categories: {
      food: 'dark',
      books: 'primary',
      dev: 'link',
      sport: 'info',
      dota: 'success',
      tasks: 'warning',
      improve: 'danger',
    },
    todos: [],
    modal: {
      type: 'updateTodo',
      id: [],
      isActive: false,
    }
  },
  mutations: {
    getTodos(state) {
      state.todos = JSON.parse(window.localStorage.getItem('todos')); 
    },
    setModal(state, modal) {
      state.modal = modal;
    },
  },  
  actions: {
    
  },
  getters: {
    todos: state => state.todos,
    modal: state => state.modal,
  }
})