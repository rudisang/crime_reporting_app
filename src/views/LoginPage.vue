<template>
    <ion-page>
      <ion-content :fullscreen="true" color="light">
        <div class="row">
          <ion-card class="card" style="padding:60px 0px">
            <ion-card-header>
              <img src="@/assets/images/logo.png" width="300" class="logo" alt="image here">
              
            </ion-card-header>

            <ion-card-content>
              <div class="error-container" v-if="error">
                  <ul>
                      <li >{{error}}</li>
                  </ul>
              </div>

              <div class="success-container" v-if="success">
                  {{ success }}
              </div>

              <div class="mt-3">
                <ion-label class="fw-bold dark-text">Email</ion-label>
                <ion-input v-model="form.email" type="email"  class="form-control" placeholder="Enter Email"></ion-input>
              </div>
              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Password</ion-label>
                <ion-input v-model="form.password" type="password" class="form-control" placeholder="Enter Password"></ion-input>
              </div>

              <div class="mt-2">
                <ion-button @click="attemptLogin()" size="large" expand="block" class="red-btn">Login</ion-button>
              </div>

              <div class="mt-2">
                <p>Don't have an account? <router-link to="/register">Signup</router-link></p>
              </div>

            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import {IonButton, IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonLabel, IonCardSubtitle,IonInput,IonCardContent, loadingController } from '@ionic/vue';
  
  import { Preferences } from '@capacitor/preferences';
  import {  useAuthStore } from '@/stores/auth.js';
  import { reactive, ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const success = ref();
  const authStore = useAuthStore();
  const error = ref()
  const form = reactive({
    email: 'nykizy@mailinator.com',
    password: '123456789',
  });

  if(route.query.success){
    success.value = 'Account created successfully. Please login to continue.';
  }

  const attemptLogin = async () => {
    
    if(!form.email || !form.password){
      error.value = 'Please fill in all fields';
      return;
    }

    const loading = await loadingController.create({
        message: 'Logging In...',
        spinner: 'bubbles'
    });

    loading.present();
    await authStore.login(form.email, form.password);
    loading.dismiss();
    console.log('logged in')
      console.log(useAuthStore().user)
    if(useAuthStore().error){
      error.value = useAuthStore().error;
      return;
    }

    if(useAuthStore().loggedIn){
      router.push('/')
    }

    
  }

  </script>
  
  <style scoped>

 .bg-light {
    --background: #f8f9fa;
  }

  .dark-text{
    color: #495057;
  }

  .fw-bold{
    font-weight: 700;
    --font-weight: 700;
  }

  .fw-bolder{
    font-weight: 900;
    --font-weight: 900;
  }

  .red-btn{
    --background: #1ca5df21;
    color: #1ca5df;
    --border-radius: 5px;
    font-size: 1rem;
    margin-top:4px;
    --box-shadow:none;
  }

  .error-container{
    background-color: #f8d7da;
    border-color: #f5c2c7;
    color: #721c24;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 14px;
    margin-bottom: 1rem;
  }

  .success-container{
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 14px;
    margin-bottom: 1rem;
  }

  .red-btn:hover{
    --background: #1ca5df;
    color: #fff;
    --border-radius: 5px;
    font-size: 1rem;
    margin-top:4px;
    --box-shadow:none
  }

  .card{
    box-shadow: none;
    width:100%;
    border-radius:14px;
  }

  .logo{
    border-radius:15px;
    display:block;
    margin:0 auto;
  }

  .form-control{
    border-radius: 9px;
    padding:8px;
    margin-top:4px;
   --background: var(--ion-color-light)
  }

.row{
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  }

  /* MARGIN STYLING */
  .mt-1{
    margin-top: 10px;
  }

  .mt-2{
    margin-top: 20px;
  }

  .mt-3{
    margin-top: 30px;
  }

  .mt-4{
    margin-top: 40px;
  }

  .mt-5{
    margin-top: 50px;
  }
  </style>
  