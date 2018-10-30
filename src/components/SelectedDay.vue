<template>
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
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  props: ['selectedDay'],
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      
    })
  },
  computed: {
    ...mapGetters({
      
    })
  },
  async mounted(){
    
  },
  watch: {
    
  }
}
</script>
