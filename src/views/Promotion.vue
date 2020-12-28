<template>
  <div class="promotion">
    <div class="promo-banner">
       <CustomerService/>
    </div>
    <div class="main-promo">
      <div class="sub-div">
        <div class="left-img-div">
          <img src="../assets/promotion/gg.png" alt="" style="height: 500px"  draggable="false" />
        </div>
        <div class="six-img-div">
          <div class="upper-img">
            <img
              src="../assets/promotion/66.jpg"
              alt=""
             class="img"
              draggable="false"
            />
            <img
              src="../assets/promotion/55.jpg"
              alt=""
             class="img"
              draggable="false"
            />
            <img
              src="../assets/promotion/44.jpg"
              alt=""
             class="img"
              draggable="false"
            />
          </div>
          <div class="below-img">
            <img
              src="../assets/promotion/11.jpg"
              alt=""
             class="img"
              draggable="false"
            />
            <img
              src="../assets/promotion/22.jpg"
              alt=""
             class="img"
              draggable="false"
            />
            <img
              src="../assets/promotion/33.jpg"
              alt=""
             class="img"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerService from '../components/CustomerService'
export default {
   components: {
    CustomerService,
  },
};
</script>

<style  scoped>
.promotion {
  width: 100%;
  background: #242527;

}
.promo-banner {
  position: relative;
  height: 450px;
  width: 100%;
  background: url(../assets/promotion/bb.jpg) no-repeat;
  background-size: 100% 100%;
}
.main-promo {
  height: 600px;
  width: 100%;
  background: #242527;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub-div {
  width: 1275px !important;
  background: #242527;
  height: 100%;
  display: flex;
}
.left-img-div {
  width: 250px;
  height: 100%;
   background: #242527;
  display: flex;
  justify-content: center;
  align-items: center;
}
.six-img-div {
  width: 1030px;
  height: 100%;
  /* background: white; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}
.upper-img {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin-top:50px;
}
.below-img {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin-top:2px;
}
.img{
  height: 200px;
  width: 300px;
}
</style>