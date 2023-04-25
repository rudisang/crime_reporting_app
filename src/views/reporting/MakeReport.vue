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

          <div class="error-container" v-if="!authStore.user.area">
              you need to update your address first before you can report a crime. <router-link to="/user/profile">click here to update your profile</router-link>
          </div>

          <ion-card style="border-radius:15px;box-shadow:none;width:93%" color="light">
            <ion-card-header>
              <img src="@/assets/images/referee.png" style="display:block;margin:0 auto;width:90px;border-radius:14px" alt="image here">
            </ion-card-header>

            <ion-card-content>
              <h4 style="font-weight:900;text-align:center;margin-bottom:10px" >Incident Report Dashboard</h4>
              
              <div class="error-container" v-if="error">
                  {{ error }}
              </div>

              <div class="success-container" v-if="success">
                  {{ success }}
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Description</ion-label>
                <ion-textarea type="text" v-model="form.description" class="form-control" color="dark" placeholder="Enter your statement"></ion-textarea>
              </div>

              <div class="mt-2">
                <ion-label class="fw-bold dark-text">Select Category</ion-label>

                <ion-select v-model="form.category" class="form-control" aria-label="Fruit" interface="action-sheet" placeholder="Choose...">
                    <ion-select-option v-for="category in categories" :key="category.id" :value="category.id">{{ category.category }}</ion-select-option>
                </ion-select>
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
              <ion-button :disabled="!authStore.user.area" @click="submit()" class="red-btn" style="margin:0 auto;display:block;width:70%;--box-shadow:none">Report</ion-button>

            </ion-card-content>

          </ion-card>

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script >

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTextarea,
    IonCard, IonCardHeader, IonCardContent, IonButton, alertController, IonLabel, loadingController, IonSelect, IonSelectOption } from '@ionic/vue';
    import vueFilePond from "vue-filepond";
    import "filepond/dist/filepond.min.css";
    import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
    import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
    import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
    import {  useAuthStore } from '@/stores/auth.js';
    import axios from 'axios';
    import {  useLocationStore } from '@/stores/location.js';

    // Create component
    const FilePond = vueFilePond(
        FilePondPluginFileValidateType,
        FilePondPluginImagePreview,
        FilePondPluginFileValidateSize,
        FilePondPluginFileEncode
    );

    import { ref, reactive, onMounted } from 'vue';
    import { useRoute, useRouter } from 'vue-router'
    export default {
        name: "make-report",
        data: function () {
            return { myFiles: [],  };
        },
        setup(){
            const authStore = useAuthStore();
            const locationStore = useLocationStore();
            const route = useRoute()
            const router = useRouter()
            const location_preference = ref(route.params.id)
            const error = ref(null)
            const success = ref(null)
            const categories = ref([])
            let alert = null;

            onMounted( async () => {

              location_preference.value = route.params.id

              const loading = await loadingController.create({
                    message: 'Fetching Categories...',
                    spinner: 'bubbles'
              });

              await loading.present();
              
              await axios.get('/api/v1/report/get-categories')
              .then(async (response) => {
                  categories.value = response.data.categories;
                  console.log(response.data.categories);
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
            })

            const form = reactive({
                category : "",
                preference : location_preference.value,
                location : location_preference.value == "address" ? authStore.user.area : locationStore.location,
                description: "",
                pictures: []
            })

            return {location_preference, authStore, form, success, error, categories,  router}
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
        
              fm.append('category', this.form.category)
              fm.append('preference', this.form.preference)
              if(this.form.preference == "address"){
                fm.append('location', this.form.location)
              }else{
                fm.append('location', JSON.stringify(this.form.location))
              }
              fm.append('description', this.form.description)

              if(this.form.pictures.length > 0){
                fm.append('pic_one', this.form.pictures[0], "picture_"+Date.now())

                if(this.form.pictures[1]){
                  fm.append('pic_two', this.form.pictures[1], "picture_"+Date.now())
                }
              }

              const loading = await loadingController.create({
                    message: 'Sending Report...',
                    spinner: 'bubbles'
              });

              await loading.present();

                await axios.post('/api/v1/report/make', fm ,
                {
                      headers: {
                        Authorization: `Bearer ${this.authStore.token}`,
                      },
                    }).then((res) => {

                    console.log(res.data)
                    this.success = res.data.message
                    loading.dismiss();

                    //create a setimeout function to refresh the page
                    setTimeout(() => {
                      this.router.push('/')
                    }, 3000);

                }).catch((err) => {
                    this.submissionError = true
                    this.error = err.response.data.message
                    loading.dismiss();
                });
            }
        },
        components: {
            // FilePond,
            IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonTextarea,
            IonCard, IonCardHeader, IonCardContent, IonButton,  IonLabel, FilePond, IonSelect, IonSelectOption
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
  