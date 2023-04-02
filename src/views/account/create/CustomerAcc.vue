<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="danger"></ion-menu-button>
          </ion-buttons>
          <ion-title>Create Account</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Create Account</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <div style="width:98%;margin:0 auto">
          <ion-button router-link="/profile/type/customer-account" fill="clear" color="danger" style="margin-top:15px">back</ion-button>
          
          <ion-card style="border-radius:15px;box-shadow:none;width:93%" color="light">
            <ion-card-header>
              <img src="@/assets/images/account.png" style="display:block;margin:0 auto;width:90px;border-radius:14px" alt="image here">
            </ion-card-header>

            <ion-card-content v-if="accType == 'individual'">
              <h4 style="font-weight:900;text-align:center;margin-bottom:10px" >Create Your {{ accType }} Profile</h4>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Name</ion-label>
                <ion-input type="text" class="form-control" color="dark" placeholder="Enter Full Names"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Surname</ion-label>
                <ion-input type="text" class="form-control" placeholder="Enter Surname"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Postal Address</ion-label>
                <ion-input type="text" class="form-control" placeholder="Enter Address"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Number of Houses</ion-label>
                <ion-input type="number" class="form-control" placeholder="Enter Number of Houses"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Phone</ion-label>
                <ion-input  type="number" class="form-control" placeholder="26771234567"></ion-input>
              </div>


             <div style="border:1px solid black"></div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Location</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Gaborone"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Plot Number</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Plot Number"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Street Address</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Street Address"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Select Package</ion-label>
                <ion-select v-model="pack" placeholder="Select Account Type" class="form-control">
                    <ion-select-option value="90">Gold <small>(P90.00)</small></ion-select-option>
                    <ion-select-option value="125">Platinum (P125.00)</ion-select-option>
                </ion-select>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Consent <span style="color:red">*</span></ion-label><br>
                <input type="checkbox"><span>Please debit my account as per below details.</span>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Bank Name</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Bank Name"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Branch Code</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Branch Code"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Branch Name</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Branch Name"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Account Number</ion-label>
                <ion-input  type="number" class="form-control" placeholder="Enter Account Number"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Account Type</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Account Type"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Terms &amp; Conditions <span style="color:red">*</span></ion-label><br>
                <input type="checkbox"><span>I/We hereby request that ‘instruct’ and authorize you to draw against my / our account with
the above-mentioned bank (or any other branch to which I / We may transfer my /our account)
Package selected amount as monthly payment(s) due in respect of the agreement on the first day of the
month of my approval.</span>
              </div>


              <ion-button color="danger" router-link="/" class="" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Join Now</ion-button>

            </ion-card-content>

            <ion-card-content v-else-if="accType == 'company'">
              <h4 style="font-weight:900;text-align:center;margin-bottom:10px" >Create Your {{ accType }} Profile</h4>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">CIPA REG #</ion-label>
                <ion-input type="text" class="form-control" color="dark" placeholder="BW000192"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Company Name</ion-label>
                <ion-input type="text" class="form-control" placeholder="Enter Company Name"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Postal Address</ion-label>
                <ion-input type="text" class="form-control" placeholder="Enter Address"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Phone</ion-label>
                <ion-input  type="number" class="form-control" placeholder="26771234567"></ion-input>
              </div>


             <div style="border:1px solid black"></div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Location</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Gaborone"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Plot Number</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Plot Number"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Street Address</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Street Address"></ion-input>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Select Package</ion-label>
                <ion-select v-model="pack" placeholder="Select Account Type" class="form-control">
                    <ion-select-option value="90">Guest House <small>(P450.00)</small></ion-select-option>
                    <ion-select-option value="125">Multi Residential (P85.00)</ion-select-option>
                    <ion-select-option value="125">Warehouses (P1400.00)</ion-select-option>
                    <ion-select-option value="125">Hotel (P1400.00)</ion-select-option>
                </ion-select>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Consent <span style="color:red">*</span></ion-label><br>
                <input type="checkbox"><span>Please debit my account as per below details.</span>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Bank Name</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Bank Name"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Branch Code</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Branch Code"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Branch Name</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Branch Name"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Account Number</ion-label>
                <ion-input  type="number" class="form-control" placeholder="Enter Account Number"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Account Type</ion-label>
                <ion-input  type="text" class="form-control" placeholder="Enter Account Type"></ion-input>
              </div>

              <div class="mt-2 mb-2">
                <ion-label class="fw-bold dark-text">Terms &amp; Conditions <span style="color:red">*</span></ion-label><br>
                <input type="checkbox"><span>I/We hereby request that ‘instruct’ and authorize you to draw against my / our account with
the above-mentioned bank (or any other branch to which I / We may transfer my /our account)
Package selected amount as monthly payment(s) due in respect of the agreement on the first day of the
month of my approval.</span>
              </div>


              <ion-button color="danger" :router-link="`/checkout/`+pack" class="" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Submit</ion-button>

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
    IonCard, IonCardHeader, IonCardContent, IonButton, IonSelectOption, IonSelect, IonInput, IonLabel } from '@ionic/vue';
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
            IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
            IonCard, IonCardHeader, IonCardContent, IonButton, IonSelectOption, IonSelect, IonInput, IonLabel
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
    --background: var(--ion-color-primary-contrast);
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
  