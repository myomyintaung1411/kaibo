<template>
  <div class="customer-service">
    <img
      src="../assets/home/service.png"
      alt=""
      height="70px;"
      style="cursor: pointer"
      @click="Service()"
       draggable="false"
    />
  </div>
</template>

<script>
import { Base64 } from "js-base64";
export default {
  methods: {
    randomString(len, charSet) {
      charSet =
        charSet ||
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/";
      var randomString = "";
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    },
    doEncrypt() {
      let data = {
        acc: this.$store.state.myAccount,
        pwd: this.$md5(this.$store.state.myPassword),
        agent: 5, // 1.hn 2.wl 3.hngs 4.ws 5.kb
      };
      // let data ={
      //   acc:"admin",
      //   pwd:this.$md5("111111")
      // }
      let data1 = Base64.encode(JSON.stringify(data));
      let data2 = data1.substring(0, 8);
      let data3 = data1.substring(8);
      let add8 = data2 + this.randomString(8);
      let token = this.randomString(9) + add8 + data3;
      // console.log(data1, data2, data3, add8, token)
      return token;
    },
    //onliine service pic click and go to customer service
    Service() {
      if (this.$store.state.login == false) {
        return this.$message.warning("请先登录");
      } else {
        let token = this.doEncrypt();
        window.open(`http://kefu.hn885.com?token=${token}`);
      }
    },
  },
};
</script>

<style  scoped>
.customer-service {
  position: fixed;
  width: 100px;
  height: 100px;
  /* background: red; */
  right: 1%;
  top: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>