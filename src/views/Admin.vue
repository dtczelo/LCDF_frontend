<template>
    <div class="container-fluid">
        <div v-if="formIsDisplayed" class="row justify-content-end p-3">
            <div class="logo mr-auto">
                <h1 class="text-light">
                    <router-link style="text-decoration: none;" to="/"
                        >La cuisine de François</router-link>
                </h1>
            </div>
            <div class="col-3">
                <button class="btn btn-dark mb-3 mt-3" @click="logout">Déconnexion</button>
            </div>
        </div>
        <div v-if="formIsDisplayed">
            <form class="form">
                <div class="row">
                    <div class="col-6">
                        <label class="form-label" for="titleProduct">Titre</label>
                        <input class="form-control" type="text" id="titleProduct" name="titleProduct" v-model="title" />
                    </div>
                    <div class="col-6">
                        <label class="form-label" for="priceProduct">Prix</label>
                        <input class="form-control" type="number" id="priceProduct" name="priceProduct" v-model="price" />
                    </div>
                </div>

                <div class="row mb-3 mt-3">
                    <div class="col-8">
                        <label class="form-label" for="descriptionProduct">Description</label>
                        <textarea
                            class="form-control"
                            id="descriptionProduct"
                            name="descriptionProduct"
                            rows="5"
                            cols="33"
                            v-model="description"
                        ></textarea>
                    </div>
                    <div class="col-2">
                        <fieldset>
                            <div class="form-check">
                                <input type="radio" name="categories" id="nouveaute" value="nouveaute" v-model="categories" />
                                <label class="form-label" for="nouveaute">Nouveautées</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" name="categories" id="leCoinVegan" value="leCoinVegan" v-model="categories" />
                                <label class="form-label" for="leCoinVegan">Le coin Végan</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" name="categories" id="nosSpecialites" value="nosSpecialites" v-model="categories" />
                                <label class="form-label" for="nosSpecialites">Nos spécialités</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" name="categories" id="dessert" value="dessert" v-model="categories" />
                                <label class="form-label" for="dessert">Dessert</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" name="categories" id="softs" value="softs" v-model="categories" />
                                <label class="form-label" for="softs">Softs</label>
                            </div>
                        </fieldset>
                    </div>
                    <div class="col-2">
                        <div class="form-check">
                            <input type="checkbox" id="vegan" name="vegan" v-model="vegan" />
                            <label class="form-label" for="vegan">Vegan</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" id="glutenFree" name="glutenFree" v-model="glutenFree" />
                            <label class="form-label" for="glutenFree">Gluten Free</label>
                        </div>
                    </div>
                </div>

                <div class="input-group m-3" v-if="!imagePreview">
                    <label class="input-group-text" for="image">Selectionnez une image</label>
                    <input class="form-control" name="image" type="file" id="image" @change="onFileChange" />
                </div>
                <div class="input-group m-3" v-else>
                    <img :src="imagePreview" width="100" height="60" />
                    <button class="btn btn-dark mb-3 mt-3" @click="removeImage()">Changez d'image</button>
                </div>

                <div class="col-1">
                    <button class="btn btn-dark mb-3 mt-3" @click.prevent="postProducts">Ajouter</button>
                </div>
            </form>

            <div class="d-flex justify-content-center row row-cols-1 row-cols-md-3 g-4">
                <div
                    class="card text-white bg-dark mb-3"
                    style="max-width: 18rem;"
                    v-for="product in listOfNewProducts"
                    :key="product.title"
                >
                    <div class="card text-white bg-dark mb-3">
                        <img :src="product.imageUrl" class="card-img-top" />
                        <div class="card-body">
                            <p class="card-title">{{ product.title }}</p>
                            <p class="card-text">{{ product.description }}.......{{ product.price }}</p>
                        </div>
                        <div class="card-footer bg-transparent">
                            <button class="btn btn-light btn-sm" @click="deleteProduct(product), deleteProductOfList(product)">
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center row row-cols-1 row-cols-md-3 g-4">
                <div class="card text-white bg-dark mb-3" style="max-width: 18rem;" v-for="product in listOfProducts" :key="product.title">
                    <div class="card-header">
                        {{ product.title }}
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ product.description }}.......{{ product.price }} €</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <button class="btn btn-light btn-sm" @click="deleteProduct(product), deleteProductOfList(product)">
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-center vh-100" v-else>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" id="email" v-model="email" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="password" v-model="password" />
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-dark mb-3" @click.prevent="login">Connexion</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { bus } from "../main";

export default {
    name: "Admin",
    data() {
        return {
            formIsDisplayed: false,
            email: "",
            password: "",
            title: this.title,
            description: this.description,
            price: this.price,
            categories: this.categories,
            vegan: this.vegan,
            glutenFree: this.glutenFree,
            valid: Boolean, // a supprimer
            listOfProducts: [],
            listOfNewProducts: [],
            image: "",
            imagePreview: "",
        };
    },
    methods: {
        login() {
            if (!this.email || !this.password) {
                bus.$emit("toastr", { title: "Attention", message: "Veuillez compléter les champs requis !", style: "warning" });
            } else {
                fetch("http://localhost:3000/users/login", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ email: this.email, password: this.password }),
                })
                    .then((response) => response.json())
                    .then((response) => {
                        console.log(typeof response.token);
                        if (response.token) {
                            sessionStorage.setItem("token", response.token);
                            this.formIsDisplayed = true;
                            this.getProducts();
                            bus.$emit("toastr", { title: "Notification", message: response.message, style: "success" });
                        } else {
                            bus.$emit("toastr", { title: "Attention", message: response.message, style: "warning" });
                        }
                    })
                    .catch((error) => console.error(error));
            }
        },
        logout() {
            sessionStorage.clear();
            this.$router.push({ name: "Home" });
        },
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
                    bus.$emit("toastr", { title: "Notification", message: response.message, style: "success" });
                })
                .catch((error) => console.error(error));
        },
        postProducts() {
            if (!this.title || !this.description || !this.categories || !this.price) {
                bus.$emit("toastr", { title: "Attention", message: "Veuillez compléter les champs requis !", style: "warning" });
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
            if (this.categories === "nouveaute") {
                form.append("file", this.image);
            }
            // diets: dietsArray
            fetch("http://localhost:3000/products/", {
                method: "POST",
                body: form,
            })
                .then((response) => response.json())
                .then((response) => {
                    this.image = "";
                    this.imagePreview = "";
                    this.title = "";
                    this.description = "";
                    this.listOfProducts = [];
                    this.listOfNewProducts = [];
                    this.getProducts();
                    bus.$emit("toastr", { title: "Notification", message: response.message, style: "success" });
                })
                .catch((error) => console.error(error));
        },
        getProducts() {
            fetch("http://localhost:3000/products", {
                method: "GET",
            })
                .then((response) => response.json())
                .then((products) => {
                    products.products.forEach((product) => {
                        if (product.categories !== "nouveaute") {
                            this.listOfProducts.push(product);
                        } else {
                            this.listOfNewProducts.push(product);
                        }
                    });
                })
                .catch((error) => console.error(error));
        },
    },
    beforeMount() {
        if (sessionStorage.getItem("token")) {
            this.formIsDisplayed = true;
            this.getProducts();
        }
    },
};
</script>

<style lang="scss">
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
