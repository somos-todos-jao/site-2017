<style scoped lang="sass">
    @import ../../sass/imports/_extend

    section  
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
            text-align: justify
        
        > .hero-body
            +flex(column, n, center, center)

            > h1
                width: 60%
                margin-right: auto
                margin-left: auto
            
            > h2 
                margin-bottom: $pixel-proportion * 7

            > .content
                width: 60%


</style>

<template lang="pug">
    section#o-festival.hero.is-fullheight
        .hero-body
            h1.title.is-1 o festival
            h2.subtitle.is-4 senta que lá vem história

            .content
                p Na primeira edição realizada no Shopping Center Fernandópolis dezenas de artistas locais levaram ao público cerca de 50 horas de muita música, dança, literatura, exposições de fotos e desenhos. Durante dois dias de evento houve uma densa atividade cultural, gerando troca de experiências entre os artistas participantes e levando ao público a surpresa pela produção de conteúdos diversificados em forma e estilo, produzido majoritariamente por fernandopolenses. 
                p Seguindo o sucesso da primeira edição, o Meu Nome é Jão de 2015 levou novamente milhares de pessoas ao Shopping Center para apreciar novamente uma verdadeira explosão de cultura alternativa e independente. Devido à grande repercussão da edição de 2014 desta vez foi necessária a abertura das inscrições para artistas de toda a região, o que aumentou ainda mais o alcance de público e do número de artistas envolvidos. 
                p Durante os três dias de evento ao todo se apresentaram cerca de 123 músicos, seis pintores, cinco fotógrafos, dezenas de dançarinos, artistas plásticos e escritores. Toda essa galera proporcionou quase 70 horas de integração cultural, com shows e exposições que solidificaram o Festival como o maior agregador cultural do Noroeste Paulista. 
                p Para a edição de 2016 o Festival incorporou em sua grade de atrações o teatro, com diversas apresentações em espaços públicos e no Teatro Municipal de Fernandópolis. O evento contou com mais se 200 artistas que preencheram a cidade com diversas intervenções culturais. 
                p Em 2017 o evento se dará nas férias de julho, mais precisamente nos dias 14 e 15, tendo novamente o Shopping como principal sede de atrações.
                p Em breve traremos mais um monte de novidades que farão parte da edição de 2017 do Meu Nome é Jão Festival Cultural - cultura independente para quem depende de cultura.
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
