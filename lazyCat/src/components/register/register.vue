<template>
  <div class="register_container">
    <div class="register_head">
      <a href="#" @click="back" class="head_logo1"></a>
      <span class="head_title">注册账户</span>
      <div class="hr1"></div>
    </div>
    <!--表单-->
    <div class="content_form">
      <form action="#">
        <div class="form_d1">
          <label for="username"></label>
          <input type="text" name="username" id="username" placeholder="手机号/邮箱">
        </div>
        <div class="form_d2">
          <label for="code"></label>
          <input type="text" id="code" name="code" placeholder="请输入要验证码">
          <img src="./code.png" alt="">
        </div>
        <div class="form_d3">
          <label for="message"></label>
          <input type="text" id="message" name="message" placeholder="短信验证码">
          <img src="./code2.png" alt="">
        </div>
        <div class="form_d4">
          <label for="password"></label>
          <input type="password" id="password" name="password" placeholder="密码">
        </div>
        <div class="form_p1">
          创建账户你已经同意E宠商城的条款!!!!
        </div>
        <div class="form_d5">
          <input type="button" id="register_do" value="注册">
        </div>
      </form>
    </div>

  </div>
</template>

<script>
    export default {
      methods: {
        back() {
          this.$router.back()
        }
      }
    }
</script>
<style lang="scss">
  @import "../../common/styles/reset";
  @import "../../common/styles/mixin";
  $rem:750/16rem;
  .register_container {
    width: 100%;
    height: 1334/$rem;
    background-color:#F3F5F8;
    position: relative;
    .register_head {
      position: relative;
      width: 100%;
      height: 100/$rem;
      background: #FFFFFF;
      .login_head_title{
        position: absolute;
        right: 30/$rem;
        top: 30/$rem;
        a{
          color:#55C1DD ;
          font-size:29/$rem;
        }
      }
      .head_logo1 {
        width: 60/$rem;
        height: 44/$rem;
        position: absolute;
        left: 30/$rem;
        top: 28/$rem;
        background-image: url("./back.png");
        background-size: 50/$rem 50/$rem;
        background-repeat: no-repeat;
      }
      .head_title {
        position: absolute;
        left: 344/$rem;
        top: 34/$rem;
        font-weight: 600;
        font-size: 28/$rem;
      }
      .hr1 {
        height: 1px;
        width: 100%;
        background: rgba(223, 223, 223, 0.5);
        position: absolute;
        bottom: 0;
      }
    }
    .content_form{
      width: 100%;
      margin-top: 30/$rem;
      .form_d1{
        width: 100%;
        height: 100/$rem ;
        #username{
          padding-left: 20/$rem;
          width: 100%;
          height: 100%;
        }
      }
      .form_d2{
        margin-top: 2px;
        width: 100%;
        height: 100/$rem ;
        background: #FFFFFF;
        position: relative;
        #code{
          padding-left: 20/$rem;
          width: 542/$rem;
          height: 100%;
        }
        img{
          position: absolute;
          right: 24/$rem;
          top: 0;
          bottom: 0;
          margin:auto;
          width: 180/$rem;
        }
      }
      .form_d3{
        margin-top: 2px;
        width: 100%;
        height: 100/$rem;
        background: #FFFFFF;
        position: relative;
        #message{
          padding-left: 20/$rem;
          width: 542/$rem;
          height: 100%;
        }
        img{
          position: absolute;
          right: 24/$rem;
          top: 0;
          bottom: 0;
          margin:auto;
          width: 180/$rem;
        }
      }
      .form_d4{
        margin-top: 2px;
        width: 100%;
        height: 100/$rem  ;
        #password{
          padding-left: 20/$rem;
          width: 100%;
          height: 100%;
        }
      }
      .form_p1{
        margin-left: 140/$rem;
        margin-top: 30/$rem;
      }
      .Login_form_p1{
        margin-left: 30/$rem;
        margin-top: 30/$rem;
        color:#55C1DD ;
      }
      .form_d5{
        width: 100%;
        height: 90/$rem;
        margin-top: 31/$rem;
        #register_do{
          width: 100%;
          height: 100%;
          color: #FFFFFF;
          font-size: 48/$rem;
          background: #E1E9F0;
        }
      }
    }
    .other{
      width: 100%;
      margin-top: 70/$rem;
      img{
        width: 100%;
      }
    }
    .ohter_login{
      width: 100%;
      height: 102/$rem;
      a{
        display: inline-block;
        img{
          width: 101/$rem;
        }
      }
      a:nth-of-type(1){
        margin-top: 50/$rem;
        margin-left: 230/$rem;
      }
      a:nth-of-type(2){
        margin-top: 50/$rem;
        margin-left: 90/$rem;
      }
    }
  }
</style>
