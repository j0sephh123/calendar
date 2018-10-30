import Vue from 'vue'
import Vuex from 'vuex'

//import todos from './todos';
//import api from '@/common/api';
//const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

import {db} from '@/db';
import utils from '@/common/utils'

const ls = {
  get(todos) {
    return window.localStorage.getItem(todos);
  },
  set(todos) {
    window.localStorage.setItem('todos', todos)
  },
  destroy() {
    console.log('destroy func')
  }
}

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
    // todos
    getTodos(state) {
      const ls_items = window.localStorage.getItem('todos');
      
      if(ls_items === null) {
        console.log('here');
        window.localStorage.setItem('todos', JSON.stringify(db));
      }

      state.todos = JSON.parse(window.localStorage.getItem('todos'));
      
      
      //window.localStorage.setItem('todos', JSON.stringify(todos));
    },
    createTodo(state, todo) {
      todo['color'] = state.categories[todo.category];
      todo['id'] = state.todos[state.todos.length-1]['id'] + 1; 
      state.todos.push(todo);
    },

    // modal
    setModal(state, modal) {
      state.modal = modal;
    },
  },  
  actions: {
    
  },
  getters: {
    todos: state => state.todos,
    modal: state => state.modal,
    categories: state => Object.keys(state.categories),
  }
})