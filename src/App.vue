<template>
  <UserLogin v-if="!isLogin"></UserLogin>
  <IndexPage v-else></IndexPage>
</template>

<script>
import IndexPage from "./views/index.vue"
import UserLogin from "./views/user/login.vue"
export default {
  name: "App",
  components: {
    IndexPage,
    UserLogin,
  },
  data() {
    return {
      username: "",
      isLogin: false,
    };
  },
  created() {
    let usernameSession = sessionStorage.getItem("username");
    // if (!usernameSession) {
    //   this.$router.push({ path: "/user/login" });
    // } else {
    //   this.isLogin = true;
    // }
    if(usernameSession){
      this.isLogin = true;
    }
  },
};
</script>

<style>
</style>