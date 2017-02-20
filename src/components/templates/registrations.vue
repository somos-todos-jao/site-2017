<style scoped lang="sass">
    @import ../../sass/imports/_extend

    section
        z-index: 9
        width: 100%

        h1.title
            font-size: $pixel-proportion * 10

        h1.title,
        h2.subtitle
            font-weight: 900
            text-align: center
            color: $color1

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

        > .hero-body
            +flex(column, n, center, center)

            > h1
                width: 60%
                margin-top: $pixel-proportion * 4
                margin-right: auto
                margin-left: auto

            > .campos-incricoes
                z-index: 9
                width: 60%
                margin-right: auto
                margin-left: auto
                +flex(column, n, center, center)

                > .button
                    font-weight: 900
                    font-size: 120%
                    padding: $pixel-proportion * 3

                > .input-group
                    width: 100%
                    +flex(row, n, center, center)

                    > .input-item
                        width: 100%
                        margin: $pixel-proportion
                        +flex(column, n, center, center)

                        > input,
                        > textarea
                            width: 100%
                            margin: $pixel-proportion
                            padding: $pixel-proportion * 2
                            // padding-right: $pixel-proportion * 2
                            // padding-left: $pixel-proportion * 2
                            color: $black1
                            background-color: $white1
                            +border-box
                            +upper-case

                        > .toggle-type
                            +flex(row, n, center, center)

                            > label
                                font-weight: 900
                                font-size: 150%

                            > i
                                margin: $pixel-proportion
                                margin-left: $pixel-proportion * 3
                                margin-right: $pixel-proportion * 3
                                font-size: $pixel-proportion * 6
                                height: $pixel-proportion * 4
                                line-height: $pixel-proportion * 4
                                border-radius: $pixel-proportion * 2 !important
                                +cursor-pointer

                            > .fa-toggle-on
                                text-shadow: -1px -1px 0 $color1, 1px -1px 0 $color1, -1px 1px 0 $color1, 1px 1px 0 $color1
                                background-color: $color1
                                color: $white1

                            > label.is-red
                                color: $color1

                        > .photo-upload
                            position: relative
                            overflow: hidden
                            width: $pixel-proportion * 40
                            height: $pixel-proportion * 40
                            background-color: $white1
                            +flex(row, n, center, center)

                            > .border
                                position: absolute
                                align-self: center
                                width: 100%
                                height: 100%
                                top: 0
                                left: 0

                            > .photo-container
                                position: absolute
                                z-index: 1
                                top: 0
                                left: 0
                                width: 100%
                                height: 100%
                                background-repeat: no-repeat
                                background-position: center center
                                background-size: cover

                            > .camera-icon
                                top: 0
                                left: 0
                                width: 100%
                                height: 100%
                                position: absolute
                                +flex(column, n, center, center)
                                > i
                                    font-size: $pixel-proportion * 8
                                    color: $white1
                                    text-shadow: -5px -5px 0 $color1, 5px -5px 0 $color1, -5px 5px 0 $color1, 5px 5px 0 $color1

                                > label
                                    color: $color1

                            > input
                                position: relative
                                z-index: 3
                                transform: scale(13)
                                opacity: 0
                                +cursor-pointer
    .is-transparent
        top: 100%
        position: absolute
        background-color: $transparent
        z-index: 9
</style>

<template lang="pug">
    section.hero.is-fullheight.is-transparent
        .hero-body
            h1.title.is-1 inscrições
            h2.subtitle.is-4 preencha os dados abaixo para participar

            .campos-incricoes
                span.input-group
                    span.input-item
                        .photo-upload
                            input#upload-field(type="file", @change="fetchPhoto")
                            .border
                                img(src="static/moldura.png")
                            .photo-container(:style="{backgroundImage: 'url(' + imageUpload + ')'}")
                            .camera-icon
                                i.fa.fa-camera
                                label(v-if="!loading") foto oficial
                            input#photo(type="hidden")

                span.input-group
                    span.input-item
                        .toggle-type
                            label(:class="{ 'is-red' : type == 0 }") grupo/banda/cantor
                            i.fa(@click="changeType()", :class="toggleType")
                            label(:class="{ 'is-red' : type == 1 }") outras categorias

                span.input-group
                    span.input-item
                        label nome *
                        input#nome(maxlength="100", type="text")

                span.input-group
                    span.input-item
                        label tipo de trabalho artístico *
                        input#tipo(v-if="type == 0", maxlength="50", type="text", placeholder="BANDA, GRUPO, CANTOR, ORQUESTRA, ETC...")
                        input#tipo(v-else, maxlength="50", type="text", placeholder="FOTÓGRAFO, ARTISTA PLÁSTICO, ESCRITOR, POETA, DESENHISTA, MALABARISTA, ETC...")

                    span.input-item(v-if="type == 0")
                        label gênero *
                        input#genero(maxlength="50", type="text", placeholder="POP, METAL, PUNK, TRASH METAL, DETH METAL, ETC...")

                    span.input-item(v-if="type == 0")
                        label integrantes *
                        input#integrantes(maxlength="2", type="number",  min="1", max="50")

                span.input-group
                    span.input-item
                        label nome do responsável *
                        input#responsavel(maxlength="200", type="text")

                    span.input-item
                        label CPF/RG do responsável *
                        input#doc(maxlength="15", type="tel", placeholder="SOMENTE NÚMEROS")

                span.input-group
                    span.input-item
                        label perfil ou fanpage no facebook *
                        input#facebook(maxlength="200", type="url")

                    span.input-item
                        label site
                        input#site(maxlength="200", type="url")

                    span.input-item
                        label instagram
                        input#instagram(maxlength="200", type="url")

                span.input-group
                    span.input-item
                        label email *
                        input#email(maxlength="100", type="email")

                    span.input-item
                        label telefone de contato *
                        input#telefone(maxlength="15", type="tel")

                span.input-group
                    span.input-item
                        label endereço do responsável *
                        input#endereco(maxlength="200", type="text")

                span.input-group
                    span.input-item
                        label cidade atual do responsável *
                        input#cidade(maxlength="100", type="text")

                    span.input-item
                        label estado *
                        input#estado(maxlength="2", type="text")

                span.input-group
                    span.input-item
                        label resumo da apresentação / release de imprensa (até 500 caracteres) *
                        textarea#descricao(maxlength="500", rows="8")

                span.input-group(v-if="type == 0")
                    span.input-item
                        label vídeo no youtube *
                        input#youtube(maxlength="100", type="url")

                a.button.is-primary(:class="{ 'is-loading' : loading }") Enviar Inscrição
</template>

<script>
    import { postPhoto as post } from '../../services/photo'
    import { mapState, mapActions } from 'vuex'

    export default {
        data: () => ({
            type: 0,
            loading: '',
            imageUpload: ''
        }),
        components: {},
        computed: {
            ...mapState({
                // data: state => state.data
            }),
            toggleType () {
                if (this.type === 0) {
                    return 'fa-toggle-on fa-flip-horizontal'
                } else {
                    return 'fa-toggle-on'
                }
            }
        },
        methods: {
            ...mapActions(['']),
            changeType () {
                if (this.type === 0) {
                    this.type = 1
                } else {
                    this.type = 0
                }
            },
            fetchPhoto (event) {
                let input = event.target
                if (input.files && input.files[0]) {
                    this.loading = true
                    post(input.files[0])
                    .then(response => {
                        console.log(response)
                        this.imageUpload = 'api/uploads/' + response.data.file
                        this.loading = false
                    })
                    .catch((error) => {
                        console.log('Upload error. HTTP Status: ' + error.response.status)
                        console.log(error.response.data)
                    })
                }
            }
        },
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        props: [],
        watch: {}
    }
</script>
