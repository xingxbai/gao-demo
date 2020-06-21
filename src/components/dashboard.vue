<!--
 * @Author: your name
 * @Date: 2020-06-21 21:10:20
 * @LastEditTime: 2020-06-21 23:42:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\dashboard.vue
--> 
<template>
    <div class="dashborad">
        <div class="header">
            <div class="logo">
                <img src="https://zh.xuehuiwang.com/pinzhuan/baidu/shouye/images/logo.png" alt="" style="width: 120px">
            </div>
            <div class="title">
                <h2>XXX宣传话：收获的不止是一本证书</h2>
                
            </div>
            <div class="phone">
                <img src="https://zh.xuehuiwang.com/newpower/baidu/search/xueli/3/images/phone1.png" alt="">
                <p>
                    学信网
                    <span class="red">终身可查、</span>
                    正规
                    <span class="red">学历、</span>
                    国家
                    <span class="red">承认</span>
                </p>
            </div>
        </div>
        <div class="body">
            <!-- <div class="body-swipper-wrapper">
                <img src="http://xa.xayyedu.com/images/ban1.jpg" alt="">
            </div> -->
            <swiper ref="mySwiper" :options="swiperOptions" style="height:590px">
                <swiper-slide>
                    <img src="http://xa.xayyedu.com/images/ban1.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="http://www.xuehuiwangedu.cn/search/xueli/1/images/banner3.jpg" alt="" style="width:100%">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="card">
                <div v-for="item in cardArr" class="card-wrapper">
                    <h3 class="card-p">{{item.title}}</h3>
                    <ul class="card-ul">
                         <li v-for="(ite,ind) in item.child" class="card-li">
                             <span :class="{'yellow':ind == item.child.length-1}"  >{{ite}}</span>
                         </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import Swiper from 'swiper';
export default {
    // components: {
    //     swiper,
    //     swiperSlide
    // },
    data () {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay:true,
            },
            cardArr: [
                {
                    title: '了解学历提升方式',
                    child: ['远程教育','成人高考','自学考试','电大/国开','专升本','高升专','高升本','双学历','在线咨询']
                },{
                    title: '查看报考信息',
                    child: ['新生必读','热门学校','热门专业','报名时间','考试安排','报考要求','难易程度','多久拿证','了解更多']
                },{
                    title: '2020年学历报考开始',
                    child: ['西安交通大学','西安理工大学','陕西师范大学','西北大学','了解更多院校']
                }
            ]
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      this.swiper.slideTo(0, 1000, false)
    }
}
</script>

<style scoped>
.dashborad{
    overflow: scroll;
}
.header{
    height: 100px;
    background: #f7f7f7;
    display: flex;
    width: 1200px;
    margin: 0 auto;
    padding-top: 16px;
    color: #000;
}
.logo{
    
    position: relative;
    /* padding-right: 15px;
    padding-top: 12px;
    border-right: 0.5px solid #ccc; */
}
.logo img {
    margin-right: 15px;
    margin-top: 12px;
}
.logo::after{
    content: "";
    position: absolute;
    top: 17px;
    bottom: 36px;
    left: 0px;
    padding-right:15px;
    right: -15px;
    border-right: 0.5px solid #ccc;
}
.title{
    margin-left: 30px;
    padding-top: 25px;
    flex: 1;
    color: #616161;
}
.title h2{
    font-weight: 400;
    font-size: 24px;
}
.phone{
    padding-top: 10px;
    padding-right: 10px;
}
.phone p{
    margin-top: 5px;
    color: #616161;
    font-weight: bold;
}
.red{
    color: red
}

.body{
    height: 590px;
}
.body-swipper-wrapper{
    height: 590px;
}
.card{
    height: 205px;
    box-sizing: border-box;
    width: 1170px;
    margin: 0 auto;
    background: #504CEB;
    position: relative;
    top: -100px;
    z-index: 99;
    padding: 20px 0;
    border-radius: 10px;
    display: flex;
    box-shadow: 0px 6px 20.04px 0.96px rgba(80, 76, 235, 0.58);
}
.card-wrapper{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 25px;
}
.card-p{
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
.card-ul{
    display: flex;
    flex-wrap: wrap;
    line-height: 40px;
    width: 100%;
    list-style-type: none;
}
.card-li{
    width: 33%;
    box-sizing: border-box;
    color: #fff;
    font-size: 18px;
}
.card-li:hover{
    cursor: pointer;
    color: red;
}
.yellow{
    color: yellow;
}
</style>