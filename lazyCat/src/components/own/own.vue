<template>
  <div class="own_container">
    <div class="own_head">
      <a href="index.html" class="head_logo1"></a>
      <span class="head_title">我的</span>
      <a href="#" class="head_logo2"></a>
      <div class="hr1"></div>
    </div>
    <div class="login_state">
      <a href="javascript:;"><img src="./logo1122.png" alt=""></a>
      <span>未登录</span>
      <router-link to="/login"><img src="./more.png" alt=""></router-link>
    </div>
    <div class="message">
      <div class="message_1 f_l">
        <span>优惠卷</span>
      </div>
      <div class="nothing "></div>
      <div class="message_2 f_r">
        <span>我的点评</span>
      </div>
    </div>
    <div class="order">
      <div class="order_1 f_l">
        <a href="#">
          <img src="./RFQ.png" alt="">
          <br>
          <span>全部订单</span>
        </a>
      </div>
      <div class="nothing1"></div>
      <div class="order_2 f_l">
        <a href="#">
          <img src="./save.png" alt="">
          <br>
          <span>待付款</span>
        </a>
      </div>
      <div class="nothing2"></div>
      <div class="order_3 f_l">
        <a href="#">
          <img src="./edit.png" alt="">
          <br>
          <span>待评价</span>
        </a>
      </div>
    </div>

    <div class="taobao_order">
      <img src="./atm.png" alt=""><span>淘宝订单</span>
    </div>
    <div class="taobao_order">
      <img src="./aaa.png" alt=""><span>常出行人</span>
    </div>
    <div class="taobao_order">
      <img src="./favorites.png" alt=""><span>我的收藏</span>
    </div>
    <div class="taobao_order">
      <img src="./ppp.png" alt=""><span>客服电话</span>
    </div>
    <div class="taobao_order">
      <img src="./remind.png" alt=""><span>店长推荐</span>
    </div>
    <div class="taobao_order">
      <img src="./remind.png" alt=""><span>酒店推荐</span>
    </div>
    <div class="nothing4"></div>
    <div class="while"></div>
    <div class="footer_wrap clearfix">
      <div class="footer clearfix">
        <div><router-link to="/"><img src="./home.png" alt=""><br>首页</router-link></div>
        <div><router-link to="/destination"><img src="./destination.png" alt=""><br>目的地</router-link></div>
        <div><router-link to="/cart"><img src="./cart.png" alt=""><br>购物车</router-link></div>
        <div><router-link to="/own"><img src="./mine.png" alt=""><br>我的</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
<style lang="scss">
  @import "../../common/styles/reset";
  @import "../../common/styles/mixin";
  $rem:750/16rem;
  .own_container{
    width: 100%;
    position: relative;
    background: #F3F5F8;
    .own_head {
      position: relative;
      width: 100%;
      height: 100/$rem;
      background: #FFFFFF;
      .head_logo1 {
        width: 60/$rem;
        height: 74/$rem;
        position: absolute;
        left: 30/$rem;
        top: 28/$rem;
        background-image: url("./setting.png");
        background-size: 40/$rem 40/$rem;
        background-repeat: no-repeat;
      }
      .head_logo2 {
        width: 60/$rem;
        height: 74/$rem;
        position: absolute;
        right: 30/$rem;
        top: 28/$rem;
        background-image: url("./message.png");
        background-size: 40/$rem 40/$rem;
        background-repeat: no-repeat;
      }
      .head_title {
        position: absolute;
        left: 344/$rem;
        top: 34/$rem;
        font-weight: 600;
        font-size:32/$rem;;
        color: rgba(0,0,0,0.5);
        font-family: 新宋体, sans-serif;
      }
      .hr1 {
        height: 1px;
        width: 100%;
        background: rgba(223, 223, 223, 0.5);
        position: absolute;
        bottom: 0;
      }
    }
    .login_state{
      width: 100%;
      margin-top: 20/$rem;
      height: 155/$rem;
      background: #FFFFFF;
      position: relative;
      a:nth-of-type(1){
        img{
          display: inline-block;
          width: 117/$rem;
          border-radius: 42%;
          margin-left: 40/$rem;
          margin-top: 20/$rem;
        }
      }
      a:nth-of-type(2){
        img{
          position: absolute;
          right: 24/$rem;
          width: 50/$rem;
          top: 50/$rem;
        }
      }
      span{
        display: inline-block;
        position: absolute;
        top: 50/$rem;
        left:190/$rem;
        font-weight: 600;
        font-size:32/$rem;;
        color: rgba(0,0,0,0.6);
        font-family: 新宋体, sans-serif;
      }
    }
    .message {
      width: 100%;
      height: 74/$rem;
      margin-top: 4/$rem;
      background: #FFFFFF;
      position: relative;
      .nothing {
        height: 70%;
        width: 1px;
        position: absolute;
        top: 10/$rem;
        bottom: 10/$rem;
        left: 0;
        right: 0;
        margin: auto;
        background: silver;
      }
      .message_1 {
        span {
          position: absolute;
          top: 20/$rem;
          bottom: 0/$rem;
          left: 130/$rem;
          margin: auto;
          font-size: 29/$rem;
          font-weight: 600;
          color: rgba(0,0,0,0.6);
          font-family: 新宋体, sans-serif;
        }
      }
      .message_2 {
        span {
          position: absolute;
          top: 20/$rem;
          bottom: 0/$rem;
          right: 130  /$rem;
          margin: auto;
          font-size: 29/$rem;
          font-weight: 600;
          color: rgba(0,0,0,0.6);
          font-family: 新宋体, sans-serif;
        }
      }
    }
    .order{
      width: 100%;
      height: 125/$rem;
      background: #FFFFFF;
      margin-top: 20/$rem;
      position: relative;
      .nothing1{
        height: 60%;
        width: 1px;
        position: absolute;
        top: 10/$rem;
        bottom: 10/$rem;
        left: 250/$rem;
        margin: auto;
        background: silver;
      }
      .nothing2{
        height: 60%;
        width: 1px;
        position: absolute;
        top: 10/$rem;
        bottom: 10/$rem;
        left: 500/$rem;
        margin: auto;
        background: silver;
      }
      .order_1{
        margin-left: 98/$rem;
        margin-top: 25/$rem;
        a{
          img{
            width: 40/$rem;
            margin-left: 33/$rem;
          }
          span{
            color: rgba(0,0,0,0.8);
            font: inherit;
          }
        }
      }
      .order_2{
        margin-left: 130/$rem;
        margin-top: 25/$rem;
        a{
          img{
            margin-left: 16/$rem;
            width: 40/$rem;
          }
          span{
            color: rgba(0,0,0,0.8);
            font: inherit;

          }
        }
      }
      .order_3{
        margin-left: 160/$rem;
        margin-top: 25/$rem;
        a{
          img{
            margin-left: 16/$rem;
            width: 40/$rem;
          }
          span{
            color: rgba(0,0,0,0.8);
            font: inherit;
          }
        }
      }
    }
    .taobao_order {
      width: 100%;
      height: 113/$rem;
      background: #FFFFFF;
      margin-top: 20/$rem;
      position: relative;
      img {
        width: 40/$rem;
        margin-left: 20/$rem;
        margin-top: 40/$rem;
      }
      span {
        position: absolute;
        left: 83/$rem;
        top: 44/$rem;
      }
    }
    .nothing4{
      height: 130/$rem;
    }
    .footer_wrap {
      width: 100%;
      background: #FFFFFF;
      position: absolute;
      bottom: 0;
      .footer {
        width: 100%;
        bottom: 0;
        height: 110/$rem;
        padding-top: 20/$rem;
        position: fixed;
        background: #fff;
        display: flex;
        text-align: center;
        margin-left:  0/$rem;
        border-bottom: 1px silver solid;
        border-bottom: 0;
        border-radius: 10/$rem;
        div {
          flex: 1;
          a {
            color: silver;
            font-size: 18/$rem;
            font-weight: 600;
            img {
              display: inline-block;
              width: 40/$rem;
              height: 39/$rem;
              margin-right: 9/$rem;
            }
          }
        }
        div:nth-of-type(4){
          a{
            color: #55C1DD;
          }
        }
        div:nth-of-type(2){
          a{
            img{
              width: 34/$rem;
              height: 41/$rem;
            }
          }
        }
      }
    }
  }
</style>
