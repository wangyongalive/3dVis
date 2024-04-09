<template>
  <transition name="dialog">
    <div v-if="visible" class="dialog-content" :style="{ width: width, height: height, left: left, top: top }">
      <slot></slot>
      <button class="close-button" @click="close">✖</button>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '500px'
  },
  height: {
    type: String,
    default: 'auto'
  },
  left: {
    type: String,
    default: '50%'
  },
  top: {
    type: String,
    default: '50%'
  }
});

const emit = defineEmits(['update:visible']);


const close = () => {
  emit('update:visible', false);
};
</script>

<style scoped>
.dialog-content {
  position: fixed;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  opacity: 1;
  scale: 1;
  z-index: 9999;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #666;
}

.close-button:hover {
  color: #000;
}
</style>
