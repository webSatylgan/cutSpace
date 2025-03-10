<script setup>

</script>

<template>
    <div class="header flex">
        <div class="header__logo flex">
            <img src="@assets/imgs/logo.svg" alt="">
            <h4>CutSpace</h4>
        </div>
        <nav class="header__nav flex">
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Find space</a>
            <a href="">Share space</a>
            <a href="">Promote space</a>
        </nav>
    </div>
</template>

<style scoped>
    .header {
        padding: 45px 0;
    }

    .header__logo {
        max-width: 160px;
        gap: 10px;
    }

    .header__logo h4 {
        font-size: 24px;
    }

    .header__nav {
        max-width: 600px;
        gap: 10px;
    }

    /* media ------------------ */
    @media (max-width: 768px) {
        .header__nav {
            display: none;
        }
    }
</style>