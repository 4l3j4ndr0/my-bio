import a from "axios";
const axios = a.create({
  baseURL: process.env.API_URL
});

import { useUserStore } from "../stores/User";
import { useQuasar } from "quasar";
export default function() {
  const user = useUserStore();

  const post = (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}`, data, {
          headers: {
            Authorization: `Bearer ${user.token.id_token}`
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  const get = url => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}`, {
          headers: {
            Authorization: `Bearer ${user.token.id_token}`
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          console.log("ERRROR:::::", err);
          reject(err);
        });
    });
  };

  const remove = url => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}`, {
          headers: {
            Authorization: ` Bearer ${user.token.id_token}`
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  const put = (url, data) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${url}`, data, {
          headers: {
            Authorization: `Bearer ${user.token.id_token}`
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  return {
    post,
    get,
    remove,
    put
  };
}
