import { defineStore } from 'pinia'
import axios from 'axios';
import router from '../router/index'
import { Preferences } from '@capacitor/preferences';

axios.defaults.baseURL = "https://gae.co.bw/"
// axios.defaults.baseURL = "http://192.168.0.188:8000/"
// const test = await authStore.getToken()
export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            authenticated: false,
            base_url: "https://gae.co.bw/",
            // base_url: "http://192.168.0.188:8000/",
            error: null,
            token: null,
            user: null,
            dob: "",
            gender: "",
        }
    },
    getters: {
        loggedIn: (state) => (state.user ? true : false),
        // getToken: async () => await Preferences.get({ key: 'token' }),
    },
    actions: {

        async getToken() {
          return await Preferences.get({ key: 'token' });
        },

        async setToken (token) {
          await Preferences.set({
            key: 'token',
            value: token,
          });
        },

        async setUser (user) {
          await Preferences.set({
            key: 'user',
            value: JSON.stringify(user),
          });
        },

        async login(email, password) {

          const config = {
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            }
          };

          await axios.post('/api/login', {
            email: email,
            password: password
          }, config).then((res) => {
            
            console.log('#######################################################')
            console.log("Authentication Successful");
            console.log('#######################################################')
            this.authenticated = true;

            this.user = res.data.user;
            this.token = res.data.token;
            this.setToken(res.data.token);
            

          }).catch((error) => {
            this.error = error.response.data.message;
          });

          
        },
        async logout() {

            const config = {
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            };

            await axios.post('/logout', {
              },config).then(() => {
                
                this.user = null;
                localStorage.removeItem("event");
                localStorage.removeItem("events");
                localStorage.removeItem("timer");

              }).catch(() => {
          
                this.user = null;
                localStorage.removeItem("event");
                localStorage.removeItem("events");
                localStorage.removeItem("timer");

              });

              router.push('/login')
              
        }
    }
})