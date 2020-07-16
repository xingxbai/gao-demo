<!--
 * @Author: your name
 * @Date: 2020-07-13 23:41:59
 * @LastEditTime: 2020-07-13 23:51:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\components\phonePage.vue
--> 
<template>
    <div class="phone">
        <h1>this is phone page</h1>

        <swiper ref="mySwipers" :options="swiperOptions"  >
                    <swiper-slide>
                        <img src="../static/img/001.jpg" alt="" style="width:100vw;">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../static/img/01.jpg" alt="" style="width:100vw;">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../static/img/02.jpg" alt="" style="width:100vw;">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
    </div>
</template>

<script>
export default {
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
        }
    }
}
</script>

<style>

</style>