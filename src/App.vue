<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { bus } from "./main";

export default {
    updated() {
        bus.$on("toastr", (payload) => {
            this.$bvToast.toast(payload.message, {
                title: payload.title,
                solid: true,
                variant: payload.style,
                autoHideDelay: 5000,
                appendToast: false,
            });
        });
    },
};
</script>

<style lang="scss">
@import "./assets/styles/scss/variables";

body {
    font-family: sans-serif;
    color: $second-color;
}

#app {
    min-height: 100vh;
}

a {
    color: $fourth-color;
}

a:hover {
    color: $third-color;
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: $font-bigTitle;
}

section {
    padding: 50px 0;
}

// Transition Vue

.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
