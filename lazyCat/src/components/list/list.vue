<template>
  <div class="IN_contanier">
    <div class="IN_head">
      <a href="#" @click="back" class="head_logo1"></a>
      <span class="head_title">普吉岛</span>
      <a href="#" class="head_logo2"></a>
      <a href="#" class="head_logo3"></a>
      <div class="hr1"></div>
    </div>
    <div class="IN_content">
      <div class="content_list">
        <router-link to="/detail"><img src="./shop5.jpg" alt=""></router-link>
        <p class="p_text">体验全日航空的王牌美食领略不一样的旅游体验你值得拥有</p>
        <span class="shop_num">已售200份</span>
        <span class="shop_price"><i>￥500</i><em>起</em></span>
        <div class="hr2"></div>
      </div>
      <div class="content_list">
        <a href="#"><img src="./shop_in1.png" alt=""></a>
        <p class="p_text">体验全日航空的王牌美食领略不一样的旅游体验你值得拥有</p>
        <span class="shop_num">已售200份</span>
        <span class="shop_price"><i>￥500</i><em>起</em></span>
        <div class="hr2"></div>
      </div>
      <div class="content_list">
        <a href="#"><img src="./shop_in2.png" alt=""></a>
        <p class="p_text">体验全日航空的王牌美食领略不一样的旅游体验你值得拥有</p>
        <span class="shop_num">已售200份</span>
        <span class="shop_price"><i>￥500</i><em>起</em></span>
        <div class="hr2"></div>
      </div>
      <div class="content_list">
        <a href="#"><img src="./shop2.jpg" alt=""></a>
        <p class="p_text">体验全日航空的王牌美食领略不一样的旅游体验你值得拥有</p>
        <span class="shop_num">已售200份</span>
        <span class="shop_price"><i>￥500</i><em>起</em></span>
        <div class="hr2"></div>
      </div>
      <div class="content_list">
        <a href="#"><img src="./shop_in4.png" alt=""></a>
        <p class="p_text">体验全日航空的王牌美食领略不一样的旅游体验你值得拥有</p>
        <span class="shop_num">已售200份</span>
        <span class="shop_price"><i>￥500</i><em>起</em></span>
        <div class="hr2"></div>
      </div>
      <div class="content_list">
        <a href="#"><img src="./shop_in5.png" alt=""></a>
        <p class="p_text">体验全日航空的王牌美食领略不一样的旅游体验你值得拥有</p>
        <span class="shop_num">已售200份</span>
        <span class="shop_price"><i>￥500</i><em>起</em></span>
        <div class="hr2"></div>
      </div>
      <div class="content_list">
        <a href="#"><img src="./shop1.jpg" alt=""></a>
        <p class="p_text">体验全日航空的王牌美食领略不一样的旅游体验你值得拥有</p>
        <span class="shop_num">已售200份</span>
        <span class="shop_price"><i>￥500</i><em>起</em></span>
        <div class="hr2"></div>
      </div>
      <!--上啦加载div-->
      <div class="up_load">
        <span class="load_title">上拉加载更多...</span>
      </div>
      <br>
      <!--没有更多了-->
      <div class="no_more">
        <span>没有更多了</span>
      </div>
      <br>
      <!--底部样式-->
    </div>
    <!--留白位置-->
    <div class="liubai"></div>
    <div class=" IN_footer clearfix">
      <div><span>全部分类</span><img src="./up1.png" alt=""></div>
      <div><span>最高销量</span><img src="./up1.png" alt=""></div>
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

  $rem:750/16rem;
  .IN_contanier{
    width: 100%;
    position: relative;
    .IN_head{
      position: relative;
      width: 100%;
      height: 100/$rem;
      background: rgba(255,250,250,.2);
      .head_logo1{
        width: 60/$rem;
        height: 44/$rem;
        position: absolute;
        left: 30/$rem;
        top: 28/$rem;
        background-image: url("./back.png");
        background-size: 50/$rem 50/$rem;
        background-repeat: no-repeat;
      }
      .head_logo2{
        width: 60/$rem;
        height: 36/$rem;
        position: absolute;
        right: 105/$rem;
        top: 32/$rem;
        background-image: url("./search1.png");
        background-size: 40/$rem 40/$rem;
        background-repeat: no-repeat;
      }
      .head_logo3{
        width: 60/$rem;
        height: 36/$rem;
        position: absolute;
        right: 25/$rem;
        top: 32/$rem;
        background-image: url("./kefu@3x.png");
        background-size: 40/$rem 40/$rem;
        background-repeat: no-repeat;
      }
      .head_title{
        position: absolute;
        left: 344/$rem;
        top:34/$rem;
        font:inherit;
        font-size: 32/$rem;
      }
      .hr1{
        height: 1px;
        width: 100%;
        background: rgba(223,223,223,0.5);
        position: absolute;
        bottom: 0;
      }
    }
    .IN_content{
      width: 100%;
      .content_list{
        width: 100%;
        img{
          display: inline-block;
          height: auto;
          margin: 30/$rem 0 0 30/$rem;
          width: 690/$rem;
        }
        .p_text{
          margin-top: 37/$rem;
          width: 100%;
          font-family: '微软雅黑', sans-serif;
          font-size: 34/$rem;
          padding-left: 30/$rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .shop_num{
          display: inline-block;
          margin-top: 23/$rem;
          padding-left: 30/$rem ;
          color: #8d8787;
        }
        .shop_price {
          display: inline-block;
          float: right;
          margin-top: 45/$rem;
          i{
            color: red;
            font-style: normal;
          }
          em{
            padding-left: 8/$rem;
            font-size: 12/$rem;
            font-style: normal;
            color: #8d8787;
            padding-right: 30/$rem;
          }
        }
      }
      .hr2{
        height: 1px;
        background: rgba(223,223,223,0.5);
        width: 100%;
        margin-top: 50/$rem;
      }
      .up_load{
        width: 100%;
        height: 134/$rem;
        background:#F3F5F8;
        position: relative;
        .load_title{
          position: absolute;
          left: 300/$rem;
          top: 56/$rem;
        }
      }
    }
    .no_more{
      width: 100%;
      height: 90/$rem;
      background:#F3F5F8;
      position: relative;
      span{
        position: absolute;
        left: 300/$rem;
        top:30/$rem;
      }
    }
    .IN_footer{
      width: 100%;
      height: 100/$rem;
      background: #F3F5F8;
      position: fixed;
      bottom: 0;
      display: flex;
      text-align: center;
      line-height: 100/$rem;
      div{
        flex: 1;
        position: relative;
        span{
          font-size: 28/$rem;
        }
        img{
          position: absolute;
          top:33/$rem;
          left: 250/$rem;
          width: 30/$rem;
        }
      }
    }
    .liubai{
      width: 100%;
      height: 60/$rem;
    }
  }

</style>
