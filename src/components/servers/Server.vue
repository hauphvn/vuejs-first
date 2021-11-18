<template>
<div class="col-xs-12 col-sm-6">
  <ul class="list-group">
    <li
        class="list-group-item"
        v-for="index in 5" :value="index" :key="index">Server #{{index}}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Server",
  created() {
    //*.log('Server created');
  },
  activated() {
    //*.log('Server activated');
  },
  deactivated() {
    //*.log('Server deactivated');
  },
  destroyed() {
    //*.log('Server destroyed');
  }
}
</script>
<style scoped>
</style>
