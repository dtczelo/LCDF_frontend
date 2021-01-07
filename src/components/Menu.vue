<template>
    <section id="menu" class="menu">
        <div class="container">
            <div class="section-title text-center mb-5">
                <h2>Retrouvez notre <span>Menu</span></h2>
            </div>

            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="menu-flters">
                        <li v-for="(name, i) in flters" @click="current = i" :key="name.id" :class="{ filterActive: i == current }">
                            {{ name }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row menu-container">
                <transition name="slide-fade" mode="out-in">
                    <div class="col-lg-12 menu-item" v-if="current == 0" key="nouv">
                        <div v-for="product in listOfNouveaute" :key="product._id">
                            <Product :title="product.title" :description="product.description" :price="product.price"></Product>
                        </div>
                    </div>
                    <div class="col-lg-12 menu-item" v-if="current == 1" key="veg">
                        <div v-for="product in listOfLeCoinVegan" :key="product._id">
                            <Product :title="product.title" :description="product.description" :price="product.price"></Product>
                        </div>
                    </div>
                    <div class="col-lg-12 menu-item" v-if="current == 2" key="spe">
                        <div v-for="product in listOfNosSpécialités" :key="product._id">
                            <Product :title="product.title" :description="product.description" :price="product.price"></Product>
                        </div>
                    </div>
                    <div class="col-lg-12 menu-item" v-if="current == 3" key="des">
                        <div v-for="product in listOfDesserts" :key="product._id">
                            <Product :title="product.title" :description="product.description" :price="product.price"></Product>
                        </div>
                    </div>
                    <div class="col-lg-12 menu-item" v-if="current == 4" key="sof">
                        <div v-for="product in listOfSofts" :key="product._id">
                            <Product :title="product.title" :description="product.description" :price="product.price"></Product>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
import Product from "../components/Product";

export default {
    components: {
        Product,
    },
    data() {
        return {
            current: 0,
            flters: ["Nouveautées", "Le coin végan", "Nos spécialités", "Desserts", "Softs"],
            listOfNouveaute: [],
            listOfLeCoinVegan: [],
            listOfNosSpécialités: [],
            listOfDesserts: [],
            listOfSofts: [],
        };
    },
    methods: {
        productFilteredByCategories: function(products) {
            return products.products.forEach((product) => {
                switch (product.categories) {
                    case "nouveaute":
                        this.listOfNouveaute.push(product);
                        break;
                    case "leCoinVegan":
                        this.listOfLeCoinVegan.push(product);
                        break;
                    case "nosSpécialités":
                        this.listOfNosSpécialités.push(product);
                        break;
                    case "dessert":
                        this.listOfDesserts.push(product);
                        break;
                    case "softs":
                        this.listOfSofts.push(product);
                        break;
                }
            });
        },
        getProducts() {
            fetch("http://localhost:3000/products", {
                method: "GET",
                mode: "cors",
                cache: "default",
            })
                .then((response) => response.json())
                .then((products) => {
                    this.productFilteredByCategories(products);
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

.menu #menu-flters {
    padding: 0;
    margin: 0 auto 0 auto;
    list-style: none;
    text-align: center;
    border-radius: 50px;
}

.menu #menu-flters li {
    cursor: pointer;
    display: inline-block;
    padding: 8px 16px 10px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #444444;
    margin: 0 3px 10px 3px;
    transition: all ease-in-out 0.3s;
    background: #fff;
    border: 2px solid $third-color;
    border-radius: 50px;
}

.menu #menu-flters li:hover,
.menu #menu-flters li.filterActive {
    color: #fff;
    background: $third-color;
}

.menu #menu-flters li:last-child {
    margin-right: 0;
}

.menu .menu-content {
    margin-top: 30px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.menu .menu-content::after {
    content: "......................................................................"
        "...................................................................."
        "....................................................................";
    position: absolute;
    left: 20px;
    right: 0;
    top: -4px;
    z-index: 1;
    color: #dad8d4;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.menu .menu-content a {
    padding-right: 10px;
    background: #fff;
    position: relative;
    z-index: 3;
    font-weight: 700;
    color: $third-color;
}

.menu .menu-content span {
    background: #fff;
    position: relative;
    z-index: 3;
    padding: 0 10px;
    font-weight: 600;
}

.menu .menu-ingredients {
    font-style: italic;
    font-size: 14px;
    font-family: "Comic Neue", sans-serif;
    color: #948c81;
}
</style>
