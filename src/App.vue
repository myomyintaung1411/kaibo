<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    // //  var url = window.location.href;
    // var url = "http://21019.hn232.com";
    // var s = url;
    // //  console.log("ss", s);
    // var a = s.split(".")[0];
    // // console.log("h is", a);
    // var userid = a.split("//")[1];
    // //  console.log(userid,"a isssssssssssssss")
    // this.GetAgentdata(userid);

    if (this.isMobile()) {
      this.$router.push("/m");
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style >
html {
  scroll-behavior: smooth;
}
/* body {
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* height: 100vh; */
  overflow-x: hidden !important;
  /* min-width: 1275px !important; */
  /* height: 100vh; */
  height: 100%;
  width: 100%;
}
</style>
