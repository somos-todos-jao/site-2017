<style scoped lang="sass">
    @import ../../sass/imports/_extend

    section
        background-color: $color1
        z-index: 1

        > .hero-body
            +flex(row, n, center, center)

            > #logo
                position: absolute
                align-self: flex-start
                min-width: 90vw
                top: -25vw
                z-index: 1

            > #date
                align-self: flex-end
                height: 7vw
                z-index: 9
</style>

<template lang="pug">
    section.hero.is-fullheight
        .hero-body
            img#logo(src="static/logo-home.svg")
            img#date(src="static/data-festival-01.svg")
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        data: () => ({}),
        components: {},
        computed: {
            ...mapState({
                // data: state => state.data
            })
        },
        methods: {
            ...mapActions([''])
        },
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        props: [],
        watch: {}
    }
</script>
