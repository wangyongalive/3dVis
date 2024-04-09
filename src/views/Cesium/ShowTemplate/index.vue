<template>
  <div>
    <p>
      <span> 当前目标元素：</span>
      {{ id }}
    </p>
    <p>
      <span>当前经度：</span>
      {{ position.longitude }}
    </p>
    <p><span>当前维度：</span>{{ position.latitude }}</p>
    <p>
      <span>当前高度：</span>
      {{ position.height }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: [String, Number],
    default: ''
  },
  position: {
    type: Object,
    default: () => ({}) // 默认值是一个空对象
  }
})
</script>

<style lang="scss" scoped>
p {
  span {
    font-weight: bolder;
  }
}
</style>
