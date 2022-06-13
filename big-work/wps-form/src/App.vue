<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/test">test</router-link>
  </nav>
  <div style="padding-top:100px">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f2f5;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
}

nav {
  position: fixed;
  width: 100%;
  padding: 30px;
  background-color: white;


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
