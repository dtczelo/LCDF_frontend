<template>
    <header id="header" :class="{ headerScrolled: isHeaderScrolled }" class="header fixed-top d-flex align-items-center header-transparent">
        <div class="collapse-menu" :class="{ mobileMenuDisplayed: isMobileMenuDisplayed }">
            <div class="collapse-menu-icon" @click.prevent="toggleMobileMenu">
                <i class="fas fa-times"></i>
            </div>
            <ul>
                <li @click.prevent="toggleMobileMenu"><router-link style="text-decoration: none;" to="#home">Accueil</router-link></li>
                <li @click.prevent="toggleMobileMenu"><router-link style="text-decoration: none;" to="#about">Le chef</router-link></li>
                <li @click.prevent="toggleMobileMenu">
                    <router-link style="text-decoration: none;" to="#nouveaute">Nouveautées</router-link>
                </li>
                <li @click.prevent="toggleMobileMenu"><router-link style="text-decoration: none;" to="#menu">Menu</router-link></li>
                <li @click.prevent="toggleMobileMenu"><router-link style="text-decoration: none;" to="#gallerie">Gallerie</router-link></li>
                <li @click.prevent="toggleMobileMenu"><router-link style="text-decoration: none;" to="#contact">Contact</router-link></li>
            </ul>
        </div>

        <div class="container d-flex align-items-center w-100">
            <div class="logo mr-auto">
                <h1 class="text-light">
                    <router-link style="text-decoration: none;" to="#home"
                        >La cuisine <br />
                        <span class="p-5"> de François</span></router-link
                    >
                </h1>
            </div>

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li><router-link style="text-decoration: none;" to="#home">Accueil</router-link></li>
                    <li><router-link style="text-decoration: none;" to="#about">Le chef</router-link></li>
                    <li><router-link style="text-decoration: none;" to="#nouveaute">Nouveautées</router-link></li>
                    <li><router-link style="text-decoration: none;" to="#menu">Menu</router-link></li>
                    <li><router-link style="text-decoration: none;" to="#gallerie">Gallerie</router-link></li>
                    <li>
                        <router-link style="text-decoration: none;" to="#contact" @click.prevent="scrollToContact">Contact</router-link>
                    </li>
                </ul>
            </nav>
            <div class="open-menu-icon" @click.prevent="toggleMobileMenu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isHeaderScrolled: false,
            isMobileMenuDisplayed: false,
        };
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 800) {
                this.isHeaderScrolled = true;
            } else {
                this.isHeaderScrolled = false;
            }
        },
        toggleMobileMenu() {
            this.isMobileMenuDisplayed = !this.isMobileMenuDisplayed;
        },
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

#header {
    top: 50px;
    height: 70px;
    z-index: 997;
    transition: all 0.5s;
    padding: 10px 0;
}

.header-transparent {
    background: transparent;
}

.headerScrolled {
    transform: translateY(-50px);
    top: 0;
    background: rgba(26, 24, 22, 0.85);
}

.header .logo h1 {
    font-size: 2rem;
    margin: 0;
    font-weight: 700;
    letter-spacing: 3px;
    font-family: $font-bigTitle;
    line-height: 2rem;
    font-style: italic;
}

.header .logo h1 a,
.header .logo h1 a:hover {
    color: $light-text;
    text-decoration: none;
}

.header .logo img {
    padding: 0;
    margin: 0;
    max-height: 40px;
}
@media (max-width: 992px) {
    .header {
        transform: translateY(-50px);
        background: rgba(26, 24, 22, 0.85);
    }
}

/* Desktop Navigation */
.nav-menu,
.nav-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
}

.nav-menu > ul > li {
    position: relative;
    white-space: nowrap;
    float: left;
}

.nav-menu a {
    display: block;
    position: relative;
    color: $light-text;
    padding: 9px 20px;
    transition: 0.3s;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
}

.nav-menu a:hover,
.nav-menu .active > a,
.nav-menu li:hover > a {
    color: $third-color;
    text-decoration: none;
}

// Collapse menu

.open-menu-icon {
    right: 10px;
    display: none;
    font-size: 2rem;
    color: $light-text;
    cursor: pointer;
}
@media (max-width: 992px) {
    .open-menu-icon {
        display: block;
    }
}

.collapse-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-height: 80vh;
    transform: translateY(-110%);
    background: #212121;
    text-align: center;
    transition: transform 400ms ease-in-out;
    & ul {
        padding: 0;
    }
    & ul li {
        margin-top: 5rem;
    }
    & ul li a {
        font-size: 2.5rem;
        text-decoration: none;
        color: $light-text;
    }
}

.collapse-menu-icon {
    position: absolute;
    top: 3%;
    right: 7%;
    color: $light-text;
    font-size: 2rem;
    cursor: pointer;
}

.mobileMenuDisplayed {
    transform: translateY(0);
}
</style>
