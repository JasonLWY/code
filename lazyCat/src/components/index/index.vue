<template>
  <div class="dm_container">
    <!--lb-->
    <div class="dm_banner">
      <em class="banner-search"></em>
      <em class="banner-service"></em>
      <ul class="dm_banner_images clearfix">
        <!--{{index.banner_list}}-->
        <li v-for=" item in index.banner_list">
          <!--{{item.image}}-->
          <a href="#">
         <!-- <div v-bind:style="{backgroundImage: 'url(' + item.image+ ')'}"></div>-->
           <img :src="item.image" alt="">
          </a>
        </li>
      </ul>
      <ul class="banner_index clearfix">
        <li class="current"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <!--content精选频道-->
    <div class="content_selected">
      <p class="selected_title">精选频道</p>
      <div class="selected f_l" v-for="item in index.lanmao_line_list">
        <a href="#">
          <img :src="item.image" alt="">
        </a>
      </div>
     <!-- <div class="selected f_l">
        <a href="#"><img src="./jx_img2.png" alt=""></a>
      </div>-->
      <div class="hr"></div>
    </div>
    <!--目的地推荐-->
    <div class="content_recommend content_selected">
      <p class="selected_title">推荐目的地</p>
      <ul class="recommend_img_list recommend_img_list_1 clearfix">
        <li v-for="item in index.data_list[0].data">
          <a href="#">
            <img :src="item.image" alt="">
          </a>
        </li>
        <!--<li><a href="#"><img src="./Romm2.png" alt=""></a></li>-->
        <!--<li><a href="#"><img src="./Rom1.png" alt=""></a></li>-->
      </ul>
      <div class="hr"></div>
    </div>
    <!--content-->
    <div class="content content_selected" v-for="item in index.data_list" v-show="item.title!='热门目的地' && item.title!='特别推荐'">
      <p class="selected_title">{{item.title}}</p>
      <div class="ul-list">
        <ul class="recommend_img_list clearfix">
          <li v-for="i in item.data">
            <a href="#">
              <img :src="i.image" alt="">
            </a>
            <p class="p_text">{{i.title}}</p>
            <span class="shop_num">已售 {{i.sale_amount}} 份</span>
            <span class="shop_price"><i>￥{{i.price}}</i><em>起</em></span>
          </li>
        </ul>
      </div>
      <div class="hr"></div>
    </div>
    <!--精选套餐-->
    <div class="content content_selected" >
      <p class="selected_title">精选套餐</p>
      <div class="ul-list">
        <ul class="recommend_img_list clearfix">
          <li v-for="item in index.data_list[2].data">
            <a href="#">
              <img :src="item.image" alt="">
            </a>
          </li>
          <!--<li><a href="#"><img src="./jxuan2.jpg" alt=""></a></li>
          <li v-for="item in index.data_list[0].data">
          <li><a href="#"><img src="./jxuan1.jpg" alt=""></a></li>-->
        </ul>
      </div>
      <div class="hr"></div>
    </div>
    <!--footer tap-->
    <div class="while"></div>
    <div class="footer_wrap clearfix">
      <div class="footer clearfix">
        <div><a href="#"><img src="./home_on.png" alt=""><br>首页</a></div>
        <div><router-link to="/destination"><img src="./destination.png" alt=""><br>目的地</router-link></div>
        <div><router-link to="/cart"><img src="./cart.png" alt=""><br>购物车</router-link></div>
        <div><router-link to="/own"><img src="./mine.png" alt=""><br>我的</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
      mounted() {
        this.$store.dispatch("reqIndex");
      },
      computed: {
        ...mapState(['index'])

      },
      methods:{

      }
    }
</script>
<style lang="scss">
  @import "../../common/styles/reset";
  @import "../../common/styles/mixin";
  $rem:750/16rem;
  .dm_container {
    width: 100%;
    position: relative;
  /*无缝滑屏*/
  .dm_banner {
    width: 100%;
    height: 500/$rem;
    overflow: hidden;
    position: relative;
  .banner-search {
    position: absolute;
    top: 35/$rem;
    left: 22/$rem;
    width: 72/$rem;
    height: 72/$rem;
    background-image: url("./search.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .banner-service {
    position: absolute;
    top: 35/$rem;
    right: 22/$rem;
    width: 72/$rem;
    height: 72/$rem;
    background-image: url("./service.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .dm_banner_images {
    width: 800%;
    /*transform: translateX(200px);*/
    height: 500/$rem;
  li {
    float: left;
    width: 12.5%;
    height: 100%;
    div{
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  a {
    display: block;
    width: 100%;
    height: 100%;
    div{
    }
  img {
    display: block;
    width: 100%;
    height:100%;
  }
  }
  }
  }
  .banner_index {
    position: absolute;
    bottom: 40/$rem;
    left: 44%;
    margin-left: -20/$rem;
  li {
    float: left;
    width: 10/$rem;
    height: 10/$rem;
    border-radius: 50%;
    border: 1px solid white;
    margin-left: 5/$rem;
  &.current {
     background-color: deeppink;
   }
  }
  }
  }
  /*精选频道*/
  .content_selected {
    width: 100%;
    overflow: hidden;
    margin-top: 16/$rem;
  .selected_title {
    font-size: 40/$rem;
    margin-top: 59/$rem;
    margin-bottom: 30/$rem;
    margin-left: 30/$rem;
    font-family: monospace;
    font-weight: 600;
  }
  .hr {
  @include hr(#dbdbdb)
  }
  .selected {
    width: 340/$rem;
    height: 256/$rem;
  a {
    width: 100%;
    height: 100%;
    display: block;
  img {
    width: 340/$rem;
    height: 100%;
  }
  }
  &:nth-of-type(1) {
     margin-left: 28/$rem;
   }
  &:nth-of-type(2) {
     margin-left: 19/$rem;
   }
  }
  }
  /*推荐目的地*/
  .content_recommend {
    width: 100%;
  .hr {
  @include hr(#dbdbdb)
  }
  .recommend_img_list {
    width: 900%;
  li {
    float: left;
    display: block;
    width: 327/$rem;
  img {
    display: block;
    height: auto;
    width: 327/$rem;
  }
  &:nth-of-type(1) {
     margin-left: 30/$rem;
   }
  &:nth-of-type(n+2) {
     margin-left: 24/$rem;
   }
  }
  }
  }
  /*内容*/
  .content {
    width: 100%;
  .hr {
  @include hr(#dbdbdb)
  }
  .p_text {
    margin-top: 37/$rem;
    width: 100%;
    font-weight: bold;
    font-family: '微软雅黑', sans-serif;
    font-size: 37/$rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ul-list {
    width: 100%;
  .recommend_img_list {
    width: 600%;
  li {
    float: left;
    display: block;
    width: 654/$rem;
  img {
    display: block;
    height: auto;
    width: 654/$rem;
  }
  &:nth-of-type(1) {
     margin-left: 30/$rem;
   }
  &:nth-of-type(n+2) {
     margin-left: 24/$rem;
   }
  .shop_num {
    display: inline-block;
    margin-top: 23/$rem;
    color: #8d8787;
  }
  .shop_price {
    display: inline-block;
    float: right;
    margin-top: 45/$rem;
  i {
    color: red;
    font-style: normal;
  }
  em {
    padding-left: 10/$rem;
    font-size: 16/$rem;
    font-style: normal;
    color: #8d8787;
  }
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
        div:nth-of-type(1){
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
