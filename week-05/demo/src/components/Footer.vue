<template>
  <footer>
    <div class="container-footer">
      <div class="footer-main">
        <div>
          <a href="#" data-site-nav-element="Logo">
            <img class="footer-main-logo" src="imgs/logo-red.svg" width="76" />
          </a>
          <div class="footer-main-txt">
            Dribbble is the world’s leading community for creatives to share,
            grow, and get hired.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterPage",
});
</script>
<style>
footer {
  background-color: #fafafb;
  padding: 0;
}

.container-footer {
  margin: 0 auto;
}

.footer-main {
  display: flex;
  padding: 72px 72px;
}

.footer-main-logo {
  width: 104px;
}

.footer-main-txt {
  max-width: 256px;
  margin: 20px 0;
}

@media (min-width: 768px) {
  .container-footer {
    max-width: 1680px;
  }
}
</style>
