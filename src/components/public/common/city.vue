<template>
    <div class="city">
        <mt-header fixed title="选择城市">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <div class="city-page_left">
                <div class="item" v-for="(cityItem, cityIndex) in citylist" :key="cityIndex" 
                :class="{'current':currentIndex === cityIndex}"> 
                    <span @click="changeCity(cityIndex)">{{cityItem.name}}</span>
                </div>
            </div>
            <div class="city-page_rg">
                <div class="hot" v-if="currentIndex === 0">
                    <span class="hot-city">热门城市</span>
                </div>
                <div class="side">
                    <router-link to="/">
                        <div class="sub-item" v-for="subItem in subCity" :key="subItem.id">
                            <span @click="select(subItem.id)">{{subItem.name}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            citylist: [],
            currentIndex: 0,
            subCity:[],
        }
    },
    mounted () {
        this.getData()
        this.subCity = this.citylist[0]
        console.log(this.subCity)
    },
    methods:{
        getData () {
          axios.get('../../../static/mock/api/position_list/cityList.json')
			.then(res=>{
			this.citylist = res.data.data;
			})
		},
        changeCity (index) {
           this.subCity =  this.citylist[index].side
           this.currentIndex = index
        },
        select (index){
            var keywords = this.subCity[index].name
            localStorage.setItem('keywords',keywords)
        }
    }
}
</script>

<style scoped>
.content{
    display: flex;
    /* margin-top:.7370rem; */
    height:15.861111rem;
    /* width: 100%; */
    padding: .324rem;
    margin-top: -1.3rem;
    margin-left: -.65rem;
}
.city-page_rg{
    background-color: rgb(233,239,239);
    flex-flow: column nowrap;
    width: 7.248148rem;
}
.city-page_left{
    margin-left: -.65rem;
    display: flex;
    flex-flow: column nowrap;
    width: 3.4rem;
    overflow-y: scroll;
}
.item{
    display: inline-block;
    width: 4.040740rem;
    height: 1.685185rem;
    line-height: 1.685185rem;
    text-align: center;
}
.sub-item{
    width: 2.888888rem;
    height: .944444rem;
    border: 1px solid rgb(204,204,204);
    border-radius: .14629rem;
    text-align: center;
    line-height: .944444rem;
    margin-bottom: .5rem;
    margin-right: .6rem;
    display: inline-block;
    color:gray;
}
.side{
    margin-top: .522222rem;
    margin-left: .122222rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}
.hot {
    margin-top: .5rem;
}
.hot .hot-city{
    color: black;
    font-weight: 500;
}
</style>
