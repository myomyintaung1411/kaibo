<template>
  <div class="home">
    <!-- banner carousal -->
    <Banner></Banner>
    <Scrollbar></Scrollbar>
    <div class="six-div">
      <img
        src="../assets/home/sixcircle.jpg"
        alt=""
        style="height: 260px; width: 100%"
        draggable="false"
      />
      <!--  -->
      <div class="customer-service">
        <img
          src="../assets/home/service.png"
          alt=""
          @click="Service()"
          draggable="false"
          class="img"
        />

        <div class="qr_code">
          <img src="../assets/qrcode.png" alt="" height="200px" width="100%" />

          <div class="text">QQ: {{ qq }}</div>

          <div class="text">WX: {{ wx }}</div>
        </div>
      </div>
      <!--  -->
      <!-- <CustomerService></CustomerService> -->
    </div>
    <div class="about">
      <div class="about-img">
        <img
          src="../assets/home/description.jpg"
          alt=""
          style="width: auto"
          draggable="false"
        />
      </div>
    </div>
    <!-- card -->
    <div class="card">
      <div class="card-img">
        <img
          src="../assets/home/card.png"
          alt=""
          style="width: auto; height: 350px"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AES from "../api/aes";
import Banner from "../components/Banner";
import Scrollbar from "../components/Scrollbar";
// import CustomerService from "../components/CustomerService";
import { Base64 } from "js-base64";
export default {
  name: "Home",
  components: {
    Banner,
    Scrollbar,
  },
  data() {
    return {
      qq: "",
      wx: "",
    };
  },
  methods: {
    GetAgentdata(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      // console.log(endata,"data of endata")
      //var decryptdata = JSON.parse(AES.decrypt(endata, en));
      // console.log(decryptdata,"data of decryptdata")
      this.axios
        .post(this.$Global.agentUrl, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log(msg, "response msg of created");
          if (msg.JsonData.code == 200) {
            //saving first time creted agentid and name to use in register section
            this.qq = msg.JsonData.QQ;
            this.wx = msg.JsonData.WXH;
            this.$Global.optioner.QQ = msg.JsonData.QQ;
            this.$Global.optioner.WX = msg.JsonData.WXH;
            this.$Global.optioner.Agentid = msg.JsonData.Id;
            this.$Global.optioner.Agentname = msg.JsonData.name;

            // console.log(this.$Global.optioner.Agentname);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
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
  created() {
    var url = window.location.href;
    //var url = "http://21019.hn232.com";
    var s = url;
    //  console.log("ss", s);
    var a = s.split(".")[0];
    // console.log("h is", a);
    var userid = a.split("//")[1];
    //  console.log(userid,"a isssssssssssssss")
    this.GetAgentdata(userid);
  },
};
</script>

<style  lang="scss" scoped>
.home {
  width: 100%;
}
.six-div {
  height: 260px;
  background: #1c1c1e;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
}

.about {
  height: 225px;
  background: #242527;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.about-img {
  width: 1100px !important;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  padding-bottom: 10px;
}
.card {
  height: 480px;
  background: #212121;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  /* border-top: 1px solid rgb(80, 70, 70); */
}
.card-img {
  width: 1275px !important;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: red; */
}

//@at-root

.customer-service {
  position: fixed;
  top: 300px;
  right: 20px;
  display: block;
  cursor: pointer;
}
.customer-service:hover {
  .qr_code {
    display: flex;
    flex-direction: column;
  }
}
.qr_code {
  position: fixed;
  height: auto;
  width: 200px;
  background: #fff;
  right: 140px;
  top: 300px;
  display: none;
}
.img {
  height: auto;
  width: auto;
  // cursor: pointer;
}

.text {
  // width: 100px;
  width: auto;
  height: auto;
  float: left;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  text-align: left;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  margin: 4px 0px;
}
</style>