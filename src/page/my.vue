<template>
    <div class="wrapper">
        <div class="container">
            <div class="header">
                <img src="../../static/image/my_1.png" alt="" class="new">
                <div class="desc">
                    <img src="../../static/image/logo.jpg" alt="" class="avatar">
                    <div class="right">
                        <div class="first-line">
                            <div class="name">廖慧儿</div>
                            <div class="do">编辑简历</div>
                        </div>
                        <div class="second-line">
                            <div class="type">应届生</div>
                            <div class="progress">完善度 100%</div>
                        </div>
                    </div>
                    <img src="../../static/image/right1.png" class="logo" alt="">
                </div>
            </div>
            <div class="nav">
                <div class="conmunicate">
                    <div class="number">63</div>
                    <div class="text">沟通过</div>
                </div>
                <div class="conmunicate">
                    <div class="number">26</div>
                    <div class="text">已投递</div>
                </div>
                <div class="conmunicate">
                    <div class="number">4</div>
                    <div class="text">待面试</div>
                </div>
            </div>
            <div class="content">
                <div class="item" v-for="item in lists" :key="item.id">
                    <img :src="item.src" alt="" class="picture">
                    <span class="describe">{{item.text}}</span>
                </div>
            </div>
            <div class="section">
                <div class="list">
                    <img src="../../static/image/my_10.png" alt="" class="left">
                    <span class="title">通知</span>
                    <img src="../../static/image/right2.png" alt="" class="turn">
                </div>
                <div class="list">
                    <img src="../../static/image/my_11.png" alt="" class="left">
                    <span class="title">隐私设置</span>
                    <img src="../../static/image/right2.png" alt="" class="turn">
                </div>
            </div>
            <div class="footer">
                <div class="list">
                    <img src="../../static/image/my_12.png" alt="" class="left">
                    <span class="title">Boss直聘兑换码</span>
                    <img src="../../static/image/right2.png" alt="" class="turn">
                </div>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../components/public/Tabbar/tabbar'
export default {
    name:'my',
    components:{
        tabbar
    },
    data () {
        return{
            lists:[
                {
                    id:0,
                    src:'../../static/image/my_2.png',
                    text:'小秘书'
                },
                {
                    id:1,
                    src:'../../static/image/my_3.png',
                    text:'上传简历'
                },
                {
                    id:2,
                    src:'../../static/image/my_4.png',
                    text:'关注公司'
                },
                {
                    id:3,
                    src:'../../static/image/my_5.png',
                    text:'登录网页版'
                },
                {
                    id:4,
                    src:'../../static/image/my_6.png',
                    text:'我的道具'
                },
                {
                    id:5,
                    src:'../../static/image/my_7.png',
                    text:'道具商城'
                },
                {
                    id:6,
                    src:'../../static/image/my_8.png',
                    text:'感兴趣职位'
                },{
                    id:7,
                    src:'../../static/image/my_9.png',
                    text:'钱包'
                }
            ]
        }
    }
}
</script>

<style scoped>
.container{
    background-color: rgb(248,248,248);
}
.header{
    height: 3.888889rem;
    width: 100%;
    background-color: rgb(83,202,195);
    position: relative;
    display: flex;
    color:white;
}
.new{
    height: .5rem;
    width: .5rem;
    position: absolute;
    top:.444444rem;
    right: .370370rem;
}
.desc{
    height: 1.833333rem;
    margin-top: 1.027777rem;
}
.avatar{
    width: 1.685185rem;
    height: 1.685185rem;
    border-radius: 50%;
    margin-left: .537037rem;
    border: .074074rem solid rgb(117,213,207);
}
.first-line{
    height: .407407rem;
    line-height: .407407rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.right{
    height: 1.037037rem;
    width: 6.203703rem;
    position: absolute;
    left: 2.907407rem;
    top: 1.462962rem;
}
.logo{
    width: .385185rem;
    height: .414814rem;
}
.name{
    height: .407407rem;
}
.second-line{
    height: .314814rem;
    margin-top: .296296rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.logo{
    position: absolute;
    right: .474074rem;
    top: 50%;
}
.nav{
    height: 2.240740rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom:1px solid rgb(248,248,248);
    background-color: white;
}
.conmunicate{
    height: 1.444444rem;
    width: 33.3333%;
    border-right: 1px dotted rgb(248,248,248);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .592592rem;
}
.number{
    height: .462962rem;
    color: #000000;
    font-weight: 600;
}
.text{
    margin-top: .370370rem;
    height: .333333rem;
    color: rgb(121,121,121);
}
.content{
    height: 4.814814rem;
    background-color: white;
    margin-top: .277777rem;
    display: flex;
    display: -webkit-flex;
    align-items: flex-start;
    flex-flow: wrap;
    /* width:100%; */
}
.item{
    height: 2.370370rem;
    width: 25%;
    /* border: 1px solid rgb(248,248,248); */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.picture{
    height: .629629rem;
    margin-top: .537037rem;
}
.describe{
    height: .277777rem;
    color: rgb(51,51,51);
    margin-top: .481481rem;
}
.section{
    height: 3.361111rem;
    margin-top: .277777rem;
    border: 1px solid rgb(248,248,248);
    background-color: white;
}
.list{
    height: 1.685185rem;
    width: 9.351851rem;
    border-bottom: 1px solid rgb(248,248,248);
    /* display: flex; */
    /* align-items: center; */
    /* vertical-align: middle; */
    display: inline-block;
    line-height: 1.685185rem;
    position: relative;
}
.left{
    width: .518518rem;
    height: .518518rem;
    margin-left: .555555rem;
}
.title{
    height: .370370rem;
    margin-left: .370370rem;
}
.turn{
    width: .340740rem;
    height: .433333rem;
    /* float: right; */
    position: absolute;
    right: 0;
    top: 34%;

}
.footer{
    height: 1.685185rem;
    border: 1px solid rgb(248,248,248);
    background-color: white;
    margin-top: .277777rem;
    margin-bottom: .277777rem;
}
</style>
