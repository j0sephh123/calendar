<template>
<div v-show="showCreate">
  <div class="field">
    <label class="label">Date</label>
    <input class="input" type="date" v-model="date"> <!-- date -->
  </div>

  <div class="field">
    <label class="label">Category</label>
    <div class="select">
      
      <select v-model="category">
        <option v-for="c in categories" :key="c">{{c}}</option>
      </select>
    </div> <!-- categories -->
  </div>

  <div class="field">
    <label class="label">isCompleted</label>
    <div class="control"> 
      <label class="radio">
        <input type="radio" value="yes" v-model="isCompleted">
        Yes
      </label>
      <label class="radio">
        <input type="radio" value="no" v-model="isCompleted">
        No
      </label>
    </div> <!-- isCompleted -->
  </div>  

  <div class="field">
    <label class="label">Description</label>
    <div class="control">
      <textarea 
        v-model="description"
        class="textarea" 
      ></textarea>  
    </div>
  </div>

  <div class="field is-grouped is-grouped-right">
    <div class="control">
      <button 
        @click="createTodo({
          date: new Date(date), category, isCompleted, description
        })"
        class="button is-link">Submit</button>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
  props: {
    showCreate: Boolean,
  },
  data() {
    return {
      // id: 2,
      date: '',
      // date: new Date(2018, 9, 24),     date

      category: '',
      // category: 'books',               select

      isCompleted: '',
      // isCompleted: false,              radio

      description: '',
      // description: 'book todo',        textarea
    }
  },
  methods: {
    ...mapMutations(['createTodo'])
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
