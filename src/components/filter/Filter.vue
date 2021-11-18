<template>
<div class="row">
  <div class="col-sm-12">
    <h1>Filter</h1>
    <h2>Bank account balance</h2>
    <p>This is a filter on this component</p>
    <p>{{accountInUSD}}</p>
    <p>Vue recommend use filter at global properties on main.js</p>

  </div>
</div>
</template>

<script>
export default {
  name: "Filter",
  data: function() {
    return {accountBalance: 123}
  },
  computed: {
    accountInUSD() {
      return '$'+ this.accountBalance;
    }
  }
}
</script>

<style scoped>

</style>
