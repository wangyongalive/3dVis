<script setup lang="ts">
</script>

<template>
  <div class="link">
    <router-link class="router-link" to="/">港口场景</router-link>
    <router-link class="router-link" to="/three">模型拆解</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.link {
  position: fixed;
  left: 50px;
  top: 50px;
  z-index: 9999;

  .router-link {
    /* 添加自定义样式 */
    color: #333;
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border: 1px solid #333;
    border-radius: 4px;
    background-color: #fff;
  }

  .router-link:hover {
    background-color: #eee;
  }
}
</style>
