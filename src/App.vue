<template>
	<div id="app">	
  		<router-view></router-view>
  </div>
</template>

<script>
import Home from './page/Home.vue'
import index from './page/index.vue'
export default {
  name: 'app',
  data () {
	  return {
	  }
  },
}
</script>

<style>

	html, body{
		margin: 0;
		padding: 0;
	}
	* {
		margin: 0;
		padding: 0;
	}
	li, ul, div, h1, h2, h3{
		padding: 0;
		margin: 0;
	}
	.add{
		width: 50px;
		height: 20px;
	}
	.icon_plus::before {
		content: url(../static/image/plus.png);
		margin-right: 15px;
		vertical-align: middle;
    	display: inline-block;
		border-right: 1px solid #CCCCCC;
		padding-right: 5px;
	}
</style>
