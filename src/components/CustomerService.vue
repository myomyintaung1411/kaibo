<template>
  <div class="customer-service">
    <img
      src="../assets/home/service.png"
      alt=""
      @click="Service()"
      draggable="false"
      class="img"
    />
    <!-- <div class="text">sdfsdfsdfsdafsfsdfsfsadfsadfsdafsdfsdf</div>
    <div class="text">sdfsdfsdfsdfsdfsdfsdfsdf</div> -->
    <div style="" class="text" v-if="this.qq">
      <!-- {{ this.$Global.optioner.QQ }} -->
      QQ: <br />
      {{ this.qq }}
    </div>
    <div style="" class="text" v-if="this.wx">
      <!-- {{ this.$Global.optioner.WX }} -->
      WX: <br />
      {{ this.wx }}
    </div>
  </div>
</template>

<script>
import { Base64 } from "js-base64";
export default {
  data() {
    return {
      qq: "",
      wx: "",
    };
  },
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
  // created () {
  //   this.qq = this.$Global.optioner.QQ
  //   console.log(this.qq);
  //   this.wx = this.$Global.optioner.WX
  //   console.log(this.wx);
  // },

  created() {
    this.qq = this.$Global.optioner.QQ;
    // console.log(this.qq);
    this.wx = this.$Global.optioner.WX;
    // console.log(this.wx);
  },
};
</script>

<style  lang="scss" scoped>
.customer-service {
  position: fixed;
  height: 200px;
  /* width: 100px; */
  /* height: 200px; */
  //  background: red;
  right: 1%;
  top: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
.img {
  height: auto;
  width: auto;
  cursor: pointer;
}
// .img:hover {
//   .text {
//     display: block;
//   }
// }
.text {
  width: 100px;
  height: auto;
  float: left;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  background: #000;
  text-align: center;
  color: #fff;
  font-weight: bold;
  padding: 5px 0px;
  border: 3px solid #4e8df2;
  border-radius: 15px;
  margin: 4px 0px;
  // display: flex;
}
</style>