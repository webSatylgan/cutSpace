<script setup>
// imports components -------
import HeaderComponent from "./components/headerComponent.vue";
import IntroComponent from "./components/introComponent.vue";
import CompaniesComponent from "@components/companiesComponent.vue";

import FooterComponent from "./components/footerComponent.vue";
import WeComponent from "@components/weComponent.vue";
import StartComponent from "@components/startComponent.vue";
import ServeComponent from "@components/serveComponent.vue";
</script>

<template>
    <div class="container">
        <HeaderComponent />
        <IntroComponent />
        <CompaniesComponent />
    </div>

    <WeComponent />

    <div class="container">
        <StartComponent />
    </div>

    <ServeComponent />

    <footer-component />
</template>

<style scoped>

</style>
