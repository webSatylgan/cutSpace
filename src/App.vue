<script setup>
// imports components -------
import HeaderComponent from "./components/headerComponent.vue";
import IntroComponent from "./components/introComponent.vue";
import Companies from "@components/companies.vue";

import FooterComponent from "./components/footerComponent.vue";
import WeComponent from "@components/weComponent.vue";
</script>

<template>
    <div class="container">
        <HeaderComponent />
        <IntroComponent />
        <Companies />
    </div>
    <WeComponent />

    <footer-component />
</template>

<style scoped>

</style>
