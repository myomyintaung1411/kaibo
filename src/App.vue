<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style >
 html {
  scroll-behavior: smooth;
}
body {
  /* background: #212121; */
  overflow-x: hidden !important;
  height: 100vh;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* height: 100vh; */
  overflow-x: hidden !important;
  min-width: 1275px !important;
   height: 100vh;
}
</style>
