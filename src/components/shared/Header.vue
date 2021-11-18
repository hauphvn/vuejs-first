<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>HEADER</h1>
          <router-link
              tag="button"
              class="btn btn-outline-success"
              to="/form"
          >Form</router-link>
          <router-link
              tag="button"
              class="btn btn-outline-success"
              to="/"
          >User</router-link>
          <button @click="onChosenNav('app-server')"  class="btn btn-outline-success">Server</button>
          <button @click="onChosenNav('app-directive-home')" class="btn btn-outline-success">Directive</button>
          <button @click="onChosenNav('app-filter')" class="btn btn-outline-success">Filter</button>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onChosenNav(nameNav) {
      this.$emit('nameNavChosen', nameNav);
    }
  }
}
</script>

<style scoped>

</style>
