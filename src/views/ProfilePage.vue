<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="danger"></ion-menu-button>
          </ion-buttons>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Home</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <div style="width:90%;margin:0 auto">

          <ion-card style="border-radius:15px">
            <ion-card-header>
              <img src="@/assets/images/logo.png" style="display:block;margin:0 auto;width:100%;border-radius:14px" alt="image here">
              
            </ion-card-header>

            <ion-card-content>
              <h4 style="font-weight:900" >P200/mo Technician Package</h4>
            </ion-card-content>
          </ion-card>

          <div>
            <hr>
              <ion-label class="fw-bolder">Update KYC</ion-label>


              <div class="mt-3">
                <ion-label class="fw-bold dark-text">Account Type</ion-label>
                <ion-select v-model="form.profession" placeholder="Select Account Type" class="form-control">
                    <ion-select-option value="personal">Personal</ion-select-option>
                    <ion-select-option value="company">Company</ion-select-option>
                </ion-select>
            </div>
            
              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Names</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Full Names"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Phone</ion-label>
                <ion-input  type="number" class="form-control" placeholder="26771234567"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">DOB</ion-label>
                <ion-input  type="date" class="form-control" placeholder="Enter Address"></ion-input>
              </div>

              <div class="mt-1">
                <ion-label class="fw-bold dark-text">Physical Address</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Physical Address"></ion-input>
              </div>

            <ion-button color="danger">Select</ion-button>
          </div>

          <strong class="capitalize">Home Page</strong>
          <file-pond
            name="test"
            ref="pond"
            label-idle="Drop files here..."
            v-bind:allow-multiple="true"
            accepted-file-types="image/jpeg, image/png, application/pdf"
            server="https://gae.co.bw/api/profile/kyc"
            v-bind:files="myFiles"
            v-on:init="handleFilePondInit"/>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script >

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardContent, IonButton } from '@ionic/vue';
    import vueFilePond from "vue-filepond";
    import "filepond/dist/filepond.min.css";
    import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
    import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";

    const FilePond = vueFilePond(
        FilePondPluginFileValidateType,
        FilePondPluginImagePreview
    );

    export default {
        name: "app",
        data: function () {
            return { myFiles: [] };
        },
        setup(){

            return {}
        },
        methods: {
            handleFilePondInit: function () {
            console.log("FilePond has initialized");

            // FilePond instance methods are available on `this.$refs.pond`
            },
        },
        components: {
            FilePond,
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

  .fw-bold{
    font-weight: 700;
    --font-weight: 700;
  }

  .fw-bolder{
    font-weight: 900;
    --font-weight: 900;
  }


  .form-control{
    border-radius: 9px;
    padding:8px;
    margin-top:4px;
    --background: var(--ion-color-light)
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
  