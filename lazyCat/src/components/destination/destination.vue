<template>
  <div class="cate_container">
    <div class="cate_head">
      <div class="find">
        <span class="find_img">搜索目的地</span>
      </div>
      <span class="cate_head_img"></span>
    </div>

    <div class="main clearfix">
      <!--left-->
      <!--  左边的区域 -->
      <div class="main_left f_l">
        <ul>
          <li class='current'><a href="#">泰国</a></li>
          <li><a href="#">马来西亚</a></li>
          <li><a href="#">美国</a></li>
          <li><a href="#">澳大利亚</a></li>
          <li><a href="#">日本</a></li>
          <li><a href="#">新西兰</a></li>
          <li><a href="#">毛里求斯</a></li>
          <li><a href="#">加拿大</a></li>
        </ul>
      </div>
      <!--右边的区域 -->
      <div class="main_right">
        <!-- 列表内容 -->
        <!-- ul.clearfix>li*15>a[href='#']>img[src='images/nv-fy.jpg']+p{毛呢大衣} -->
        <ul>
          <li><a href="#">
            <img src="./cate5.png">
          </a></li>
          <li><a href="#">
            <img src="./cate1.png">
          </a></li>
          <li><a href="#">
            <img src="./cate6.png">
          </a></li>
          <li><a href="#">
            <img src="./cate2.png" alt="">
          </a></li>
          <li><a href="#">
            <img src="./cate3.png" alt="">
          </a></li>
          <li><a href="#">
            <img src="./cate4.png" alt="">
          </a></li>
        </ul>
      </div>
    </div>
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
  export default {
  }
</script>
<style lang="scss">
  @import "../../common/styles/reset";
  @import "../../common/styles/mixin";
  $rem:750/16rem;
/*  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }*/
  .cate_container{
    width: 100%;
    height: 100%;
    .cate_head{
      height: 100/$rem;
      position: relative;
      width: 100%;
      .find{
        margin-top: 24/$rem;
        margin-left: 24/$rem;
        text-align: center;
        line-height: 63/$rem;
        width: 634/$rem;
        height:63/$rem;
        background-color: #F3F5F8;
        border: 1px solid #E1E9F0;
        border-radius:30/$rem;
        .find_text{

        }
        .find_img{
          display: inline-block;
          color: #AAA0B1;
          font-size: 28/$rem;
          padding-left: 53/$rem;
          line-height: 41/$rem;
          background-image: url("./search111.png");
          background-repeat: no-repeat;
          background-size:35/$rem 35/$rem;
        }
      }
      .cate_head_img{
        display: inline-block;
        position: absolute;
        top: 10/$rem;
        right: 24/$rem;
        width: 38/$rem;
        height:34/$rem;
        background-image: url("./kefu@3x.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .main{
      width: 100%;
      height: 100%;
      padding-bottom: 134/$rem;
      background: #F3F5F8;
      .main_left{
        width: 185/$rem;
        ul{
          width: 100%;
          text-align: center;
          line-height: 125/$rem;
          .current{
            background: #FFFFFF;
            border-left: 2px solid #84C8DE;
            a{
              color: #84C8DE;
            }
          }
          li{
            height:125/$rem;
            display: block;
            width: 100%;
            font-size: 28/$rem;
            font-weight: 500;
            a{
              display: block;
              color: #424242;;
            }
          }
        }
      }
      .main_right{
        overflow: hidden;
        background: #FFFFFF;
        padding-bottom: 310/$rem;
        height: auto;
        width: 562/$rem;
        ul{
          li{
            float: left;
            margin-left: 20/$rem;
            margin-top: 10/$rem;
            img{
              width: 240/$rem;
              height: auto;
            }
          }
        }
      }
    }
    .while {height: 110/$rem;}
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
        margin-left: 0/$rem;
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
          div:nth-of-type(2) {
            a {
              color: #55C1DD;
              img {
                width: 34/$rem;
                height: 41/$rem;
              }
            }
          }
        }

    }
  }
</style>
