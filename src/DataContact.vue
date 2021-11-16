<template>
  <div>
    <p>Address: {{ address }}</p>
    <p>Email: {{ email }}</p>
    <button
        @click="onShowEmail()"
        class="btn">Show email
    </button>
  </div>
</template>

<script>
export default {
  name: "DataContact",
  data: function () {
    return { address: 'Hai Son, Phuoc Hung', email: 'example@gmail.com' }
  },
  methods: {
    onShowEmail() {
      this.email = 'hauphvn@gmail.com';
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 10px;
  background-color: #ff5722;
  height: 32px;
  width: 121px;
  border-radius: 5px;
  border: none;
  text-align: center;
  line-height: 1;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.8;
  border: 1px solid black;
}
</style>
