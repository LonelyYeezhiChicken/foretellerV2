<script lang="ts">
import { NavBar } from "./components/index";
// import DialogMixins from "../src/mixins/Dialog";

export default {
  name: "Layout",
  // mixins: [DialogMixins],
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <el-container direction="vertical">
    <NavBar></NavBar>
  </el-container>
</template>
