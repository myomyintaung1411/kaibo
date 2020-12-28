<template>
  <div class="mobile">
    <div class="mobile-banner">
      <CustomerService />
    </div>
    <div class="main-mobile">
      <div class="sub-div">
        <!-- left qr section -->
        <div class="left-qr">
          <!-- <div
            style="
              height: 300px;
              width: 300px;
              background: white;
              margin-top: 30px;
              position:relative;
            "
          > -->
          <div style="margin-top: 30px; height: 300px; background: red">
            <img
              src="../assets/mobile/qr2.jpg"
              alt=""
              style="width: 300px; height: 300px"
              draggable="false"
              v-if="AndroidImg"
            />
            <img
              src="../assets/mobile/qr2.jpg"
              alt=""
              style="width: 300px; height: 300px"
              draggable="false"
              v-if="IosImg"
            />
          </div>

          <!-- </div> -->
          <div style="margin-top: 20px">
            <img
              src="../assets/mobile/abtn.png"
              alt=""
              style="width: 250px; cursor: pointer"
              @click="showAndroid()"
            />
          </div>
          <div style="margin-top: 20px">
            <img
              src="../assets/mobile/ibtn.png"
              alt=""
              style="width: 250px; cursor: pointer"
              @click="showIos()"
            />
          </div>
        </div>
        <!-- rigth -->
        <div class="right-section">
          <div class="inner-div">
            <div style="" class="text-img">
              <span style="" class="pht-title"> 操作步骤 </span>
              <span class="photo-des"> 第一步：未授权 </span>
              <span class="photo-des"> 第二步：设置 > 通用 </span>
              <span class="photo-des"> 第三步：通用 > 设备管理 </span>
              <span class="photo-des"> 第四步：设备管理 > 选择应用 </span>
              <span class="photo-des"> 第五步：设备管理 > 授权确认 </span>
              <span class="photo-des"> 第六步：设备管理 > 授权完毕 </span>
            </div>
            <div class="scrollimgdiv">
              <div
                class="carousal-img"
                v-for="(item, index) in banners"
                :key="index"
              >
                <transition name="fade">
                  <img
                    v-if="currentSlide == index"
                    style="height: 500px; width: 300px"
                    :src="item.image"
                    draggable="false"
                  />
                </transition>
              </div>
              <!--  -->
              <div style="height: 460px; width: 100%; position: relative">
                <div class="dot-main">
                  <div
                    class="dot"
                    v-for="(item, index) in banners"
                    :key="index"
                    :class="currentSlide == index ? 'gray' : 'white'"
                    @click="makeActive(index)"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerService from "../components/CustomerService";
export default {
  name: "Mobile",
  components: {
    CustomerService,
  },
  data() {
    return {
      AndroidImg: true,
      IosImg: false,
      currentSlide: 0,
      banners: [
        {
          image: require("../assets/mobile/6.jpg"),
        },
        {
          image: require("../assets/mobile/5.jpg"),
        },
        {
          image: require("../assets/mobile/4.jpg"),
        },
        {
          image: require("../assets/mobile/3.jpg"),
        },
        {
          image: require("../assets/mobile/2.jpg"),
        },
        {
          image: require("../assets/mobile/1.png"),
        },
      ],
      interval: "",
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
    showAndroid() {
      (this.AndroidImg = true), (this.IosImg = false);
    },
    showIos() {
      this.AndroidImg = false;
      this.IosImg = true;
    },
  },
  mounted() {
    // this.interval = setInterval(() => {
    //   this.currentSlide = this.currentSlide === 4 ? 0 : this.currentSlide + 1;
    // }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style  scoped>
.mobile {
  width: 100%;
  background: #242527;
}
.mobile-banner {
  position: relative;
  height: 450px;
  width: 100%;
  background: url(../assets/mobile/mb.jpg) no-repeat;
  background-size: 100% 100%;
}
.main-mobile {
  height: 600px;
  width: 100%;
  background: #242527;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-div {
  width: 1275px !important;
  background: linear-gradient(to bottom, #e7f1fd, #aeccee);
  height: 100%;
  display: flex;
  /* margin-top: 20px; */
}
.left-qr {
  width: 350px;
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #242527;
  /* flex-s; */
}
.right-section {
  height: 100%;
  width: 930px;
  /* background: #cee0f6; */
  background: #242527;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.inner-div {
  height: 500px;
  width: 100%;
  /* background-color:linear-gradient(to bottom,#E7f1fd,#aeccee); */
  /* background: red; */
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.text-img {
  width: 380px;
  /* background: #cee0f6; */
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: left;
  background: linear-gradient(to bottom, #e7f1fd, #aeccee);
}
.pht-title {
  font-size: 30px;
  font-weight: 900;
  margin-top: 10px;
  text-align: left;
  margin-left: 10px;
  border-bottom: 2px double black;
  width: 130px;
}

.photo-des {
  font-size: 25px;
  font-weight: 600;
  margin-top: 10px;
  text-align: left;
  margin-left: 10px;
}
.scrollimgdiv {
  display: flex;
  position: relative;
  align-items: center;
  width: 650px;
  background: linear-gradient(to bottom, #e7f1fd, #aeccee);
  height: 100%;
  justify-content: center;

  /* background: red; */
  /* margin-left: 80px; */
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.carousal-img {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  /* background: red; */
}
.dot-main {
  position: absolute;
  bottom: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  left: -70%;
  counter-reset: number;
}
.dot {
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin: 5px;
}
.dot::before {
  counter-increment: number;
  content: counter(number);
  color: white;
  padding-left: 3px;
}

.gray {
  background: brown;
}
.white {
  background: gray;
}
</style>