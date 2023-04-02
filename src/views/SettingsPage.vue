<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="danger"></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
        <div class="body">
            <div class="menu">
                <svg id="exit-button" width="15" height="15" fill="#ff5e58" stroke="#ff5e58" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                    <path id="x-view" stroke="black" d="m15 9-6 6"></path>
                    <path id="x-view" stroke="black" d="m9 9 6 6"></path>
                </svg>
                <div class="menu-header">
                    <h2 class="menu-header-title">Theme</h2>
                    <div class="theme-switcher">
                        <input type="radio" id="light-theme" name="themes" checked />
                        <label for="light-theme">
                            <span>
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10z"></path>
                                    <path d="M12 1v2"></path>
                                    <path d="M12 21v2"></path>
                                    <path d="m4.22 4.22 1.42 1.42"></path>
                                    <path d="m18.36 18.36 1.42 1.42"></path>
                                    <path d="M1 12h2"></path>
                                    <path d="M21 12h2"></path>
                                    <path d="m4.22 19.78 1.42-1.42"></path>
                                    <path d="m18.36 5.64 1.42-1.42"></path>
                                </svg>Light
                            </span>
                        </label>
                        <input type="radio" id="dark-theme" name="themes" />
                        <label for="dark-theme">
                            <span>
                                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
                                </svg>Dark
                            </span>
                        </label>
                        <span class="slider"></span>
                    </div>
                </div>
                <div class="menu-body">
                    <!-- <a href="#"><i data-feather="user"></i>Account Settings</a> -->
                    <a href="javascript:void(0)"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>Give Feedback</a>
                    <a href="javascript:void(0)"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                        </svg>About</a>
                    <a href="javascript:void(0)"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                            <path d="M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8z"></path>
                            <path d="m4.93 4.93 4.24 4.24"></path>
                            <path d="m14.83 14.83 4.24 4.24"></path>
                            <path d="m14.83 9.17 4.24-4.24"></path>
                            <path d="m14.83 9.17 3.53-3.53"></path>
                            <path d="m4.93 19.07 4.24-4.24"></path>
                        </svg>Support</a>
                </div>

            </div>
        </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    const html = document.getElementsByTagName('html');
    const radios = document.getElementsByName('themes'); 

    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', function() {
            html[0].classList.remove(html[0].classList.item(0));
            html[0].classList.add(this.id);
        });
    }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
*,
*:after,
*:before {
box-sizing: border-box;
}

:root {
--c-text-primary: #191919;
--c-text-secondary: #737374;
--c-border-primary: #ccc;
--c-bg-body: #ccc;
--c-bg-primary: #fff;
--c-bg-secondary: #d4d8dd;
--c-bg-button: #fff;
--slider-shadow: inset 0 1px 1px #ddd, 0 2px 3px #ccc;
}
:root.dark-theme {
--c-text-primary: #eee;
--c-text-secondary: #d3d5db;
--c-border-primary: #454545;
--c-bg-body: #494a50;
--c-bg-primary: #323339;
--c-bg-secondary: #222128;
--c-bg-button: #494a50;
--slider-shadow: inset 0 1px 1px #767676;
}

.body {
margin-top:40px;
font-family: "Inter", sans-serif;
line-height: 1.5;
height: 100vh;
display: flex;
align-items: flex-start;
justify-content: center;
background-color: var(--c-bg-body);
color: var(--c-text-primary);
}

.menu {
width: 90%;
padding:100px 40px;
max-width: 320px;
background-color: var(--c-bg-primary);
transition: background-color 0.15s ease;
border-radius: 10px 10px;
box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), 0 -4px 16px rgba(0, 0, 0, 0.1);
}

#exit-button {
margin-top: 10px;
margin-left: 10px;
z-index: 99;
}
#exit-button #x-view {
opacity: 0;
transition: all 400ms;
}
#exit-button:hover #x-view {
opacity: 100;
}

.menu-header {
padding-left: 1rem;
padding-right: 1rem;
padding-bottom: 1rem;
}

.menu-header-title {
font-size: 0.875rem;
color: var(--c-text-secondary);
margin-bottom: 0.375rem;
font-weight: 500;
}

.theme-switcher {
background-color: var(--c-bg-secondary);
border-radius: 10px;
display: flex;
padding: 0 3px;
align-items: center;
justify-content: space-between;
position: relative;
overflow: hidden;
}
.theme-switcher .slider {
display: block;
position: absolute;
z-index: 1;
width: calc((100% - 6px) / 2);
top: 3px;
transform: translatex(-110%);
bottom: 3px;
border-radius: 6px;
transition: 0.15s ease, transform 0.25s ease-out;
background-color: var(--c-bg-button);
box-shadow: var(--slider-shadow);
}
.theme-switcher input {
display: none;
}
.theme-switcher input:nth-of-type(1):checked ~ .slider {
transform: translateX(0);
}
.theme-switcher input:nth-of-type(2):checked ~ .slider {
transform: translateX(100%);
}
.theme-switcher label {
position: relative;
z-index: 2;
width: calc(100% / 2);
color: var(--c-text-secondary);
}
.theme-switcher label span {
padding: 8px 0;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
}
.theme-switcher label svg {
display: inline-block;
margin-right: 0.5rem;
width: 20px;
}

.menu-body {
display: flex;
flex-direction: column;
padding: 0.5rem;
border-top: 1px solid var(--c-border-primary);
transition: border-color 0.15s ease;
}
.menu-body a {
text-decoration: none;
color: inherit;
display: flex;
align-items: center;
padding: 0.625rem 0.5rem;
border-radius: 4px;
font-weight: 500;
transition: 0.15s ease;
}
.menu-body a svg {
margin-right: 1rem;
color: var(--c-text-secondary);
transition: color 0.15s ease;
}
.menu-body a:hover {
background-color: var(--c-bg-secondary);
}
</style>
