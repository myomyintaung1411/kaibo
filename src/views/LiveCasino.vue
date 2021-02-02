<template>
  <div class="live-casino">
    <div class="banner">
      <!-- sub-image -->
      <div class="sub-img">
        <img
          src="../assets/livecasino/c.png"
          alt=""
          style="height: 150px"
          draggable="false"
        />
      </div>
      <!-- btn -->
      <div class="btn">
        <img
          src="../assets/livecasino/btn.png"
          alt=""
          style="width: 120px; height: 50px; cursor: pointer"
          @click="goToPlayGame"
          draggable="false"
        />
      </div>
      <CustomerService />
    </div>
    <!--  -->
    <div class="main-service">
      <div class="sub">
        <div class="service-girl-section">
          <!-- upper img div -->
          <div
            style="
              width: 100%;
              height: 150px;
              margin-top: 15px;
              display: flex;
              justify-content: space-between;
            "
          >
            <!-- <img
              src="../assets/livecasino/gamepic.png"
              alt=""
              width="auto;"
              height="120px"
               draggable="false"
            /> -->
            <img
              src="../assets/livecasino/1.png"
              alt=""
              height="120px"
              draggable="false"
              @click="goToPlayGame"
            />
            <img
              src="../assets/livecasino/2.png"
              alt=""
              height="120px"
              draggable="false"
              @click="goToPlayGame"
            />
            <img
              src="../assets/livecasino/3.png"
              alt=""
              height="120px"
              draggable="false"
              @click="goToPlayGame"
            />
            <img
              src="../assets/livecasino/4.png"
              alt=""
              height="120px"
              draggable="false"
              @click="goToPlayGame"
            />
            <img
              src="../assets/livecasino/5.png"
              alt=""
              height="120px"
              draggable="false"
              @click="goToPlayGame"
            />
          </div>
          <!-- below two img div  -->
          <div style="display: flex; justify-content: space-around">
            <div style="">
              <img
                src="../assets/livecasino/servicegirl1.jpg"
                alt=""
                style="width: 400px; height: 300px"
                draggable="false"
              />
            </div>

            <div>
              <img
                src="../assets/livecasino/servicegirl2.jpg"
                alt=""
                style="width: 400px; height: 300px"
                draggable="false"
              />
            </div>
          </div>
        </div>
        <!-- right img -->
        <div class="right-girl-div">
          <img
            src="../assets/livecasino/sexygirl.png"
            alt=""
            style="height: 490px"
            draggable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerService from "../components/CustomerService";
import AES from "../api/aes";
export default {
  components: {
    CustomerService,
  },
  methods: {
    goToPlayGame() {
      if (this.$store.state.login == false) {
        return this.$message.warning("请先登录");
      } else {
        var gameEn = this.$Global.gameEn;
        let data = {
          name: this.$store.state.myAccount,
          password: this.$store.state.myPassword,
        };
        var endata = AES.gameEncrypt(JSON.stringify(data), gameEn);
        window.open(`http://kb1234.com/?token=${endata}`);
      }
    },
  },
};
</script>

<style  scoped>
.live-casino {
  width: 100%;
}
.banner {
  position: relative;
  height: 450px;
  width: 100%;
  background: url(../assets/livecasino/banner.jpg) no-repeat;
  background-size: 100% 100%;
}
.sub-img {
  position: absolute;
  width: 600px;
  height: 200px;
  /* background: red; */
  bottom: 0%;
  right: 15%;
}
.btn {
  position: absolute;
  width: 120px;
  height: 50px;
  /* background: red; */
  bottom: 8%;
  left: 48%;
}

.main-service {
  height: 490px;
  width: 100%;
  background: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub {
  width: 1275px !important;
  /* background: red; */
  height: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
}
.service-girl-section {
  height: 100%;
  width: 900px;
  /* background: blue; */
  display: flex;
  flex-direction: column;
}
.right-girl-div {
  width: 380px;
  height: 100%;
  /* background: white; */
}
</style>
