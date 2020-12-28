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
    </div>
    <div class="about">
      <div class="about-img">
        <img src="../assets/home/description.jpg" alt="" style="width: auto" 
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
export default {
  name: "Home",
  components: {
    Banner,
    Scrollbar,
  },
  methods: {
    GetAgentdata(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      // console.log(endata,"data of endata")
      var decryptdata = JSON.parse(AES.decrypt(endata, en));
      // console.log(decryptdata,"data of decryptdata")
      this.axios
        .post(this.$Global.agentUrl, decryptdata)
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log(msg, "response msg of created");
          if (msg.JsonData.code == 200) {
            //saving first time creted agentid and name to use in register section
            this.$Global.optioner.Agentid = msg.JsonData.Id;
            this.$Global.optioner.Agentname = msg.JsonData.name;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    created() {
      var url = window.location.href;
      var s = url;
      // console.log("ss", s);
      var a = s.split(".")[0];
      // console.log("h is", a);
      var userid = a.split("//")[1];
      // console.log(userid,"a isssssssssssssss")
      this.GetAgentdata(userid);
    },
  },
};
</script>

<style  scoped>
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
</style>