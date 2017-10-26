<template>
   <div class="container">
    <div class="wrapper">
        <div class="header">
            <span class="title">学历</span>
            <div class="display">
                <mt-button @click.native="click" size="small" type="primary">全部</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">中专及以下</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">高中</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">大专</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">本科</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">硕士</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">博士</mt-button>
            </div>        
        </div>
        <div class="content">
            <span class="title">经验</span>
            <div class="display">
                <mt-button @click.native="click" size="small" type="primary">全部</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">应届生</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">1年以内</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">1-3年</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">3-5年</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">5-10年</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">10年以上</mt-button>
            </div>    
        </div>
        <div class="footer">
            <span class="title">薪水(单选)</span>
            <div class="display">
                <mt-button @click.native="click" size="small" type="primary">全部</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">3k以下</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">3k-5k</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">5k-10k</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">10k-20k</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">20k-50k</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">50k以上</mt-button>
            </div>    
        </div>
    </div>
    <div class="button">
        <div class="reset" @click="resetClick">重置</div>
        <div class="confirm" @click="confirmClick">确定<span v-show="isCount">({{total}})</span></div>
    </div>
 </div>
</template>

<script>
export default {
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
            this.$emit('countTotal',this.total)
            console.log(this.total)
        },
        click () {
            
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
</style>

