<template>
<div class="container">
    <div class="wrapper">
        <div class="display">
            <mt-button @click.native="click" size="small" type="primary">全部</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">非互联网各行业</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">健康医疗</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">生活服务</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">旅游</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">金融</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">信息安全</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">广告营销</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">数据服务</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">智能硬件</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">文化娱乐</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">网络招聘</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">分类信息</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">电子商务</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">移动互联网</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">企业服务</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">社交网络</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">教育培训</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">O2O</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">游戏</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">互联网</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">媒体</mt-button>
            <mt-button @click.native="handleClick" size="small" type="default">IT软件</mt-button>
        </div> 
        <div class="button">
            <div class="reset" @click="resetClick">重置</div>
            <div class="confirm" @click="confirmClick">确定<span v-show="isCount">({{total}})</span></div>
        </div>   
    </div>
</div>
</template>

<script>
export default {
    name:'selThree',
    data () {
        return {
            total:'',
            isCount:false
        }
    },
    methods:{
        handleClick () {
            this.total++
            this.isCount = true
        },
        resetClick () {
            
        },
        confirmClick () {
            this.$emit('threeClick',this.total)
        }
    }
}
</script>

<style scoped>
.container{
    padding: 0;
    margin: 0;
}
.wrapper{
    height: 8.944444rem;
    width: 100%;
    background: rgb(249,249,249);
    border-top: 1px solid rgb(220,220,220);
    overflow-y: scroll;
}
.display{
    margin-left: .25rem;
    margin-top: .648148rem;
}
.mint-button{
    margin-bottom: .25rem;
    margin-left: .2rem;
}
.mint-button--small{
    font-size: 10px;
}
.button{
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 1.259259rem;
    display: flex;
    flex-direction: row;
    border-top: 1px solid rgb(220,220,220);
    margin-top: -.7rem;
}
.reset{
    display: inline-block;
    width: 5rem;
    height: 1.259259rem;
    line-height: 1.259259rem;
    text-align: center;
    font-size: .388888rem;
    background: white;
}
.confirm{
    display: inline-block;
    width: 5rem;
    height: 1.259259rem;
    line-height: 1.259259rem;
    text-align: center;
    font-size: .388888rem;
    background: #26a2ff;
    color: white;
}
</style>

