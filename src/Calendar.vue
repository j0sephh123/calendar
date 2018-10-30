<template>
<div class="section column is-8 is-offset-2">
  <h1>Hello</h1>
  <button 
    @click="show = !show"
    class="button">Calendar Show</button><hr>

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

  <div v-if='selectedDay'>
    <h3>{{ selectedDay.date.toDateString() }}</h3>
    <ul>
      <li class="box"
        v-for='attr in selectedDay.attributes'
        :key='attr.key'>

        <div class="level">
          <div class="level-left">
            <div class="level-item">{{ attr.customData.category }}</div>
          </div>
          <div class="level-right">

            <button
              @click="setModal({type: 1, id: 1, isActive: true})" 
              class="button">Update
            </button>

            <button class="button">Remove</button>

          </div>
        </div>

        <div class="level">
          <div class="level-left">
            <div class="level-item">{{ attr.customData.description }}</div>
          </div>
          <div class="level-right">
            <div class="level-item">d</div>
          </div>
        </div>
        
      </li>
    </ul>
    <button class="button">Add</button>
  </div>

  

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  data() {
    return {
      modalActive : false,
      show: true,
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
    
  }
}
</script>

