<template>
<div class="component">
   <h3>Infomation user detail</h3>
  <p>List Details</p>
  <slot></slot>
  <p>Name user form User component:   {{userName}}</p>
  <button @click="resetUser()"  class="btn btn-warning">Reset</button>
<!--  <button @click="resetNameFn()" class="btn btn-warning">Reset Name Fn</button>-->
</div>
</template>

<script>
export default {
  name: "UserDetail",
  props: {
    userName: String,
    resetNameFn: Function
  },
  computed: {
    resetUser() {
     return  this.$emit('outResetUsername', 'Noname');
    }
  }
}
</script>

<style scoped>

</style>
