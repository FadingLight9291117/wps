<template>
    <div class="nav-head">
        <div class="nav-container">
            <nav class="nav-nav">
                <div data-site-nav-category="Top Nav">
                    <a href="#" data-site-nav-element="Logo">
                        <img src="imgs/logo-red.svg" width="76" />
                    </a>
                </div>
                <ul class="nav-nav-ul">
                    <li><a href="#">Inspiration</a></li>
                    <li><a href="#">Find Work</a></li>
                    <li><a href="#">Learn Design</a></li>
                    <li><a href="#">Go Pro</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Hire Designers</a></li>
                </ul>
            </nav>
            <ul class="nav-actions">
                <li class="sign-in"><a href="#">Sign in</a></li>
                <li><a href="#" class="sign-up">Sign up</a></li>
            </ul>
        </div>
    </div>
</template>
<style>
.nav-container {
    display: flex;
    height: 80px;
    margin: 0 24px;
    justify-content: space-between;
}

.nav-nav {
    display: flex;
    align-items: center;
}

.nav-nav-ul {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
}

.nav-nav-ul li {
    display: flex;
    padding: 30px 16px;
}


.nav-nav-ul a {
    color: #9e9ea7;
    font-size: 14px;
}


.nav-actions {
    display: flex;
    align-items: center;
    padding: 0;
}

.nav-actions li {
    display: flex;
    padding: 20px 0;
    margin: 0 10px;
}

.sign-in a {
    color: #6e6d7a;
}

nav a:hover {
    color: #ea4c89;
}


.sign-up {
    width: 52px;
    background-color: #ea4c89;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 10px 16px;
    border-radius: 8px;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: "NavigatorComponent",
})

</script>