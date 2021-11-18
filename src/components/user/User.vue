<template>
  <div class="user-wrapper">
    <div class="row">
      <div class="col-xs-12 title">
        <p>User component</p>
        <p>Current user:  {{username}}</p>
        <button @click="onChooseUser('USER1')" type="button" class="btn btn-success">User 1</button>
        <button @click="onChooseUser('USER2')" type="button" class="btn btn-success">User 2</button>
        <button @click="onChooseUser('USER3')" type="button" class="btn btn-success">User 3</button>
        <button @click="onChooseUser('USER4')" type="button" class="btn btn-success">User 4</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
            @outResetUsername="onResetUserName($event)"
            :user-name= username>
          <p>I am a slot</p>
        </app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "@/components/user/UserDetail";
import UserEdit from "@/components/user/UserEdit";

export default {
  name: "UserComponent",
  components: {
    'app-user-detail': UserDetail,
    'app-user-edit': UserEdit
  },
  data: function()  {
   return {username: 'NO NAME'}
  },
  methods: {
    onChooseUser(newName) {
      this.username = newName;
    },
    onResetUserName(event) {
      console.log('value: ', event);
      this.username = 'NONAME';
      return this.username;
    }
  },
  created() {
    console.log('User created');
  },
  activated() {
    console.log('User activated');
  },
  deactivated() {
    console.log('User deactivated');
  },
  destroyed() {
    console.log('User destroyed');
  }
}
</script>

<style scoped>
.user-wrapper {
  background-color: aliceblue;
}

.title {
  text-align: center;
  width: 100%;
}
</style>
