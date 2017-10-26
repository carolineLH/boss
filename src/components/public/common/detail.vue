<template>
    <div class="wrapper">
        <mt-header>
            <router-link to="/" slot="left">
                <mt-button icon="back">职位详情</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="container">
            <div class="header">
                <div class="position">{{position.position}}</div>
                <div class="salary">{{position.salary}}</div>
            </div>
            <div class="site">{{position.site}}</div>
            <div class="good">{{position.good}}</div>
            <div class="section">
                <img :src="position.src" alt="" class="avatar">
                <div class="name">{{position.name}}</div>
                <div class="type">{{position.type}}</div>
            </div>
            <div class="side">{{position.city}}</div>
            <div class="pDetail">
                <img src="" alt="" class="pImg">
                <span class="position">职位详情</span>
            </div>
            <div class="detail">{{position.detail}}</div>
            <div class="sRequest">
                <img src="" alt="" class="sImg">
                <span class="sk">技能要求</span>
            </div>
            <div class="skill">{{position.skill}}</div>
        </div>
        <mt-button type="primary">继续沟通</mt-button>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    name:'detail',
    data () {
        return {
            // position:''
        }
    },
    mounted () {
        // this.getData()
        // console.log(...mapGetters)
        // console.log(this.$store.state.positions)
        // this.position = this.$store.state.positions
    },
    watch: {
        ...mapGetters({
            position: 'showDetail'
        })    
    },
    computed: mapGetters({
        position:'showDetail'
    }),
    methods: {
    }
}
</script>

<style>

</style>
