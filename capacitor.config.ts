import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Home Assist',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#0f0f0f",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      spinnerColor: "#F8FAFB",
      splashImmersive: true,
    },
    cordova: {
      preferences: {
        LottieFullscreen: true,
        LottieHideAfterAnimation: true,
        LottieAnimationLocation: "public/assets/splash.json",
      }
    },
  },
};

export default config;
