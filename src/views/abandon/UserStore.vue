<template>
    <div class="home-view" v-loading="loading" @click="PopControl">

        <!-- 侧栏 -->
        <aside-menu ref="AsideMenu"></aside-menu>

        <!-- 主体部分 -->
        <div class="body-view" :class="{ active: isActive }">

            <!-- 头部 -->
            <div class="container-top">
                <div class="top-left">
                    <i :class="!isActive ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="ControlActive"></i>
                    <div>用户管理</div>
                </div>
                <button class="btn btn-success" type="button" ref="adduser" @click="showAddUser">
                    添加用户</button>
            </div>

            <!-- 内容 -->
            <div class="container-fluid container-main">
                <div class="container-content border bg-white">

                    <!-- 搜索栏--简单实现 -->
                    <div class="content-search bg-light">
                        <div class="input-group search">
                            <button class="btn btn-primary" type="button" id="button-addon1">搜索</button>
                            <input type="text" class="form-control" placeholder="查找用户..."
                                aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        </div>
                    </div>

                    <!-- 选择栏 -->
                    <div class="content-select border-bottom">
                        <div class="form-check select-check">
                            <input class="form-check-input" type="checkbox" id="flexCheck1">
                            <label class="form-check-label" for="flexCheck1">选择全部</label>
                        </div>
                        <button type="button" class="btn btn-danger">
                            删除选中</button>
                    </div>

                    <!-- 标签栏 -->
                    <div class="content-label border-bottom bg-light">
                        <div class="control-select"></div>
                        <div class="control-image">头像</div>
                        <div class="control-name">姓名</div>
                        <div class="control-phone">电话号码</div>
                        <div class="control-email">邮箱</div>
                        <div class="control-btn">管理操作</div>
                    </div>

                    <!-- 用户主体 -->
                    <div class="content-main">
                        <div class="main border-bottom" v-for="(user, index) in users" :key="index">
                            <div class="control-select">
                                <input type="checkbox" id="checkboxNoLabel" value="" aria-label="..."
                                    class="form-check-input">
                            </div>
                            <div class="control-image">
                                <img class="rounded-circle main-image" :src="user.headUrl" />
                            </div>
                            <div class="control-name">
                                <p class="main-text">{{ user.username }}</p>
                            </div>
                            <div class="control-phone">
                                <p class="main-text">{{ user.phone }}</p>
                            </div>
                            <div class="control-email">
                                <p class="main-text">{{ user.email }}</p>
                            </div>
                            <div class="control-btn">
                                <button class="btn btn-danger" type="button">
                                    删除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 弹出框-添加用户 -->
        <pop-view ref="PopView" @Update="GetUser"></pop-view>

    </div>
</template>
<script src="../../assets/js/UserStore.js"></script>
<style scoped src="../../assets/css/UserStore.css"></style>