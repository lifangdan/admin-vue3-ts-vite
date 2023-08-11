<template>
  <div class="app-container">
    <div class="app-container-inner">
      <el-button v-auth="'add'">权限按钮1</el-button>
      <el-button v-auth="'device-export'">权限按钮2</el-button>
      <el-button v-auth="['export', 'add']">权限按钮3</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
  let str: string = '123'
  console.log(str)
</script>

<style scoped lang="scss">
  @import './index';
</style>
