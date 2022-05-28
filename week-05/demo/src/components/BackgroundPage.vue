<template>
    <div style="background: #f9f8fd">
        <div class="container-large signed-out-masthead">
            <div class="text-content">
                <h1>Discover the world's top designers & creatives</h1>
                <p>
                    Dribbble is the leading destination to find & showcase creative work
                    and home to the world's best design professionals.
                </p>
                <a href="#" class="sign-up">Sign up</a>
            </div>
            <div class="shot-content">
                <picture>
                    <img class="signed-out-masthead-image" src="imgs/banner.webp" />
                </picture>
                <span class="user-credit">Learn more about how we're supporting Ukraine. Art by Merge
                    Development</span>
            </div>
        </div>
    </div>
</template>
<style>
.container-large {
    padding-left: 32px;
    padding-right: 32px;
    margin: 0 auto;
}


.signed-out-masthead {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 40px;
}


.signed-out-masthead .text-content {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    max-width: 624px;
    text-align: center;
    align-items: center;
    margin-top: 20px;
}


.signed-out-masthead .text-content h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
}

@media (min-width: 768px) {
    .signed-out-masthead {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 72px;
        padding-right: 72px;
        height: 480px;
    }

    .signed-out-masthead .text-content {
        text-align: left;
        align-items: flex-start;
        margin-top: 0;
    }

    .signed-out-masthead .text-content h1 {
        font-size: 48px;
        line-height: 56px;
    }
}


@media (min-width: 1600px) {
    .signed-out-masthead .text-content {
        margin-left: 100px;
    }
}

@media (min-width: 767px) {
    .container-large {
        max-width: 1679px;
    }
}


.signed-out-masthead .text-content p {
    margin: 16px 0;
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

.signed-out-masthead .shot-content {
    display: flex;
    flex-direction: column;
    color: #9e9ea7;
    font-size: 13px;
}

.signed-out-masthead .shot-content .user-credit {
    margin-top: 20px;
}

.signed-out-masthead-image {
    width: 100%;
    height: 300px;

}

@media (min-width: 1200px) {
    .signed-out-masthead-image {
        width: 510px;
        height: 360px;
    }
}

@media screen and (min-width: 768px) {
    .signed-out-masthead-image {
        width: 400px;
        height: 360px;
    }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BackgroundPage"
});
</script>