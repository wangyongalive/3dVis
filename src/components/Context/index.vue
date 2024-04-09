<template>
  <div class="centered-text">
   当前目标元素： <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'CenteredText',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.centered-text {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  min-width: 100px;
}
</style>
