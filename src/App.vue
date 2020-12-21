<template>
    <div id="app">
        <TopBar></TopBar>
        <Header></Header>
        <router-view />
    </div>
</template>

<script>
import TopBar from "./components/TopBar";
import Header from "./components/Header";

export default {
    components: {
        TopBar,
        Header,
    },
};
</script>

<style lang="scss">
@import "./assets/styles/scss/variables";

body {
    font-family: sans-serif;
    color: $second-color;
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
