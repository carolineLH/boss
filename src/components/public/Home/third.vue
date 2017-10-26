<template>
  <div class="container">
    <div class="wrapper">
        <div class="header">
            <span class="title">融资阶段</span>
            <div class="display">
                <mt-button @click.native="click" size="small" type="primary">全部</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default" :class="{'change':isActive}">未融资</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">天使轮</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">A轮</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">B轮</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">C轮</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">D轮及以上</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">已上市</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">不需要融资</mt-button>
            </div>        
        </div>
        <div class="content">
            <span class="title">人员规模</span>
            <div class="display">
                <mt-button @click.native="click" size="small" type="primary">全部</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">0-20人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">20-99人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">100-499人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">500-999人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">1000-9999人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">10000以上</mt-button>
            </div>    
        </div>
        <div class="footer">
            <span class="title">行业</span>
            <div class="display">
                <mt-button @click.native="click" size="small" type="primary" >全部</mt-button>
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
        </div>
    </div>
    <div class="button">
        <div class="reset" @click="resetClick">重置</div>
        <div class="confirm" @click="confirmClick">确定<span v-show="isCount">({{number}})</span></div>
    </div>
 </div>
</template>

<script>
export default {
    data () {
        return {
            number:'',
            isCount:false,
            isActive:false
        }
    },
    methods:{
        handleClick () {
            this.number++
            this.isCount = true
            this.isActive = true
        },
        resetClick () {
            
        },
        confirmClick () {
            this.$emit('countClick',this.number)
            console.log(this.number)
        },
        click () {
            this.isCount = false
            this.isActive = false
        }
    }
}
</script>

<style scoped>
.container{
    height: 10.703703rem;
    width: 100%;
    background: rgb(249,249,249);
    border-top: 1px solid rgb(220,220,220);
    overflow-y: scroll;
}
.title{
    display: inline-block;
    width: 100%;
    height: .296296rem;
    line-height: .296296rem;
    margin-top: .555555rem;
    margin-bottom: .305925rem;
    margin-left:.4rem;
}
.display{
    margin-left: .25rem;
}
.mint-button{
    margin-bottom: .25rem;
    margin-left: .2rem;
}
.content{
    margin-top: .25rem;
}
.wrapper{
    height: 9.444444rem;
    width: 100%;
}
.button{
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 1.259259rem;
    display: flex;
    flex-direction: row;

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
.change {
    background-color: #26a2ff;
    color: #fff;
}
</style>
