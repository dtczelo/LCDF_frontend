<template>
    <div id="app">
        <!-- <TopBar></TopBar>
        <Header></Header> -->
        <router-view />
    </div>
</template>

<script>
// import TopBar from "./components/TopBar";
// import Header from "./components/Header";
import { bus } from "./main";

export default {
    updated() {
        bus.$on("toastr", (payload) => {
            this.$bvToast.toast(payload.message, {
                title: payload.title,
                solid: true,
                variant: payload.style,
                autoHideDelay: 5000,
                appendToast: false
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
</style>
