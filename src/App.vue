<template>
  <el-container>
    <el-header>CBMIR System</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="0">
            <template slot="title">
              <i class="el-icon-house"></i>
              <span>Home</span>
            </template>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Lung CT Retrieval</span>
            </template>
            <el-menu-item-group>
              <router-link to="/retrieval/input">
                <el-menu-item index="1-1">retrieval</el-menu-item>
              </router-link>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.router-link-active {
  text-decoration: none;
}
a {
  text-decoration: none;
}
</style>