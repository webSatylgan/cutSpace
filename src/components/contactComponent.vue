<script setup>

</script>

<template>
    <div class="contact">
        <div class="container">
            <div class="contact__text">
                <h2>Get experience from the expert</h2>
                <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex</p>
                <button class="white">Contact Us</button>
            </div>
        </div>
        <div class="contact__imgs">
            <img src="@assets/imgs/contact.png" alt="">
            <svg width="743" height="371" viewBox="0 0 743 371" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="371.5" cy="371.5" r="371.5" transform="rotate(90 371.5 371.5)" fill="url(#paint0_linear_0_52)" />
                <defs>
                    <linearGradient id="paint0_linear_0_52" x1="286.165" y1="-5.15671" x2="-219.847" y2="524.72" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.01" />
                        <stop offset="1" stop-color="white" stop-opacity="0.502759" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>
</template>

<style scoped>
    .contact {
        width: 100%;
        margin-top: 100px;
        padding: 210px 0 55px;

        position: relative;
    }

    .contact::before {
        content: "";
        width: 100%;
        height: 100%;

        clip-path: polygon(100% 5%, 100% 100%, 0 100%, 0 19%);
        background: var(--cyan);

        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
    }

    .contact__text {
        max-width: 360px;
        width: 100%;
    }
    
    .contact__text > *:not(button) {
        color: #fff;
    }

    .contact__text p {
        margin-top: 15px;
    }
    
    .contact__text button {
        margin-top: 30px;
        color: #000;
    }

    .contact__text button:hover {
        color: #fff;
    }

    .contact__imgs {
        max-width: 745px;
        width: 100%;

        position: absolute;
        right: 120px;
        bottom: 0;
    }

    .contact__imgs > * {

        position: absolute;
        bottom: 0;
    }

    .contact__imgs > img {
        display: block;
        max-width: none;

        left: 50%;
        transform: translateX(-60%);
        z-index: 2;
    }

    /* media ---------------- */
    @media (max-width: 1400px) {

        .contact__imgs {
            max-width: 600px;
        }

        .contact__imgs > img {
            width: 70%;
        }

        .contact__imgs > svg {
            width: 100%;
        }
    }


    @media (max-width: 1100px) {
        .contact__imgs {
            max-width: 500px;
            right: 70px;
        }
    }
    
    @media (max-width: 900px) {

        .contact {
            display: flex;
            flex-direction: column-reverse;
            padding-top: 20px;
        }

        .contact__imgs {
            max-width: 550px;
            margin: 0 auto;
            position: relative;
            right: auto;

            transform: translateX(30px);
        }

        .contact__imgs > img {
            margin: 0 auto;
            position: static;
            transform: none;
        }

        .contact__imgs > svg {
            z-index: -1;
        }

        .contact__text {
            max-width: 100%;
            margin: 40px auto 0;

            text-align: center;
        }
    }
</style>