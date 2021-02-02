<template>
  <div class="footer">
    <div class="sub-footer">
      <img
        src="../assets/home/footer.png"
        alt=""
        width="90%"
        height="40px"
        style="padding-right: 10px; cursor: pointer"
        draggable="false"
      />
      <!-- <div style="display:flex;margin-top:10px;cursor:pointer">
          <img src="../assets/home/fotter2.png" alt="" width="90%" height="20px;" />
         <div style="margin-left:10px;margin-top:-10px;">
              <img src="../assets/home/customer.png" alt="" style="width:200px;">
         </div>
      </div> -->

      <div class="footer-des">
        <span class="footer-text">关于我们</span>
        <span class="line"></span>
        <span class="footer-text">如何存款</span>
        <span class="line"></span>
        <span class="footer-text">如何取款</span>
        <span class="line"></span>
        <span class="footer-text">常见问题</span>
        <span class="line"></span>
        <span class="footer-text">隐私声明</span>
      </div>
      <div class="footer-center">
        <p>COPYRIGHT © 2020 凯博娱乐. All RIGHTS RESERVED.</p>
      </div>
    </div>
    <!-- <footer>
     <div class="sub-footer">

     </div>
    </footer> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 150px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  background: #242527;
  position: relative;
  /* background: red; */
}
.sub-footer {
  width: 1100px !important;
  align-items: center;
  height: 100% !important;
  margin: 0 auto;
  margin-top: 15px;
  /* background: red; */
}
footer {
  height: 40px;
  line-height: 40px;
  bottom: 0;
  width: 100%;
  text-align: center;
  /* background: red; */
  color: #fff;
  font-family: Arial;
  font-size: 14px;
  letter-spacing: 1px;
}
.footer-des {
  /* background: white; */
  width: 900px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100px; */
}
.footer-text {
  color: #f5f7cf;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
}
.line {
  width: 2px;
  background: #be942a;
  height: 24px;
  margin: 0 20px;
}
.footer-center {
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-weight: bold;
  color: #f5f7cf;
  cursor: pointer;
  user-select: none;
}
</style>