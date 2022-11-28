<script lang="ts">
export default {
  name: "AppMain",
  props: {
    isCollapse: { type: Boolean },
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>


<template>
  <el-main style="height: 100%">
    <router-view :key="key" :isCollapse="isCollapse" />
  </el-main>
</template>
    

  