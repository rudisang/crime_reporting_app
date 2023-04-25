<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button style="color:#1ca5df" ></ion-menu-button>
          </ion-buttons>
          <ion-title>My Profile</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">My Profile</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <div style="width:98%;margin:0 auto">
          <ion-button router-link="/" fill="clear" color="#1ca5df" style="margin-top:15px">back</ion-button>
          
          <ion-card style="border-radius:15px;box-shadow:none;width:93%" color="light">

            <ion-card-header>
              <img src="@/assets/images/account.png" style="display:block;margin:0 auto;width:90px;border-radius:14px" alt="image here">
            </ion-card-header>

            <ion-card-content>
              <h4 style="font-weight:900;text-align:center;margin-bottom:10px" >{{ authStore.user.name }}</h4>

              <div class="error-container" v-if="error">
                {{ error }}
            </div>

              <div class="success-container" v-if="success">
                  {{ success }}
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Names</ion-label>
                <ion-input v-model="profile.name" type="text" class="form-control" placeholder="Enter Full Names"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Email</ion-label>
                <ion-input disabled v-model="profile.email" type="email" class="form-control" placeholder="Enter Email"></ion-input>
              </div>

              
              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Phone</ion-label>
                <ion-input v-model="profile.phone" type="number" class="form-control" placeholder="Enter Phone"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Postal Address</ion-label>
                <ion-input v-model="profile.address" type="text" class="form-control" placeholder="Enter Postal Address"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Physical Address</ion-label>
                <ion-input v-model="profile.area" type="text" class="form-control" placeholder="Enter Physical Address"></ion-input>
              </div>


              <br>
              <ion-button @click="submit" class="red-btn" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Update Profile</ion-button>

            </ion-card-content>

          </ion-card>

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script >

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput,
    IonCard, IonCardHeader, IonCardContent, IonButton, IonLabel, loadingController } from '@ionic/vue';

    import {  useAuthStore } from '@/stores/auth.js';
    import axios from 'axios';

    import { ref, reactive } from 'vue';
    // import { useRoute } from 'vue-router'
    export default {
        name: "user-profile",
        data: function () {
            return { };
        },
        setup(){
            const authStore = useAuthStore();
            const error = ref(null)
            const success = ref(null)

            const profile = reactive({
                name : authStore.user.name,
                email: authStore.user.email,
                phone: authStore.user.phone,
                address: authStore.user.address,
                area: authStore.user.area,
                avatar: authStore.user.avatar,
            })

            const submit = async () => {

              const loading = await loadingController.create({
                  message: 'Updating Proile...',
                  spinner: 'bubbles'
              });

              loading.present();

                await axios.post('/api/v1/auth/update-profile', profile,{
                  headers: {
                    Authorization: `Bearer ${authStore.token}`,
                  },
                })
                .then((response) => {
                    console.log(response.data);

                    authStore.user.name = response.data.user.name
                    authStore.user.email = response.data.user.email
                    authStore.user.phone = response.data.user.phone
                    authStore.user.address = response.data.user.address
                    authStore.user.area = response.data.user.area
                    authStore.user.avatar = response.data.user.avatar

                    success.value = response.data.message

                    //wait 5 seconds and set success to null
                    setTimeout(() => {
                      success.value = null
                    }, 3000);
                    
                    loading.dismiss();

                })
                .catch((err) => {
                    error.value = err.response.data.message
                    console.log(err.response.data);
                    loading.dismiss();
                });

              }

            return { authStore, profile, error, submit, success}
        },
        methods: {
   
        },
        components: {
            // FilePond,
            IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput,
            IonCard, IonCardHeader, IonCardContent, IonButton,  IonLabel
        },
    };
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
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

  .form-control{
    border-radius: 9px;
    padding:8px;
    margin-top:4px;
    margin-bottom:20px;
    --background: var(--ion-color-primary-contrast) !important;
    background: var(--ion-color-primary-contrast) !important;
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  .red-btn{
    --background: #1ca5df21;
    color: #1ca5df;
    --border-radius: 5px;
    font-size: 1rem;
    margin-top:4px;
    --box-shadow:none;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
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

  .mb-1{
    margin-bottom: 10px;
  }

  .mb-2{
    margin-bottom: 20px;
   }

    .mb-3{
        margin-bottom: 30px;
    }

    .mb-4{
        margin-bottom: 40px;
    }

    .mb-5{
        margin-bottom: 50px;
    }
  </style>
  