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
</template>

<script>
    import hero from './hero'
    import registrations from './registrations'
    import { mapState, mapActions } from 'vuex'

    export default {
        data: () => ({
        }),
        components: {
            hero,
            registrations
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
