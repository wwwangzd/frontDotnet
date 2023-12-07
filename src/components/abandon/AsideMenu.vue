<template>
    <div class="side-bar" :class="{ active: isActive }">
        <div class="side-container">

            <div class="user">
                <img src="" alt="">
                <div style="text-align:center;">
                    <h2 style="margin:0;">管理员</h2>
                </div>
            </div>

            <ul style="margin:0; padding:0;">
                <li v-for="(list, index) in lists" :key="index">
                    <router-link :to="list.to" class="li-link" :class="showId == index ? 'show' : ''">
                        <span class="text">{{ list.name }}</span>
                    </router-link>
                </li>
            </ul>

        </div>
    </div>
</template>
<script src="../../assets/js/AsideMenu.js"></script>
<style scoped src="../../assets/css/AsideMenu.css"></style>
  