<template>
  <div class="body">
    <div class="mainimg">
      <div class="pieces1"></div>
      <div class="pieces2"></div>
      <div class="pieces3"></div>
      <div class="pieces4"></div>
      <!-- 这里改成一个表单 -->
      <section>
        <!-- <div class="color"></div>
            <div class="color"></div>
            <div class="color"></div> -->
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
            <div class="doubleFaced loginform">
              <h2>Login in</h2>
              <form>
                <div class="inputbox">
                  <input type="text" placeholder="Username/Student ID">
                </div>
                <div class="inputbox">
                  <input type="password" placeholder="Password">
                </div>
                <div class="inputbox">
                  <input type="submit" value="Login" class="btn1">
                  <!-- <input type="submit" value="Forget" class="btn2"> -->
                </div>
                <span @click="turnAround(2)">Go back</span>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
  <!-- <script>
              $($(".container p").click(
                  ()=>{
                      $(".form").toggleClass("form-turn");
                      $(".frontIndex").toggleClass("frontIndex-turn");
                  }
              ));
  </script> -->
<script src="../../assets/js/login.js"></script>
<style scoped src="../../assets/css/login.css"></style>