<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/input">input</router-link>
    |
    <router-link to="/singleSelect">singleSelect</router-link>
    |
    <router-link to="/multiSelect">multiSelect</router-link>
    |
    <router-link to="/pullSelect">pullSelect</router-link>
    |
    <router-link to="/date">date</router-link>
    |
    <router-link to="/time">time</router-link>
    |
    <router-link to="/score">score</router-link>
    |
    <router-link to="/test">test</router-link>
  </nav>
  <router-view/>
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
  padding: 30px;
  background: white;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
