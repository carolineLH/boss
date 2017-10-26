<template>
    <div class="container">
        <mt-navbar v-model="selected">
        <mt-tab-item id="1">
            <img src="../../../../static/image/business.png"/>
            <span>商圈</span>
        </mt-tab-item>
        <mt-tab-item id="2">
            <img src="../../../../static/image/subway.png"/>
            <span>地铁</span>
        </mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <div class="sel-page">
                <mt-tab-container-item id="1" v-show="business">
                    <div class="sel-page_content">
                          <div class="sel-page_left">
                            <div class="item" v-for="(cityItem, cityIndex) in businessList.city" :key="cityIndex" 
                            :class="{'current':currentIndex === cityIndex}"> 
                                <span @click="changeCity(cityIndex)">{{cityItem.name}}<span class="cou" v-show="show">{{count}}</span></span>
                            </div>
                        </div>
                        <div class="sel-page_rg">
                            <div class="item">
                                <div class="subItem" v-for="subItem in subCity" :key="subItem.id"
                                :class="{'now':isActive}">
                                    <span @click="select(subItem.id)">{{subItem.name}}</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="sel-page_button">
                        <span class="reset" @click="reset">重置</span>
                        <span class="confirm" @click="confirm">确定</span>
                    </div>
                    <div class="footer">
                        <img src="../../../../static/image/turn.png" class="turn"/>
                        <router-link class="turn" to="/city">切换城市</router-link>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="sel-page_content">
                        <div class="sel-page_left">
                            <div class="item" v-for="(cityRoute, routeIndex) in subwayList.city" :key="routeIndex" 
                            :class="{'current':route === routeIndex}"> 
                                <!-- 这里的函方法changeCity就是负责把相对应的side放进下面的subCity里面去 -->
                                <span @click="changeRoute(routeIndex)">{{cityRoute.name}}<span v-show="showed">{{count}}</span></span>
                            </div>
                        </div>
                        <div class="sel-page_rg">
                            <div class="item">
                                <!-- 这里不是直接使用整个的side ,而是在点击左边的城市的时候在把相对应的side替换进来 -->
                                <div class="subItem" v-for="subRoute in senCity" :key="subRoute.id"
                                :class="{'now':isActive}">
                                    <span @click="selectRoute(subRoute.id)">{{subRoute.name}}</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="sel-page_button">
                        <span class="reset" @click="deset">重置</span>
                        <span class="confirm" @click="ensure">确定</span>
                    </div>
                    <div class="footer">
                        <img src="../../../../static/image/turn.png" class="turn"/>
                        <router-link class="turn" to="/city">切换城市</router-link>
                    </div>
                </mt-tab-container-item>
            </div>
        </mt-tab-container> 
    </div>
</template>

<script>
export default {
    props:{
        businessList:{
            required:true,
            type:Object
        },
        subwayList:{
            required:true,
            type:Object
        }
    }, 
    data(){
        return{
           selected: 1,
           subCity: [],
           currentIndex:0,
           cityIndex:0,
           isActive:true,
           count:'',
           showed:false,
           show:false,
           activeIndex:true,
           business:true,
           senCity:[],
           route:0, 
           keywords:'' 
        }
    },
    computed :{

    },
    mounted () {
        this.subCity = this.businessList.city[0].side
        this.senCity = this.subwayList.city[0].side
    },
    methods: {
        handleclick () {},
        changeCity (index) {
           this.subCity =  this.businessList.city[index].side
           this.currentIndex = index
        },
        changeRoute (index) {
           this.senCity =  this.subwayList.city[index].side
           this.route = index
        },
        selectRoute (id){
           this.count = this.subwayList.city[this.route].count++
            console.log(this.count)
            if(this.count>0){
                 this.showed=true
            }     
        },
        select (id){
            // console.log(this.businessList.city[this.currentIndex].pid)
            this.count = this.businessList.city[this.currentIndex].count++
            console.log(this.count)
            if(this.count>0){
                this.show=true
            }
        },
        reset () {
            this.subCity = this.businessList.city[0].side
            this.currentIndex = 0
        },
        deset () {
            this.senCity = this.subwayList.city[0].side
            this.route = 0
        },
        confirm () {
            var keywords = this.businessList.city[this.currentIndex].name
            console.log(keywords)
            this.$emit('confirmClick',this.count,keywords)
        },
        ensure () {
            var keywords = this.subwayList.city[this.route].name
            console.log(keywords)
            this.$emit('ensureClick',this.count,keywords)
        }
    }
}
</script>
<style scoped>
.container img{
    z-index: 100;
    width: .527778rem;
    height: .527778rem;
}
.sel-page_content{
    display: flex;
    border-bottom: 1px solid gray;
    height:8.861111rem;
    width: 100%;
}
.sel-page_left{
    display: flex;
    flex-flow: column nowrap;
    width: 4.040740rem;
    overflow-y: scroll;
}
.item{
    display: inline-block;
    width: 4.040740rem;
    height: 1.685185rem;
    line-height: 1.685185rem;
    text-align: center;
}
.current{
    background-color: rgb(233,239,239);
    color: #26a2ff;
}
.now{
    background-color: rgb(233,239,239);
}
.sub{
    color: #26a2ff;
}
.sel-page_right{
    width: 6rem;
    height: 8.861111rem;
    background-color: gray;
}
.sel-page_rg{
    flex-flow: column nowrap;
    width: 6rem;
    overflow-y: scroll;
}
.subItem{
    display: inline-block;
    width: 6rem;
    height: 1.685185rem;
    line-height: 1.685185rem;
}
.sel-page_button{
    height: 1.240741rem;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: flex-start;
}
span.reset{
    width: 5.018518rem;
    line-height: 1.240741rem;
    height:1.240741rem; 
    display: inline-block;
    text-align: center;
    font-size: .370370rem;
}
span.confirm{
    width: 5.018518rem;
    line-height: 1.240741rem;
    height:1.240741rem; 
    display: inline-block;
    text-align: center;
    font-size: .370370rem;
    background-color: blue;
}
.footer{
    display: flex;
    justify-content: center;
}
img.turn{
    height: .444444rem;
    margin-top: .45rem;
}
.turn{
    line-height: 1.240741rem;
    height:1.240741rem; 
    font-size: .370370rem;
    color:gray;
}
/* .light {
    color: #26a2ff;
} */
</style>
