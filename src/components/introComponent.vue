<script setup>

</script>

<template>
    <div class="intro flex">
        <div class="intro__content">
            <h1>Find your custom matched commercial real estate space.</h1>
            <p>In oculis quidem exercitus quid ex ea consequatur? autem vel eum fugiat, quo pertineant ero tibique</p>
            <form action="" class="intro__form">
                <input type="email" placeholder="">
                <p>
                    <img src="@assets/imgs/email.svg" alt="email">
                    Your email address
                </p>
                <button class="orange">Subscribe</button>
            </form>
        </div>
        <img src="@assets/imgs/intro.png" alt="">
    </div>
</template>

<style scoped>

    .intro {
        margin-top: 130px;
        position: relative;
    }

    .intro__content {
        max-width: 675px;
    }

    .intro__content > p {
        max-width: 465px;
        margin-top: 25px;
    }

    .intro__form {
        display: flex;

        max-width: 460px;
        margin-top: 40px;

        border-radius: 29px;
        background: #fff;
        box-shadow: 0 17px 42px 0 rgba(0, 0, 0, 0.12);

        position: relative;
    }

    .intro__form input {
        width: 100%;
    }

    .intro__form > p {
        display: flex;
        align-items: center;
        gap: 20px;

        max-width: 100%;
        margin-left: 28px;

        font-size: 16px;
        color: #bbb;
        pointer-events: none;

        position: absolute;
        inset: 0;
    }

    .intro__form > p img {
        width: 25px;
        height: 20px;
    }

    .intro__form input:not(:placeholder-shown) + p,
    .intro__form input:focus + p{
        display: none;
    }

    .intro > img {
        position: absolute;
        right: 0;

        z-index: -1;
    }

    /* media ----------------- */
    @media (max-width: 1000px) {
        .intro > img {
            max-width: 45%;
        }
    }

    @media (max-width: 768px) {
        .intro {
            display: flex;
            flex-direction: column-reverse;
            margin-top: 0;
        }
        
        .intro__content {
            text-align: center;
        }

        .intro__content > * {
            margin: 25px auto 0;
        }

        .intro > img {
            position: static;
            max-width: 65%;
        }
        
    }
</style>