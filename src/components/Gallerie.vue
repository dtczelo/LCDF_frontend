<template>
    <section id="gallerie" class="gallery">
        <div class="container-fluid">
            <div class="section-title">
                <h2>Quelques photos de notre restaurant</h2>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>

            <div class="row no-gutters">
                <b-button v-for="item in gallerie" :key="item.id" v-b-modal.modal-center class="col-lg-3 col-md-4 bg-transparent border-white shadow-none">
                    <div class="gallery-item">
                        <div class="venobox">
                            <img src="../assets/images/logo/RRCBE_Complet.png" :alt="item.alt" class="img-fluid" />
                        </div>
                    </div>
                </b-button>
                <!-- <b-modal id="modal-center" centered>
                    <img :src="item.image" :alt="item.alt" class="img-fluid" />
                </b-modal> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            gallerie: [
                { id: 1, image: `../src/assets/images/logo/RRCBE_Complet.png`, alt: "image" },
                { id: 2, image: `../assets/images/cake.jpg`, alt: "image" },
                { id: 3, image: "../assets/images/logo/RRCBE_Complet.png", alt: "image" },
                { id: 4, image: "../assets/images/logo/RRCBE_Complet.png", alt: "image" },
                { id: 5, image: "../assets/images/logo/RRCBE_Complet.png", alt: "image" },
                { id: 6, image: "../assets/images/logo/RRCBE_Complet.png", alt: "image" },
                { id: 7, image: "../assets/images/logo/RRCBE_Complet.png", alt: "image" },
                { id: 8, image: "../assets/images/logo/RRCBE_Complet.png", alt: "image" },
            ],
        };
    },
};
</script>

<style lang="scss">
.gallery {
    padding-bottom: 0;
}

.gallery .gallery-item {
    overflow: hidden;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
}

.gallery .gallery-item img {
    transition: all ease-in-out 0.4s;
}

.gallery .gallery-item:hover img {
    transform: scale(1.1);
}
</style>
