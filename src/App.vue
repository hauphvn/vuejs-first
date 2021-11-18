<template>
<div class="container">
  <app-header
      @nameNavChosen="onHandleNav($event)"
  ></app-header>
  <p>{{componentName}}</p>
  <hr>
  <div class="row content">
<keep-alive>
  <component :is="componentName"></component>
</keep-alive>
<!--    <app-user></app-user>-->
  </div>
  <hr>
  <app-footer></app-footer>
</div>
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import User from "@/components/user/User";
import Server from "@/components/servers/Server";
import UserForm from "@/components/form/UserForm";
import DirectiveHome from "@/components/directive/DirectiveHome";
import Filter from "@/components/filter/Filter";

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-user': User,
    appServer: Server,
    appUserForm: UserForm,
    appDirectiveHome: DirectiveHome,
    'app-filter': Filter
  },
  data: function() {
    return {componentName: 'app-user'};
  },
  methods: {
    onHandleNav(nameNav) {
      this.componentName = nameNav;
    }
  }

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.content{
  display: inline-block;
  width: 100%;
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
