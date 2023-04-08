<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="danger"></ion-menu-button>
          </ion-buttons>
          <ion-title>Report Crime</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Report Crime</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <div style="width:98%;margin:0 auto">
          <ion-button router-link="/profile/type/customer-account" fill="clear" color="danger" style="margin-top:15px">back</ion-button>
          
          <ion-card style="border-radius:15px;box-shadow:none;width:93%" color="light">
            <ion-card-header>
              <img src="@/assets/images/referee.png" style="display:block;margin:0 auto;width:90px;border-radius:14px" alt="image here">
            </ion-card-header>

            <ion-card-content v-if="accType == 'individual'">
              <h4 style="font-weight:900;text-align:center;margin-bottom:10px" >Incident Report Dashboard</h4>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Description</ion-label>
                <ion-textarea type="text" class="form-control" color="dark" placeholder="Enter your statement"></ion-textarea>
              </div>



              <ion-button color="danger" router-link="/" class="" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Report</ion-button>

            </ion-card-content>

            <ion-card-content v-else-if="accType == 'company'">

              <h4 style="font-weight:900;text-align:center;margin-bottom:10px" >Incident Report Dashboard</h4>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Description</ion-label>
                <ion-textarea type="text" class="form-control" color="dark" placeholder="Enter your statement"></ion-textarea>
              </div>

              <ion-button color="danger" router-link="/" class="" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Report</ion-button>

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

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTextarea,
    IonCard, IonCardHeader, IonCardContent, IonButton, IonLabel } from '@ionic/vue';
    // import vueFilePond from "vue-filepond";
    // import "filepond/dist/filepond.min.css";
    // import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
    // import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
    // import FilePondPluginImagePreview from "filepond-plugin-image-preview";

    // const FilePond = vueFilePond(
    //     FilePondPluginFileValidateType,
    //     FilePondPluginImagePreview
    // );

    import { ref } from 'vue';
    import { useRoute } from 'vue-router'
    export default {
        name: "app",
        data: function () {
            return { myFiles: [] };
        },
        setup(){
            const route = useRoute()
            const accType = ref(route.params.id)
            const pack = ref(90);

            return {pack, accType}
        },
        methods: {
            // handleFilePondInit: function () {
            // console.log("FilePond has initialized");

            // // FilePond instance methods are available on `this.$refs.pond`
            // },
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
  