<template>
<div id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <router-view/>
  <modal></modal>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import modalVue from './components/modal.vue';

export default {
  components: {
    modal: modalVue
  },
  data() {
    return {
      
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      
    })
  },
  watch: { // '$store.state.features.redirect'
    
  },
  async mounted() {
    
  }
};
</script>

<style>
.router-link-active {
  text-decoration: underline;
}
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}
*{
  
}
</style>
