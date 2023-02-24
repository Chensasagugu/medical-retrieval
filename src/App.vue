<template>
  <MedFrame v-if="isLogin"></MedFrame>
  <router-view v-else></router-view>
</template>

<script>
import MedFrame from "./components/med-frame.vue";
export default {
  name: "App",
  components: {
    MedFrame,
  },
  data() {
    return {
      username: "",
      isLogin: false,
    };
  },
  created() {
    let usernameSession = sessionStorage.getItem("username");
    if (!usernameSession) {
      this.$router.push({ path: "/user/login" });
    } else {
      this.isLogin = true;
    }
  },
};
</script>

<style>
</style>