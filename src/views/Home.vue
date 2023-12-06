<template>
  <div id="home">
    <Exp1></Exp1>
  </div>
</template>

<script setup>
import Exp1 from "./Exp5-1";
import UserStore from "./UserStore.vue";
</script>

<style lang="less">
@import "@/assets/word-like.less";
@import "@/assets/paper.less";

#home {
  width: 793px;
  margin: 20px auto;
  color: #000;
  font-size: 16px;
}
</style>