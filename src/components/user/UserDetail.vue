<template>
<div class="component">
   <h3>Infomation user detail</h3>
  <p>List Details</p>
  <p>Name user form User component:   {{username}}</p>
  <button @click="resetUser()"  class="btn btn-warning">Reset</button>
</div>
</template>

<script>
export default {
  name: "UserDetail",
  props: {
    username: {
      type: Object,
      default: function() {
        return 'No name';
      }
    }
  },
  methods: {
    resetUser() {
      this.username = 'No name';
      this.$emit('outResetUsername', 'fdsfsdfs');
    }
  }
}
</script>

<style scoped>

</style>
