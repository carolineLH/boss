<template>
    <div class="wrapper">
        <mt-search v-model="value" :result.sync="result" cancel-text="取消" :show='true'
        placeholder="请输入职位或公司" :autofocus='true' @click.native="addClick">
        <div class="content">
            <div class="hot-search">
                <span class="hot">
                    <img src="../../../../static/image/hot.png" height="20" width="20">
                    热门搜索</span>
                <div class="display">
                    <router-link to="/searchResult">
                        <mt-button @click.native="handleClick" size="small" class="keywords" type="default">web前端</mt-button>
                        <mt-button @click.native="handleClick" size="small" class="keywords" type="default">web前端实习</mt-button>
                        <mt-button @click.native="handleClick" size="small" class="keywords" type="default">前端实习</mt-button>
                        <mt-button @click.native="handleClick" size="small" class="keywords" type="default">web前端开发</mt-button>
                        <mt-button @click.native="handleClick" size="small" class="keywords" type="default">前端开发</mt-button>
                        <mt-button @click.native="handleClick" size="small" class="keywords" type="default">web前端</mt-button>
                        <mt-button @click.native="handleClick" size="small" class="keywords" type="default">web前端实习工程师</mt-button>
                        <mt-button @click.native="handleClick" size="small" class="keywords" type="default">web前端朱莉</mt-button>
                        <mt-button @click.native="handleClick" size="small" class="keywords" type="default">前端</mt-button>
                    </router-link>
                </div> 
            </div>
            <div class="resent-search">
                <span class="resent">最近搜索</span>
				<router-link to="/searchResult">
					<div class="resently">
						<div @click="handleClick" class="history">
							<img src="../../../../static/image/search.png" height="20" width="20">
							{{historyItems}}
						</div>
					</div>
				</router-link>
            </div>
            <div @click="removeClick" class="clear">清除搜索记录</div>
        </div>
        </mt-search>
    </div>
</template>
<script>
export default {
    data () {
        return {
            result:[],
            value:'',
            historyItems:'',
            e:''
        }
    },
    methods: {
        handleClick () {
            var e = 'web前端'
            localStorage.setItem('e',e)
        },
        addClick () {
            var e =this.value
            localStorage.setItem('e',e)
            this.$router.push({path:'/searchResult'})
            let { historyItems } = localStorage
            if (historyItems === undefined) {
                localStorage.historyItems=e
            } else {
                historyItems = e + '|' + historyItems.split('|').filter(a => a!= e).join('|')
                localStorage.historyItems = historyItems
            }
        },
        removeClick() {
        }
    }
}
</script>

<style>
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
    background-color: rgb(233,239,239);
}
.hot-search,.resent-search{
    margin-left: .25rem;
}
.hot-search{
    border-bottom: 1x solid rgb(195,195,195);
}
.hot,.resent{
    display: inline-block;
    height: .388888rem;
    line-height: .388888rem;
    margin-top: .35rem;
}
.resent{
    margin-top: .5rem;
}
.display{
    display: flex;
    flex-flow: row wrap;
}
.mint-button--small{
    margin-top: .4rem;
    margin-right: .4rem;
}
.resently{
    margin-top: .4rem;
}
.history{
    color: gray;
    height: 1.388888rem;
    line-height: 1.388888rem;
    border-bottom: 1x solid gray;
}
.clear{
    color:gray;
    display: inline-block;
    text-align: center;
    height: 1.296296rem;
    line-height: 1.296296rem;
    width: 100%;
}
</style>
