<template>
    <div class="form-container">
        <form class="form">
            <label for="titleProduct">Titre</label>
            <input type="text" id="titleProduct" name="titleProduct" v-model="title" />
            <label for="descriptionProduct">Description</label>
            <textarea id="descriptionProduct" name="descriptionProduct" rows="5" cols="33" v-model="description"></textarea>
            <label for="priceProduct">Prix</label>
            <input type="number" id="priceProduct" name="priceProduct" v-model="price" />
            <div v-if="!imagePreview" class="image-preview">
                <label for="image">Selectionnez une image</label>
                <input name="image" type="file" id="image" @change="onFileChange" />
            </div>
            <div v-else class="image-preview">
                <img :src="imagePreview" width="100" height="60" />
                <button class="post__button" @click="removeImage()">Changez d'image</button>
            </div>
            <fieldset>
                <legend>Catégories</legend>
                <input type="radio" name="categories" id="nouveaute" value="nouveaute" v-model="categories" />
                <label for="nouveaute">Nouveauté</label>
                <input type="radio" name="categories" id="leCoinVegan" value="leCoinVegan" v-model="categories" />
                <label for="leCoinVegan">Le coin Végan</label>
                <input type="radio" name="categories" id="nosSpecialites" value="nosSpecialites" v-model="categories" />
                <label for="nosSpecialites">Nos spécialités</label>
                <input type="radio" name="categories" id="dessert" value="dessert" v-model="categories" />
                <label for="dessert">Dessert</label>
                <input type="radio" name="categories" id="softs" value="softs" v-model="categories" />
                <label for="softs">Softs</label>
            </fieldset>

            <div>
                <input type="checkbox" id="vegan" name="vegan" v-model="vegan" />
                <label for="vegan">Vegan</label>
                <input type="checkbox" id="glutenFree" name="glutenFree" v-model="glutenFree" />
                <label for="glutenFree">Gluten Free</label>
            </div>

            <button @click.prevent="postProducts">Ajouter</button>
        </form>

        <div v-for="product in listOfProducts" :key="product.title">
            <div>
                {{ product.title }}
                <button @click="deleteProduct(product), deleteProductOfList(product)">
                    Supprimer
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Admin",
    data() {
        return {
            title: this.title,
            description: this.description,
            price: this.price,
            categories: this.categories,
            vegan: this.vegan,
            glutenFree: this.glutenFree,
            valid: Boolean,
            listOfProducts: [],
            image: "",
            imagePreview: "",
        };
    },
    methods: {
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            this.image = files[0];
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
                vm.imagePreview = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage() {
            this.image = "";
            this.imagePreview = "";
        },
        deleteProductOfList(productToDelete) {
            for (let product of this.listOfProducts) {
                if (product._id === productToDelete._id) {
                    var index = this.listOfProducts.findIndex((product) => product._id === productToDelete._id);
                    this.listOfProducts.splice(index, 1);
                    break;
                }
            }
        },
        deleteProduct(product) {
            fetch("http://localhost:3000/products/" + product._id, {
                method: "DELETE",
            })
                .then((response) => response.json())
                .then((response) => {
                    this.$bvToast.toast(response.message, {
                        title: "Notification",
                        solid: true,
                        variant: "success",
                        autoHideDelay: 5000,
                        appendToast: false,
                    });
                })
                .catch((error) => console.error(error));
        },
        postProducts() {
            if (!this.title || !this.description || !this.categories || !this.price || !this.image) {
                this.$bvToast.toast("Veuillez compléter les champs requis !", {
                    title: "Attention",
                    solid: true,
                    variant: "warning",
                    autoHideDelay: 5000,
                    appendToast: false,
                });
                return (this.valid = false);
            }
            var dietsArray = [];
            this.vegan ? dietsArray.push("vegan") : false;
            this.glutenFree ? dietsArray.push("glutenFree") : false;

            var form = new FormData();
            form.append("title", this.title);
            form.append("description", this.description);
            form.append("price", this.price);
            form.append("categories", this.categories);
            form.append("file", this.image);
            // diets: dietsArray
            fetch("http://localhost:3000/products/", {
                method: "POST",
                body: form,
            })
                .then((response) => response.json())
                .then((response) => {
                    this.$bvToast.toast(response.message, {
                        title: "Notification",
                        solid: true,
                        variant: "success",
                        autoHideDelay: 5000,
                        appendToast: false,
                    });
                })
                .catch((error) => console.error(error));
        },
        getProducts() {
            fetch("http://localhost:3000/products", {
                method: "GET",
            })
                .then((response) => response.json())
                .then((products) => {
                    products.products.forEach((product) => this.listOfProducts.push(product));
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
.form-container {
    margin-top: 12vh;
}

.form {
    display: flex;
    flex-direction: column;
}

.message {
    font-size: large;
}

.alert {
    color: #b30e24;
}

.success {
    color: #19a307;
}

// Images Upload
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
}

.input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
}

.dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
}
</style>
