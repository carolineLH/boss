<template>
    <div class="home">
		<mt-header fixed>
			<div class="header_title" slot="left">
				<span class="header_title-desc">web前端</span>
			</div>
			<router-link to="/add" slot="right">
				<mt-button class="header_plus">
					<div class="header_plus-add">
					<i class="icon_plus"></i>
					</div>
				</mt-button>
			</router-link>
			<router-link to="/search" slot="right">
				<mt-button icon="search"></mt-button>
			</router-link>
		</mt-header>		
		<div class="conform">
			<div id="sel-wrap" index="1">
				<div :class="{'text-active' : listShow}" class="sel-show" type="text" @click='listShow=!listShow'>{{city}}</div>
				<div class="shadow" v-if="listShow" @touchmove.prevent>
					<my-drop :list='list' :isActive='isActive' @itemclick='handleClick' v-if='listShow'></my-drop>
				</div>
        	</div>
			<div id="sel-second" index="2">
				<div class="sel-list" type="text" @click='shadowShow=!shadowShow'>{{keywords}}<span>{{count}}</span></div>
				<div class="shadow" v-if="shadowShow" @touchmove.prevent>
					<my-down v-if='shadowShow' :businessList='businessList' :subwayList='subwayList' @ensureClick='ensureClick' @confirmClick='confirmClick' ></my-down>
				</div>
			</div>
			<div id="sel-third" index="3">
				<div class="sel-three" type="text" @click='thirdShow=!thirdShow'>{{company}}<span v-show="isCount">({{number}})</span></div>
				<div class="shadow" v-if="thirdShow" @touchmove.prevent>
					<my-third v-if='thirdShow' @countClick='countClick'></my-third>
				</div>
			</div>
			<div id="sel-four" index="4">
				<div class="sel-four" type="text" @click='fourShow=!fourShow'>要求<span v-show="isTotal">({{total}})</span></div>
				<div class="shadow" v-if="fourShow" @touchmove.prevent>
					<my-four v-if='fourShow' @countTotal='countTotal'></my-four>
				</div>
			</div>
		</div>
		<div class="content" >
		   <mt-loadmore
		   :bottom-method="loadBottom"
		   :auto-fill="false">
				<ul
				    class="scroll_wrapper"
					v-infinite-scroll="loadMore"
					infinite-scroll-disabled="loading"
					:infinite-scroll-distance="50">
						<div class="content-item"  v-for="(position, index) in positions" :key="index" @click="detailClick(position)">
							<h5 class="position">{{position.position}}</h5>
							<span class="salary">{{position.salary}}</span>
							<span class="da">{{position.name}}</span>
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
				</ul>
			</mt-loadmore>
		</div>
		
    </div>
</template>
<script>
import myThird from './../components/public/Home/third'
import myDown from './../components/public/Home/down'
import myDrop from './../components/public/Home/drop'
import myFour from './../components/public/Home/four'
import axios from 'axios'
import { mapActions } from 'vuex'
export default{
	components: {
		myDrop,
		myDown,
		myThird,
		myFour
	},
	data () {
		return{
			selected:'selected',
			activeIndex: '1',
			listShow: false,
			shadowShow:false,
			thirdShow:false,
			company:'公司',
			fourShow:false,
			num:'',
			list:['推荐','最新'],
			positions: '',
			city: '推荐',
			isActive: [true, false],
			count:'',
			total:'',
			keywords:'',
			number:'',
			isTotal:false,
			isCount:false,
			businessList:
				{id:'0',city:
				[
					{name:'广州',pid:'0',count:'0',side:
						[
							{name:'全广州',id:'0'}
						]
					},
					{name:'天河区',pid:'1',count:'0',side:
					  [
							{name:'全天河区',id:'0'},{name:'沙河',id:'1'},{name:'石牌',id:'2'},{name:'棠下',id:'3'},
							{name:'体育中心',id:'4'},{name:'珠江新城',id:'5'},{name:'员村',id:'6'},{name:'天河北',id:'7'},{name:'车陂',id:'8'}
						]
					},
					{name:'白云区',pid:'2',count:'0',side:
					  [
							{name:'全白云区',id:'0'},{name:'黄石',id:'1'},{name:'嘉禾',id:'2'},{name:'白云大道',id:'3'},
							{name:'永平',id:'4'},{name:'机场路',id:'5'},{name:'三元里',id:'6'},{name:'同德',id:'7'},{name:'同和',id:'8'}
						]
					},
					{name:'越秀区',count:'0',pid:'3',side:[{name:'全越秀区',id:'0'},{name:'建设',id:'1'},{name:'水萌',id:'2'},{name:'岭南',id:'3'},
					{name:'梅花村',id:'4'},{name:'流花',id:'5'},{name:'东风',id:'6'},{name:'东风东',id:'7'},{name:'二三路',id:'8'}]},
					{name:'海珠区',pid:'4',count:'0',side:[{name:'全海珠区',id:'0'},{name:'琶洲',id:'1'},{name:'赤岗',id:'2'},{name:'江南大道',id:'3'},
					{name:'新港',id:'4'},{name:'工业大道',id:'5'},{name:'广州南大道',id:'6'},{name:'南石头',id:'7'},{name:'南洲',id:'8'}]},
					{name:'番禺区',pid:'5',count:'0',side:[{name:'全番禺区',id:'0'},{name:'大石',id:'1'},{name:'市桥',id:'2'},{name:'大学城',id:'3'},
					{name:'东环',id:'4'},{name:'钟村',id:'5'},{name:'洛溪',id:'6'},{name:'沙头',id:'7'},{name:'石基',id:'8'}]},
					{name:'黄埔区',pid:'6',count:'0',side:[{name:'全黄埔区',id:'0'},{name:'大沙',id:'1'},{name:'南岗',id:'2'},{name:'鱼珠',id:'3'},
					{name:'永和',id:'4'},{name:'文冲',id:'5'},{name:'红山',id:'6'},{name:'荔联',id:'7'},{name:'穗东',id:'8'}]},
					{name:'荔湾区',pid:'7',count:'0',side:[{name:'全荔湾区',id:'0'},{name:'芳村',id:'1'},{name:'二三路',id:'2'},{name:'岭南',id:'3'},
					{name:'西村',id:'4'},{name:'白鹤洞',id:'5'},{name:'桥中',id:'6'},{name:'龙溪',id:'7'},{name:'沙面',id:'8'}]},
					{name:'花都区',pid:'8',count:'0',side:[{name:'全花都区',id:'0'},{name:'新华',id:'1'},{name:'花山',id:'2'},{name:'花东',id:'3'},
					{name:'雅瑶',id:'4'},{name:'炭步',id:'5'},{name:'赤坭',id:'6'},{name:'人和',id:'7'},{name:'北兴',id:'8'}]}
				]},
			subwayList:
				{id:'0',city:[
					{name:'广州',pid:'0', count:'0',side:[{name:'全广州',id:'0'}]},
					{name:'1号线',pid:'1',count:'0',side:[{name:'全1号线',id:'0'},{name:'西朗',id:'1'},{name:'坑口',id:'2'},{name:'花地湾',id:'3'},
					{name:'方村',id:'4'},{name:'黄沙',id:'5'},{name:'长寿路',id:'6'},{name:'陈家祠',id:'7'}]},
					{name:'2号线',pid:'1',count:'0',side:[{name:'全2号线',id:'0'},{name:'广州南站',id:'1'},{name:'石壁',id:'2'},{name:'会江',id:'3'},
					{name:'南浦',id:'4'},{name:'洛溪',id:'5'},{name:'南洲',id:'6'},{name:'东晓南',id:'7'}]},
					{name:'3号线',pid:'1',count:'0',side:[{name:'全3号线',id:'0'},{name:'沥滘',id:'1'},{name:'体育西路',id:'2'},{name:'广州东站',id:'3'},
					{name:'同和',id:'4'},{name:'梅花园',id:'5'},{name:'珠江新城',id:'6'},{name:'五山',id:'7'}]},
					{name:'4号线',pid:'1',count:'0',side:[{name:'全4号线',id:'0'},{name:'黄村',id:'1'},{name:'车坡',id:'2'},{name:'车坡南',id:'3'},
					{name:'万胜围',id:'4'},{name:'官洲',id:'5'},{name:'大学城北',id:'6'},{name:'大学城南',id:'7'}]},
					{name:'5号线',pid:'1',count:'0',side:[{name:'全5号线',id:'0'},{name:'囧口',id:'1'},{name:'坦尾',id:'2'},{name:'中山八',id:'3'},
					{name:'西场',id:'4'},{name:'西村',id:'5'},{name:'长寿路',id:'6'},{name:'陈家祠',id:'7'}]},
					{name:'6号线',pid:'1',count:'0',side:[{name:'全6号线',id:'0'},{name:'西朗',id:'1'},{name:'坑口',id:'2'},{name:'花地湾',id:'3'},
					{name:'方村',id:'4'},{name:'黄沙',id:'5'},{name:'长寿路',id:'6'},{name:'陈家祠',id:'7'}]},
				]},
		}
	},
	mounted(){
		this.getData()
		this.keywords = localStorage.getItem('keywords')
	},
	methods:{
		...mapActions({
			detailClick: 'getDetail'
		}),
		detailClick(position){
			this.$router.push({path:'/detail'})
		},
		getData () {
          axios.get('../../static/mock/api/position_list/position.json')
			.then(res=>{
			this.positions = res.data.data;
			})
		},
		countClick (number) {
			this.number = number
			this.thirdShow = false
			if (this.number>0){
				this.isCount = true
			}
		},
		countTotal (total) {
			this.total = total
			this.fourShow = false
			if (this.total>0){
				this.isTotal = true
			}
		},
		changeCity () {
		},
		confirmClick (count,keywords) {
			console.log(count)
			this.count=count
			this.shadowShow = false
			this.keywords = keywords
			this.getLastData()
		},
		ensureClick (count,keywords) {
			this.count=count
			this.shadowShow = false
			this.keywords = keywords
			this.getLastData()
		},
		getLastData () {
			axios.get('../../static/mock/api/position_list/lastPosition.json')
			.then(res=>{
				this.positions = res.data.data;
			})
		},
		handleClick (index) {
			// index 是当前点击的选项的索引
			this.city = this.list[index]
			this.listShow = false
			// this.isActive[index] = !this.isActive[index]
			// this.isActive = !this.isActive
			if (index === 1) {
				this.isActive[1] = true
				this.isActive[0] = false
			    this.getLastData()
			} else {
				this.isActive[0] = true
				this.isActive[1] = false
			    this.getData()
			}
		},
		handleSelect(key, keyPath) {
        },
		loadBottom () {
		},
		loadMore() {
			this.loading = true;
			setTimeout(() => {
				let last = this.positions[this.positions.length - 1];
				for (let i = 1; i <= 5; i++) {
				this.positions.push(last + i);
				}
				this.loading = false;
			}, 3000)
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '../../static/stylus/content.css'
@import '../../static/stylus/main.css'
</style>
<style scoped>
  .cityShadow {
	background-color: transparent;
    position: fixed;
    left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 10;
	}
</style>



