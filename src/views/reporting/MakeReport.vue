<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button style="color:#1ca5df" ></ion-menu-button>
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
          <ion-button router-link="/report/select-address" fill="clear" color="#1ca5df" style="margin-top:15px">back</ion-button>
          
          <ion-card style="border-radius:15px;box-shadow:none;width:93%" color="light">
            <ion-card-header>
              <img src="@/assets/images/referee.png" style="display:block;margin:0 auto;width:90px;border-radius:14px" alt="image here">
            </ion-card-header>

            <ion-card-content>
              <h4 style="font-weight:900;text-align:center;margin-bottom:10px" >Incident Report Dashboard</h4>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Description</ion-label>
                <ion-textarea type="text" v-model="form.description" class="form-control" color="dark" placeholder="Enter your statement"></ion-textarea>
              </div>

              <div class="mt-2">
                <label class="fw-bold">Pictures <span style="color:red">*</span></label>
                <file-pond
                @change="setImages($event)"
                name="test"
                ref="pond"
                label-idle="Drop images here Or Click To Upload..."
                v-bind:allow-multiple="true"
                accepted-file-types="image/jpeg, image/png, image/jpg"
                :files="myFiles"
                :allow-file-size-validation = "true"
                :allow-file-encode = "true"
                max-file-size = "2mb"
                min-file-size = "11kb"
                max-files="2"
                v-on:removefile="remove($event)"
                v-on:init="handleFilePondInit"
                />
              </div>

              <br>
              <ion-button @click="submit()" class="red-btn" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Report</ion-button>

            </ion-card-content>

          </ion-card>

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script >

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTextarea,
    IonCard, IonCardHeader, IonCardContent, IonButton, IonLabel, loadingController } from '@ionic/vue';
    import vueFilePond from "vue-filepond";
    import "filepond/dist/filepond.min.css";
    import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
    import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
    import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
    import {  useAuthStore } from '@/stores/auth.js';
    import axios from 'axios';

    // Create component
    const FilePond = vueFilePond(
        FilePondPluginFileValidateType,
        FilePondPluginImagePreview,
        FilePondPluginFileValidateSize,
        FilePondPluginFileEncode
    );

    import { ref, reactive } from 'vue';
    import { useRoute } from 'vue-router'
    export default {
        name: "make-report",
        data: function () {
            return { myFiles: [],  };
        },
        setup(){
            const authStore = useAuthStore();
            console.log(authStore.user)
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
            handleFilePondInit(){
                console.log("FilePond has initialized");
            },
            remove(){

              this.form.pictures = []

              if(this.$refs.pond.getFiles().length == 0){
                  this.form.pictures = []
              }else{
                  this.$refs.pond.getFiles().forEach(el => {
                      this.form.pictures.push(el.file)
                  });
              }

            },
            setImages(e) {

            if(e.target.files.length == 1){
                this.form.pictures.push(e.target.files[0])
            }else{
                this.form.pictures = e.target.files
            }

            console.log(this.form.pictures)
            },
            async submit(){

              const fm = new FormData()
              if(this.location_preference == "current"){
                fm.append('lat', this.form.lat)
                fm.append('lng', this.form.lng)
              }else{
                fm.append('location', this.form.location)
              }
              fm.append('description', this.form.description)
              fm.append('pic_one', this.form.pictures[0], "picture_"+Date.now())
              fm.append('pic_two', this.form.pictures[1], "picture_"+Date.now())

              const loading = await loadingController.create({
                    message: 'Sending Report...',
                    spinner: 'bubbles'
              });

              await loading.present();

                await axios.post('api/v1/report/make', fm ,
                {
                      headers: {
                        Authorization: `Bearer ${this.authStore.token}`,
                      },
                    }).then((res) => {

                    console.log(res.data)
                    loading.dismiss();
                }).catch((error) => {
                    this.submissionError = true
                    console.log(error)
                    loading.dismiss();
                });
            }
        },
        components: {
            // FilePond,
            IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTextarea,
            IonCard, IonCardHeader, IonCardContent, IonButton,  IonLabel, FilePond
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
  