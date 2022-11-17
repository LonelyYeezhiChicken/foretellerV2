<script lang="ts">
import { RouteRecordName } from "vue-router";

export default {
  name: "Aside",
  data() {
    return {
      activeIndex: this.$route.name,
    };
  },
  props: {
    isCollapse: { type: Boolean },
  },
  computed: {
    menuList() {
      return this.$router.options.routes.filter((item, index) => {
        return index > 2;
      }); //取得menu頁面之route名  跳過login & home & permission
    },
  },
  methods: {
    handleItemSelect(index: RouteRecordName | null | undefined) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.$router.push({ name: index as RouteRecordName });
      }
    },
  },
  watch: {
    $route() {
      if (this.$route.name == "Home") {
        this.activeIndex = this.$route.name;
      }
    },
  },
};
</script>

<template>
  <el-aside :width="isCollapse ? '0px' : '12.5%'">
    <el-scrollbar id="asideScrollBar">
      <el-menu
        class="asideMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-active="activeIndex"
        @select="handleItemSelect"
      >
        <el-sub-menu
          v-for="menuItem in menuList"
          :key="menuItem.meta.title"
          :index="menuItem.meta.title"
        >
          <template #title class="menuTitle">
            {{ menuItem.meta.title }}
          </template>
          <el-menu-item
            v-for="menuSubItem in menuItem.children"
            :key="menuSubItem.name"
            :index="menuSubItem.name"
            class="menuSubTitle"
            >{{ menuSubItem.meta.title }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped>
/* 側邊menu */
.asideMenu {
  color: white;
  padding-top: 64px;
}
.asideMenu .el-menu {
  padding-left: 24px;
}
</style>


<style>
/* scrollbar */
#asideScrollBar {
  height: 100%;
  background: transparent linear-gradient(180deg, #1371c3 0%, #0b76d480 100%) 0%
    0% no-repeat padding-box;
}
</style>