<template>
    <section id="nouveaute" class="nouveaute">
        <div class="container-fluid p-0 p-sm-5 p-lg-1">
            <div class="row">
                <div class="col-lg-7 d-flex flex-column align-items-stretch mt-5 mt-lg-0">
                    <div class="content h-100">
                        <h3 class="mb-md-5 pb-5">
                            Nouveautées de la semaine
                        </h3>
                        <transition name="slide-fade" mode="out-in">
                            <p class="mb-4" :key="slide">
                                {{ slideData.title }}
                            </p>
                        </transition>
                        <transition name="slide-fade" mode="out-in">
                            <p class="font-italic" :key="slide">
                                {{ slideData.description }}
                            </p>
                        </transition>
                    </div>
                </div>

                <div class="col-lg-5 h-100 align-items-stretch">
                    <b-carousel
                        id="carousel-1"
                        class="nouveaute__carousel"
                        v-model="slide"
                        :interval="4000"
                        controls
                        indicators
                        background="#fff"
                        img-width="1024"
                        img-height="480"
                        style="text-shadow: 1px 1px 2px #333;"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                        :fade="true"
                    >
                        <b-carousel-slide
                            v-for="product in newProductsArray"
                            :key="product.id"
                            :img-src="product.imageUrl"
                        ></b-carousel-slide>
                        <!-- 
            <b-carousel-slide v-for="product in newProductsArray" :key="product.id">
                <template #img>
                    <img class="d-block img-fluid w-100" width="1024" height="480" :src="product.imageUrl" alt="image slot" />
                </template>
            </b-carousel-slide> -->
                    </b-carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            newProductsArray: [],
            slide: 0,
            sliding: null,
        };
    },
    computed: {
        slideData() {
            return this.newProductsArray[this.slide];
        },
    },
    methods: {
        onSlideStart() {
            this.sliding = true;
        },
        onSlideEnd() {
            this.sliding = false;
        },
        getProducts() {
            fetch("http://localhost:3000/products", {
                method: "GET",
                mode: "cors",
                cache: "default",
            })
                .then((response) => response.json())
                .then((products) => {
                    this.newProductsArray = products.products.filter((product) => product.categories === "nouveaute");
                })
                .catch((error) => console.error(error));
        },
    },
    beforeMount: function() {
        this.getProducts();
    },
};
</script>

<style lang="scss">
@import "../assets/styles/scss/variables";

.nouveaute {
    padding-bottom: 10px;
}

.nouveaute .content {
    padding: 0 80px;
}

.nouveaute .content h3 {
    font-weight: 400;
    font-size: 34px;
    color: #5f5950;
    padding-top: 20px;
}

// .nouveaute .content h3::after {
//     content: "";
//     position: absolute;
//     left: 50%;
//     top: 0%;
//     width: 80%;
//     height: 2px;
//     background: $third-color;
//     transform: translateX(-50%);
// }

.nouveaute .content p {
    font-size: 20px;
    color: $second-color;
}

@media (max-width: 992px) {
    .nouveaute {
        padding: 0 0 40px 0;
    }
    .nouveaute .content {
        padding: 30px 30px;
    }
}
</style>
