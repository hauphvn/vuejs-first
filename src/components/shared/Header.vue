<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>HEADER</h1>
          <button @click="onChosenNav('app-user')" class="btn btn-outline-success">User</button>
          <button @click="onChosenNav('app-server')"  class="btn btn-outline-success">Server</button>
          <button @click="onChosenNav('app-user-form')"  class="btn btn-outline-success">Form</button>
          <button @click="onChosenNav('app-directive-home')" class="btn btn-outline-success">Directive</button>
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
