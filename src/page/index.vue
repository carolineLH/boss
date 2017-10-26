<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Home from './Home'
import axios from 'axios'
import tabbar from '../components/public/Tabbar/tabbar'
export default {
  name:'index',
  components:{
    Home,
    tabbar
  }
}
</script>

<style>

</style>
