<style scoped lang="sass">
    @import ../../sass/imports/_extend

    @media only screen and (max-width: 1024px)
        section
            background-color: $color1
            width: 100%

            h1.title
                font-size: $pixel-proportion * 6

            h1.title,
            h2.subtitle
                font-weight: 900
                text-align: center
                color: $black1

            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            label,
            p
                color: $white1
                font-weight: 400
                font-size: 110%
                +lower-case

            p
                color: $black1
                font-weight: 400
                font-size: 110%
                text-align: center

            > .hero-body
                +flex(column, n, center, center)

                > .border-top
                    top: 0
                    left: 0
                    position: absolute
                    z-index: 9
                    width: 120%
                    height: auto

                    > img
                        height: auto
                        width: 100%

                > h1
                    margin-top: $pixel-proportion * 4
                    width: 60%
                    margin-right: auto
                    margin-left: auto

                > h2
                    margin-bottom: $pixel-proportion * 3

                > .content
                    width: 60%

                > .social-media
                    +flex(column, n, center, center)
                    margin: $pixel-proportion * 3
                    > a
                        margin: $pixel-proportion * 2

                        > i
                            text-shadow: -20px -20px 0 $black1, 20px -20px 0 $black1, -20px 20px 0 $black1, 20px 20px 0 $black1
                            color: $white1
                            font-size: 1000%

                > .staff
                    +flex(column, n, center, center)

                    > .member
                        margin: $pixel-proportion * 2
                        color: $black1
                        +flex(column, n, center, center)

                        > .name
                            font-weight: 900
                            font-size: 150%

                        > .email
                            font-weight: 400
                            font-size: 100%

    @media only screen and (min-width: 1025px)
        section
            background-color: $color1
            width: 100%

            h1.title
                font-size: $pixel-proportion * 10

            h1.title,
            h2.subtitle
                font-weight: 900
                text-align: center

            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            label,
                color: $black1
                font-weight: 400
                font-size: 110%
                +lower-case

            p
                color: $black1
                font-weight: 400
                font-size: 110%
                text-align: center

            > .hero-body
                +flex(column, n, center, center)

                > .border-top
                    top: 0
                    left: 0
                    position: absolute
                    z-index: 9
                    width: 100%

                    > img
                        height: auto
                        width: 100%

                > h1
                    margin-top: $pixel-proportion * 4
                    width: 60%
                    margin-right: auto
                    margin-left: auto

                > h2
                    margin-bottom: $pixel-proportion * 7

                > .content
                    width: 60%

                > .social-media
                    margin: $pixel-proportion * 3
                    > a
                        margin: $pixel-proportion * 2

                        > i
                            text-shadow: -20px -20px 0 $black1, 20px -20px 0 $black1, -20px 20px 0 $black1, 20px 20px 0 $black1
                            color: $white1
                            font-size: 1000%

                > .staff
                    +flex(row, n, center, center)

                    > .member
                        margin: $pixel-proportion * 2
                        color: $black1
                        +flex(column, n, center, center)

                        > .name
                            font-weight: 900
                            font-size: 150%

                        > .email
                            font-weight: 400
                            font-size: 100%
</style>

<template lang="pug">
    section#contato.hero.is-fullheight
        .hero-body
            .border-top
                img(src="static/border-preto-01.svg")

            h1.title.is-1 contato
            h2.subtitle.is-4 encontre o jão

            .content
                p Se você quiser patrocinar este evento, ajudar de alguma maneira ou caso você ainda tenha alguma dúvida estamos dispostos a ajudar, envie-nos um e-mail ou entre em contato conosco através de algum dos nossos canais de mídias sociais.

            .social-media
                a(href="https://www.facebook.com/somostodosjao", target="_blank")
                    i.fa.fa-facebook
                a(href="https://www.twitter.com/somostodosjao", target="_blank")
                    i.fa.fa-twitter
                a(href="https://www.instagram.com/somostodosjao", target="_blank")
                    i.fa.fa-instagram
                a(href="https://open.spotify.com/user/12167326652/playlist/66dQgEbn8LJ74qkL1lAk0g", target="_blank")
                    i.fa.fa-spotify

            .staff
                .member
                    .name Luigui Delyer
                    .email luigui@somostodosjao.com.br

                .member
                    .name Gustavo Jesus
                    .email jesus@somostodosjao.com.br
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
