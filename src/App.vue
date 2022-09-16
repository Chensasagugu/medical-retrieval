<template>
  <el-container class="cs-container">
    <el-header class="cs-header">CBMIR System</el-header>
    <el-container>
      <el-aside class="cs-aside" width="200px">
        <el-menu default-active="1-1" class="el-menu-vertical-demo">
          <el-submenu index="0">
            <template slot="title">
              <i class="el-icon-house"></i>
              <span>Home</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="0-0">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Test</span>
            </template>
            <el-menu-item-group>
              <router-link to="/retrieval/input">
                <el-menu-item index="1-0">retrieval</el-menu-item>
              </router-link>
              <el-menu-item index="1-1">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="cs-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 0px;
  height: 100vh;
}

a {
  text-decoration: none;
}

.cs-container {
  height: 100vh;
}

.cs-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.cs-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.cs-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
