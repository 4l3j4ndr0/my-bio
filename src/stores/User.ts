import { defineStore } from "pinia";
import ApiService from "../Helpers/ApiService";
import { LocalStorage, useQuasar } from "quasar";
import {
  signIn,
  signOut,
  fetchAuthSession,
  getCurrentUser,
} from "aws-amplify/auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    token: null,
    email: "",
    userId: "",
  }),
  actions: {
    async currentSession() {
      try {
        let token: any = (await fetchAuthSession()).tokens ?? {};

        if (token && token.idToken) {
          LocalStorage.set("token", {
            id_token: token.idToken.toString(),
          });
          this.setToken({
            id_token: token.idToken.toString(),
          });
          const { userId, signInDetails } = await getCurrentUser();
          this.email = signInDetails?.loginId || "";
          this.userId = userId;
        }

        return token;
      } catch (err) {
        console.log(err);
      }
    },
    async logIn(username: string, password: string) {
      try {
        const { isSignedIn, nextStep } = await signIn({ username, password });
        return isSignedIn;
      } catch (error) {
        console.log("error signing in", error);
        return error;
      }
    },
    async logOut() {
      try {
        await signOut({ global: true });
        LocalStorage.clear();
        return true;
      } catch (error) {
        console.log("error signing out: ", error);
        return error;
      }
    },
    setToken(token: any) {
      this.token = token;
    },
  },
});
