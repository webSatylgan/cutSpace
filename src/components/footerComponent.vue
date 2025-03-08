<script setup>

</script>

<template>
    <div class="container">
        <div class="footer flex">
            <div class="footer__main-item">
                <div class="footer__logo flex">
                    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 14.9998L25.5987 4.38528C19.7788 -1.42596 10.209 -1.42241 4.3934 4.39322C-1.42523 10.2119 -1.42523 19.7878 4.3934 25.6064C10.212 31.4251 19.788 31.4251 25.6066 25.6064L15 14.9998Z" fill="#58BEBF" />
                    </svg>
                    <h3>CutSpace</h3>
                </div>
                <p>Quae fuerit causa, nollem me ab illo inventore veritatis et.</p>
                <div class="footer__social flex">
                    <img src="@assets/imgs/facebook.svg" alt="">
                    <img src="@assets/imgs/twitter.svg" alt="">
                    <img src="@assets/imgs/youtube.svg" alt="">
                    <img src="@assets/imgs/linkedin.svg" alt="">
                </div>
            </div> <!-- footer__main-item -->
            <div class="footer__container flex">
                <div class="footer__item">
                    <h3>Privacy</h3>
                    <p>Si sine causa</p>
                    <p>Quae fuerit causa</p>
                    <p>Certe, inquam</p>
                    <p>Torquatos nostros? </p>
                </div>

                <div class="footer__item">
                    <h3>Legal</h3>
                    <p>Ut placet, inquam </p>
                    <p>Certe, inquam</p>
                    <p>Et quidem rerum</p>
                    <p>At vero eos et </p>
                </div>

                <div class="footer__item">
                    <h3>Contact</h3>
                    <p>Primum igitur</p>
                    <p>Certe, inquam</p>
                    <p>Quae fuerit causa</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footer {
        align-items: start;
        gap: 50px;
        margin-top: 100px;
    }

    .footer__main-item {
        max-width: 300px;
    }

    .footer__logo {
        gap: 5px;
        max-width: 165px;
        margin-bottom: 15px;
    }

    .footer__logo h3 {
        font-size: 24px;
    }

    .footer__social {
        gap: 30px;
        max-width: 185px;
        margin-top: 40px;
    }

    .footer__social img {
        width: 20px;
        height: 20px;
    }

    .footer__container {
        align-items: start;
        max-width: 585px;
        width: 100%;
        gap: 35px;
    }

    .footer__item {
        max-width: 165px;
        width: 100%;
    }

    .footer__item h3 {
        font-size: 21px;
        margin-bottom: 18px;
    }

    .footer__item p {
        font-size: 14px;
    }

    .footer__item p:not(:first-child) {
        margin-top: 13px;
    }
</style>