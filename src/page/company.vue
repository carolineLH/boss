<template>
    <div class="wrapper">
        <mt-header title="公司" fixed>
            <router-link to="/search" slot="right">
                <mt-button icon="search"></mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <div id="sel-first" index="1">
				<div class="sel-first" type="text" @click='firstShow=!firstShow'>融资<span v-show="isCount">({{number}})</span></div>
				<div class="shadow" v-if="firstShow" @touchmove.prevent>
					<sel-first v-if='firstShow' @countClick='countClick'></sel-first>
				</div>
			</div>
            <div id="sel-two" index="2">
				<div class="sel-two" type="text" @click='secondShow=!secondShow'>规模<span v-show="isNum">({{count}})</span></div>
				<div class="shadow" v-if="secondShow" @touchmove.prevent>
					<sel-second v-if='secondShow' @numClick='numClick'></sel-second>
				</div>
			</div>
            <div id="sel-three" index="3">
				<div class="sel-three" type="text" @click='threeShow=!threeShow'>行业<span v-show="isTotal">({{total}})</span></div>
				<div class="shadow" v-if="threeShow" @touchmove.prevent>
					<sel-three v-if='threeShow' @threeClick='threeClick'></sel-three>
				</div>
			</div>
        </div>
        <div class="content">
            <mt-loadmore
		   :bottom-method="loadBottom"
		   :auto-fill="false">
				<ul
				    class="scroll_wrapper"
					v-infinite-scroll="loadMore"
					infinite-scroll-disabled="loading"
					:infinite-scroll-distance="50">
						<div class="content-item"  v-for="(company, index) in companies" :key="index">
							<img :src="company.src" alt="">
                            <div class="right">
                                <div class="title">{{company.title}}</div>
                                <span class="address">{{company.type}}</span>
                                <span class="level">{{company.level}}</span>
                                <div class="position">
                                    <div class="desc">{{company.desc}}</div>
                                    <i class="right"></i>
                                </div>
                            </div>
						</div>	
				</ul>
			</mt-loadmore>
        </div>
        <!-- <tabbar></tabbar> -->
    </div>
</template>

<script>
import selThree from '../components/public/company/sel-three'
import selSecond from '../components/public/company/sel-second'
import selFirst from '../components/public/company/sel-first'
import tabbar from '../components/public/Tabbar/tabbar'
import axios from 'axios'
export default {
    name:'company',
    components: {
        tabbar,
        selFirst,
        selSecond,
        selThree    
    },
    data () {
        return {
            companies:'',
            isCount:false,
            firstShow:false,
            number:'',
            secondShow:false,
            count:'',
            isNum:false,
            threeShow:false,
            isTotal:false,
            total:'',
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData () {
          axios.get('../../static/mock/api/company_list/companies.json')
			.then(res=>{
			this.companies = res.data.data;
			})
		},
        getLastData () {
			axios.get('../../static/mock/api/company_list/company_list.json')
			.then(res=>{
			this.companies = res.data.data;
			})
		},
        countClick (number) {
			this.number = number
			this.firstShow = false
			if (this.number>0){
				this.isCount = true
			}
            this.getLastData()
		},
        numClick (count) {
            this.count = count
			this.secondShow = false
			if (this.count>0){
				this.isNum = true
			}
            this.getLastData()
        },
        threeClick (total) {
            this.total = total
			this.threeShow = false
			if (this.total>0){
				this.isTotal = true
			}
            this.getLastData()
        },
        loadBottom () {
		},
		loadMore() {
			this.loading = true;
			setTimeout(() => {
				let last = this.companies[this.companies.length - 1];
				for (let i = 1; i <= 5; i++) {
				this.companies.push(last + i);
				}
				this.loading = false;
			}, 3000)
        }
    }
}
</script>

<style scoped>
.main{
    display: flex;
    position: fixed;
    z-index: 9999;
    height: .59999rem;
    margin-top: -.5rem;
    padding-top: .2rem;
    background: white;
    border-bottom: 1px solid rbg(121,121,121);
    color: rgb(121,121,121);
}
.mint-loadmore-content{
    margin-top: .6rem;
}
.sel-first{
    width: 3.333333rem;
    height: .407407rem;
    font: .305555rem 'microsoft yahei';
    border-right: 2px solid #DDDDDD;
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sel-first::after{
    content: url(../../static/image/pull.png);
}
.sel-two{
    width: 3.333333rem;
    height: .407407rem;
    font: .305555rem 'microsoft yahei';
    border-right: 2px solid #DDDDDD;
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sel-two::after{
    content: url(../../static/image/pull.png);
}
.sel-three{
    width: 3.333333rem;
    height: .407407rem;
    font: .305555rem 'microsoft yahei';
    border-right: 2px solid #DDDDDD;
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sel-three::after{
    content: url(../../static/image/pull.png);
}
.content{
    /* height: 13.212963rem; */
    width: 100%;
    color: gray;
    font-family: sans-serif;
    background-color: rgb(233,239,239);
}
.content-item {
    height: 4.148148rem;
    margin-top: .296296rem;
    margin-left: .296296rem;
    background-color: white;
    position: relative;
}
img {
    width: 1.666667rem;
    height: 1.666667rem;
    border-radius: 10%;
    position: absolute;
    left: .425925rem;
    top: .425925rem;
}
.right{
    width: 6.777778rem;
    margin-left: 2.444444rem;
    display: flex;
    flex-direction: column;
}
.title{
    height: .425925rem;
    margin-top: .537037rem;
    color: #000000;
    font-weight: 400;
    font-family: arial,verdana,helvetica,'PingFang SC','HanHei SC',STHeitiSC-Light,Microsoft Yahei,sans-serif;
}
.address{
    display: block;
    height: .333333rem;
    margin-top: .518518rem;
}
.level{
    display: block;
    height: .333333rem;
    margin-top: .537037rem;
}
.position{
    height: 1.148148rem;
    display: inline-block;
    line-height: 1.148148rem;
    border-top: 1px solid rgb(220,220,220);
    margin-top: .370370rem;
}
</style>
