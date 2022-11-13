import { defineStore } from 'pinia'
import { AdminModel } from '../models/admin';
import { CookieDao } from "../utils"

const tokenStr = "token";
const adminStr = "ad";
export const account = defineStore('account', {
    state: () => {
        return {
            auth: false,
            Dao: new CookieDao(),
            jwt: ""
        }
    },
    getters: {
        // 檢查權限
        isAuth: (state) => {
            let token = state.Dao.read<string>(tokenStr);
            if (token !== null && token !== "") {
                state.auth = true;
                return state.auth;
            } else {
                state.auth = false;
                return state.auth;
            }
        },
        // 取得 token
        getJwt: (state) => {
            let token = state.Dao.read<string>(tokenStr);
            if (token !== null && token !== "") {
                state.jwt = token;
                return state.jwt;
            } else {
                return state.jwt;
            }
        }
    },
    actions: {
        // 將jwt存入session
        setJwt(jwt: string) {
            this.$state.auth = true;
            this.$state.Dao.create(tokenStr, jwt);
        },
        // 清除jwt
        logOut() {
            this.$state.Dao.delete(tokenStr);
            this.$state.Dao.delete(adminStr);
            this.$state.auth = false;
        },
        // 存入角色資訊
        setAdmin(admin: AdminModel) {
            this.$state.Dao.create(adminStr, admin);
        }
    }
})