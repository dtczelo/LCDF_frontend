<template>
    <main class="home">
        <div class="landing-page">
            <img class="landing-page__logo" :class="{ mounted: isMounted }" src="../assets/images/logo/LCDF-Sans_texte.png" alt="" />
            <img src="../assets/images/greenhouse.jpg" class="landing-page__cover-image" alt="" />
        </div>

        <div class="jumbotron">
            <div class="container text-center">
                <h1 class="display-4">Message</h1>
                <p class="lead">La semaine</p>
            </div>
        </div>
        <Carousel></Carousel>
        <Menu></Menu>
        <a @click.prevent="backToTop()" :class="{ backToTopScrolled: isScrolled }" class="back-to-top"
            ><i class="fas fa-chevron-circle-up"></i
        ></a>
        <Footer></Footer>
    </main>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default {
    name: "Home",
    components: {
        Menu,
        Footer,
        Carousel
    },
    data() {
        return {
            isMounted: false,
            isScrolled: false,
        };
    },
    computed: {},
    methods: {
        backToTop() {
            window.scrollTo(0, 0);
        },
        handleScroll() {
            if (window.scrollY > 800) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
        },
        handlePageLoading() {
            window.setTimeout(() => {
                this.isMounted = true;
            }, 400);
        },
    },
    beforeMount: function() {
        this.handlePageLoading();
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style lang="scss">
@import "../assets/styles/scss/variables";

.home {
    position: relative;
    top: 0;
    left: 0;
}

.landing-page {
    position: relative;
    top: 0;
    left: 0;
    z-index: -10;
    background-color: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &__logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 480px * 1.07;
        height: 480px;
        z-index: 1;
        filter: drop-shadow(-30px 30px 25px rgba(0, 0, 0, 0.5));
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
    &__cover-image {
        width: 100%;
        height: 100vh;
        z-index: -3;
        position: relative;
        top: 0;
        left: 0;
        filter: blur(5px);
        object-fit: cover;
    }
}

.mounted {
    opacity: 1;
}
@media (max-width: 770px) {
    .landing-page {
        &__logo {
            width: 350px * 1.07;
            height: 350px;
        }
        &__cover-image {
            width: 100%;
            height: 100vh;
            filter: blur(5px);
        }
    }
}
@media (max-width: 450px) {
    .landing-page {
        &__logo {
            width: 250px * 1.07;
            height: 250px;
        }
        &__cover-image {
            width: 100%;
            height: 100vh;
            filter: blur(5px);
        }
    }
}

// .products {
//     display: flex;
//     flex-direction: column;
//     & h2 {
//         display: block;
//         position: relative;
//         font-size: 2.5rem;
//         text-align: center;
//         width: 50%;
//         margin: 0;
//         &::after {
//             content: url(../assets/images/underline.png);
//             position: relative;
//             display: inline-block;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 20px;
//             transform: translateY(-38px);
//         }
//     }
// }

// .products__starter,
// .products__dish,
// .products__dessert {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
//     padding: 30px;
//     margin: 20px;
//     min-height: 30vh;
// }

// .products__cards {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     // padding: 10px;
// }

// .products__card {
//     display: block;
//     width: 100%;
// }

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
    position: fixed;
    display: none;
    right: 15px;
    bottom: 15px;
    z-index: 99999;
}

.back-to-top i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: $fourth-color;
    color: #fff;
    transition: all 0.4s;
}

.back-to-top i:hover {
    background: $third-color;
    color: #fff;
}

.backToTopScrolled {
    display: block;
}
</style>
