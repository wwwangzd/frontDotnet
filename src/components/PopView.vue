<template>
    <div class="Pop-View" v-show="isvisible">
        <div class="message-control" ref="messageControl">
            <form class="message" novalidate>

                <div class="message-left">
                    <!-- 头像 -->
                    <el-upload class="avatar-uploader" action="" :http-request="UpLoadImg" :show-file-list="false"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>

                    <!-- 用户名 -->
                    <div class="form-floating message-name" style="font-size: 15px">
                        <input class="form-control minput" id="username" placeholder=" " v-model="user.username"
                            v-bind:class="usernameState" @blur="UsernameJudgeBlur" />
                        <label for="username" v-bind:class="{ messagefault: usernameFault }">
                            {{ usernameMessage }}
                        </label>
                    </div>
                </div>

                <div class="message-right">
                    <!-- 手机号 -->
                    <div class="form-floating message-phone" style="font-size: 15px">
                        <input class="form-control minput" id="phone" placeholder=" " v-model="user.phone"
                            v-bind:class="phoneState" @blur="PhoneJudgeBlur" />
                        <label for="phone" v-bind:class="{ messagefault: phoneFault }">
                            {{ phoneMessage }}
                        </label>
                    </div>

                    <button type="button" class="btn btn-success message-btn">
                        添加用户
                    </button>
                </div>

            </form>
        </div>
    </div>
</template>
<script src="../assets/js/PopView.js"></script>
<style scoped src="../assets/css/PopView.css"></style>
  