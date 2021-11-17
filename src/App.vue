<template>
<div class="container">
  <app-header></app-header>
  <hr>
  <div class="row">
    <app-user></app-user>
  </div>
  <hr>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import User from "@/components/user/User";

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-user': User
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
