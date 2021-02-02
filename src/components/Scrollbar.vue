<template>
  <div>
    <div class="line-div">
      <div class="sub-line">
        <!-- left btn -->
        <div class="btn-div">
          <img
            src="../assets/home/sound.png"
            alt=""
            style="height: 25px"
            draggable="false"
          />
          <p>最新信息:</p>
        </div>
        <marquee
          onmouseover="this.stop();"
          onmouseout="this.start();"
          style="
            cursor: pointer;
            color: #212121;
            font-size: 16px;
            font-weight: 800;
          "
          >{{ this.scrolldata }}</marquee
        >
      </div>
    </div>
  </div>
</template>

<script>
import AES from "../api/aes";

export default {
  data() {
    return {
      scrolldata: "",
      id: this.$Global.myLoginInfo.loginId,
    };
  },

  methods: {
    // here i am sending userlogin id to get scroll data
    GetScrollData(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      // var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.scrollData, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          //  console.log(msg,"scroll")
          if (msg.JsonData.code == 200) {
            this.scrolldata = msg.JsonData.msg;
          } else {
            this.scrolldata =
              "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！";
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.GetScrollData(this.id);
  },
};
</script>

<style  scoped>
.line-div {
  height: 30px;
  width: 100%;
  background: rgba(168, 168, 172, 0.815);
  /* background: linear-gradient(to bottom, #e7f1fd, #aeccee); */
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.sub-line {
  width: 1200px !important;
  align-items: center;
  height: 100% !important;
  display: flex;
  position: relative;
  /* margin-top: 5px; */
}
.btn-div {
  width: 160px;
  /* background: linear-gradient(to bottom, #facd89, #e2e686); */
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 25px; */
  height: 30px;
}
.btn-div p {
  text-align: center;
  font-weight: 900;
  letter-spacing: 3px;
  font-size: 20px;
  color: #efe956;
  padding-left: 5px;
}
</style>