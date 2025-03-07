<script setup>

</script>

<template>
    <div class="container">
        <div class="reviews">
            <div class="reviews__title flex">
                <h2>Thanks for your nice <br> words to us</h2>
                <p>Si sine causa, nollem me tamen laudandis <br> maioribus meis corrupisti nec voluptas</p>
            </div>
            <div class="reviews__container flex">
                <div class="reviews__item">
                    <img src="@assets/imgs/reviews-1.jpg" alt="">
                    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="25" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2111 24.6056C33.9482 24.9741 33.9482 26.0259 33.2111 26.3944L21.4472 32.2764C20.7823 32.6088 20 32.1253 20 31.382V19.618C20 18.8747 20.7823 18.3912 21.4472 18.7236L33.2111 24.6056Z" fill="#F78434" />
                    </svg>
                    <div class="reviews__item-text">
                        <p>"Omne animal, simul atque integre iudicante itaque earum motus et."</p>
                        <h3>Arend Pellewever</h3>
                        <p>Baltimore</p>
                    </div>
                </div>
                <div class="reviews__item">
                    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="25" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2111 24.6056C33.9482 24.9741 33.9482 26.0259 33.2111 26.3944L21.4472 32.2764C20.7823 32.6088 20 32.1253 20 31.382V19.618C20 18.8747 20.7823 18.3912 21.4472 18.7236L33.2111 24.6056Z" fill="#F78434" />
                    </svg>
                    <img src="@assets/imgs/reviews-2.jpg" alt="">
                    <div class="reviews__item-text">
                        <p>"Omne animal, simul atque integre iudicante itaque earum motus et."</p>
                        <h3>Leo Knight</h3>
                        <p>Cleveland</p>
                    </div>
                </div>
                <div class="reviews__item">
                    <img src="@assets/imgs/reviews-3.jpg" alt="">
                    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="25" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2111 24.6056C33.9482 24.9741 33.9482 26.0259 33.2111 26.3944L21.4472 32.2764C20.7823 32.6088 20 32.1253 20 31.382V19.618C20 18.8747 20.7823 18.3912 21.4472 18.7236L33.2111 24.6056Z" fill="#F78434" />
                    </svg>
                    <div class="reviews__item-text">
                        <p>"Omne animal, simul atque integre iudicante itaque earum motus et."</p>
                        <h3>Lisanne Viscaal</h3>
                        <p>Lyon</p>
                    </div>
                </div>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M40 40L39.97 0C18.0382 0.0162937 0 18.0679 0 40C0 61.9434 18.0566 80 40 80C61.9434 80 80 61.9434 80 40H40Z" fill="#58BEBF" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .reviews {
        width: 100%;
        margin-top: 170px;
    }

    .reviews__title {
        gap: 30px;
    }

    .reviews__container {
        gap: 30px;
        margin-top: 60px;

        position: relative;
    }

    .reviews__container > svg {
        position: absolute;
        right: -40px;
        top: -40px;
    }

    .reviews__item {
        max-width: 350px;

        position: relative;

        transition: .2s;
    }

    .reviews__item > svg {
        width: 50px;
        height: 50px;

        opacity: 0;

        position: absolute;
        right: 20px;
        top: 210px;

        transition: .2s;
    }

    .reviews__item img {
        width: 100%;
    }

    .reviews__item-text {
        width: 100%;
        padding: 30px;
    }

    .reviews__item-text h3 {
        font-size: 18px;
        margin-top: 25px;
    }

    .reviews__item-text p:last-child {
        color: var(--cyan);
        transition: .2s;
    }

    .reviews__item:hover {
        box-shadow: 0 10px 52px 0 rgba(0, 0, 0, 0.08);
    }

    .reviews__item:hover p:last-child {
        color: var(--orange);
    }

    .reviews__item:hover > svg {
        top: 135px;
        opacity: 1;
    }

</style>