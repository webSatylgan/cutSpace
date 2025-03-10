<script setup>

</script>

<template>
    <div class="companies flex">
        <img src="@assets/imgs/companies-1.jpg" alt="">
        <img src="@assets/imgs/companies-2.jpg" alt="">
        <img src="@assets/imgs/companies-3.jpg" alt="">
        <img src="@assets/imgs/companies-4.jpg" alt="">
    </div>
</template>
  
<style scoped>
    .companies {
        margin-top: 240px;
        gap: 15px;
    }

    .companies img {
        max-width: 230px;
    }

    /* media --------------- */
    @media (max-width: 900px) {
        .companies img {
            max-width: 150px;
        }
    }

    @media (max-width: 768px) {
        .companies {
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 40px;
        }

        .companies img {
            max-width: 30%;
            width: 100%;
        }
    }
</style>