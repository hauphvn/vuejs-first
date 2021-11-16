<template>
  <div>
    <h1>Contact component page</h1>
    <data-contact-component></data-contact-component>
  </div>
</template>

<script>
import DataContact from "@/DataContact";

export default {
  name: "Contact",
  components: {
    'data-contact-component': DataContact
  }
}
</script>

<style scoped>

</style>
