<template lang="html">
  <div class="footer">
    <mt-tabbar v-model="selected" fixed class="border-1px-top">
      <mt-tab-item id="职位" >
        <img :src="img1" slot="icon">职位
      </mt-tab-item>
      <mt-tab-item id="公司">
        <img :src="img2" slot="icon">公司
      </mt-tab-item>
      <mt-tab-item id="消息" >
        <img :src="img3" slot="icon">消息
      </mt-tab-item>
      <mt-tab-item id="我的" >
        <img :src="img4" slot="icon">我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: "",
      img1: "../../../../static/image/ic_tab_position_normal.png",
      img2: "../../../../static/image/ic_tab_company_normal.png",
      img3: "../../../../static/image/ic_tab_message_normal.png",
      img4: "../../../../static/image/ic_tab_my_normal.png"
    }
  },
  computed: {
    // otherSelect () {
    //   return this.$store.state.selectTab
    // }
  },
  watch: {
    // "otherSelect"() {
    //   this.selected = this.otherSelect
    // },
    "selected": {
      handler (val,oldval) { 
        if (this.selected == "职位") {
          this.$router.push('/')
          this.img1="../../../../static/image/ic_tab_position_active.png"
        } else {
          this.img1="../../../../static/image/ic_tab_position_normal.png"
        }
        if (this.selected == "公司") {
          this.$router.push('/company')
          this.img2="../../../../static/image/ic_tab_company_active.png"
        } else {
          this.img2="../../../../static/image/ic_tab_company_normal.png"
        }
        if (this.selected == "消息") {
          this.$router.push('/message')
          this.img3="../../../../static/image/ic_tab_message_active.png"
        } else {
          this.img3="../../../../static/image/ic_tab_message_normal.png"
        }
        if (this.selected == "我的") {
          this.$router.push('/my')
          this.img4="../../../../static/image/ic_tab_my_active.png"
        } else {
          this.img4="../../../../static/image/ic_tab_my_normal.png"
        }
      },
      deep:true//对象内部的属性监听，也叫深度监听
    }
  },
}
</script>

<style scoped>
.mint-tabbar{
  background: #fff;
}
.border-1px-top{
  height:1.5625rem;
  padding-top :-.4rem;
}
.is-selected{
    color:#26a2ff;
    background :#fff;
    text-decoration :none;
}
</style>