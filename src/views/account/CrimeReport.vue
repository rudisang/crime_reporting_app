<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button style="color:#1ca5df"></ion-menu-button>
          </ion-buttons>
          <ion-title>Location</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Location</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <div style="width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;height:80vh">

          <h6 style="font-weight:900">Select Your Address</h6>

          <ion-card style="border-radius:15px;box-shadow:none;width:93%" color="light">
            <ion-card-header>
              <img src="@/assets/images/user.png" style="display:block;margin:0 auto;width:90px;border-radius:14px" alt="image here">
              
            </ion-card-header>

            <ion-card-content>
              <h4 style="font-weight:900;text-align:center;margin-bottom:10px" >Use My Current Location</h4>
              <ion-button router-link="/profile/create/customer-account/individual" class="red-btn" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Select</ion-button>

            </ion-card-content>
          </ion-card>

          <ion-card style="border-radius:15px;box-shadow:none;width:93%" color="light">
            <ion-card-header>
              <img src="@/assets/images/office.png" style="display:block;margin:0 auto;width:90px;border-radius:14px" alt="image here">
              
            </ion-card-header>

            <ion-card-content>
              <h4 style="font-weight:900;text-align:center;margin-bottom:10px" >Use My Home Address</h4>
              <ion-button router-link="/profile/create/customer-account/company" class="red-btn" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Select</ion-button>

            </ion-card-content>
          </ion-card>

          <!-- <strong class="capitalize">Home Page</strong>
          <file-pond
            name="test"
            ref="pond"
            label-idle="Drop files here..."
            v-bind:allow-multiple="true"
            accepted-file-types="image/jpeg, image/png, application/pdf"
            server="https://gae.co.bw/api/profile/kyc"
            v-bind:files="myFiles"
            v-on:init="handleFilePondInit"/> -->
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script >

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardContent, IonButton } from '@ionic/vue';
    // import vueFilePond from "vue-filepond";
    // import "filepond/dist/filepond.min.css";
    // import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
    // import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
    // import FilePondPluginImagePreview from "filepond-plugin-image-preview";

    // const FilePond = vueFilePond(
    //     FilePondPluginFileValidateType,
    //     FilePondPluginImagePreview
    // );

    export default {
        name: "app",
        data: function () {
            return { myFiles: [] };
        },
        setup(){

            return {}
        },
        methods: {
            // handleFilePondInit: function () {
            // console.log("FilePond has initialized");

            // // FilePond instance methods are available on `this.$refs.pond`
            // },
        },
        components: {
            // FilePond,
            IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
            IonCard, IonCardHeader, IonCardContent, IonButton
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

  .red-btn{
    --background: #1ca5df21;
    color: #1ca5df;
    --border-radius: 5px;
    font-size: 1rem;
    margin-top:4px;
    --box-shadow:none;
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
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
  </style>
  