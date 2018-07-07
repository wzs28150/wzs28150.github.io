<template>
  <div class="app">
    <top-layout class="top-container"/>
    <left-layout :class="['left-container',{'left-hidden': isshow}]"  v-on:leftshow="leftshow" />
    <router-view class="main-container"/>
    <bga-back-top :svgMajorColor="'#7b79e5'" :bottom="90" :right="5" :svgMinorColor="'#ba6fda'"
                  :svgType="'rocket_smoke'"/>
  </div>
</template>
<style lang="scss" scoped>
  .app {
    display: flex;
    height: 100%;
  }

  .left-container {
    flex: 0 0 199px;
    border-right: 1px solid #eeeeee;
    height: 100%;
  }

  .main-container {
    flex-grow: 1;
  }
  @media screen and (max-width: 800px) {
      .main-container {
          width: 100%!important; // 兼容 IE 10
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
          background-color: #fff; margin-top: 50px;
      }
      .left-container {position: fixed; z-index: 3;background-color: #fff;transition: 1s all!important; width: 200px;
        &.left-hidden{transition: 1s all!important;
          position: fixed; background-color: #fff; z-index:2; transform: translateX(-200px);
        }
      }
  }
</style>
<script>
  import LeftLayout from './components/LeftLayout.vue'
  import TopLayout from './components/TopLayout.vue'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        isshow: true,
        lableshow: false
      }
    },
    components: {
      LeftLayout,
      TopLayout
    },
    methods: {
      ...mapActions([
        'setLabels',
        'setGitHubUser'
      ]),
      leftshow (ls) {
        this.isshow = ls
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.$gitHubApi.getUserInfo(this).then(this.$http.spread((userResp, labelResp) => {
          this.setGitHubUser(userResp.data)
          this.setLabels(labelResp.data)
        }))
      })
    }
  }
</script>
