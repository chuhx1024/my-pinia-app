<template>
<section class="app">
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>姓名: {{store.name}}{{name}}</p>
  <p>姓名(结构出来的需要用storeToRefs 处理要不没有响应式): {{name}}</p>

  <p>年龄: {{store.age}}{{age}}</p>
  <p>性别: {{store.gender}}{{gender}}</p>
  <p>直接使用gutter: {{store.doubleAge}}</p>
  <p>gutter使用参数: {{store.usePorps("我是参数 + ")}}</p>
  <p>年龄加倍1: {{store.doubleAge2}}</p>
  <p>既使用state 又使用 getters 自己的属性: {{store.doubleAge3}}</p>
  <p>跨模块调用: {{store.allName}}</p>
  <p>
    <button @click="handelAdd">直接修改name</button>
  </p>
  <p>
    <button @click="handelReset">一键重置store.$reset()</button>
  </p>
  <p>
    <button @click="handelPatch">批量修改Patch</button>
    <button @click="handelPatch0">批量修改Patch0</button>
  </p>
  <p>
    <button @click="handelSaveName">修改name(传参)在自己函数中使用</button>
  </p>
  <p>
    <button @click="store.saveName('行内西安')">修改name(传参)直接使用</button>
  </p>
  <child />
</section>
</template>

<script setup lang="ts">
import { useUserStore } from './store/user'
import { storeToRefs } from 'pinia'
import child from './child.vue'
const store = useUserStore()
// 如果解构 就没有响应式了 需要借助 storeToRefs
const {name, age} = storeToRefs(store)
console.log(store.name)
console.log(store.age)
const handelAdd = () =>{
    // 可以直接修改 store 中的值 但是不推荐
    store.name = '小花'
}
// 重置 store 的状态
const handelReset = () => {
    store.$reset()
}
// 重置 store 的状态
const handelPatch = () => {
    store.$patch({
        name: '张三',
        age: 12
    })
}
// 重置 store 的状态
const handelPatch0 = () => {
    store.$patch(state => {
        state.name = '张三patch另一种方法';
        state.age = 15
    })
}
// 使用 actions 中方法
const handelSaveName = () => {
    store.saveName('西安')
}
</script>


<style>
    .app {
        padding-left: 500px;
    }
</style>
