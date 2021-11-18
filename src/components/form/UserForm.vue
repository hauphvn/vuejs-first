<template>
  <div>
    <div class="row">
      <div class="col-sm-6 form-side">
        <h1>User form</h1>
        <form>
          <div class="form-group">
            <label for="username">Username: </label>
            <input
                v-model.lazy="userData.username"
                type="text"
                id="username"
                class="form-control">
          </div>
          <div class="form-group">
            <label for="password">Password: </label>
            <input
                v-model="userData.password"
                type="password"
                id="password"
                class="form-control">
          </div>
          <div class="form-group">
            <label for="desc">Description: </label>
            <textarea
                v-model="userData.desc"
                rows="3"
                type="text"
                id="desc"
                class="form-control">
          </textarea>
          </div>
          <div class="form-group">
            <label for="sendEmail">Send to email: </label>
            <input
                value="sendToEmail"
                v-model="sendOptions"
                type="checkbox"
                id="sendEmail"
                class="form-control">
          </div>
          <div class="form-group">
            <label for="sendPhone">Send to phone: </label>
            <input
                value="sendToPhone"
                v-model="sendOptions"
                type="checkbox"
                id="sendPhone"
                class="form-control">
          </div>
          <div class="form-group">
            <label for="male">Male: </label>
            <input
                v-model="gender"
                value="Male"
                type="radio"
                id="male"
                class="form-control">
          </div>
          <div class="form-group">
            <label for="female">Female: </label>
            <input
                v-model="gender"
                value="Female"
                type="radio"
                id="female"
                class="form-control">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="priority">Priority</label>
            </div>
            <select
                v-model="priorityChose"
                class="custom-select" id="priority">
              <option
                  v-for="(priority, index) in priorities"
                  :value="priority"
                  :key="index"
                  :selected="priorityChose"
                  >
                {{ priority }}
              </option>
            </select>
          </div>
          <hr>
          <h3>Do not use v-model</h3>
          <div class="form-group">
            <label for="usernameNoModel">UsernameNoModel: </label>
            <input
                :value="userDataNoModel.usernameNoModal"
                @input="userDataNoModel.usernameNoModal = $event.target.value"
                type="text"
                id="usernameNoModel"
                class="form-control">
          </div>
          <p>Your input: {{userDataNoModel.usernameNoModal}}</p>
          <hr>
          <button
              @click.prevent="onSubmit()"
              class="btn btn-warning">Submit</button>
        </form>
      </div>
      <div class="col-sm-6 form-side">
        <h1>Your info</h1>
        <p>Username: <span>{{ userData.username }}</span></p>
        <p>Password: <span>{{ userData.password }}</span></p>
        <p>Description:
          <span
              style="white-space: pre">
            {{ userData.desc }}
        </span>
        </p>
        <div>
          <p>Send options:</p>
          <ul>
            <li v-for="(send,index) in sendOptions" :value="send" :key="index">{{ send }}</li>
          </ul>
        </div>
        <p>Gender: <span>{{ gender }}</span></p>
        <p>Priority: {{ priorityChose }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data: function () {
    return {
      userData: {
        username: '',
        password: '',
        desc: ''
      },
      userDataNoModel: {
        usernameNoModal: ''
      },
      sendOptions: [],
      gender: 'Male',
      priorityChose: 'Low',
      priorities: ['High', 'Medium', 'Low']
    }
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style scoped>
.form-side {
  width: 100%;
}
</style>
