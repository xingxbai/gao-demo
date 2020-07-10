<!--
 * @Author: your name
 * @Date: 2020-06-21 21:10:20
 * @LastEditTime: 2020-07-10 23:30:07
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
            <swiper ref="mySwipers" :options="swiperOptions" >
                <swiper-slide>
                    <img src="../static/img/001.jpg" alt="" style="width:100%;">
                </swiper-slide>
                <swiper-slide>
                    <img src="../static/img/002.jpg" alt="" style="width:100%;">
                </swiper-slide>
                <swiper-slide>
                    <img src="../static/img/01.jpg" alt="" style="width:100%;">
                </swiper-slide>
                <swiper-slide>
                    <img src="../static/img/02.jpg" alt="" style="width:100%;">
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
                <h1 class="h1" style="margin-top:50px">
                    大专本科<span class="red">报考信息概览</span>
                </h1>
                <div class="pag-content">
                    报考前你必须全面了解各种信息政策
                </div>
                <div class="overflow-img">
                    <div class="overflow-img-wrapper">
                        <div class="overflow-img-wrapper-item" style="position:relative;width:100%">
                            <img src="../static/img/bg.png" alt="" style="width:89%;margin-right: 16px;">
                            <p style="position:absolute;left:12%;top:242px;font-size:22px;color:#fff">初中毕业</p>
                            <p style="position:absolute;left:80%;top:251px;font-size:22px;color:#fff">高职毕业</p>
                            <p style="position:absolute;left:12%;bottom:-33px;font-size:22px;color:#fff">高中毕业</p>
                            <p style="position:absolute;left:45%;bottom:-33px;font-size:22px;color:#fff">大专毕业</p>
                            <p style="position:absolute;left:80%;bottom:-33px;font-size:22px;color:#fff">中专毕业</p>
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
                <h1 class="header-title h1" style="margin-top:70px">上班族专属
                    <span class="red">学历提升</span>
                    方案
                </h1>
                <div class="project_content" style="width:100%">
                    <img src="../static/img/灯泡.png" alt="" style="width:35px">
                </div>
                <div class="project-content">
                    <p>无论你什么学历，总有一种方案属于你</p>
                    <div class="project-content-wrapper">
                        <div class="project-content-item" style="margin-left:0">
                            <h3 class="project-content-item-title">专升本</h3>
                            <p style="margin-top:20px;font-size:16px">大学专科层次学生进入本科层次阶段学习。
                                <p>学制：2.5年</p>
                            </p>
                        </div>
                        <div class="project-content-item orange">
                            <h3 class="project-content-item-title">高起专</h3>
                            <p  style="margin-top:20px;font-size:16px">高中同等学历（高中、中专、中技、职高)起点学历报考专科学历。
                                <p>学制：2.5年</p>
                            </p>
                        </div>
                        <div class="project-content-item">
                            <h3 class="project-content-item-title">高起本</h3>
                            <p  style="margin-top:20px;font-size:16px">高中学历层次学生进入本科层级阶段学习。
                                <p>学制：5年</p>
                            </p>
                        </div>
                        <div class="project-content-item orange">
                            <h3 class="project-content-item-title">专本同读</h3>
                            <p  style="margin-top:20px;font-size:16px">报考专科的同时，学习并参加本科自学考试，学生在专科毕业的同时能获得自考本科文凭</p>
                        </div>
                    </div>
                    <div>
                        <div class="project-bottom red-border">
                            选择适合你的学历方案
                        </div>
                    </div>
                    
                </div>
            </div>
            <!-- <div class="wechat">
                <div class="wechat-compress">
                    <div class="wechat-compress-item" v-for="item in 4">
                        <img src="../static/img/img3.png" alt="">
                    </div>
                </div>
            </div> -->



            <div class="new">
                <h1 class="h1" style="margin-top:67px">2020年学历报考信息了解专区</h1>
                <div class="new-one">
                    <div class="new-one-swiper" style="width:425px;height:270px;margin-right:30px">
                        <swiper ref="mySwipers" :options="swiperOptions" >
                            <swiper-slide>
                                <img src="../static/img/wipe_pic1.png" alt="" style="width:100%;height:286px">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../static/img/wipe_pic2.png" alt="" style="width:100%;height:286px">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../static/img/wipe_pic3.png" alt="" style="width:100%;height:286px">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../static/img/wipe_pic5.png" alt="" style="width:100%;height:286px">
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                        </swiper>
                    </div>
                    <div class="new-one-info">
                        <h1>2020学历提升报考指南，新人必备</h1>
                        <div class="new-one-item-wrapper">
                            <div class="new-one-item">
                                <div class="new-one-item-content">2020年学历提升考试报名时间</div>
                                <div class="new-one-item-advisory">点击咨询</div>
                            </div>
                            <div class="new-one-item">
                                <div class="new-one-item-content">考试申请条件:基本条件,院校附加条件</div>
                                <div class="new-one-item-advisory">点击咨询</div>
                            </div>
                            <div class="new-one-item">
                                <div class="new-one-item-content">院校资讯:汇聚详细的自考院校专业信息</div>
                                <div class="new-one-item-advisory">点击咨询</div>
                            </div>
                            <div class="new-one-item">
                                <div class="new-one-item-content">深度解析交大、东北财大及其他名校考试申请的具体流程</div>
                                <div class="new-one-item-advisory">点击咨询</div>
                            </div>
                            <div class="new-one-item">
                                <div class="new-one-item-content">2020年学历提升报考指南:自考政策、招生简章、学制学费汇总</div>
                                <div class="new-one-item-advisory">点击咨询</div>
                            </div>
                            <div class="new-one-item">
                                <div class="new-one-item-content">28所自主划线院校招生简章汇总</div>
                                <div class="new-one-item-advisory">点击咨询</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                

                <div class="new-three">
                    <div class="new-three-left">
                        <h2 class="new-three-header">
                            <span>热点</span>
                            2020年学历报名备考指南</h2>
                        <div class="new-three-item" v-for="item in newThreeLeftData">
                            <div class="new-three-item-content">{{item}}</div>
                        </div>
                    </div>
                    <div class="new-three-right">
                        <h2 class="new-three-header">
                            <span>热点</span>
                            2020年学历报考事项咨询解答</h2>
                        <div class="new-three-item" v-for="item in newThreeRightData">
                            <div class="new-three-item-content">{{item}}</div>
                        </div>
                    </div>
                </div>

                <div class="new-two">
                    <div class="new-two-wrapper">
                        <div class="new-two-item" v-for="item in newTwoData">
                            {{item}}>>
                        </div>
                    </div>
                </div>
            </div>


             <div class="promote">
                <h1 class="header-title h1" style="margin-top:70px">提升学历
                    <span>四大</span>
                    <span class="red">正规形式</span>解析
                </h1>
                <div class="promote_content">
                    <img src="../static/img/灯泡.png" alt="" style="width:35px">
                </div>
                <div class="promote-content">
                    <p>总有一种适合你</p>
                    <div class="promote-content-wrapper">
                        <div class="promote-content-item" style="margin-left: 30px">
                            <h3 class="project-content-item-title">电大 / 国开</h3>
                            <p>校考入学</p>
                            <div class="promote-content-item-pag">
                                正规学历,学信网可查。网络教学和面授辅导相结合, 适应不同需求。学费低廉,分次交费。
                            </div>
                            <div class="detail-wrapper">
                                <div class="detail">电大咨询入口</div>
                            </div>
                        </div>
                        <div class="promote-content-item orange" style="background: #ffb32c;">
                            <h3 class="project-content-item-title">远程教育</h3>
                            <p>校考入学</p>
                            <div class="promote-content-item-pag">
                                正规学历，学信网可查。无地域限制，上课时间灵活。网络教学，与时俱进。211、985名校证书。
                            </div>
                            <div class="detail-wrapper">
                                <div class="detail">成考咨询入口</div>
                            </div>
                        </div>
                        <div class="promote-content-item">
                            <h3 class="project-content-item-title">成人高考</h3>
                            <p>统考入学</p>
                            <div class="promote-content-item-pag">
                                正规学历，学信网可查。全国统一考试,弥补高考落榜/错过的遗憾。在职也能考学历。
                            </div>
                            <div class="detail-wrapper">
                                <div class="detail">远程咨询入口</div>
                            </div>
                        </div>
                        <div class="promote-content-item orange" style="background: #ffb32c;">
                            <h3 class="project-content-item-title">自学考试</h3>
                            <p>免试入学</p>
                            <div class="promote-content-item-pag">
                                正规学历，学信网可查。考试难度大，认可度高;学历不限，毕业时间短;费用低，在职修学历。
                            </div>
                            <div class="detail-wrapper">
                                <div class="detail">自考咨询入口</div>
                            </div>
                        </div>
                    </div>
                    <div class="promote-bottom red-border" style="margin-top:50px;margin-bottom:60px">
                        了解报考详情 > >
                    </div>
                </div>
            </div>


            
            <div class="browse" style="padding-bottom:50px">
                <h1 class="h1" style="margin-top:20px">
                    <span class="red">100</span>次浏览
                    &nbsp
                    不如 <span class="red">1 </span>次问个清楚
                </h1>
                <div class="browse-content">
                    <div class="browse-content-wrapper">
                        <div class="browse-content-item"  >
                            <img src="../static/img/4_01.png" alt="" style="width:120px">
                            <p>报考人群</p>
                        </div>
                        <div class="browse-content-item" >
                            <img src="../static/img/4_02.png" alt="" style="width:120px">
                            <p>报考层次</p>
                        </div>
                        <div class="browse-content-item">
                            <img src="../static/img/4_03.png" alt="" style="width:120px">
                            <p>报考时间</p>
                        </div>
                        <div class="browse-content-item" >
                            <img src="../static/img/4_04.png" alt="" style="width:120px">
                            <p>报考途径</p>
                        </div>
                        <div class="browse-content-item"  >
                            <img src="../static/img/4_05.png" alt="" style="width:120px">
                            <p>学习方式</p>
                        </div>
                        <div class="browse-content-item">
                            <img src="../static/img/4_06.png" alt="" style="width:120px">
                            <p>专业推荐</p>
                        </div>
                        <div class="browse-content-item">
                            <img src="../static/img/4_07.png" alt="" style="width:120px">
                            <p>多久拿证</p>
                        </div>
                        <div class="browse-content-item" >
                            <img src="../static/img/4_08.png" alt="" style="width:120px">
                            <p>学习费用</p>
                        </div>
                    </div>
                </div>
                <div class="promote-bottom red-border" style="margin-top:0px">
                    咨询入口
                </div>
            </div>
           



            <div class="hot">
                <h1 class="h1" style="margin-top:60px">
                    高薪热门专业，涵盖各个行业
                </h1>
                <div class="hot-content" style="margin-top: 35px;">
                    <div class="hot-content-wrapper" >
                        <div class="hot-content-item">
                            <div class="hot-content-item-left">财经管理类: </div>
                            <div class="hot-content-item-right">
                                <div class="right-content">
                                    <span>工商管理</span>
                                </div>
                                <div class="right-content">
                                    <span>会计学</span>
                                </div>
                                <div class="right-content">
                                    <span>行政管理</span>
                                </div>
                                <div class="right-content">
                                    <span>人力资源</span>
                                </div>
                                <div class="right-content">
                                    <span>经济学</span>
                                </div>
                                <div class="right-content">
                                    <span>金融学</span>
                                </div>
                                <div class="right-content">
                                    <span>法学</span>
                                </div>
                                <div class="more">+ 更多</div>
                            </div>
                        </div>

                        <div class="hot-content-item">
                            <div class="hot-content-item-left"  style="background:#64A5C3">土建类: </div>
                            <div class="hot-content-item-right">
                                <div class="right-content">
                                    <span>土木工程</span>
                                </div>
                                <div class="right-content">
                                    <span>建设工程管理</span>
                                </div>
                                <div class="right-content">
                                    <span>工程造价</span>
                                </div>
                                <div class="right-content">
                                    <span>道路桥梁</span>
                                </div>
                                <div class="right-content">
                                    <span>水利水电</span>
                                </div>
                                <div class="right-content">
                                    <span>电气工程</span>
                                </div>
                                <div class="more">+ 更多</div>
                            </div>
                        </div>

                        <div class="hot-content-item">
                            <div class="hot-content-item-left">师范语言类: </div>
                            <div class="hot-content-item-right">
                                <div class="right-content">
                                    <span>汉语言文学</span>
                                </div>
                                <div class="right-content">
                                    <span>教育管理</span>
                                </div>
                                <div class="right-content">
                                    <span>小学教育</span>
                                </div>
                                <div class="right-content">
                                    <span>学前教育</span>
                                </div>
                                <div class="right-content">
                                    <span>英语</span>
                                </div>
                                <div class="right-content">
                                    <span>教育技术学</span>
                                </div>
                                <div class="more">+ 更多</div>
                            </div>
                        </div>

                        <div class="hot-content-item">
                            <div class="hot-content-item-left" style="background:#64A5C3">计算机类: </div>
                            <div class="hot-content-item-right">
                                <div class="right-content">
                                    <span>计算机科学与技术</span>
                                </div>
                                <div class="right-content">
                                    <span>计算机信息管理</span>
                                </div>
                                <div class="right-content">
                                    <span>计算机网络技术</span>
                                </div>
                                <div class="right-content">
                                    <span>通信工程</span>
                                </div>
                                <div class="more">+ 更多</div>
                            </div>
                        </div>

                        <div class="hot-content-item">
                            <div class="hot-content-item-left">机械制造类: </div>
                            <div class="hot-content-item-right">
                                <div class="right-content">
                                    <span>机电一体化</span>
                                </div>
                                <div class="right-content">
                                    <span>机械设计制造及其自动化</span>
                                </div>
                                <div class="right-content">
                                    <span>机械工程</span>
                                </div>
                                <div class="more">+ 更多</div>
                            </div>
                        </div>

                        <div class="hot-content-item">
                            <div class="hot-content-item-left" style="background:#64A5C3">其他热门: </div>
                            <div class="hot-content-item-right">
                                <div class="right-content">
                                    <span>护理学</span>
                                </div>
                                <div class="right-content">
                                    <span>药学</span>
                                </div>
                                <div class="right-content">
                                    <span>药品经营与管理</span>
                                </div>
                                <div class="right-content">
                                    <span>动物医学</span>
                                </div>
                                <div class="right-content">
                                    <span>能源与动力工程</span>
                                </div>
                                <div class="right-content">
                                    <span>物流管理</span>
                                </div>
                                <div class="more">+ 更多</div>
                            </div>
                        </div>
                    </div>
                    <div class="promote-bottom red-border" style="margin-top:30px">
                        其他专业咨询
                    </div>
                </div>
            </div>


            <div class="question">
                <h1 class="h1" style="margin-bottom:42px">
                    您顾虑的问题，我们都能解决
                </h1>
                <div class="question-content">
                    <div class="question-content-wrapper">
                            <div class="question-content-item-left">
                                <div class="question-item">
                                    <div style="flex:1">
                                        大概多久能拿到证书?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;width:75px;height:35px">查看答案</div>
                                </div>
                                <div class="question-item">
                                    <div style="flex:1">
                                        学历含金量高不高?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;height:35px">查看答案</div>
                                </div>
                                <div class="question-item">
                                    <div style="flex:1">
                                        需要到校参加考试么?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;height:35px">查看答案</div>
                                </div>
                                <div class="question-item">
                                    <div style="flex:1">
                                        有没有不用去学校的，简单的?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;height:35px">查看答案</div>
                                </div>
                                <div class="question-item">
                                    <div style="flex:1">
                                        工作忙，时间少，怎么升学历?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;height:35px">查看答案</div>
                                </div>
                            </div>
                            <div class="question-content-item-middle">
                                <div>
                                    <img src="../static/img/图层 56.png" alt="" style="width:140px;">
                                </div>
                                <div class="watch-result">查看更多常见问题></div>
                            </div>
                            <div class="question-content-item-right">
                                <div class="question-item">
                                    <div style="flex:1">
                                        初中毕业可以升学历吗?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;height:35px">查看答案</div>
                                </div>
                                <div class="question-item">
                                    <div style="flex:1">
                                        考证时间多长?有简单的吗?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;height:35px">查看答案</div>
                                </div>
                                <div class="question-item">
                                    <div style="flex:1">
                                        女生学习什么专业好呢?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;height:35px">查看答案</div>
                                </div>
                                <div class="question-item">
                                    <div style="flex:1">
                                        既便宜又好过的是哪种?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;height:35px">查看答案</div>
                                </div>
                                <div class="question-item">
                                    <div style="flex:1">
                                        可以不去学校上课吗?
                                    </div>
                                    <div style="background:#2F97C6;padding: 0px 12px;color:#FFF;width:75px;height:35px">查看答案</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            
            

            <div style="display:flex;justify-content: center;font-size: 50px;text-align: center;
            margin-top:40px;background:#EEF3F9;padding-top:40px;">
                <h1 style="font-size:50px">知识改变命运</h1>
                <div style="width:4px;height:50px;background:red;margin:9px 8px"></div>
                <h1 style="font-size:50px">学历祝你成功</h1>
            </div>

            <div class="many-img" style="
                    margin: 20px auto;
                    padding-bottom:40px;
                    padding-top: 40px;
                    background:#EEF3F9;
                    display: flex;
                    margin-top: 0px;
                    justify-content: center;">
                <div class="img-container">
                    <div class="many-img-item-wrapper">
                    <div class="many-img-item" style="margin-top: 65px; text-align: right;">
                        <img src="../static/img/1.jpg" alt="" style="width: 320px;" />
                    </div>

                    <div class="many-img-item">
                        <img src="../static/img/2.png" alt="" style="width: 320px;" />
                    </div>
                    <div class="many-img-item" style="margin-top: 42px;">
                        <img src="../static/img/3.png" alt="" style="width: 320px;" />
                    </div>
                    </div>
                    <div class="many-img-item" style="margin-left: 330px; position: relative; height: 209px;">
                    <img src="../static/img/7.png" alt="" style="width: 320px; position: absolute; top: -18px;" />
                    </div>

                    <div class="many-img-item-wrapper">
                    <div class="many-img-item" style="margin-top: -31px;">
                        <img src="../static/img/4.png" alt="" style="width: 320px;" />
                    </div>

                    <div class="many-img-item" style="margin-top: 16px;">
                        <img src="../static/img/5.png" alt="" style="width: 320px;" />
                    </div>
                    <div class="many-img-item" style="margin-top: -30px;">
                        <img src="../static/img/6.png" alt="" style="width: 320px;" />
                    </div>
                    </div>
                </div>
            </div>



            <div class="benefit">
                <h1 class="h1" style="margin-top:70px;margin-bottom:45px">
                    提升一次学历，您将受益终生
                </h1>
                <div class="benefit-content" style="margin-top:20px;font-size:16px">
                    <div class="benefit-content-wrapper">
                        <div class="benefit-content-item" >
                            <div class="benefit-content-item-header">
                                升职加薪
                            </div>
                            <div class="benefit-content-item-body">
                                <p>学历直接与工资、职位</p>
                                <p>晋升挂钩</p>
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item" style="background:#9D9D9D">
                            <div class="benefit-content-item-header">
                                职称评定
                            </div>
                            <div class="benefit-content-item-body">
                                <p>高学历是评定职称</p>
                                <p>的加分项</p>
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item" >
                            <div class="benefit-content-item-header">
                                考研深造
                            </div>
                            <div class="benefit-content-item-body">
                                <p>本科学历是考研的</p>
                                <p>基本条件</p>
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item corn" style="background:#9D9D9D">
                            <div class="benefit-content-item-header">
                                出国留学
                            </div>
                            <div class="benefit-content-item-body">
                                <p>许多国家承认我国的</p>
                                <p>成人本科学历</p>
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                    </div>
                    <div class="benefit-content-wrapper" style="margin-top:6px">
                        <div class="benefit-content-item" style="background:#9D9D9D">
                            <div class="benefit-content-item-header">
                                考资格证书
                            </div>
                            <div class="benefit-content-item-body">
                                <p>学历是考某些资格证</p>
                                <p>的必要条件</p>
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item" >
                            <div class="benefit-content-item-header">
                                求职就业
                            </div>
                            <div class="benefit-content-item-body">
                                <p>学历是找到好工作</p>
                                <p>的敲门砖</p>
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item" style="background:#9D9D9D">
                            <div class="benefit-content-item-header">
                                考公务员
                            </div>
                            <div class="benefit-content-item-body">
                                <p>大专以上学历可参加</p>
                                <p>公务员考试</p>
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                        <div class="benefit-content-item corn" >
                            <div class="benefit-content-item-header">
                                积分落户
                            </div>
                            <div class="benefit-content-item-body">
                                <p>学历越高，积分落户</p>
                                <p>越容易</p>
                            </div>
                            <div class="benefit-content-item-footer">
                                点击了解
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div class="certificate">
                <img src="../static/img/zheng.png" alt="" style="width:90%;margin-left:5%;height:65px;transform:scaleY(0.9);">
                <!-- <div class="certificate-line"></div>
                <div class="certificate-name">
                    <div class="certificate-title">证书样本</div>
                </div> -->
                <div class="certificate-content">
                    <swiper ref="mySwiper" :options="swiperOptions2" style="height:320px;position:relative;vertical-align:middle;">
                        <swiper-slide style="position:relative;vertical-align:middle;display:flex;align-items:center;">
                            
                                <img src="../static/img/国3.jpg" alt="" style="width:90%">
                        </swiper-slide>
                        <swiper-slide style="position:relative;vertical-align:middle;display:flex;align-items:center;">
                            
                                <img src="../static/img/国4.png" alt="" style="width:90%">
                        </swiper-slide>
                        <swiper-slide style="position:relative;vertical-align:middle;display:flex;align-items:center;">
                            
                                <img src="../static/img/国开学位证.jpg" alt="" style="width:90%">
                        </swiper-slide>
                        <swiper-slide style="position:relative;vertical-align:middle;display:flex;align-items:center;">
                            
                                <img src="../static/img/1236.jpg" alt="" style="width:90%">
                        </swiper-slide>
                        
                        <swiper-slide style="position:relative;vertical-align:middle;display:flex;align-items:center;">
                            
                                <img src="../static/img/国9.jpg" alt="" style="width:90%">
                        </swiper-slide>
                        <!-- <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div> -->
                    </swiper>
                    <!-- <div class="certificate-content-item">
                        <img src="../static/img/国3.jpg" alt="" style="width:100%">
                    </div>
                    <div class="certificate-content-item">
                        <img src="../static/img/国4.png" alt="" style="width:100%">
                    </div>
                    <div class="certificate-content-item">
                        <img src="../static/img/国开学位证.jpg" alt="" style="width:100%">
                    </div>
                    <div class="certificate-content-item">
                        <img src="../static/img/1236.jpg" alt="" style="width:100%">
                    </div> -->
                </div>
            </div>


            <div class="header" style="background:#2496C6">
            <div class="logo">
                <img src="../static/img/img3.png" alt="" style="width: 85px">
            </div>
            <div class="title" style="color:#fff">
                <h2>成人学历提升中心</h2>
            </div>
            <div class="phone" style="padding-right:50px">
                <!-- <img src="https://zh.xuehuiwang.com/newpower/baidu/search/xueli/3/images/phone1.png" alt=""> -->
                <div class="phone-top" style="width:300px;height:50px;right: 10px;left:0;margin-top:10px;color:#fff;border:1px dashed #fff"> 
                    <img src="../static/img/座机.png" alt="" style="width:30px;margin-right:5px;">
                    <p style="letter-spacing: 1px;color:#fff;font-size:30px">
                        029 - 88758048
                    </p>
                </div>
            </div>
        </div>
        </div>
        <div class="rightbar">
            <button type="button" class="rightbar-btn" onclick="return openJesongChatByGroup(12521,19467);">热门院校</button>
            <button type="button" class="rightbar-btn" onclick="return openJesongChatByGroup(12521,19467);">易过专业</button>
            <button type="button" class="rightbar-btn" onclick="return openJesongChatByGroup(12521,19467);">加分政策</button>
            <button type="button" class="rightbar-btn" onclick="return openJesongChatByGroup(12521,19467);">免考科目</button>
            <button type="button" class="rightbar-btn" onclick="return openJesongChatByGroup(12521,19467);">免考条件</button>
            <button type="button" class="rightbar-btn" onclick="return openJesongChatByGroup(12521,19467);">考前资料</button>
            <button type="button" class="rightbar-btn" onclick="return openJesongChatByGroup(12521,19467);">助&nbsp;学&nbsp;金</button>
            <button type="button" class="rightbar-btn" onclick="return openJesongChatByGroup(12521,19467);">毕业时间短</button>
            <button type="button" class="rightbar-btn" onclick="return openJesongChatByGroup(12521,19467);">更&nbsp;&nbsp;&nbsp;&nbsp;多</button>
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
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                    loop:true
                },
                loop:true
                
            },
            swiperOptions2: {
                slidesPerView: 3,
                autoplay: {
            　　　　delay: 3000,
            　　    disableOnInteraction: false
　　            },   //页面分组显示，这里显示为3组
                spaceBetween:10,
                loop: true,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper 
　　            observeParents:true,
            },
            tabBar: ['电大国开','远程教育','成人高考','自学考试','院校毕业','热门专业'],
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
            ],
            newTwoData: ['考试时间','考试科目','考试教材','报名咨询','报名条件','毕业时间','学位咨询'],
            newThreeLeftData: ['[动态]    关于2020年成人学历报考通告>>','[动态]    关于2020年成人学历招生简章>>','[动态]    2020年成人学历报考管理办法>>','[动态]    2020年上半年学历报考院校及专业咨询>>'],
            newThreeRightData: ['[政策]    2020年学历报考及考试政策信息汇总>>','[试听]    学历考试培训课程免费试听>>','[经验]    新生学历报考备考经验>>','[模拟]    学历报考各专业考试模拟题汇总>>']
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
    padding-top: 6px;
    padding-right: 10px;
}
.phone .phone-top{
    width: 200px;
    line-height:37px;
    margin: 0 auto;
    border-radius: 20px;
    padding: 0 15px;
    border: 1px dashed #aaa;
    display:flex;
    font-size: 20px;
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
    padding: 0 14%;
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
    top: -23%;
    left: 39%;
    box-sizing: border-box;
    background: #2f97c6;
    color: #fff;
    width: 240px;
    height: 240px;
    border-radius: 120px;
    line-height: 26px;
    font-size: 30px;
}
.circle:hover{
    color: red;
}
.circle p {
    line-height: 48px;
}
.h1{
    margin-top: 100px;
    font-size: 50px;
    text-align: center;
}
.pag-content{
    position: relative;
    font-size: 22px;
    margin: 10px 0 140px 0;
}
.pag-content::before{
    content:"";
    width: 32%;
    height: 0px;
    left: 0;
    top: 16px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.pag-content::after{
    content:"";
    width: 32%;
    height: 0px;
    right: 0;
    top: 16px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.project {
    padding: 1px 0 60px 0;
    width: 100%;
    margin: auto;
    background: #EEF3F9;
    text-align: center;
}
.project h1{
    margin-top: 20px
}
.project_content{
    width: 72%;
    position: relative;
    
    margin: 0 auto;
    margin-top: 5px;
    display: flex;
    text-align: center;
    justify-content: center;
}
.project_content::before{
    content:"";
    width: 34%;
    height: 0px;
    left: 14%;
    top: 17px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.project_content::after{
    content:"";
    width: 34%;
    height: 0px;
    right: 14%;
    top: 17px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.promote_content{
    width: 72%;
    position: relative;
    
    margin: 0 auto;
    margin-top: 5px;
    display: flex;
    text-align: center;
    justify-content: center;
}
.promote_content::before{
    content:"";
    width: 47%;
    height: 0px;
    left: 0;
    top: 17px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.promote_content::after{
    content:"";
    width: 47%;
    height: 0px;
    right: 0;
    top: 17px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #aaa;
}
.project-content{
    font-size: 22px;
}
.project-content-wrapper {
    display: inline-block;
    
    /* justify-content: space-around; */
}
.project-content-item{
    /* flex: 1; */
    display: inline-block;
    box-sizing: border-box;
    width: 237px;
    height: 237px;
    margin-left: 40px;
    vertical-align: middle;
    border-radius: 50%;
    background: #2f97c6;
    color: #fff;
    padding:40px 15px 15px 15px;
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
    padding: 10px 60px;
    color:#fff;
    letter-spacing: 3px;
    background: red;
    line-height: 24px;
    font-size: 24px;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 20px;
}
.red-border:hover{
    font-size: 26px;
}
.promote {
    /* padding: 0 14%; */
    text-align: center;
    width: 100%;
    margin: auto;
}
.promote-content{
    font-size: 22px;
}
.promote-content-wrapper {
    display: flex;
    width: 76%;
    justify-content: center;
    margin: auto;
    /* justify-content: space-around; */
}
.promote-content-item{
    box-sizing: border-box;
    /* width: 24%; */
    /* flex: 1; */
    position: relative;
    width: 262px;
    height: 375px;
    margin-right: 15px;
    background: #2f97c6;
    color: #000;
    padding: 10px 5px 20px 5px;
    margin-top: 40px;
}
.promote-content-item h3{
    font-size: 36px;
        color: #000;
    font-weight: bold;
    margin-top: 18px;
    letter-spacing: 1px;
}
.promote-content-item p{
    margin: 8px 0 15px 0
}
.promote-content-item-pag{
    padding: 0 10px 20px 10px;
    text-align: left;
    color: #000;
    width: 200px;
    margin: 0 auto;
    font-size: 18px;
    text-align: left;
    line-height: 26px;
}
.browse {
    padding: 1px 0 20px 0;
    width: 100%;
    /* margin: auto; */
    /* background: #EEF3F9; */
    text-align: center;
}
.browse h1{
    margin-top: 20px
}
.browse-content-wrapper{
    display: inline-block;
    margin: auto;
    width: 80%;
    margin-top: 40px;
}
.browse-content-item{
    width: 24%;
    margin-bottom: 67px;
    line-height: 26px;
    display: inline-block;
    box-sizing: border-box;
}
.browse-content-item p {
    margin-top: 20px;
    font-size: 22px;
}
/* .hot{
    padding: 0 14%;
} */
.hot {
    padding: 1px 0 30px 0;
    width: 100%;
    /* margin: auto; */
    background: #EEF3F9;
    text-align: center;
}
.hot h1{
    margin-top: 20px
}
.hot-content-wrapper{
    width: 72%;
    margin: 0 auto;
}
.hot-content-item{
    display: flex;
    line-height: 35px;
    font-size: 24px;
    margin-bottom:10px;
}
.hot-content-item-left{
    padding:10px 20px;
    width: 130px;
    text-align: center;
    font-weight: 700;
    background: #3597bc;
}
.hot-content-item-right{
    padding:10px 40px 10px 30px;
    display: flex;
    font-weight: 700;
    font-size: 18px;
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
    line-height: 30px;
    top: 9px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color:#fff;
    border-radius: 8px;
    padding: 3px 7px;
    border: 1px solid #fff;
}
.question {
    padding: 1px 0 20px 0;
    width: 72%;
    margin: auto;
    text-align: center;
    margin-top: 40px;
}
.question h1{
    margin-top: 20px
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
    padding: 5px 10px 5px 15px;
    line-height: 35px;
    text-align: left;
    display: flex;
    border: 2px solid #0079ba;
    border-radius: 8px;
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 18px;
}
.question-content-item-middle{
    width:270px;
    text-align: center;
    margin-top: 20px
}
.watch-result{
    display: inline-block;
    background: #DD6C6A;
    border-radius: 4px;
    line-height: 30px;
    padding: 5px 10px;
    box-sizing: border-box;
    width: 160px;
    margin-top: 78px;
    color: #fff;
    font-weight: normal;
    width: 213px;
    height: 40px;
    background-color: red;
    font-family: 'SimHei', 'Microsoft Yahei';
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;
}
.watch-result:hover{
    opacity: .8;
}
/* .benefit{
    padding: 0 14%;
} */
.benefit {
    width: 100%;
}
.benefit-content-wrapper{
    display: inline-block;
    width: 100%;
    text-align: center;
}
.benefit-content-item{
    /* width: 23%; */
    width: 248px;
    height: 197px;
    display: inline-block;
    box-sizing: border-box;
    /* flex: 1; */
    background: #FEFAF1;
    margin-right: 5px;
    padding:20px 10px 10px 10px;
    text-align: center;
    position: relative;
}
/* .benefit-content-item:hover{
    transform:scale(1.05);
} */
.benefit-content-item-header{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 15px;
        font-family: 'PingFangSC-Semibold';
    font-size: 30px;
    letter-spacing: 2px;
    color: #2a2a2a;
    text-align: center;
    margin-bottom: 20px;
}
.benefit-content-item-body p{
    font-weight: 700;
    font-family: 'SimHei', 'Microsoft Yahei';
    font-size: 16px;
    letter-spacing: 1px;
    color: #2a2a2a;
    text-align: center;
    margin-top: 10px;
}
.benefit-content-item-footer{
    position: absolute;
    left: 30px;
    bottom: 20px;
    margin: 15px auto;
    margin-bottom: 0;
    background:#E66161;
    border-radius: 16px;
    color:#fff;
        width: 163px;
    height: 36px;
    background-color: #dd6c6a;
    border-radius: 17px;
    margin-top: 18px;
    margin-left: 12px;
    font-family: 'PingFangSC-Medium';
    font-size: 18px;
    line-height: 36px;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;

}
.benefit-content-item-footer:hover{
    transform:scale(1.1);
}
.certificate{
    padding: 0 14%;
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
    border-top-width: 0;
    letter-spacing: 2px;
    border-radius: 8px;
}
.certificate-content{
    width: 100%;
    display: inline-block;
}
.certificate-content-item{
    /* width:95%; */
    /* display: inline-block;
    padding: 5px 5px 0 5px;
    border: 1px solid #bbb;
    margin-right: 2%;
    vertical-align: middle;
    box-sizing: border-box; */
    text-align: left;
    
    border: 1px solid #bbb;
}
.certificate-content-item:hover{
    transform:scale(1.1);
}
.certificate-content-item{
    margin-top: 40px;
}
.tabbar-item{
    width: 80px;
}
.tabbar-item:hover{
    font-size: 20px;
}
.project-content-item-title:hover{
    color:#f40;
}
.wechat{
    display: flex;
    padding: 0 14%;
}
.wechat-compress{
    display: flex;
}
.detail{
    position: absolute;
    bottom: 30px;
    font-size: 20px!important;
    border-radius: 40px;
    width: 180px;
    height: 50px;
    font-weight: bold;
    line-height: 50px;
    display: block;
    background: #F02626;
    text-align: center;
    color: #fff;
}
.detail-wrapper{
    display: flex;
    justify-content: center;
}

.new{
    width: 72%;
    margin: 60px auto 50px auto;
}
.new-one{
    display: flex;
    margin-top: 40px;
}
.new-one-info{
    flex: 1;
    border: 1px solid #eae7e3;
    -webkit-box-shadow: 1px 2px 3px 0 #f0ece7;
    box-shadow: 1px 2px 3px 0 #f0ece7;
    border-radius: 5px;
    background: #fff;
}
.new-one-info h1{
    height: 51px;
    width: 68%;
    line-height: 51px;
    padding-left: 20px;
    background: #2496C6;
    font-size: 26px;
    font-weight: 400;
    color: #333;
    border-radius: 0 0 100px 0;
}
.new-one-item-wrapper{
    padding-bottom: 15px;
}

.new-one-item{
    margin-top: 11.4px;
    padding: 0 20px 0 18px;
    display: flex;
    font-size: 18px;
}
.new-one-item-content{
    flex: 1;
}
.new-one-item-advisory{
    background: #2496C6;
    border-radius: 6px;
    color: #fff;
    display: block;
    float: right;
    width: 89px;
    height: 25px;
    line-height: 25px;
    text-align: center;
}
.new-one-item-advisory:hover{
    color: red;
}
.new-two-wrapper{
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
}
.new-two-item{
    /* flex: 1; */
    height: 40px;
    width: 120px;
    background: #2496C6;
    font-family: "Microsoft YaHei",Arial;
    font-size: 12px;
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    border-radius: 2px;
}
.new-three{
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    
}
.new-three-left{
    
}
.new-three-header{
    font-size: 30px;
    font-weight: 400;
    color: #252525;
    font-family: "Microsoft YaHei",Arial;
    padding-bottom: 10px;
    margin: 0 0 0px 0;
}

.new-three-header span{
    background: #2496C6;
    color: #fff;
    padding: 0 2px;
    font-size: 16px;
}

.new-three-right{

}
.new-three-item{
    font-size: 18px;
    color: #555555;
    line-height: 35px;
    font-family: "Microsoft YaHei",Arial;
}

.new-three-item:hover{
    color: red;
};


.many-img {
    width: 80%;
    margin: 0 auto;
    padding-top: 60px;
    display: flex;
    justify-content: center;
}
.many-img-item-wrapper {
    display: flex;
    width: 100%;
}
.many-img-item-wrapper img {
}
.many-img-item {
    /* flex: 1; */
    /* width: 33%; */
    box-sizing: border-box;
    margin-right: 10px;
}
.re {
    position: relative;
}
.new-two-item:hover{
    color: red;
}

.rightbar {
    background: url("../static/img/rightbar-bg.png") no-repeat 0 0;
    width: 134px;
    height: 516px;
    position: fixed;
    top: 50%;
    right: 0;
    margin-top: -258px;
    z-index: 9999;
    padding-top: 163px;
}
.rightbar-btn {
    background: url("../static/img/rightbar-btn.png") no-repeat 0 0;
    width: 120px;
    height: 35px;
    border: none;
    font-size: 18px;
    color: #403400;
    font-weight: 600;
    display: block;
    margin: 0 0 4px 13px;
}

</style>
