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
  
        <div style="width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;height:80vh">

          <ion-card style="border-radius:15px;box-shadow:none;width:93%" @click="panic" >
            <ion-card-header>
              <img src="@/assets/images/panicbutton.png" style="display:block;margin:0 auto;width:220px;border-radius:14px" alt="image here">
              
            </ion-card-header>

          </ion-card>

        </div>

      </ion-content>
    </ion-page>
  </template>
  
  <script >

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCard, IonCardHeader, loadingController, alertController } from '@ionic/vue';
    import {  Geolocation, GeolocationPosition, PermissionStatus  } from '@capacitor/geolocation';
    import { ref, reactive } from 'vue';
    import {  useAuthStore } from '@/stores/auth.js';
    import axios from 'axios';
    import router from '@/router';
    import { Preferences } from '@capacitor/preferences';
    // import vueFilePond from "vue-filepond";
    // import "filepond/dist/filepond.min.css";
    // import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
    // import FilePondPeluginFileValidateType from "filepond-plugin-file-validate-type";
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
            const authStore = useAuthStore();
            const location = ref();
            const permission = ref();
            const error = ref(null);
            const success = ref(false);
            let alert = null;

            const form = reactive({
              location: location.value,
            });

            const panic = async () => {

                const loading = await loadingController.create({
                    message: 'Sending Panic Alert...',
                    spinner: 'bubbles'
                });

                await loading.present();

                await checkLocationPermission();
              
                if(permission.value == 'denied'){
                  //show alert
                    alert = await alertController.create({
                    header: 'Location Permission Denied',
                    message: 'Please enable location permission to use this feature.',
                    buttons: ['OK']
                  });

                  await alert.present();
                
                }else{

                  await axios.post('https://gae.co.bw/api/v1/report/panic_mode', {
              location: location.value,
            }, {
                  headers: {
                    Authorization: `Bearer ${authStore.token}`,
                  },
                })
                //   await axios.post('http://127.0.0.1:8000/api/v1/report/panic_mode', form, {
                //   headers: {
                //     Authorization: `Bearer ${authStore.token}`,
                //   },
                // })
                  .then(async (response) => {

                      console.log(response.data);
                      form.location = '';
                      success.value = true
                      loading.dismiss();

                      alert = await alertController.create({
                        header: 'Panic Alert Sent ✅',
                        message: 'Your distress signal has been sent to the nearest police station. Please wait for assistance.',
                        buttons: ['OK']
                      });

                      await alert.present();

                  })
                  .catch(async (err) => {
                      error.value = err.response.data.error
                      console.log(err.response.data);
                      loading.dismiss();

                      alert = await alertController.create({
                        header: 'Failed Panic Alert',
                        message: err.response.data.message,
                        buttons: ['OK']
                      });

                      await alert.present();
                  });
                }

                //dismiss loading
                loading.dismiss();
              }

              // Check for location permission on mount
              const checkLocationPermission = async () => {
                const status = await Geolocation.checkPermissions();

                permission.value = status;

                if (status.location === 'denied') {
                  console.log('Location permission denied.');
                } else if (status.location === 'granted') {
                  console.log('Location permission granted.');
                  getCurrentLocation();
                } else {
                  console.log('Location permission not requested. Requesting permission now.');
                  requestLocationPermission();
                }


                getCurrentLocation();
              };

              // Request location permission
              const requestLocationPermission = async () => {
                const status = await Geolocation.requestPermissions();

                permission.value = status;

                if (status.location === 'granted') {
                  console.log('Location permission granted.');
                  getCurrentLocation();
                } else {
                  console.log('Location permission denied.');
                }
              };

              // Get current location
              const getCurrentLocation = async () => {
                const pos = await Geolocation.getCurrentPosition();

                location.value = pos;
              };

              

            return {panic}
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
            IonCard, IonCardHeader
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

  .blue-btn{
    --background: #1ca5df21;
    background: #1ca5df21;
    color: #1ca5df;
    --border-radius: 5px;
    font-size: 1rem;
    margin-top:4px;
    --box-shadow:none;
  }

  .blue-btn:hover{
    --background: #1ca5df;
    color: #fff;
    --border-radius: 5px;
    font-size: 1rem;
    margin-top:4px;
    --box-shadow:none
  }
  </style>
  