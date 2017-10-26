<template>
  <div class="wrapper">
    <div class="nav">  
      <mt-button size="small" @click="activeClick(active)" :class="{'change':currentActive}" @click.native.prevent="active = '1'">聊天</mt-button>  
      <mt-button size="small" @click="activeClick(active)" :class="{'changed':nowActive}" @click.native.prevent="active = '2'">互动</mt-button>  
    </div>  
      
    <div class="page-tab-container">  
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable value='1'>  
        <mt-tab-container-item id="1">  
          	<div class="content">
				  <div class="head">
					  <span class="title">联系人</span>
					  <div class="right">查看新开聊(0)</div>
				  </div>
				  <div class="container" v-for="message in messages" :key="message.id" @click="messageClick">
					  <div class="message">
						  <img :src="message.src" alt="" class="avatar">
						  <div class="all">
							<div class="desc">
								<div class="name">{{message.name}}</div>
								<div class="time">{{message.time}}</div>
							</div>
							<div class="company">{{message.company}}</div>
							<div class="chat">{{message.chat}}</div>
						  </div>
					  </div>
				  </div>
        	</div>    
        </mt-tab-container-item>  
        
        <mt-tab-container-item id="2"> 
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">对我感兴趣</mt-tab-item>
				<mt-tab-item id="2">看过我</mt-tab-item>
				<mt-tab-item id="3">新职位</mt-tab-item>
				</mt-navbar>

				<!-- tab-container -->
				<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="tabContent1">
						<img src="../../static/image/sit.png" class="picture">
						<p class="desc">还没有Boss对你感兴趣哦，快去主动联系吧!</p>
						<div class="button" @click="findClick">找职位</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<!-- <div class="container2" v-for="people in peoples" :key="people.id" @click="peopleClick">
					  <div class="message">
						  <img :src="people.src" alt="" class="avatar">
						  <div class="all">
							<div class="desc">
							<div class="name">{{people.name}}</div>
							<div class="time">{{people.time}}</div>
							</div>
							<div class="company">
								<div class="come">{{people.company}}</div>
								<div class="position">{{people.position}}</div>
								<div class="clear"></div>
							</div>
							<div class="chat">{{people.chat}}</div>
						  </div>
					  </div>
				  	</div> -->
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					
				</mt-tab-container-item>
			</mt-tab-container> 
        </mt-tab-container-item>  
      </mt-tab-container>  
    </div>  
        <!-- <tabbar></tabbar> -->
  </div>
</template>

<script>
import tabbar from '../components/public/Tabbar/tabbar'
import axios from 'axios'
export default {
    name:'message',
    components:{
        tabbar
    },
    data () {
        return {
            active: '1',
            currentActive:false,
            nowActive:false,
			messages:'',
			selected:'1',
			peoples:''
        }
    },
	mounted () {
		 this.getData()
		 this.getLastData ()
	},
    methods:{
		peopleClick() {
			
		},
		findClick () {
			this.$router.push({path:'/'})
		},
		messageClick () {
			this.$router.push({path:'/messageDetail'})
		},
		getLastData () {
          axios.get('../../static/mock/api/message_list/peoples.json')
			.then(res=>{
			this.peoples = res.data.data;
			console.log(res.data.data)
			})
		},
		getData () {
          axios.get('../../static/mock/api/message_list/messages.json')
			.then(res=>{
			this.messages = res.data.data;
			})
		},
        activeClick (id) {
            console.log(id)
            if(id = 1) {
              this.currentActive = true
              this.nowActive = false
            }
            if(id != 1) {
                this.currentActive = false
                this.nowActive = true
            }
        }
    }
}
</script>

<style scoped>
.mint-tab-container-item{
	margin-top: 1.35rem;
	width: 100%;
}
.nav{
    height: 1.388889rem;
    background-color: rgb(83,202,195);
    display: flex;
    align-items: center;
    justify-content: center;
	position: fixed;
    z-index: 999;
    width: 10rem;
}
.mint-button--default{
    border: 2px solid white;
    background-color: rgb(83,202,195);
    color: white;
    height: .796296rem;
    width: 1.925925rem;
}
.change{
    color: rgb(83,202,195);
    background-color: white;
}
.changed{
    color: rgb(83,202,195);
    background-color: white;
}
.page-tab-container .content{
	width: 100%;
	border-top: .166667rem solid rgb(233,239,239);
}
.page-tab-container .content .head{
	height: 1.111111rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.title{
	height: .370370rem;
	display: block;
	width: 1.166667rem;
	margin-left: .851851rem;
	font-weight: 500;
	color: #000000;
}
.right{
	height: .703703rem;
	width: 2.648148rem;
	background-color: rgb(170,170,170);
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
}
.page-tab-container .content .message{
	height: 2.092592rem;
	border-top: 1px solid rgb(233,239,239);
	display: flex;
	justify-content: center;
	align-items: center;
}
.avatar{
	height: 1.407407rem;
	width: 1.407407rem;
	border-radius: 50%;
	margin-left: .333333rem;
}
.all{
	height: 1.592592rem;
	width: 7.444444rem;
	margin-left: .388889rem;
}
.desc{
	height: .407407rem;
}
.desc .name{
	height: .407407rem;
	/* width: .962963rem; */
	color: #000000;
	font-weight: 500;
}
.desc .time{
	height: .305555rem;
	float: right;
	line-height: .305555rem;
	margin-right: .481481rem;
	color: rgb(195,195,195);
}
.company{
	height: .305555rem;
	margin-top: .277778rem;
	/* color: rgb(143,143,143); */
}
.come{
	/* width:.722222rem; */
	color:rgb(121,121,121);
	float: left;
}
.position{
	color:rgb(83,202,195);
	margin-left: 1rem;
}
.clear{
	clear: both;
}
.chat{
	height: .388889rem;
	margin-top: .185185rem;
	color: rgb(121,121,121);
}
.tabContent1{
	height: 12.925925rem;
	width: 100%;
	background-color: rgb(233,239,239);
	display: flex;
	/* justify-content: center; */
	/* align-items: center; */
	flex-direction: column;
	align-items: center;
}
.mint-tab-item-label{
	color: rgb(170,170,170);
}
.picture{
	height: 4.203703rem;
	width: 4.203703rem;
	border-radius: 50%;
	margin-top: 2.657407rem;
	background-color: white;
}
.desc{
	height: .944444rem;
	width: 7.537037rem;
	font-size: .333333rem;
	color: rgb(121,121,121);
	line-height: .944444rem;
}
.button{
	height: 1.259259rem;
	width: 4.166666rem;
	border: 1px solid rgb(83,202,195);
	color: rgb(83,202,195);
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 1rem;
}
.desc[data-v-b386bad4]{
	height: .5rem;
}
.page-tab-container .content[data-v-b386bad4]{
	margin-top: -.01rem;
}
.tabContent1[data-v-b386bad4]{
	margin-top: -1.25rem;
}
</style>
