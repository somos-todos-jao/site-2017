<style scoped lang="sass">
    @import ../../sass/imports/_extend

    @media only screen and (max-width: 1024px)
        nav
            display: none

    @media only screen and (min-width: 1025px)
        nav
            position: absolute
            z-index: 9
            width: 100%
            // margin-top: $pixel-proportion

            > ul
                width: 100%
                +flex(row, n, center, center)

                > li
                    margin: $pixel-proportion * 1.5

                    > a
                        font-size: $pixel-proportion * 2.5
                        font-weight: 900
                        color: $white1

                        &:hover
                            color: $color1
</style>

<template lang="pug">
    nav
        mixin navItem(destination, title)
            li
                a(href=destination)= title

        ul
            +navItem('#home', 'home')
            //- +navItem('#inscricoes', 'inscrições')
            +navItem('#o-festival', 'o festival')
            +navItem('#contato', 'contato')
</template>

<script>

</script>
