<script  lang="ts">
import { apiTest, apiLogin } from "../../api/Api";
// import { FooterAdmin, NavbarAdmin } from "../../components/index";
import { defineComponent } from "vue";
import { account } from "../../store";
import { RouterMap } from "../../models/define";
export default defineComponent({
  name: "login",
  inheritAttrs: false,
  data() {
    return {
      userName: "" as string,
      password: "" as string,
    };
  },
  components: {
    // FooterAdmin,
    // NavbarAdmin,
  },
  mounted() {
    apiTest("").then((res: any) => {
      console.log(res);
    });
  },
  methods: {
    // 檢查資料
    checkData: function (): Boolean {
      const _self = this;
      if (_self.userName === "") return false;
      if (_self.password === "") return false;

      return true;
    },
    // 登入
    toLogin: function (): void {
      const _self = this;
      if (_self.checkData()) {
        apiLogin(_self.apiData()).then((res) => {
          account().setJwt(res.data.token.result);
          window.location.href = RouterMap.Home;
        });
      }
    },
    // 組合Api資料
    apiData: function (): any {
      const _self = this;
      return {
        userName: _self.userName,
        password: _self.password,
      };
    },
  },
});
</script>

<template>
  <el-card class="box-card">
    <el-form ref="formRef" label-width="100px" class="demo-ruleForm">
      <el-form-item label="使用者" prop="userName">
        <el-input
          type="text"
          placeholder="Please input user name"
          autocomplete="off"
          v-model="userName"
        />
      </el-form-item>
      <el-form-item label="密碼" prop="passWord">
        <el-input
          type="password"
          placeholder="Please input password"
          show-password
          v-model="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toLogin()">登入</el-button>
      </el-form-item>
    </el-form></el-card
  >
</template>
