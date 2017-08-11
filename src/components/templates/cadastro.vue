<style scoped lang="sass">
    @import ../../sass/imports/_extend

    .component
        height: 100%
        width: 100%
</style>

<template lang="pug">
    .component
        hero
        registrations
        //- release
        contact
</template>

<script>
    import hero from '../organisms/hero'
    import registrations from '../organisms/registrations'
    import release from '../organisms/release'
    import contact from '../organisms/contact'
    import { mapState, mapActions } from 'vuex'

    export default {
        data: () => ({
        }),
        components: {
            hero,
            registrations,
            release,
            contact
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
