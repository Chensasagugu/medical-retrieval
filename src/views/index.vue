<template>
    <div class="app-container">
      <!-- 页头 -->
      <el-header class="app-header">
        <div class="app-header-left">
          <span class="app-header-title">肺部CT图像检索系统</span>
        </div>
        <div class="app-header-right">
          <span class="app-header-username">Hi Doctor</span>
        </div>
      </el-header>
      
      <!-- 主体内容 -->
      <el-main class="app-main">
        <el-row>
          <!-- 左侧导航栏 -->
          <el-col :span="4">
            <el-menu :default-active="$route.path" class="app-menu" router>
              <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">主页</span>
              </el-menu-item>
              <el-submenu index="/retrieval">
                <template slot="title">
                  <i class="el-icon-s-help"></i>
                  <span>肺部CT图像检索</span>
                </template>
                <el-menu-item index="/retrieval/input">
                    <span slot="title">检索</span>
                </el-menu-item>
                <el-menu-item index="/retrieval/ImageSearch">
                  <span slot="title">检索记录</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          
          <!-- 显示内容 -->
          <el-col :span="20">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IndexPage',
    data() {
      return {
      };
    }
  };
  </script>
  
  <style scoped>
  .app-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .app-header {
    background-color: #545c64;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  
  .app-header-left {
    display: flex;
    align-items: center;
  }
  
  .app-header-right {
    display: flex;
    align-items: center;
  }
  
  .app-header-title {
    font-size: 20px;
    font-weight: bold;
  }
  
  .app-header-username {
    font-size: 14px;
    margin-left: 20px;
  }
  
  .app-main {
    padding: 20px;
  }
  
  .app-menu {
    background-color: #fff;
  }
  </style>
  