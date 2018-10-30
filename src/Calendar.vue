<template>
<div class="section column is-8 is-offset-2">
  <button 
    @click="show = !show"
    :class="show ? 'button is-link' : 'button'"
  >Calendar</button>
  
  <button 
    @click="showCreate = !showCreate"
    :class="showCreate ? 'button is-link' : 'button'"
  >Create</button>
  
  <hr>

  <v-calendar 
    @dayclick="dayClicked"

    :attributes='attributes'
    :is-double-paned="false" 
    v-show="show"
    title-position='left'
    :is-expanded="true"
    >
    <span slot='header-title' slot-scope='{ monthLabel, yearLabel }'>
      {{ monthLabel }} {{ yearLabel }}
    </span>
  </v-calendar>

  <create-todo :showCreate="showCreate"></create-todo>

  <selected-day-component :selectedDay="selectedDay"></selected-day-component>

  

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import SelectedDayVue from './components/SelectedDay.vue';
import CreateTodoVue from './components/CreateTodo.vue';

export default {
  components: {
    selectedDayComponent: SelectedDayVue,
    createTodo: CreateTodoVue,
  },
  data() {
    return {
      modalActive : false,
      showCreate: true,
      show: false,
      selectedDay: null,
    }
  },
  methods: {
    ...mapMutations(['getTodos', 'setModal']),
    dayClicked(day) {
      this.selectedDay = day;
    },
  },
  computed: {
    ...mapGetters(['todos', 'modal']),
    attributes() {
      return this.todos.map(t => ({
        key: `todo.${t.id}`,
        dot: {
          backgroundColor: t.color,
        },
        dates: t.date,
        customData: t,
      }));
    },
  },
  async mounted(){
    this.getTodos();
  },
  watch: {
    '$store.state.todos'(val) {
      window.localStorage.setItem('todos', JSON.stringify(val));
    }
  }
}
</script>

