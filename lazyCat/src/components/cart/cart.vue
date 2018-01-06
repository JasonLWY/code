<template>
  <div class="cart_container">
    <div class="cart_header">
      <!--在vue不用 a 标签  直接路由回调 this.$router.back 既可以-->
      <a href="#" class="back_img" @click="back"></a>
      <span>购物车</span>
      <div class="header_hr"></div>
    </div>
    <!--没有登陆时候-->
    <div class="cart_content">
      <span class="not_login_image"></span>
      <br>
      <span class="text"> 喵喵， 还没有登录哦～</span>
      <br>
      <router-link class="login_btn" to="/login">立即登陆</router-link>
    </div>
  </div>
</template>

<script>
    export default {
      methods:{
        back() {
          this.$router.back();
        }
      }
    }
</script>
<style lang="scss">
  @import "../../common/styles/reset";
  @import "../../common/styles/mixin";
  $rem:750/16rem;
  .cart_container{
    width: 100%;
    background: #F3F5F8;
    .cart_header{
      background: #FFFFFF;
      text-align: center;
      line-height:100/$rem;
      position: relative;
      width: 100%;
      height: 100/$rem;
      .back_img{
        display: inline-block;
        position: absolute;
        top: 30/$rem;
        left: 23/$rem;
        width: 40/$rem;
        height: 45/$rem;
        background-image: url("./lc_public_back_orange@3x.png");
        background-repeat: no-repeat;
        background-size: 41/$rem 41/$rem;
      }
      .header_hr{
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        background: #E8E8E8;
      }
      span{
        color: #000;
        font-size: 34/$rem;
        font-weight: 500;
      }
    }
    .cart_content{
      height:1227/$rem;
      width: 100%;
      text-align: center;
      .not_login_image{
        margin-top: 345/$rem;
        display: inline-block;
        background-color: #F3F5F8;
        width: 300/$rem;
        height: 300/$rem;
        background:url("./no_cart.png");
        background-size: cover;
      }
      .text{
        display: inline-block;
        margin-top: 20/$rem;
        color: #424242;
        font-family: '微软雅黑', sans-serif;
        font-size: 28/$rem;
      }
      .login_btn{
        display: inline-block;
        border: 1px solid #55C1DD;
        height: 56/$rem;
        width: 200/$rem;
        margin-top: 20/$rem;
        text-align: center;
        line-height: 56/$rem;
        font-size: 28/$rem;
        color: #55C1DD;
      }
    }
  }
</style>
