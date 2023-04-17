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

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Description</ion-label>
                <ion-textarea type="text" v-model="form.description" class="form-control" color="dark" placeholder="Enter your statement"></ion-textarea>
              </div>


              <br>
              <ion-button class="red-btn" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Report</ion-button>

            </ion-card-content>

          </ion-card>

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script >

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTextarea,
    IonCard, IonCardHeader, IonCardContent, IonButton, IonLabel, loadingController } from '@ionic/vue';

    import {  useAuthStore } from '@/stores/auth.js';
    import axios from 'axios';


    import { ref, reactive } from 'vue';
    import { useRoute } from 'vue-router'
    export default {
        name: "user-profile",
        data: function () {
            return { };
        },
        setup(){
            const authStore = useAuthStore();
            const route = useRoute()
            const location_preference = ref(route.params.id)
            const pack = ref(90);

            const form = reactive({
                    location : "",
                    lat: "",
                    lng: "",
                    description: "",
                    pictures: []
                })

            return {pack, location_preference, authStore, form}
        },
        methods: {
   
        },
        components: {
            // FilePond,
            IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTextarea,
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
  