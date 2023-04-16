<!--  -->
<template>
  <div class="login-page">
    <el-form :model="loginForm" ref="loginForm" class="login-form">
      <h2 class="login-title">肺部CT图像检索系统</h2>
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="primary" @click="login">注册</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="dialogVisible">
      <span>{{ dialogText }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from 'axios'
export default {
  name: "UserLogin",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        loginForm: {
        username: '',
        password: '',
        },
        dialogVisible: false,
        dialogText: '',
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    login() {
      /*
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 在这里编写登录逻辑，成功则弹出对话框并跳转到首页，失败则提示错误信息
          this.dialogVisible = true;
          this.dialogText = "登录成功";
          this.$router.push({path:"/index"})
        } else {
          this.dialogVisible = true;
          this.dialogText = "用户名或密码不正确";
          return false;
        }
      });*/
      const url = 'http://localhost:8090/medapi/user/login';
      const data = {
        username: 'chen',
        password: '123456'
      };
      axios.post(url, data)
        .then((response) => {
          var data = response.data
          if(data.code==0){
            //登陆成功
            sessionStorage.setItem("token",data.data)
            this.$router.push({path:"/index"})
          }else{
            //登录失败

          }
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(../../assets/background.jpg) center center / cover no-repeat fixed;
}

.login-form {
  width: 400px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px #ccc;
}

.login-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}
</style>