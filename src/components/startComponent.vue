<script setup>

</script>

<template>
    <div class="start flex">
        <img src="@assets/imgs/start.png" alt="">
        <div class="start__content">
            <h2>Start using our product</h2>
            <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex</p>
            <div class="start__buttons flex">
                <button class="orange">Contact Us</button>
                <button class="white">
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2111 5.10557C10.9482 5.4741 10.9482 6.5259 10.2111 6.89443L1.44721 11.2764C0.782312 11.6088 0 11.1253 0 10.382V1.61803C0 0.874652 0.782312 0.391156 1.44721 0.723607L10.2111 5.10557Z" />
                    </svg>
                    Watch now
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .start {
        width: 100%;
        margin-top: 150px;
        padding: 90px 95px;

        background: var(--cyan);
        border-radius: 20px;
        overflow: hidden;

        position: relative;
    }

    .start > img {
        max-width: 590px;
        width: 100%;

        position: absolute;
        bottom: 0;
        left: 0;
    }

    .start__content {
        max-width: 380px;
        width: 100%;
        margin-left: auto;
    }

    .start__content h2, p, button.orange {
        color: #fff;
    }

    .start__content p {
        max-width: 345px;
        margin-top: 15px;
        margin-bottom: 30px;
    }

    .start__buttons {
        width: 100%;
        gap: 20px;
    }

    .start__buttons button.orange:hover {
        color: var(--orange);
    }

    .start__buttons button.white {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--black);
    }

    .start__buttons button.white svg {
        margin-right: 5px;
        fill: var(--orange);
    }

    .start__buttons button.white:hover {
        color: #fff;
    }

    .start__buttons button.white:hover svg {
        fill: #fff;
    }

    .start::after,
    .start::before {
        width: 304px;
        height: 304px;

        position: absolute;
    }

    .start::after {
        content: url("@assets/imgs/start-oval-1.svg");
        right: -80px;
        top: -100px;
    }

    .start::before {
        margin-right: 40px;
        content: url("@assets/imgs/start-oval-2.svg");
        bottom: -200px;
        left: 50%;
        transform: translateX(-50%);
    }
    
    /* media ------------------- */
    @media (max-width: 1100px) {
        .start > img {
            max-width: 50%;
        }
    }
    
    @media (max-width: 900px) {
        .start {
            flex-direction: column-reverse;
            padding: 90px 0 0;
        }

        .start__content {
            max-width: 80%;
            margin: 0 auto;
            text-align: center;
        }

        .start__content p {
            max-width: 100%;
        }

        .start__buttons {
            max-width: 60%;
            margin: 0 auto;
        }

        .start > img {
            max-width: 85%;
            margin-top: 40px;
            margin-right: auto;
            position: sticky;
        }
    }

    @media (max-width: 768px) {
        .start__buttons {
            max-width: 70%;
        }
    }

    @media (max-width: 500px) {
        .start__buttons {
            flex-direction: column;
        }
    }
</style>