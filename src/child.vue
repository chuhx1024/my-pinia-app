<template>
    <h3>我是子组件</h3>
  <p>姓名: {{store.name}}</p>
  <p>性别: {{store.age}}</p>
  <p>性别: {{store.gender}}</p>
</template>

<script setup lang="ts">
import { useUserStore } from './store/user'
const store = useUserStore()
console.log(store.name)
console.log(store.age)
</script>