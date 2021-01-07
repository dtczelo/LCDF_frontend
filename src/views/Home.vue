<template>
    <main id="home" class="home">
        <TopBar></TopBar>
        <Header></Header>
        <div class="landing-page">
            <img class="landing-page__logo" :class="{ mounted: isMounted }" src="../assets/images/logo/LCDF-Sans_texte.png" alt="Logo de la cuisine de François" />
            <img src="../assets/images/greenhouse.jpg" class="landing-page__cover-image" alt="Serre de jardin" />
        </div>
        <Carousel></Carousel>
        <Menu></Menu>
        <About></About>
        <Gallerie></Gallerie>
        <router-link to="#home" :class="{ backToTopScrolled: isScrolled }" class="back-to-top"
            ><i class="fas fa-chevron-circle-up"></i
        ></router-link>
        <Footer></Footer>
    </main>
</template>

<script>
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import About from "../components/About";
import Carousel from "../components/Carousel.vue";
import Gallerie from "../components/Gallerie";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default {
    name: "Home",
    components: {
        TopBar,
        Header,
        About,
        Carousel,
        Menu,
        Gallerie,
        Footer
    },
    data() {
        return {
            isMounted: false,
            isScrolled: false,
        };
    },
    computed: {},
    methods: {
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
