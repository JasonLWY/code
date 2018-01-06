<template>
  <div class="de_container">
    <div class="dm_banner">
      <ul class="dm_banner_images clearfix">
        <li><a href="#"><img src="https://static.cattour.cn/b8/b87bbc6cd1c5d768900e24485103e66a.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="https://static.cattour.cn/94/9486747f005b4ae83c0ca7fe38335901.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="https://static.cattour.cn/26/268e0d63fa71a15bb3a033ef5d28c1f8.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="https://static.cattour.cn/10/10f89781b6366835f99365f6de2f8406.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="https://static.cattour.cn/b8/b87bbc6cd1c5d768900e24485103e66a.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="https://static.cattour.cn/94/9486747f005b4ae83c0ca7fe38335901.jpg" alt=""></a>
        </li>
      </ul>
      <ul class="banner_index banner_index_detail clearfix">
        <li class="current"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="banner_right">
      <a href="#" @click="back"><img src="./back1111.png" alt=""></a>
    </div>
    <div class="banner_collection">
      <a href="#"><img src="./favoritesf.png" alt=""></a>
    </div>
    <div class="banner_title">日本札幌美景之旅 观看札幌世界夜景 观看美食之城的魅力 品尝白色恋人巧克力</div>
    <div class="banner_title1"><i>￥</i>666666 <em>起</em></div>
    <div class="banner_selled">已售250份</div>
    <div class="banner_selled conllection">94人收藏</div>
    <div class="banner_price">
      <i>￥</i>
      <span>120</span>
      <i>起</i>
    </div>
    <div class="hr4"></div>
    <!--产品亮点-->
    <div class="de_goods_light">
      <h1>产品亮点</h1>
      <div class="light_act">
        <span>美旺大象营，近距离与大象接触，大象保护区，看快乐的大象，大象洗澡，懒猫家特色行程</span>
      </div>
      <div class="nothing1"></div>
    </div>
    <div class="de_goods_light">
      <h1>费用说明</h1>
      <div class="light_act1">
        <span>美旺大象营，近距离与大象接触，大象保护区，看快乐的大象，大象洗澡，懒猫家特色行程</span>
      </div>
      <div class="light_act1">
        <span>美旺大象营，近距离与大象接触，大象保护区，看快乐的大象，大象洗澡，懒猫家特色行程</span>
      </div>
      <div class="nothing1"></div>
    </div>
    <!--介绍导航1-->
    <div class="tap">
      <div class="tap_1"><a href="#">商品详情</a></div>
      <div class="tap_2"><a href="javascript:;">预定须知</a></div>
      <div class="tap_3"><a href="javascript:;">用户评价</a></div>
    </div>

    <div id="1">
      <div class="de_goods_light1">
        <h1>商品详情</h1>
        <div class="nothing1"></div>
        <div class="nothing1"></div>
      </div>
      <div class="de_goods_light">
        <div class="light_act1">
          <img src="./buy_img.png" alt="">
        </div>
      </div>
      <div class="de_goods_light">
        <div class="light_act">
          <h2>傻逼骑大象很傻逼</h2>
          <img src="./dateil_img2.jpg" alt="">
          <span>美旺大象营，近距离与大象接触，大象保护区，看快乐的大象，大象洗澡，懒猫家特色行程</span>
        </div>
        <div class="nothing1"></div>
      </div>
    </div>
    <div id="3" style="display: none;">
      <div class="de_goods_light1">
        <h1>用户评价</h1>
        <div class="nothing1"></div>
        <div class="nothing1"></div>
      </div>
      <div class="user_score clearfix">
        <div class="score_left f_l">
          <div class="score_left_score">4.8分</div>
          <div class="score_left_comm">99人评论</div>
          <div class="score_left_star clearfix">
            <em></em>
            <em></em>
            <em></em>
            <em></em>
            <em></em>
          </div>
        </div>
        <div class="score_right f_r">
          <div class="score_right1">
            <span>售前服务</span>
            <span class="score_right1_star1">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
            <span>4.8分</span>
          </div>
          <div class="score_right1">
            <span>售前服务</span>
            <span class="score_right1_star1">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
            <span>4.8分</span>
          </div>
          <div class="score_right1">
            <span>售前服务</span>
            <span class="score_right1_star1">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
            <span>4.8分</span>
          </div>
        </div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">林某人</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">日本札幌美景之旅 夜景一次</div>
        <div class="comm_list_3_content">
          先说优点，船不错，速度挺快，只是当天风浪太大，船颠簸得厉害，不少人都吐了。导游巧克力、小钢炮、还有潜水教练阿辉都非常棒，很负责任的。巧克力知道我晕船，还特地帮我按摩，非常感谢。潜水时，因为紧张不敢下去，幸亏潜水教练阿辉一直是一对一的带着我，让我见到了美妙的海底世界。没有贵宾接待室，早晨到码头太阳底下晒了半个小时10点直接上船。中午饭，嗯不太好四菜一汤味道一般，没什么可吃的。但是水果和饮料是免费的。另外下午还有方便面提供。潜水教练照的照片很美！如果能再改善一下午餐就更好了！
        </div>
        <div class="comm_list_4_time">2017-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">林某人</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">日本札幌美景之旅 夜景一次</div>
        <div class="comm_list_3_content">
          先说优点，船不错，速度挺快，只是当天风浪太大，船颠簸得厉害，不少人都吐了。导游巧克力、小钢炮、还有潜水教练阿辉都非常棒，很负责任的。巧克力知道我晕船，还特地帮我按摩，非常感谢。潜水时，因为紧张不敢下去，幸亏潜水教练阿辉一直是一对一的带着我，让我见到了美妙的海底世界。没有贵宾接待室，早晨到码头太阳底下晒了半个小时10点直接上船。中午饭，嗯不太好四菜一汤味道一般，没什么可吃的。但是水果和饮料是免费的。另外下午还有方便面提供。潜水教练照的照片很美！如果能再改善一下午餐就更好了！
        </div>
        <div class="comm_list_4_time">2017-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">林某人</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">日本札幌美景之旅 夜景一次</div>
        <div class="comm_list_3_content">
          先说优点，船不错，速度挺快，只是当天风浪太大，船颠簸得厉害，不少人都吐了。导游巧克力、小钢炮、还有潜水教练阿辉都非常棒，很负责任的。巧克力知道我晕船，还特地帮我按摩，非常感谢。潜水时，因为紧张不敢下去，幸亏潜水教练阿辉一直是一对一的带着我，让我见到了美妙的海底世界。没有贵宾接待室，早晨到码头太阳底下晒了半个小时10点直接上船。中午饭，嗯不太好四菜一汤味道一般，没什么可吃的。但是水果和饮料是免费的。另外下午还有方便面提供。潜水教练照的照片很美！如果能再改善一下午餐就更好了！
        </div>
        <div class="comm_list_4_time">2017-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">林某人</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">日本札幌美景之旅 夜景一次</div>
        <div class="comm_list_3_content">
          先说优点，船不错，速度挺快，只是当天风浪太大，船颠簸得厉害，不少人都吐了。导游巧克力、小钢炮、还有潜水教练阿辉都非常棒，很负责任的。巧克力知道我晕船，还特地帮我按摩，非常感谢。潜水时，因为紧张不敢下去，幸亏潜水教练阿辉一直是一对一的带着我，让我见到了美妙的海底世界。没有贵宾接待室，早晨到码头太阳底下晒了半个小时10点直接上船。中午饭，嗯不太好四菜一汤味道一般，没什么可吃的。但是水果和饮料是免费的。另外下午还有方便面提供。潜水教练照的照片很美！如果能再改善一下午餐就更好了！
        </div>
        <div class="comm_list_4_time">2017-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">林某人</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">日本札幌美景之旅 夜景一次</div>
        <div class="comm_list_3_content">
          先说优点，船不错，速度挺快，只是当天风浪太大，船颠簸得厉害，不少人都吐了。导游巧克力、小钢炮、还有潜水教练阿辉都非常棒，很负责任的。巧克力知道我晕船，还特地帮我按摩，非常感谢。潜水时，因为紧张不敢下去，幸亏潜水教练阿辉一直是一对一的带着我，让我见到了美妙的海底世界。没有贵宾接待室，早晨到码头太阳底下晒了半个小时10点直接上船。中午饭，嗯不太好四菜一汤味道一般，没什么可吃的。但是水果和饮料是免费的。另外下午还有方便面提供。潜水教练照的照片很美！如果能再改善一下午餐就更好了！
        </div>
        <div class="comm_list_4_time">2017-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">林某人</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">日本札幌美景之旅 夜景一次</div>
        <div class="comm_list_3_content">
          先说优点，船不错，速度挺快，只是当天风浪太大，船颠簸得厉害，不少人都吐了。导游巧克力、小钢炮、还有潜水教练阿辉都非常棒，很负责任的。巧克力知道我晕船，还特地帮我按摩，非常感谢。潜水时，因为紧张不敢下去，幸亏潜水教练阿辉一直是一对一的带着我，让我见到了美妙的海底世界。没有贵宾接待室，早晨到码头太阳底下晒了半个小时10点直接上船。中午饭，嗯不太好四菜一汤味道一般，没什么可吃的。但是水果和饮料是免费的。另外下午还有方便面提供。潜水教练照的照片很美！如果能再改善一下午餐就更好了！
        </div>
        <div class="comm_list_4_time">2017-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>

      <div class="clickmore_comm_list">
        点击加载更多！
        <div class="hr7"></div>
      </div>
    </div>
    <div class="nothing6"></div>
    <div class="footer clearfix">
      <div>
        <img src="./kefu@3x.png" alt="">
      </div>
      <div class="img_atm">
        <img src="./atm.png" alt="">
      </div>
      <div class="A"><a href="#">加入购物车</a></div>
      <div class="B"><a href="#">立即购买</a></div>
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
  .de_container {
    width: 100%;
    position: relative;
    .dm_banner {
      width: 100%;
      overflow: hidden;
      /*索引定位*/
      position: relative;
      .dm_banner_images {
        /*4倍宽度  横向 四张图片*/
        width: 600%;
        -webkit-transform: translateX(-16.667%);
        transform: translateX(-16.667%);
        li {
          float: left;
          width: 16.6667%;
          a {
            display: block;
            width: 100%;
            img {
              display: block;
              width: 100%;
            }
          }
        }
      }
      /*小图标*/
      .banner_index {
        position: absolute;
        bottom: 30/$rem;
        left: 50%;
        margin-left: -20/$rem;
        li {
          float: left;
          width: 10/$rem;
          height: 10/$rem;
          border-radius: 50%;
          border: 1px solid white;
          margin-left: 10/$rem;
        }
        .current {
          background-color: greenyellow;
        }
      }
    }
    .banner_title {
      margin-top: 60/$rem;
      font-size: 40/$rem;
      margin-left: 33/$rem;
      color: rgba(0,0,0,0.8);
      font-weight: 600;
    }
    .conllection{
      position: absolute;
      top: 665/$rem;
      left: 190/$rem;
    }
    .banner_title1{
      display: inline-block;
      float: right;
      font-size: 40/$rem;
      color: red;
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
    .banner_selled {
      margin-top: 40/$rem;
      margin-left: 30/$rem;
      color: #A4A3A8;
    }
    .banner_price {
      position: absolute;
      bottom: 30/$rem;
      right: 30/$rem;
      span {
        color: red;
        font-size: 38/$rem;
      }
      i:nth-of-type(1) {
        font-size: 17/$rem;
      }
      i:nth-of-type(2) {
        font-size: 14/$rem;
        color: #A4A3A8;
      }
    }
    .banner_collection {
      width: 64/$rem;
      height: 64/$rem;
      border-radius: 50%;
      border-shadow: 1/$rem;
      background: #FFFFFF;
      position: absolute;
      top:470/$rem;
      right: 40/$rem;
      box-shadow: 0px 1px lightgrey;
      a {
        display: block;
        line-height: 57px;
        padding-left: 3px;
        width: 100%;
        position: relative;
        img {
          display: inline-block;
          position: absolute;
          top: 0;
          bottom: -75/$rem;
          left: 0;
          right: 0;
          margin: auto;
          width: 45/$rem;
        }
      }
    }
    .banner_right {
      width: 60/$rem;
      height: 60/$rem;
      border-radius: 50%;
      border-shadow: 1/$rem;
      background: #FFFFFF;
      position: absolute;
      top: 30/$rem;
      left: 30/$rem;
      a {
        width: 100%;
        img {
          width: 80%;
          padding: 10/$rem 0 0 10/$rem;
        }
      }
    }
    .dm_banner {
      width: 100%;
      height: auto;
      .banner_index_detail{
        bottom: 40/$rem ;
      }
      /*小图标调整*/
      .de_banner_index {
        bottom: 270/$rem;
      }
      .banner_price {
        position: absolute;
        bottom: 30/$rem;
        right: 30/$rem;
        span {
          color: red;
          font-size: 38/$rem;
        }
        i:nth-of-type(1) {
          font-size: 17/$rem;
        }
        i:nth-of-type(2) {
          font-size: 14/$rem;
          color: #A4A3A8;
        }
      }
    }
    .tap {
      margin-top: 30/$rem;
      width: 100%;
      height: 100/$rem;
      display: flex;
      line-height: 130/$rem;
      div {
        flex: 1;
        text-align: center;
        a {
          background: rgba(85, 193, 201,.2);
          display: inline-block;
          height: 130/$rem;
          box-shadow: 2px 2px rgba(85, 193, 221,.2);
          border-radius: 0.42666667rem;
          width: 4.64rem;
          color: #000;
          font-size: 0.59733333rem;
        }
      }
    }
    .de_goods_light {
      width: 100%;
      position: relative;
      &:before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        width: 90%;
        height: 1px;
        left: 30/$rem;
        background: #bdb2b2;
        transform: scaleY(.5);
      }
      .nothing1 {
        width: 100%;
        height: 51/$rem;
      }
      h1 {
        text-align: center;
        margin-top: 68/$rem;
        font-size: 28/$rem;
      }
      .light_act {
        margin-top: 69/$rem;
        margin-left: 37/$rem;
        width: 90%;
        h2 {
          text-align: center;
          margin-bottom: 20/$rem;
          font-size: 30/$rem;
          color: #595959;
        }
        img {
          width: 100%;
        }
        span {
          font-size: 26/$rem    ;
          color: #A4A3A8;
        }
      }
      .light_act1 {
        margin-top: 40/$rem;
        margin-left: 37/$rem;
        width: 90%;
        img {
          width: 100%;
        }
        span {
          color: #A4A3A8;
          font-size: 26/$rem;
        }
      }
    }
    .de_goods_light1 {
      width: 100%;
      position: relative;
      margin-top: 120/$rem;
      .nothing1 {
        width: 100%;
        height: 51/$rem;
      }
      h1 {
        text-align: center;
        font-size: 28/$rem;
        margin-top: 68/$rem;
      }
      .light_act {
        margin-top: 69/$rem;
        margin-left: 37/$rem;
        width: 90%;
        span {
          color: #A4A3A8;
        }
      }
    }
    /*评分顶部说明*/
    .user_score{
      width: 100%;
      height: 200/$rem;
      .score_left{
        background: #F3F5F8;
        border-radius: 5/$rem;
        border:1px silver solid;
        margin-left: 25/$rem;
        width: 214/$rem;
        height: 100%;
        text-align: center;
        line-height: 70/$rem;
        .score_left_score{
          font-size: 28/$rem;
          font-weight: 600;
        }
        .score_left_comm{
          color: #9EB1C9;
          font-size: 16/$rem;
        }
        .score_left_star{
          em{
            display: inline-block;
            width: 25/$rem;
            height: 25/$rem;
            background-image: url("./start_red.png");
            background-size: 25/$rem 25/$rem;
            background-repeat: no-repeat;
          }
        }
      }
      .score_right{
        width: 506/$rem;
        height: 180/$rem;
        text-align: center;
        line-height: 60/$rem;
        margin-top: 10/$rem;
        .score_right1{
          display: flex;
          span{
            flex: 1;
            font-size: 24/$rem;
          }
          .score_right1_star1{
            em{
              display: inline-block;
              width: 27/$rem;
              height: 27/$rem;
              background-image: url("./start_red.png");
              background-size: 27/$rem 27/$rem;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
    .comm_list{
      width: 100%;
      margin-top: 64/$rem;
      position: relative;
      .comm_list_1{
        span{
          padding: 0 30/$rem;
          color: #9E9E9E;
          font-size: 28/$rem;
        }
        .score_right1_star1{
          em{
            display: inline-block;
            width: 27/$rem;
            height: 27/$rem;
            background-image: url("./start_red.png");
            background-size: 27/$rem 27/$rem;
            background-repeat: no-repeat;
          }
        }
      }
      .comm_list_2_title{
        color: #9E9E9E;
        font-size: 16/$rem;
        padding-left: 30/$rem;
        margin-top: 17/$rem;
      }
      .comm_list_3_content{
        width: 100%;
        margin-top: 43/$rem;
        padding: 0 30/$rem;
        font-size: 30/$rem;
      }
      .comm_list_4_time{
        padding-left: 30/$rem;
        font-size: 15/$rem;
        color: #9E9E9E;
        margin-top: 34/$rem;
      }
      .hr7{
        position: absolute;
        bottom: -35/$rem;;
        height: 1px;
        width: 90%;
        left: 30/$rem;
        background:#9E9E9E;
      }
    }
    .clickmore_comm_list{
      width: 100%;
      height: 40/$rem;
      margin-top: 80/$rem;
      text-align: center;
      font-size: 28/$rem;
    }
    .footer {
      width: 100%;
      position: fixed;
      bottom: 0;
      background: #FFFFFF;
      text-align: center;
      height: 100/$rem;
      border: 1px silver solid;
      line-height: 100/$rem;
      border-radius: 10/$rem;
      border-bottom: 0;
      display: flex;
      .img_atm{
        img{
          margin-right:10/$rem;
        }
      }
      .A{
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #FFFFFF;
          background: #55C1DD;;

        }
      }
      .B{
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #FFFFFF;
          background: #FC5D7B;
        }
      }
      div{
        flex: 1;
        &:nth-of-type(1){
          border-right: 1px solid rgba(128,128,128,0.4);
        }
        img{
          margin-top: 25/$rem;
          width: 45/$rem;
        }
      }

    }
    .nothing6 {
      height: 140/$rem;
    }
  }
</style>
