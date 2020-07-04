<!--
 * @Author: your name
 * @Date: 2020-06-21 21:10:20
 * @LastEditTime: 2020-07-04 23:00:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\dashboard.vue
--> 
<template>
    <div class="dashborad">
        <div class="header">
            <div class="logo">
                <img src="../static/img/img3.png" alt="" style="width: 85px">
            </div>
            <div class="title">
                <h2>成人学历提升中心</h2>
                <img src="../static/img/img5.png" alt="" style="width: 340px;margin-left:30px">
            </div>
            <div class="phone">
                <!-- <img src="https://zh.xuehuiwang.com/newpower/baidu/search/xueli/3/images/phone1.png" alt=""> -->
                <div class="phone-top"> 
                    <img src="../static/img/座机.png" alt="" style="width:18px;margin-right:5px;">
                    <p style="letter-spacing: 1px;">
                        029 - 88758048
                    </p>
                    
                </div>
                <p>学信网<span class="red">终身可查、</span>正规学历、国家承认</p>
            </div>
        </div>
        <div class="body">
            <div class="tabbar">
                <div class="tabbar-item" v-for="item in tabBar">
                    {{item}}
                </div>
            </div>
            <swiper ref="mySwiper" :options="swiperOptions" >
                <swiper-slide>
                    <img src="../static/img/page.png" alt="" style="width:100%">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <!-- <div class="card">
                <div v-for="item in cardArr" class="card-wrapper">
                    <h3 class="card-p">{{item.title}}</h3>
                    <ul class="card-ul">
                         <li v-for="(ite,ind) in item.child" class="card-li">
                             <span :class="{'yellow':ind == item.child.length-1}"  >{{ite}}</span>
                         </li>
                    </ul>
                </div>
            </div> -->
            <div class="overview">
                <h1 class="h1">
                    大专本科<span class="red">报考信息概览</span>
                </h1>
                <div class="pag-content">
                    报考前你必须全面了解各种信息政策
                </div>
                <div class="overflow-img">
                    <div class="overflow-img-wrapper">
                        <div class="overflow-img-wrapper-item" style="position:relative">
                            <img src="../static/img/bg.png" alt="" style="width:78%;">
                            <p style="position:absolute;left:16%;top:165px;font-size:22px;color:#fff">初中毕业</p>
                            <p style="position:absolute;left:76%;top:165px;font-size:22px;color:#fff">初中毕业</p>
                            <p style="position:absolute;left:16%;bottom:-33px;font-size:22px;color:#fff">高中毕业</p>
                            <p style="position:absolute;left:45%;bottom:-33px;font-size:22px;color:#fff">大专毕业</p>
                            <p style="position:absolute;left:76%;bottom:-33px;font-size:22px;color:#fff">中专毕业</p>
                            <div class="circle">
                                <p>年满十八岁</p>
                                <p>均可报名</p>
                            </div>
                        </div>
                        
                        <!-- <div class="overflow-img-item">
                            <img src="../static/img/img13.png" alt="" style="width: 100px">
                            <p>初中毕业</p>
                        </div> -->
                        <!-- <div class="overflow-img-item">
                            <img src="../static/img/img13.png" alt="" style="width: 100px">
                            <p>高职毕业</p>
                        </div>
                        <div class="overflow-img-item">
                            <img src="../static/img/img13.png" alt="" style="width: 100px">
                        </div>
                        <div class="overflow-img-item">
                            <img src="../static/img/img13.png" alt="" style="width: 100px">
                            <p>高中毕业</p>
                        </div>
                        <div class="overflow-img-item">
                            <img src="../static/img/img13.png" alt="" style="width: 100px">
                            <p>大专毕业</p>
                        </div>
                        <div class="overflow-img-item">
                            <img src="../static/img/img13.png" alt="" style="width: 100px">
                            <p>中专毕业</p>
                        </div> -->
                        
                    </div>
                </div>
            </div>

            <div class="project">
                <h1 class="header-title h1" >上班族专属
                    <span class="red">学历提升</span>
                    方案
                </h1>
                <div class="project_content">
                    <img src="../static/img/灯泡.png" alt="" style="width:35px">
                </div>
                <div class="project-content">
                    <p>无论你什么学历，总有一种方案属于你</p>
                    <div class="project-content-wrapper">
                        <div class="project-content-item">
                            <h3>专升本</h3>
                            <p>大学专科层次学生进入本科层次阶段学习。
                                <p>学制：2.5年</p>
                            </p>
                        </div>
                        <div class="project-content-item orange">
                            <h3>高起专</h3>
                            <p>高中同等学历（高中、中专、中技、职高)起点学历报考专科学历。
                                <p>学制：2.5年</p>
                            </p>
                        </div>
                        <div class="project-content-item">
                            <h3>高起本</h3>
                            <p>高中学历层次学生进入本科层级阶段学习。
                                <p>学制：5年</p>
                            </p>
                        </div>
                        <div class="project-content-item orange">
                            <h3>专本同读</h3>
                            <p>报考专科的同时，学习并参加本科自学考试，学生在专科毕业的同时能获得自考本科文凭</p>
                        </div>
                    </div>
                    <div class="project-bottom red-border">
                        选择适合你的学历方案
                    </div>
                </div>
            </div>

            <div class="promote">
                <h1 class="header-title h1">提升学历
                    <span>四大</span>
                    <span class="red">正规形式</span>解析
                </h1>
                <div class="project_content">
                    <img src="../static/img/灯泡.png" alt="" style="width:35px">
                </div>
                <div class="promote-content">
                    <p>总有一种适合你</p>
                    <div class="promote-content-wrapper">
                        <div class="promote-content-item">
                            <h3>电大 / 国开</h3>
                            <p>校考入学</p>
                            <div class="promote-content-item-pag">
                                正规学历,学信网可查。网络教学和面授辅导相结合, 适应不同需求。学费低廉,分次交费。
                            </div>
                        </div>
                        <div class="promote-content-item orange" style="background: #ffb32c;">
                            <h3>电大 / 国开</h3>
                            <p>校考入学</p>
                            <div class="promote-content-item-pag">
                                正规学历,学信网可查。网络教学和面授辅导相结合, 适应不同需求。学费低廉,分次交费。
                            </div>
                        </div>
                        <div class="promote-content-item">
                            <h3>电大 / 国开</h3>
                            <p>校考入学</p>
                            <div class="promote-content-item-pag">
                                正规学历,学信网可查。网络教学和面授辅导相结合, 适应不同需求。学费低廉,分次交费。
                            </div>
                        </div>
                        <div class="promote-content-item orange" style="background: #ffb32c;">
                            <h3>电大 / 国开</h3>
                            <p>校考入学</p>
                            <div class="promote-content-item-pag">
                                正规学历,学信网可查。网络教学和面授辅导相结合, 适应不同需求。学费低廉,分次交费。
                            </div>
                        </div>
                    </div>
                    <div class="promote-bottom red-border">
                        了解报考详情 > >
                    </div>
                </div>
            </div>

            <div class="browse">
                <h1 class="h1">
                    <span class="red">100</span>次浏览
                    &nbsp
                    不如 <span class="red">1 </span>次问个清楚
                </h1>
                <div class="browse-content">
                    <div class="browse-content-wrapper">
                        <div class="browse-content-item"  >
                            <img src="../static/img/4_01.png" alt="" style="width:80px">
                            <p>报考人群</p>
                        </div>
                        <div class="browse-content-item" >
                            <img src="../static/img/4_02.png" alt="" style="width:80px">
                            <p>报考层次</p>
                        </div>
                        <div class="browse-content-item">
                            <img src="../static/img/4_03.png" alt="" style="width:80px">
                            <p>报考时间</p>
                        </div>
                        <div class="browse-content-item" >
                            <img src="../static/img/4_04.png" alt="" style="width:80px">
                            <p>报考途径</p>
                        </div>
                        <div class="browse-content-item"  >
                            <img src="../static/img/4_05.png" alt="" style="width:80px">
                            <p>学习方式</p>
                        </div>
                        <div class="browse-content-item">
                            <img src="../static/img/4_06.png" alt="" style="width:80px">
                            <p>专业推荐</p>
                        </div>
                        <div class="browse-content-item">
                            <img src="../static/img/4_07.png" alt="" style="width:80px">
                            <p>多久拿证</p>
                        </div>
                        <div class="browse-content-item" >
                            <img src="../static/img/4_08.png" alt="" style="width:80px">
                            <p>学习费用</p>
                        </div>
                    </div>
                </div>
                <div class="promote-bottom red-border">
                    咨询入口
                </div>
            </div>

            <div class="hot">
                <h1 class="h1">
                    高薪热门专业，涵盖各个行业
                </h1>
                <div class="hot-content" style="margin-top: 35px;">
                    <div class="hot-content-wrapper" >
                        <div class="hot-content-item" v-for="item in 5">
                            <div class="hot-content-item-left">财经管理类: </div>
                            <div class="hot-content-item-right">
                                <div v-for="item in 4" class="right-content">
                                    <span>土木工程</span>
                                </div>
                                <div class="more">+ 更多</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="question">
                <h1 class="h1">
                    您顾虑的问题，我们都能解决
                </h1>
                <div class="question-content">
                    <div class="question-content-wrapper">
                            <div class="question-content-item-left">
                                <div class="question-item" v-for="item in 5">
                                    大概多久能拿到证书
                                </div>
                            </div>
                            <div class="question-content-item-middle">
                                <div>
                                    <img src="../static/img/图层 56.png" alt="" style="width:110px;">
                                </div>
                                
                                <div class="watch-result">查看答案</div>
                            </div>
                            <div class="question-content-item-right">
                                <div class="question-item" v-for="item in 5">
                                    大概多久能拿到证书
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div class="benefit">
                <h1 class="h1">
                    提升一次学历，您将受益终生
                </h1>
                <div class="benefit-content" style="margin-top:35px">
                    <div class="benefit-content-wrapper">
                        <div class="benefit-content-item">
                            <div class="benefit-content-item-header">
                                升职加薪
                            </div>
                            <div class="benefit-content-item-body">
                                学历直接与工资、职位晋升挂钩
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item corn" style="background:#D1CDC7">
                            <div class="benefit-content-item-header">
                                升职加薪
                            </div>
                            <div class="benefit-content-item-body">
                                学历直接与工资、职位晋升挂钩
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item">
                            <div class="benefit-content-item-header">
                                升职加薪
                            </div>
                            <div class="benefit-content-item-body">
                                学历直接与工资、职位晋升挂钩
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item" style="background:#D1CDC7">
                            <div class="benefit-content-item-header">
                                升职加薪
                            </div>
                            <div class="benefit-content-item-body">
                                学历直接与工资、职位晋升挂钩
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                    </div>
                    <div class="benefit-content-wrapper" style="margin-top: 3px">
                        <div class="benefit-content-item" style="background:#D1CDC7">
                            <div class="benefit-content-item-header">
                                升职加薪
                            </div>
                            <div class="benefit-content-item-body">
                                学历直接与工资、职位晋升挂钩
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item corn" >
                            <div class="benefit-content-item-header">
                                升职加薪
                            </div>
                            <div class="benefit-content-item-body">
                                学历直接与工资、职位晋升挂钩
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item" style="background:#D1CDC7">
                            <div class="benefit-content-item-header">
                                升职加薪
                            </div>
                            <div class="benefit-content-item-body">
                                学历直接与工资、职位晋升挂钩
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item" >
                            <div class="benefit-content-item-header">
                                升职加薪
                            </div>
                            <div class="benefit-content-item-body">
                                学历直接与工资、职位晋升挂钩
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="certificate">
                <!-- <img src="../static/img/zheng.png" alt="" style="width:100%"> -->
                <div class="certificate-line"></div>
                <div class="certificate-name">
                    <div class="certificate-title">证书样本</div>
                </div>
                <div class="certificate-content">
                    <div class="certificate-content-item">
                        <img src="../static/img/国2.jpg" alt="" style="width:100%">
                    </div>
                    <div class="certificate-content-item">
                        <img src="../static/img/国2.jpg" alt="" style="width:100%">
                    </div>
                    <div class="certificate-content-item">
                        <img src="../static/img/国2.jpg" alt="" style="width:100%">
                    </div>
                    <div class="certificate-content-item">
                        <img src="../static/img/国2.jpg" alt="" style="width:100%">
                    </div>
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
            tabBar: ['远程教育','成人高考','电大国开','自学考试','院校毕业','热门专业'],
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
    overflow-y: scroll;
    overflow-x: hidden;
}
.header{
    height: 100px;
    padding-top: 20px;
    padding-left: 38px;
    background: #fff;
    display: flex;
    padding-top: 16px;
    color: #000;
}
.logo img {
}
.title{
    margin-left: 30px;
    flex: 1;
    color: #616161;
}
.title h2{
    font-weight: 400;
    font-size: 35px;
    margin-top: 18px;
    display: inline-block;
    vertical-align: top;
}
.phone{
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-right: 10px;
}
.phone .phone-top{
    width: 200px;
    line-height:26px;
    margin: 0 auto;
    border-radius: 20px;
    border: 1px dashed #aaa;
    display:flex;
    justify-content:center;
    align-items:center
}
.phone p{
    margin-top: 3px;
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
.tabbar{
    display: flex;
    padding: 0 10%;
    margin: 0 auto;
    line-height: 50px;
    font-size: 18px;
    justify-content: space-around;
    color: #fff;
    background: #2f97c6;
    cursor: pointer;
}
.overview{
    padding: 0 17%;
    text-align: center;
}
.overflow-img{
    /* padding: 0 10%; */
    width: 100%;
}
.overflow-img-wrapper{
    display: flex;
    position: relative;
    padding: 20px 0 60px 0;
    justify-content: center;
    background: #2496c6;
}
.overflow-img-item{
    width: 30%;
    box-sizing: border-box;
    text-align: center;
    flex: 1;
}
.circle{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    font-weight: 600;
    border: 13px solid #f7f7f7;
    position: absolute;
    top: -30%;
    left: 40%;
    box-sizing: border-box;
    background: #2f97c6;
    color: #fff;
    width: 180px;
    height: 180px;
    border-radius: 90px;
    line-height: 26px;
}
.h1{
    margin-top: 60px;
    font-size: 34px;
    text-align: center;
}
.pag-content{
    position: relative;
    margin: 10px 0 100px 0;
}
.pag-content::before{
    content:"";
    width: 31%;
    height: 0px;
    left: 0;
    top: 10px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.pag-content::after{
    content:"";
    width: 31%;
    height: 0px;
    right: 0;
    top: 10px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.project {
    padding: 0 17%;
    text-align: center;
}
.project_content{
    position: relative;
    margin: 5px 0 0px 0;
}
.project_content::before{
    content:"";
    width: 46%;
    height: 0px;
    left: 0;
    top: 17px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.project_content::after{
    content:"";
    width: 46%;
    height: 0px;
    right: 0;
    top: 17px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.project-content-wrapper {
    display: flex;
    justify-content: space-between;
}
.project-content-item{
    /* flex: 1; */
    box-sizing: border-box;
    height: 184px;
    width: 184px;
    border-radius: 50%;
    background: #2f97c6;
    color: #fff;
    padding: 15px;
    margin-top: 40px;
}
.project-content-item h3{
    margin-bottom: 16px;
    font-size: 24px;
    margin-top: 5px;
    font-weight: 500;
}
.project-content-item p{
    line-height: 22px;
    font-size: 14px;
}
.orange{
    background: #ffb32c;
}
.project-bottom{
    /* margin: 0 auto; */
}
.red-border{
    display: inline-block;
    padding: 5px 60px;
    color:#fff;
    letter-spacing: 3px;
    background: red;
    line-height: 24px;
    font-size: 20px;
    margin: 0 auto;
    margin-top: 35px;
    border-radius: 20px;
}
.promote {
    padding: 0 17%;
    text-align: center;
}
.promote-content-wrapper {
    display: flex;
    justify-content: space-between;
}
.promote-content-item{
    box-sizing: border-box;
    width: 24%;
    background: #2f97c6;
    color: #000;
    padding: 10px 10px 20px 10px;
    margin-top: 40px;
}
.promote-content-item h3{
    font-size: 24px;
    letter-spacing: 1px;
}
.promote-content-item p{
    margin: 8px 0 15px 0
}
.promote-content-item-pag{
    width: 70%;
    text-align: left;
    margin:0 auto;
}
.browse{
    padding: 0 17%;
    text-align: center;
}
.browse-content-wrapper{
    display: inline-block;
    width: 76%;
    margin-top: 40px;
    padding-bottom: 20px;
}
.browse-content-item{
    width: 24%;
    display: inline-block;
    box-sizing: border-box;
}
.hot{
    padding: 0 17%;
}

.hot-content-wrapper{
    
}
.hot-content-item{
    display: flex;
    margin-bottom:4px;
}
.hot-content-item-left{
    padding:10px 20px;
    font-weight: 700;
    background: #3597bc;
}
.hot-content-item-right{
    padding:10px 20px;
    display: flex;
    flex: 1;
    position: relative;
    background: #1274a1;
}
.right-content{
    margin-right: 20px;
}
.more{
    width: 50px;
    position: absolute;
    right:10px;
    top: 5px;
    font-size: 14px;
    text-align: center;
    color:#fff;
    border-radius: 8px;
    padding: 3px 7px;
    border: 1px solid #fff;
}
.question{
    padding: 0 17%;
}
.question-content-wrapper{
    display: flex;
    margin-top: 35px;
}
.question-content-item-left{
    flex: 1
}
.question-content-item-right{
    flex: 1
}
.question-item{
    padding: 5px 10px;
    border: 2px solid #0079ba;
    border-radius: 8px;
    margin-bottom: 10px;
    line-height: 22px;
    font-weight: 700;
    font-size: 14px;
}
.question-content-item-middle{
    width:200px;
    text-align: center;
}
.watch-result{
    display: inline-block;
    background: #3288AD;
    border-radius: 4px;
    line-height: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    width: 120px;
    margin-top: 15px;
    color: #fff;
    font-weight: normal;
}
.benefit{
    padding: 0 17%;
}
.benefit-content-wrapper{
    display: inline-block;
    width: 100%;
}
.benefit-content-item{
    width: 24%;
    display: inline-block;
    box-sizing: border-box;
    flex: 1;
    background: #FEFAF1;
    margin-right: 1%;
    padding:20px 10px 10px 10px;
    text-align: center;
}
.benefit-content-item-header{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
}
.benefit-content-item-body{
    font-weight: 700;
}
.benefit-content-item-footer{
    
    width: 60%;
    margin: 15px auto;
    margin-bottom: 0;
    background:#E66161;
    border-radius: 16px;
    padding: 5px 10px;
    line-height: 22px;;
    color:#fff;
}
.certificate{
    padding: 0 17%;
    margin-top: 60px;
    text-align: center;
    display: flex;
    padding-bottom: 60px;
    flex-direction: column;
}
.certificate-line{
    width: 99%;
    border-bottom: .5px solid red;
    box-shadow: 2px 2px 5px 2px red;
}
.certificate-name{
    font-size: 26px;
    margin-top:1px;
    
    
    display: flex;
    justify-content: center;
}
.certificate-title{
    width: 200px;
    color: #fff;
    font-weight: 700;
    padding: 5px 10px;
    background: red;
    letter-spacing: 2px;
    border-radius: 8px;
}
.certificate-content{
    width: 100%;
    display: inline-block;
}
.certificate-content-item{
    width:23%;
    display: inline-block;
    padding: 6px;
    border: 1px solid #bbb;
    margin-right: 2%;
    box-sizing: border-box;
}
.certificate-content-item:hover{
    transform:scale(1.1);
}
.certificate-content-item{
    margin-top: 40px;
}
</style>