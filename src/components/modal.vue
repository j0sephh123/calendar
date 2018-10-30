<template>
  <div 
    :class="modal.isActive ? 'modal is-active' : 'modal'">

  <div 
    @click="setModal({type: 1, id: 1, isActive: false})"
    class="modal-background"></div>

  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button 
        @click="setModal({type: 1, id: 1, isActive: false})"
        class="delete"></button>
    </header>
    <section class="modal-card-body">
      Content
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
    </footer>
  </div>

</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setModal'])
  },
  computed: {
    ...mapGetters(['modal'])
  },
  watch: {
    '$store.state.modal.isActive'(val) {
      console.log(val);
    }
  },
}
</script>
