<template>
<div class="row">
  <div class="col-sm-12">
    <h1>Directive Home</h1>
    <p>Directive build-in</p>
    <p v-text="title"></p>
    <hr>
    <p>The area custom directive</p>
    <p>Those directive is defined at main.js</p>
    <p v-tee-custom="'red'">This a highlight custom directive</p>
    <p v-tee-custom:highlight="'yellow'">This a highlight custom directive with argument</p>
    <p v-tee-custom:highlight.delayed="'red'">This a highlight custom directive with argument, modifier</p>
    <p v-tee-local-custom.delayed.blink>This is a local directive</p>
  </div>
</div>
</template>

<script>
export default {
  name: "DirectiveHome",
  data: function () {
    return {
      title: 'This is a title'
    }
  },
  directives: {
    'tee-local-custom': {
      bind(el, binding) {
        let delay = 0;
        let currentColor = 'white';
        if (binding.modifiers['delayed']) {
          delay = 2000;
        }
        if (binding.modifiers['blink']) {
          currentColor = 'red';
        }
        setTimeout(() => {
          el.style.backgroundColor = 'pink';
          if (currentColor !== 'white') {
            setInterval(() => {
              el.style.backgroundColor = currentColor;
              (currentColor !== 'white') ? currentColor = 'white' : currentColor = 'red';
            }, 500);
          }
        }, delay);
      }
    }
  }
}
</script>

<style scoped>

</style>
