<template>
<div>
  <div class="top">
    <img v-if="gitHubUser" @click="home" :src="gitHubUser.avatar_url">
    <span v-if="gitHubUser" class="login-name">{{gitHubUser.login}}</span><span v-if="gitHubUser">-</span>
    <span v-if="gitHubUser">{{gitHubUser.bio}}</span>
  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'copyright',
      'recordNumber',
      'gitHubUser',
      'showQQGroup',
      'thirdPartySite'
    ]),
    isBlog () {
      return this.$route.name && this.$route.name.startsWith('Blog')
    },
    isAboutMe () {
      return this.$route.name === 'AboutMe'
    }
  },
  methods: {
    home () {
      this.$router.push('/')
    },
    openThirdPartySite (url) {
      window.open(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
    display: none;
}
@media screen and (max-width: 800px) {
    .top {
        display: block;
        height: 50px;
        display: block;
        background-color: #fff;
        position: fixed;
        top: 0;
        z-index: 2;
        width: 100%;
        box-shadow: 0 0 5px #ccc; padding: 0 15px; overflow: hidden;
        img {
            width: 36px; border-radius: 100%; margin: 7px 0; float: left; visibility: hidden;
        }
        span{ display: inline-block; line-height: 50px;float: left; padding: 0 0 0 10px;}
    }
}
</style>
