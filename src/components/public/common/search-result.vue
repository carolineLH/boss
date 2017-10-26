<template>
    <div class="wrapper">
        <mt-search v-model="value" :result.sync="result" cancel-text="取消" :show='true'
        placeholder="请输入职位或公司" :autofocus='true'>
        <div class="content" v-show="hasResult">
            <div class="content-item"  v-for="(position, index) in positions" :key="index">
                <h5 class="position">{{position.position}}</h5>
                <span class="salary">{{position.salary}}</span>
                <span class="name">{{position.name}}</span>
                <span class="levl">{{position.levl}}</span>
                <p class="city">{{position.city}}</p>
                <p class="people">{{position.people}}</p>
                <p class="education">{{position.education}}</p>
                <div class="boss-info">
                    <img :src="position.src" class="tou"> 
                    <span class="info">{{position.info}}</span>
                    <span class="depatment">{{position.depatment}}</span>
                </div>
            </div>
        </div>
        </mt-search>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            result:[],
            value:'',
            positions:'',
            hasResult:false,
        }
    },
    mounted () {
        this.e = localStorage.getItem('e')
        if(this.e === 'web前端' || this.e === '前端开发' ) {
            this.hasResult = true
            this.getData()
        } else {
            this.hasResult = false
        }
    },
    methods: {
        getLastData () {
			axios.get('../../static/mock/api/position_list/lastPosition.json')
			.then(res=>{
				this.positions = res.data.data;
			})
		}
    }
}
</script>

<style scoped>
.wrapper{
    margin: 0;
    padding: 0;
}
.mint-searchbar-inner{
    border-radius: 1rem;
}
.mint-search-list-warp{
    margin-top:-1.25rem;
}
.mint-searchbar{
    background-color: #26a2ff;
}
.mint-searchbar-cancel{
    color:white;
}
.content{
    height: 15.833333rem;
    color: gray;
    font-family: arial,verdana,helvetica,'PingFang SC','HanHei SC',STHeitiSC-Light,Microsoft Yahei,sans-serif;
}
.content-item{
    background-color: white;
    margin: 0.259259rem;
    height: 3.85185rem;
    position: relative;
}
h5{
    font-size: .12963rem;
    font-weight: 600;
    color: #000000;
    display: inline-block;
    height: .40740rem;
    line-height: .40740rem;
    width: 3.055555rem;
    position: absolute;
    top: .333333rem;
    left: .333333rem;
}
.salary{
    height: .40740rem;
    display: inline-block;
    line-height: .40740rem;
    position: absolute;
    top:.462963rem;
    right: .333333rem;
}
.tou{
    width: .71296rem;
    height: .71296rem;
    border-radius: 50%;
    position: absolute;
    left:.407407rem;
    bottom: .314815rem;
}
.name{
    font-size: .12963rem;
    display: inline-block;
    height: .40740rem;
    line-height: .40740rem;
    position: absolute;
    left: .333333rem;
    top:1.203703rem;
}
.city{
    height: .277778rem;
    line-height: .277778rem;
    position: absolute;
    left: .333333rem;
    top:1.89814rem;
}
.levl{
    font-size: .12963rem;
    display: inline-block;
    height: .40740rem;
    line-height: .40740rem;
    position: absolute;
    left: 2.222222rem;
    top:1.203703rem;
}
.people,.education{
    height: .277778rem;
    line-height: .277778rem;
    position: absolute;
    top:1.89814rem;
}
.people{
    left:3.37963rem;
}
.education{
    left:4.648148rem;
}
.info,.depatment{
    color: rgb(38,62,255);
    position: absolute;
    bottom: .314815rem;
    height: .388889rem;
    line-height: .388889rem;

}
.info{
    width: 1rem;
    left: 1.57407rem;
    border-right: 1px solid rgb(38,62,255);
}
.depatment{
    left:2.82407rem;
}
.mint-loadmore-content{
    margin-top: .5rem;
}
</style>
