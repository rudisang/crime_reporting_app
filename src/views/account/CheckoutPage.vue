<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="danger"></ion-menu-button>
          </ion-buttons>
          <ion-title>Checkout</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Checkout</ion-title>
          </ion-toolbar>
        </ion-header>


  
        <div style="width:98%;margin:0 auto">

        <ion-button router-link="/profile/create/customer-account/individual" fill="clear" color="danger" style="margin-top:15px">back</ion-button>

        <div class="card">
            <div class="card-header">
                <img src="https://rvs-order-summary-component.netlify.app/images/illustration-hero.svg" alt="">
            </div>
            <div class="card-body">
                <div class="card-title">Order Summary</div>
                <div class="card-text" v-if="amount == 125">
                    <strong style="text-decoration:underline">This membership takes care of all occurrences in GOLD membership PLUS the following:</strong> <br>
                    <ul>
                       <li> HOUSE VALUATION</li>
                        <li>HOUSE PAINTING</li>
                        <li> There shall be three months waiting period and no refund. </li>
                    </ul>
                </div>
                <div class="card-text" v-else-if="amount == 90">
                    <strong style="text-decoration:underline">This membership takes care of all occurrences in GOLD membership PLUS the following:</strong> <br>
                    <ul>
                        <li>Electric faults</li>
                        <li>Locksmith services</li>
                        <li>Plumbing</li>
                        <li>Drain blockage</li>
                        <li>Roof Leakages</li>
                        <li>Toilet flushing systems</li>
                    </ul>
                </div>
                <div class="card-plan">
                    <div class="card-plan-img"><img width="40" src="https://www.seekpng.com/png/detail/124-1243376_png-file-svg-welcome-package-icon.png" alt=""></div>
                    <div class="card-plan-text">
                        <div class="card-plan-title">{{ plan }} Plan</div>
                        <div class="card-plan-price">BWP{{ amount }}.00/mo</div>
                    </div>
                    <div class="card-plan-link"><router-link to="/">Change</router-link></div>
                </div>

                <div class="mt-2">
                    <ion-label  style="font-size:12px;font-weight:900" class="fw-bold dark-text">Card Number</ion-label>
                    <ion-input  type="number" class="form-control" placeholder=""></ion-input>
                </div>
                <div class="mt-2">
                    <ion-label style="font-size:12px;font-weight:900"  class="fw-bold dark-text">CVC</ion-label>
                    <ion-input  type="number" class="form-control" placeholder=""></ion-input>
                </div>
                <div class="mt-2">
                    <ion-label style="font-size:12px;font-weight:900"  class="fw-bold dark-text">Expiry</ion-label>
                    <ion-input  type="date" class="form-control" placeholder=""></ion-input>
                </div>

                <div class="card-payment-button">
                    <ion-button color="danger" expand="block">Pay Now</ion-button>
                </div>
                <div class="card-cancel-button">
                    <ion-button expand="block" fill="clear" router-link="/">Cancel Order</ion-button>
                </div>
            </div>
        </div>
        
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script >

    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardContent, IonButton, IonLabel, IonInput } from '@ionic/vue';
    import { useRoute } from 'vue-router';
    import {ref } from 'vue';

    export default {
        name: "app",
        data: function () {
            return { myFiles: [] };
        },
        setup(){

            const plan = ref("");
            const route = useRoute();
            const amount = ref(route.params.id);

            if(amount.value == 90){
                plan.value = "Gold";
            }else if(amount.value == 125){
                plan.value = "Platinum";
            }

            return {amount, plan}
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
              IonButton, IonLabel, IonInput
        },
    };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap');
        :root {
            --pale-blue: white;
            --bright-blue: hsl(245, 75%, 52%);
            --very-pale-blue: white;
            --desaturated-blue: hsl(224, 23%, 55%);
            --dark-blue: hsl(223, 47%, 23%);
        }
        body {
            font-family: 'Red Hat Display', sans-serif;
            font-size: 16px;
            position: relative;
            width: 100%;
            height: 100vh;
            padding: 0px;
            margin: 0px;
            background: var(--pale-blue);
        }
        body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: url(https://rvs-order-summary-component.netlify.app/images/pattern-background-desktop.svg);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: top;
            z-index: -1;
        }
        main {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .card {
            width: 100%;
            min-height: 400px;
            margin: 10px auto;
            border-radius: 10px;
            background: white;
        }
        .card .card-header {
            width: 100%;
            height: 156px;
            border-radius: 10px 10px 0px 0px;
        }
        .card .card-header img {
            width: 100%;
            border-radius: 10px 10px 0px 0px;
        }
        .card .card-body {
            width: 100%;
            height: auto;
            padding: 25px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .card .card-body .card-title {
            width: 100%;
            font-weight: 900;
            color: var(--dark-blue);
            text-align: center;
            padding: 15px;
            box-sizing: border-box;
        }
        .card .card-body .card-text {
            width: 100%;
            color: var(--desaturated-blue);
            text-align: center;
            line-height: 25px;
            padding: 15px 0px;
            box-sizing: border-box;
        }
        .card .card-body .card-plan {
            display: flex;
            flex-direction: row;
            align-items: center;
            column-gap: 15px;
            background: var(--very-pale-blue);
            border-radius: 10px;
            padding: 15px;
            box-sizing: border-box;
        }
        .card .card-body .card-plan .card-plan-img {
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .card .card-body .card-plan .card-plan-text {
            flex-grow: 6;
            display: flex;
            flex-direction: column;
            row-gap: 4px;
        }
        .card .card-body .card-plan .card-plan-text .card-plan-title {
            color: var(--dark-blue);
            font-weight: 900;
            font-size: 14px;
        }
        .card .card-body .card-plan .card-plan-text .card-plan-price {
            color: var(--desaturated-blue);
            font-size: 14px;
        }
        .card .card-body .card-plan .card-plan-link {
            flex-grow: 1;
        }
        .card .card-body .card-plan .card-plan-link a {
            color: var(--bright-blue);
            font-weight: 700;
            font-size: 14px;
            cursor: pointer;
        }
        .card .card-body .card-plan .card-plan-link a:hover {
            color: #766cf1;
            text-decoration: none;;
        }
        .card .card-body .card-payment-button {
            padding: 25px 0px 15px;
            box-sizing: border-box;
        }
        .card .card-body .card-payment-button button {
            width: 100%;
            height: 50px;
            border: 0;
            background: var(--bright-blue);
            color: white;
            font-weight: 700;
            border-radius: 10px;
            box-shadow: 0px 10px 20px 0px hsl(245deg 75% 52% / 44%);
            cursor: pointer;
        }
        .card .card-body .card-payment-button button:hover {
            background: #766cf1;
        }
        .card .card-body .card-cancel-button {
            padding: 15px 0px;
            box-sizing: border-box;
        }
        .card .card-body .card-cancel-button button {
            width: 100%;
            border: 0;
            background: none;
            color: var(--desaturated-blue);
            font-weight: 900;
            text-align: center;
            cursor: pointer;
        }
        .card .card-body .card-cancel-button button:hover {
            color: var(--dark-blue);
        }
        

        @media (max-width: 375px) {
            body {
                height: auto;
            }
            body::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background: url(https://rvs-order-summary-component.netlify.app/images/pattern-background-mobile.svg);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: top;
                z-index: -1;
            }
            
        }
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
    --background: var(--ion-color-light);
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
  