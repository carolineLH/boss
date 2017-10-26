<template>
    <div class="container">
        <div class="wrapper">
            <div class="display">
                <mt-button @click.native="click" size="small" type="primary">全部</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">0-20人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">20-99人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">100-499人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">500-999人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">1000-9999人</mt-button>
                <mt-button @click.native="handleClick" size="small" type="default">10000以上</mt-button>
            </div>  
            <div class="button">
                <div class="reset" @click="resetClick">重置</div>
                <div class="confirm" @click="confirmClick">确定<span v-show="isCount">({{count}})</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'selSecond',
    data () {
        return {
            count:'',
            isCount:false
        }
    },
    methods:{
        handleClick () {
            this.count++
            this.isCount = true
        },
        resetClick () {
            
        },
        confirmClick () {
            this.$emit('numClick',this.count)
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
    height: 4.388888rem;
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

