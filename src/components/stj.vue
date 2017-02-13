<style lang="sass">
    @import ../sass/stj

    #stj
        height: 100%
        width: 100%
</style>

<template lang="pug">
    #stj
        router-view(name="content")
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
