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
  
        <div style="width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;height:35vh">

          <ion-card style="border-radius:15px;box-shadow:none;width:93%" @click="panic" >
            <ion-card-header>
              <img src="@/assets/images/panicbutton.png" style="display:block;margin:0 auto;width:220px;border-radius:14px" alt="image here">
              
            </ion-card-header>

          </ion-card>

        </div>

        <div style="width:100%;">

          <ion-card style="border-radius:15px;box-shadow:none;width:93%"  >
            <ion-card-header>
             
            </ion-card-header>

            <ion-card-content>
              <h3 style="font-weight:900">MY REPORTS</h3>
              <ion-list >

                <ion-item v-for="report in reports" :key="report.id">
                  <!-- <ion-label style="display:flex; justify-content: space-between;"><span>{{ report.description }}</span> <span style="font-size:10px;background:#e1f3fb;padding:5px;border-radius:14px;font-weight:900;color:#1ca5df">{{ new Date(report.created_at).toLocaleDateString() }}</span></ion-label> -->
                  <ion-label >
                    <span style="font-size:10px;background:#00000031;padding:5px;border-radius:8px;font-weight:900;color:#000">{{ report.category.category }}</span>
                    <span style="margin-left:10px;font-size:10px;background:#e1f3fb;padding:5px;border-radius:8px;font-weight:900;color:#1ca5df">{{ new Date(report.created_at).toLocaleDateString() + " | "+new Date(report.created_at).toLocaleTimeString() }}</span>
                    <p style="margin-top:10px;text-transform:capitalize">{{ report.description }}</p>
                    <div v-if="report.images.length > 0">
                      <img style="margin:10px;width:100px;border-radius:20px" v-for="image in report.images" :key="image.id" :src="authStore.base_url+image.image" alt="">
                    </div> 
                    <p style="margin-top:10px;display:flex;align-items: center;"> <ion-icon :icon="locationIcon"></ion-icon>{{ report.location }}</p> 
                  </ion-label>
                </ion-item>

                <ion-item v-if="reports.length == 0">
                  <ion-label><span style="color:grey">No Reports Found</span></ion-label>
                </ion-item>

              </ion-list>
            </ion-card-content>

          </ion-card>

        </div>

      </ion-content>
    </ion-page>
  </template>
  
  <script >

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonIcon,
    IonCard, IonCardHeader, loadingController, alertController, IonCardContent } from '@ionic/vue';
    // import {  Geolocation, GeolocationPosition, PermissionStatus  } from '@capacitor/geolocation';
    import {
      location as locationIcon,
    } from 'ionicons/icons';
    import { ref, reactive, onMounted } from 'vue';
    import {  useAuthStore } from '@/stores/auth.js';
    import {  useLocationStore } from '@/stores/location.js';
    import axios from 'axios';
    import router from '@/router';
    import { Preferences } from '@capacitor/preferences';
 

    export default {
        name: "app",
        data: function () {
            return { myFiles: [] };
        },
        setup(){
            const authStore = useAuthStore();
            const locationStore = useLocationStore();
            const permission = ref("");
            const error = ref(null);
            const success = ref(false);
            const reports = ref([])
            let alert = null;

            const form = reactive({
              location: location.value,
            });

            // do something when mounted to the DOM
            onMounted(async () => {

              const loading = await loadingController.create({
                    message: 'Updating My Reports...',
                    spinner: 'bubbles'
              });

              await loading.present();

              //check if the user has given the device permission to access location
              if(!locationStore.isPermitted){
                locationStore.initLocation();
              }
              
              //THIS IS WHERE I RETREIVE ALL MY REPORTS.
              //WHEN THIS PAGE LOADS IT MAKES A REQUEST TO THIS ENDPOITN TO GET ALL MY REPORTS IF ANY
              await axios.get('/api/v1/report/my-reports', {
                      headers: {
                        Authorization: `Bearer ${authStore.token}`,
                      },
                })
              .then(async (response) => {
                  reports.value = response.data.reports;
                  console.log(response.data.reports);
                  loading.dismiss();

              })
              .catch(async (err) => {
                  error.value = err.response.data.error
                  console.log(err.response.data);
                  loading.dismiss();

                  alert = await alertController.create({
                    header: 'Error',
                    message: err.response.data.message,
                    buttons: ['OK']
                  });

                  await alert.present();
              });
              
            });

            const panic = async () => {

                const loading = await loadingController.create({
                    message: 'Sending Panic Alert...',
                    spinner: 'bubbles'
                });

                await loading.present();

                permission.value = locationStore.permission
  
                if(permission.value == 'denied'){
                  //show alert
                    alert = await alertController.create({
                    header: 'Location Permission Denied',
                    message: 'Please enable location permission to use this feature.',
                    buttons: ['OK']
                  });

                  await alert.present();
                
                }else{
                  
                 
                  // await axios.post('https://gae.co.bw/api/v1/report/panic_mode', {
                  await axios.post('/api/v1/report/panic_mode', {
                    location: locationStore.location,
                  }, {
                      headers: {
                        Authorization: `Bearer ${authStore.token}`,
                      },
                    })
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

         

            return {panic, reports, locationIcon, authStore}
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
            IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonList, IonIcon
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
  