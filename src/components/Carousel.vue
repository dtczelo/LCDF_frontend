<template>
    <div>
        <h2>Nouveautés</h2>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                v-for="product in newProductsArray"
                :key="product.id"
                :caption="product.title"
                :text="product.description"
                :img-src="product.imageUrl"
            ></b-carousel-slide>
        </b-carousel>
    </div>
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
                    console.log(products);
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
