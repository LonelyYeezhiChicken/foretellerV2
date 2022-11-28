
<script lang="ts">
import SideBar from "../SideBars/SideBar.vue";
import AppMain from "../AppMain.vue";
export default {
  name: "NavBar",
  inheritAttrs: false,
  data() {
    return {
      isCollapse: false,
      fullScreen: false,
      username: "",
      fab: "",
    };
  },
  created() {
    let _self = this;
  },
  components: {
    SideBar,
    AppMain,
  },
  methods: {
    // menu摺疊與展開
    toggleCollapse() {
      let _self = this;
      _self.isCollapse = !_self.isCollapse;
    },
    screen() {},
    Logout() {},
  },
};
</script>

<template>
  <el-header height="9%">
    <el-row id="navbar">
      <el-col :span="3">
        <el-row>
          <router-link to="/home" id="headTitle"><p>首頁</p></router-link>
        </el-row>
      </el-col>
      <el-col :span="11">
        <el-row justify="end">
          <el-button @click="Logout"><p>登出</p> </el-button>
        </el-row>
      </el-col>
    </el-row>
  </el-header>
  <el-container>
    <SideBar :isCollapse="isCollapse"></SideBar>
    <AppMain :isCollapse="isCollapse"></AppMain>
  </el-container>
</template>
  
