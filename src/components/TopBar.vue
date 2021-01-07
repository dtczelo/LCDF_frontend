<template>
    <section id="topbar" :class="{ topbarScrolled: isScrolled }" class="topbar d-none d-lg-flex align-items-center fixed-top topbar-transparent">
        <div class="container text-right">
            <i class="fas fa-mobile-alt"></i> +33 750 37 19 24 <i class="far fa-clock"></i> Lun-Sam: 11:30 - 14:30 <br> 19:00 - 22:00
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isScrolled: false,
        };
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 800) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;
            }
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

.topbar {
    padding: 0;
    font-size: 15px;
    height: 70px;
    transition: all 0.5s;
    background: rgba(26, 24, 22, 0.8);
    color: $light-text;
    transform: translateX(-20px);
}

.topbar-transparent {
    background: $head-background;
}

.topbarScrolled {
    transform: translateY(-60px);
}

.topbar i {
    color: $third-color;
}

.topbar i + i {
    margin-left: 15px;
}
</style>
