<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list" style="height:95vh;position:relative">
            <img style="margin-bottom:30px" src="@/assets/images/logo.png" width="230" class="logo" alt="image here" />
           

            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>

            <div style="bottom:0px;position:absolute">
              <ion-list-header slot="end" style="font-size:16px">{{ authStore?.user?.name || 'Tumisang' }}</ion-list-header>
              <ion-note style="margin-bottom:10px;">{{ authStore?.user?.email || 'user@example.com' }}</ion-note>

              <ion-menu-toggle @click="logout()">
                <ion-item  style="--background:#1ca5df21;--color:white" lines="none"  detail="false" class="hydrated" >
                  <ion-icon slot="start" :ios="power" :md="power" style="--color:white;color:white"></ion-icon>
                  <ion-label>Logout</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </div>

          </ion-list>

   
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import router from '@/router';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import { ref } from 'vue';
import {
  power,
  home,
  settings,
  shieldHalf, 
  personCircle

} from 'ionicons/icons';

const authStore = useAuthStore();

const selectedIndex = ref(0);
const appPages = [
  {
    title: 'Home',
    url: '/',
    iosIcon: home,
    mdIcon: home,
  },
  {
    title: 'Report Crime',
    url: '/report/select-address',
    iosIcon: shieldHalf,
    mdIcon: shieldHalf,
  },
  {
    title: 'Profile',
    url: '/user/profile',
    iosIcon: personCircle,
    mdIcon: personCircle,
  },
  {
    title: 'Settings',
    url: '/settings',
    iosIcon: settings,
    mdIcon: settings,
  },
];

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}

const logout = () => {
  authStore.user = null;
  router.push('/login');
};

</script>

<style scoped>

.logo{
    border-radius:15px;
    display:block;
    margin:0 auto;
  }

ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: #1ca5df21;
}

ion-menu.md ion-item.selected ion-icon {
  color: #1ca5df;
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: #1ca5df;
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: #1ca5df;
}
</style>
