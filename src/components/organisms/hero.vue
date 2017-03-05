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
                margin-bottom: 7%
                height: 7vw
                z-index: 9

            > .border-top
                top: 0
                position: absolute
                z-index: 9
                width: 100%

                > img
                    height: auto
                    width: 100%

                &::before
                    content: ''
                    background-color: $black1
                    height: $pixel-proportion * 3
                    width: 100%
                    display: inline-block
                    margin-bottom: $pixel-proportion * -1

            > .border-bottom
                position: absolute
                transform: rotate(180deg)
                bottom: $pixel-proportion * -1.5
                height: auto
                width: 100%
</style>

<template lang="pug">
    section#home.hero.is-fullheight
        full-nav
        .hero-body
            .border-top
                img(src="static/border-preto-01.svg")
            img#logo(src="static/logo-home.svg")
            img#date(src="static/data-festival-01.svg")
            img.border-bottom(src="static/border-preto-01.svg")
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import fullNav from '../molecules/nav'

    export default {
        data: () => ({}),
        components: {
            fullNav
        },
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
