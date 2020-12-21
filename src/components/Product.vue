<template>
    <div>
        <div class="menu-content"><a href="!#">{{ title }}</a><span>{{ price }}€</span></div>
        <div class="menu-ingredients">
                    {{ description }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
        };
    },
    props: {
        productId: String,
        title: String,
        description: String,
        // imageUrl: String,
        price: Number,
        // diets: Array,
    },
    computed: {
        visible() {
            return this.index === this.$parent.index;
        },
    },
};
</script>

<style lang="scss">

</style>
