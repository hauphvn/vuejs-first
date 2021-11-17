<template>
  <div class="user-wrapper">
    <div class="row">
      <div class="col-xs-12 title">
        <p>User component</p>
        <p>Current user:  {{this.username}}</p>
        <button @click="onChooseUser('USER1')" type="button" class="btn btn-success">User 1</button>
        <button @click="onChooseUser('USER2')" type="button" class="btn btn-success">User 2</button>
        <button @click="onChooseUser('USER3')" type="button" class="btn btn-success">User 3</button>
        <button @click="onChooseUser('USER4')" type="button" class="btn btn-success">User 4</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
            @outResetUsername="username = $event"
            :username=username>
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
   return {username: 'NONAME'}
  },
  methods: {
    onChooseUser(newName) {
      this.username = newName;
    }
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
