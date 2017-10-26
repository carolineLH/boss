<template>
    <div class="root">
        <ul class="sel-option">
            <li :class = "{'option': isActive[index]}" v-for='(item, index) in list' :key='index' @click='clickHandler(index)'>{{item}}</li> 
        </ul>
    </div> 
</template>
<script>
    export default {
        name: 'my-drop',
        props: {
          list: {
              required: true,
              type: Array
          },
          isActive: {
              type: Array,
              required: false
          }
        },
        data () {
            return {
            }
        },
        methods: {
            clickHandler (index) {
                this.$emit('itemclick', index)
            }
        }
    }
</script>
<style>
    
</style>