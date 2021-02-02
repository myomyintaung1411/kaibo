<template>
  <div class="header-main">
    <div class="upper-header-main">
      <!-- upper header with text and input -->
      <div class="upper-header">
        <div class="up">
          <div class="up-text">
            <span class="back-url">备用网址</span>
            <span class="line"></span>
            <span class="agent-login"
              ><a href="http://hn2210.com" style="color: #f4d832"
                >代理登录</a
              ></span
            >
            <span class="line"></span>
            <span class="easy-remine"
              >易记域名:
              <a href="http://kb1234.com" style="color: #fff">kb1234.com</a>
            </span>
          </div>
          <div class="below-input">
            <input
              type="text"
              placeholder="账号"
              class="input"
              autocomplete="off"
              v-model="login.username"
            />
            <input
              type="password"
              placeholder="密码"
              class="input"
              autocomplete="off"
              v-model="login.password"
            />
            <button class="btn" style="width: 60px" @click="userLogin()">
              登录
            </button>
            <button class="btn" @click="goToTest()">免费试玩</button>
            <button class="btn-transparent" @click="openRegister()">
              注册
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- below header with logo -->
    <div class="below-header-main">
      <div class="below-header">
        <div style="height: 100px; width: 150px; position: relative">
          <img
            src="../assets/logo.png"
            alt=""
            style="
              position: absolute;
              top: -55%;
              left: -10%;
              width: auto;
              height: 210px;
            "
            draggable="false"
          />
        </div>

        <div class="nav">
          <div
            class="nav-text-main"
            :class="{ nav_border: active_tab == 1 }"
            @click="TabClick(1)"
          >
            <span class="nav-text-ch"> 首页 </span>
            <br />
            <span class="nav-text-en">HOME</span>
          </div>
          <div
            class="nav-text-main"
            :class="{ nav_border: active_tab == 2 }"
            @click="TabClick(2)"
          >
            <span class="nav-text-ch"> 真人 </span>
            <br />
            <span class="nav-text-en">LIVE CASINO</span>
          </div>
          <div
            class="nav-text-main"
            :class="{ nav_border: active_tab == 3 }"
            @click="TabClick(3)"
          >
            <span class="nav-text-ch"> 优惠活动 </span>
            <br />
            <span class="nav-text-en">PROMOTIONS</span>
          </div>
          <!-- <div
            class="nav-text-main"
            :class="{ nav_border: active_tab == 4 }"
            @click="TabClick(4)"
          >
            <span class="nav-text-ch"> 在线客服 </span>
            <br />
            <span class="nav-text-en">ONLINE SERVICE</span>
          </div> -->
          <div
            class="nav-text-main"
            :class="{ nav_border: active_tab == 5 }"
            @click="TabClick(5)"
          >
            <span class="nav-text-ch"> APP下载 </span>
            <br />
            <span class="nav-text-en">MOBILE</span>
          </div>
          <div
            class="nav-text-main"
            :class="{ nav_border: active_tab == 6 }"
            @click="TabClick(6)"
          >
            <span class="nav-text-ch"> 存取款 </span>
            <br />
            <span class="nav-text-en">DEPOSIT & WITHDRAWAL</span>
          </div>
        </div>
      </div>

      <!-- register -->
      <div class="wrapper" v-if="RegisterDialog">
        <img
          src="../assets/closesearch.png"
          alt=""
          @click="CloseDialog"
          class="close-img"
        />
        <div class="title">凯博娱乐</div>
        <form class="form" novalidate @submit.prevent="Register">
          <div class="field">
            <input
              type="text"
              required
              autocomplete="off"
              v-model="register.name"
            />
            <label>请输入账号</label>
          </div>

          <div class="field">
            <input
              type="password"
              required
              autocomplete="off"
              v-model="register.pass"
            />
            <label>请输入密码</label>
          </div>

          <div class="field">
            <input
              type="password"
              required
              autocomplete="off"
              v-model="register.checkpass"
            />
            <label>请确认密码</label>
          </div>

          <div class="field">
            <input
              type="number"
              required
              autocomplete="off"
              v-model="register.phone"
            />
            <label>请输入手机号</label>
          </div>

          <div class="field">
            <input type="submit" value="注册账号" />
            <!-- <button class="btn-regi">注册账号</button> -->
          </div>
        </form>
      </div>
      <!-- end register -->
    </div>
  </div>
</template>

<script>
import AES from "@/api/aes";
export default {
  data() {
    return {
      active_tab: 1,
      register: {
        name: "",
        pass: "",
        checkpass: "",
        phone: "",
      },
      login: {
        username: "",
        password: "",
      },
      RegisterDialog: false,
    };
  },
  methods: {
    TabClick(n) {
      if (n == 1) {
        this.active_tab = 1;
        this.$router.push("/home");
      }
      if (n == 2) {
        this.active_tab = 2;
        this.$router.push("/live");
      }
      if (n == 3) {
        this.active_tab = 3;
        this.$router.push("/promotion");
      }
      // if (n == 4) {
      //   this.active_tab = 4;
      //   this.$router.push("/online");
      // }
      if (n == 5) {
        this.active_tab = 5;
        this.$router.push("/mobile");
      }
      if (n == 6) {
        this.active_tab = 6;
        this.$router.push("/deposit");
      }
    },
    openRegister() {
      this.RegisterDialog = true;
    },
    CloseDialog() {
      this.RegisterDialog = false;
    },
    Register() {
      // console.log("enter register");
      var en = this.$Global.en;
      if (this.register.name == "") return this.$message.warning("请输入账号");
      if (this.register.pass == "") return this.$message.warning("请输入密码");
      if (this.register.checkpass == "")
        return this.$message.warning("请输入确认密码");
      if (this.register.phone == "")
        return this.$message.warning("请输入手机号");
      if (this.register.pass !== this.register.checkpass)
        return this.$message.warning("两次输入密码不一致");

      if (
        !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
          this.register.phone
        )
      ) {
        return this.$message.warning("手机号码格式不对");
      }

      if (
        !/\d/.test(this.register.pass) ||
        !/[a-zA-Z]/.test(this.register.pass)
      )
        return this.$message.warning("密码必须包含数字和英文字母");

      var agentName = this.$Global.optioner.Agentname;
      //console.log(agentName, "name of agent is777777777");
      let data = {
        name: this.register.name,
        pw: this.$md5(this.register.pass),
        phone: this.register.phone,
        agent: agentName,
      };
      // console.log(data, "sendStr");
      let endata = AES.encrypt(JSON.stringify(data), en);

      //var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.registerurl, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log(msg, "response msg of register is");
          if (msg.JsonData.result == "102") {
            return this.$message.warning("无此代理");
          }
          if (msg.JsonData.result == "103") {
            return this.$message.warning("已存在此帐号");
          }
          if (msg.JsonData.result == "104") {
            return this.$message.warning("注册失败");
          }
          if (msg.JsonData.result == "101") {
            this.register.name = "";
            this.register.pass = "";
            this.register.checkpass = "";
            this.register.phone = "";
            this.RegisterDialog = false;
            return this.$message.success("注册成功");
          }
        })
        .catch((e) => {
          // console.log(e);
          this.$message.error(e.toString());
        });
    },
    userLogin() {
      var en = this.$Global.en;
      if (this.$store.state.login == true)
        return this.$message.warning("您已登陆成功");
      if (this.login.username == "") return this.$message.warning("请输入账号");
      if (this.login.password == "") return this.$message.warning("请输入密码");

      let logindata = {
        name: this.login.username,
        pw: this.$md5(this.login.password),
      };
      // console.log(logindata,"sdfsdf");

      let endata = AES.encrypt(JSON.stringify(logindata), en);

      // console.log("login endata isssssssss", endata);

      //  var decryptdata = JSON.parse(AES.decrypt(endata, en));
      // console.log("decryptdata isssssssss", decryptdata, en);

      this.axios
        .post(this.$Global.loginurl, { data: endata })
        .then((res) => {
          var body = res.data;
          // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa",body)
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa",msg)
          if (msg.JsonData.code == 200) {
            this.$store.state.login = true;
            //here i am store user input name and pass to state
            this.$store.state.myAccount = this.login.username;
            this.$store.state.myPassword = this.login.password;
            //here i am storing user response information to global
            this.$Global.myLoginInfo.loginId = msg.JsonData.Id;
            this.$Global.myLoginInfo.loginBalance = msg.JsonData.balance;
            this.$Global.myLoginInfo.loginEnable = msg.JsonData.enable;
            this.$Global.myLoginInfo.loginName = msg.JsonData.username;
            // console.log(
            //   "account and password is -------->",
            //   this.$store.state.myPassword,
            //   this.$store.state.myAccount
            // );
            this.login.username = "";
            this.login.password = "";
            return this.$message.success("登录成功");
          } else {
            // console.log("error ocuured")
            return this.$message.error("登录失败");
          }
        })
        .catch((e) => {
          // console.log(e);
          this.$message.error(e.toString());
        });
    },
    goToTest() {
      window.open(`http://kb1234.com/?token=`);
    },
  },
};
</script>

<style  scoped>
.header-main {
  width: 100%;
}
.upper-header-main {
  background: #242527;
  height: 75px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  border-bottom: 2px solid gray;
}
.upper-header {
  width: 1100px !important;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.up {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.up-text {
  display: inline-flex;
  align-items: center;
  padding-top: 5px;
  justify-content: space-evenly;
  width: 400px;
}
.back-url {
  font-size: 18px;
  font-weight: 700;
  color: #ec0a3b;
}
.line {
  width: 2px;
  background: #be942a;
  /* transform: rotate(40deg); */
  height: 15px;
}
.agent-login {
  font-size: 18px;
  font-weight: 700;
  color: #f4d832;
}
.easy-remine {
  font-size: 18px;
  font-weight: 700;
  color: #fdfafa;
}
.below-input {
  display: flex;
  align-items: center;
  padding-top: 5px;
}
.input {
  border: 2px solid rgb(196, 185, 183);
  background: transparent;
  outline: none;
  width: 150px;
  height: auto;
  padding: 7px 10px;
  margin: 0px 10px;
  color: #f9f7f8;
}
::placeholder {
  color: #fff;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #fff;
}
.btn {
  width: 80px;
  border-radius: 2px;
  background: linear-gradient(to bottom, #7ac1fe, #b3d9ff, #7ac1fe);
  border: none;
  margin: 0px 8px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 5px 0px;
  border: 1px solid #cdcb4c;
}
.btn-transparent {
  width: 60px;
  color: #f2ce0a;
  background: transparent;
  border: 1px solid#f2ce0a;
  padding: 5px 0px;
  cursor: pointer;
  font-weight: bold;
}
.btn-transparent:focus {
  outline: none;
}

.below-header-main {
  background: #212121;
  height: 100px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  border-bottom: 2px solid #898989;
  position: relative;
}

.below-header {
  width: 1275px !important;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-start;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-text-main {
  padding-top: 20px;
  margin-bottom: 5px;
  height: 100%;
  color: #f6ecb9;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav_border {
  border-bottom: 2px solid #f2ce0a;
  font-size: 25px;
  color: rgb(231, 231, 154);
}
.nav-text-ch {
  font-weight: 800;
  font-size: 20px;
}
.nav-text-en {
  font-size: 12px;
  text-align: center;
  margin-top: -13px;
}

/* register */
.close-img {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 2%;
  top: 2%;
  cursor: pointer;
}

.wrapper {
  position: absolute;
  top: 100%;
  width: 380px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
.wrapper .title {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #fff;
  user-select: none;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(-135deg, #ddb811, #d0aa41);
}
.wrapper .form {
  padding: 10px 30px 50px 30px;
}
.wrapper .form .field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.wrapper .form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
.wrapper .form .field input:focus,
form .field input:valid {
  border-color: #4158d0;
}
.wrapper .form .field label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
.form .field input:focus ~ label,
.form .field input:valid ~ label {
  top: 0%;
  font-size: 16px;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}
.form .content {
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
}
.form .content .checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form .content input {
  width: 15px;
  height: 15px;
  background: red;
}
.form .content label {
  color: #262626;
  user-select: none;
  padding-left: 5px;
}
.form .content .pass-link {
  color: "";
}
.form .field input[type="submit"] {
  color: #fff;
  border: none;
  padding-left: 0;
  margin-top: 13px;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(-135deg, #ddb811, #d0aa41);
  transition: all 0.3s ease;
}
.form .field input[type="submit"]:active {
  transform: scale(0.95);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>