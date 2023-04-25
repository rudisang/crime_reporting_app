import { defineStore } from 'pinia'
import {  Geolocation, GeolocationPosition, PermissionStatus  } from '@capacitor/geolocation';

export const useLocationStore = defineStore('location', {
    state: () => {
        return {
            permission: "",
            location: null,
        }
    },
    getters: {
        isPermitted: (state) => (state.location ? true : false),
    },
    actions: {
        async initLocation() {
            // await checkLocationPermission();

            //For test ENV
            await this.getLocation();
        },

        getLocation(){
            return new Promise((resolve, reject) => {

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
                } else {
                    this.permission = "denied"
                    console.log("Geolocation is not supported by this browser.");
                }
                
            });
        },
        // Check for location permission on mount
        async checkLocationPermission () {
            const status = await Geolocation.checkPermissions();

            this.permission = status;

            if (status.location === 'denied') {
                console.log('Location permission denied.');
            } else if (status.location === 'granted') {
                console.log('Location permission granted.');
                this.getCurrentLocation();
            } else {
                console.log('Location permission not requested. Requesting permission now.');
                this.requestLocationPermission();
            }

            this.getCurrentLocation();
        },

        // Request location permission
        async requestLocationPermission () {
            const status = await Geolocation.requestPermissions();

            this.permission = status;

            if (status.location === 'granted') {
                console.log('Location permission granted.');
                this.getCurrentLocation();
            } else {
                console.log('Location permission denied.');
            }
        },

        // Get current location
        async getCurrentLocation () {
            const pos = await Geolocation.getCurrentPosition();
            this.location = pos;
        },

        async successCallback (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const array = {"coords": {"latitude": latitude, "longitude": longitude}}
            this.location = array;
            console.log("Latitude: " + latitude + " Longitude: " + longitude);
        },

        async errorCallback(error) {
            this.permission = "denied"
            console.log("Unable to retrieve your location due to " + error.code + ": " + error.message);
        }
    }
})