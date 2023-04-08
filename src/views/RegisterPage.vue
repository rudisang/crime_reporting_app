<template>
    <ion-page>
      <ion-content :fullscreen="true" color="light">
        <div class="row">
          <ion-card class="card" style="padding:40px 0px">
            <ion-card-header>
              <img src="@/assets/images/logo.png" width="300" class="logo" alt="image here">
              
            </ion-card-header>

            <ion-card-content>

            <div class="error-container" v-if="invalid.length > 0 && errors">
                <ul>
                    <li v-for="(er, index) in invalid" :key="index">Please ensure that the {{ er }} field is filled correctly.</li>
                </ul>
            </div>

            <div class="error-container" v-if="error">
                {{ error }}
            </div>

             <div class="mt-1">
                <ion-label class="fw-bold dark-text">Name</ion-label>
                <ion-input v-model="form.name" type="text" class="form-control" placeholder="Enter Full Names"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Surname</ion-label>
                <ion-input v-model="form.surname" type="text" class="form-control" placeholder="Enter Full Names"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Email</ion-label>
                <ion-input v-model="form.email" type="email" class="form-control" placeholder="Enter Email"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Password</ion-label>
                <ion-input v-model="form.password" type="password" class="form-control" placeholder="Enter Password"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Confirm Password</ion-label>
                <ion-input v-model="form.password_confirmation" type="password" class="form-control" placeholder="Enter Password"></ion-input>
              </div>

              <div class="mt-2">
                <ion-button size="large" @click="submit" expand="block" class="red-btn">Register</ion-button>
              </div>

              <div class="mt-2">
                <p>I already have an account <router-link to="/login">Login</router-link></p>
              </div>

            </ion-card-content>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import {IonButton, IonContent, IonPage, IonCard, IonCardHeader, IonSelect, IonSelectOption, IonLabel, IonInput, IonCardContent, loadingController  } from '@ionic/vue';
  import { reactive, ref } from 'vue';
  import axios from 'axios';
  import router from '@/router';

    const invalid = ref([]);
    const error = ref('')

    const form = reactive({
      name: '',
      surname: '',
      email: '',
      password: '',
      password_confirmation: '',
    });

    const errors = ref(false)
    
    const submit = async () => {

        const loading = await loadingController.create({
            message: 'Creating Account...',
            spinner: 'bubbles'
        });

        loading.present();

        // invalid.value = Object.keys(form).filter((key) => !form[key]);
        
        // if(invalid.value.length > 0){
        //     errors.value = true;
        //     loading.dismiss();
        //     return;
        // }

        await axios.post('https://gae.co.bw/api/v1/auth/register', form)
        // await axios.post('http://127.0.0.1:8000/api/v1/auth/register', form)
        .then((response) => {
            console.log(response.data);
            form.name = '';
            form.email = '';
            form.password = '';
            form.password_confirmation = '';
            router.push('/login?success=1')
            loading.dismiss();

        })
        .catch((err) => {
            error.value = err.response.data.error
            console.log(err.response.data);
            loading.dismiss();
        });
        
    }

  </script>
  
  <style scoped>

 .bg-light {
    --background: #f8f9fa;
  }

  .flex{
    display:flex;
    
    }

    .align-center{
    align-items:center;
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

  .input-with-icon{
    border-radius:0px 9px 9px 0px;
    padding:8px;
    margin-top:4px;
    color: #495057;
    background-color: rgb(247, 247, 247);
  }

.row{
    min-height:100%;
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
  