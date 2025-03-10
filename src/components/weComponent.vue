<script setup>

</script>

<template>
    <div class="we">
        <div class="container">
            <div class="we__content">
                <h2>We provide best space for you!</h2>
                <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex ea quid est et via procedat oratio quaerimus.
                    <br> <br>
                    quid aut ad id omnia referri oporteat, ipsum autem nusquam hoc epicurus in ea commodi consequatur?</p>
                <button class="orange">Learn more</button>
            </div>
        </div>
        <div class="we__imgs flex">
            <img src="@assets/imgs/we-1.jpg" alt="">
            <img src="@assets/imgs/we-2.jpg" alt="">
            <div class="we__imgs-card flex">
                <img src="@assets/imgs/building.svg" alt="">
                <div class="we__card-text">
                    <p>Twelve West Lake</p>
                    <p>Space for up to 150 people</p>
                </div>
            </div>
        </div>
    </div>
    <div class="we-bg"></div>
</template>

<style scoped>
    .we {
        width: 100%;
        margin-top: 160px;
        padding: 60px 0;

        position: relative;

        overflow: hidden;
    }

    .we__content {
        max-width: 375px;
        margin-left: auto;
    }

    .we__content p {
        margin-top: 20px;
    }

    .we__content button {
        margin-top: 40px;
    }

    .we__imgs {
        gap: 15px;
        max-width: 900px;

        position: absolute;
        inset: 0;
        left: -20px;
    }

    .we__imgs > img {
        max-width: 420px;
        width: 100%;
        height: 550px;

        border-radius: 20px;
    }

    .we__imgs-card {
        gap: 20px;

        width: 100%;
        max-width: 300px;
        padding: 32px 30px;

        background: #fff;
        border-radius: 15px;
        box-shadow: 4px 20px 42px -2px rgba(0, 0, 0, 0.12);


        position: absolute;
        bottom: 90px;
        right: -45px;
    }

    .we__imgs-card img {
        width: 45px;
        height: 45px;
    }

    .we__card-text {
        max-width: 175px;
    }

    .we__card-text p:first-child {
        font-weight: 700;
        font-size: 16px;
        color: #323232;
    }

    /* media ---------------- */
    @media (min-width: 1920px) {
        .we {
            max-width: 1920px;
        }
    }
    
    @media (max-width: 1500px) {
        .we__imgs {
            max-width: 700px;
        }

        .we__imgs > img {
            height: 500px;
        }
    }

    @media (max-width: 1100px) {
        .we__imgs {
            max-width: 600px;
        }

        .we__imgs > img {
            height: 400px;
        }
    }

    @media (max-width: 1000px) {
        .we {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .we__content {
            width: 70%;
            max-width: none;
            margin: 0 auto;

            text-align: center;
        }

        .we__content > p {
            max-width: 80%;
            margin: 20px auto 0;
        }

        .we__imgs {
            max-width: 80%;
            margin-top: 50px;
            position: sticky;
        }

        .we__imgs > img {
            height: 500px;
        }
    }
    
    @media (max-width: 600px) {
        .we__imgs {
            flex-direction: column-reverse;
        }
    }

    @media (max-width: 400px) {
        .we__imgs-card {
            padding: 22px 20px;
            right: -10px;
        }
    }
</style>