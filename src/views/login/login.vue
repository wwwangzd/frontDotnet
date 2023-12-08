<template>
  <div class="body">
    <div class="mainimg">
      <div class="pieces1"></div>
      <div class="pieces2"></div>
      <div class="pieces3"></div>
      <div class="pieces4"></div>
      <section>
        <div class="box">
          <div class="square" style="--i:0;"></div>
          <div class="square" style="--i:1;"></div>
          <div class="square" style="--i:2;"></div>
          <div class="square" style="--i:3;"></div>
          <div class="square" style="--i:4;"></div>
          <div class="container">
            <div class="doubleFaced frontIndex">
              <div @click="turnAround(1)" class="txt">Welcome</div>
            </div>
            <section class="doubleFaced loginform">
              <h2>Login in</h2>
              <a-form ref="formRef" :rules="rules" :model="model">
                <a-form-item class="inputbox" name="loginToken">
                  <a-input type="text" placeholder="Username" v-model:value="model.loginToken">
                  </a-input>
                </a-form-item>
                <a-form-item class="inputbox" name="password">
                  <a-input type="password" placeholder="Password" v-model:value="model.password">
                  </a-input>
                </a-form-item>
                <div class="inputbox">
                  <a-input type="submit" value="Login" class="btn1" @click="onSubmit()">
                  </a-input>
                </div>
                <span @click="turnAround(2)">Go back</span>
              </a-form>
            </section>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import login from '../../assets/js/login.js'
let { model, rules, formRef, onSubmit, turnAround } = login();
</script>
<style scoped src="../../assets/css/login.css"></style>