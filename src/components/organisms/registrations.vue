<style scoped lang="sass">
    @import ../../sass/imports/_extend

    @media only screen and (max-width: 1024px)
        section
            z-index: 9
            width: 100%

            h1.title
                font-size: $pixel-proportion * 6

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

                > .border-bottom
                    position: absolute
                    transform: rotate(180deg)
                    bottom: 0
                    left: 0
                    height: $pixel-proportion * 4
                    width: auto

                > h1
                    width: 100%
                    margin-right: auto
                    margin-left: auto

                > h2
                    margin-bottom: $pixel-proportion * 3

                > .campos-incricoes
                    z-index: 9
                    width: 90%
                    margin-right: auto
                    margin-left: auto
                    +flex(column, n, center, center)

                    > #send-form
                        font-weight: 400
                        margin-top: $pixel-proportion * 2
                        margin-bottom: $pixel-proportion * 3
                        max-width: 100%
                        white-space: initial
                        height: auto

                    > .input-group
                        width: 100%
                        +flex(column, n, center, center)

                        > .input-item
                            width: 100%
                            margin: $pixel-proportion
                            margin-bottom: 0
                            +flex(column, n, center, center)

                            > .checkbox
                                +flex(column, n, center, center)
                                text-align: center

                                &:hover
                                    color: $color1

                            > .button
                                padding-top: $pixel-proportion * 2
                                padding-bottom: $pixel-proportion
                                +flex(column, n, center, center)
                                margin-bottom: $pixel-proportion
                                height: auto
                                max-width: 100%

                                > span
                                    max-width: 100%
                                    white-space: initial

                            > input,
                            > textarea
                                width: 100%
                                margin: $pixel-proportion
                                padding: $pixel-proportion * 2
                                color: $black1
                                background-color: $white1
                                +border-box
                                +upper-case

                            > .toggle-type
                                +flex(column, n, center, center)

                                > label
                                    font-weight: 900
                                    width: 100%
                                    font-size: 140%
                                    +cursor-pointer

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
                                width: $pixel-proportion * 35
                                height: $pixel-proportion * 35
                                background-color: $white1
                                +flex(row, n, center, center)

                                > .border
                                    position: absolute
                                    align-self: center
                                    width: 100%
                                    height: 100%
                                    top: 0
                                    left: 0
                                    z-index: 2

                                > .photo-container
                                    position: absolute
                                    z-index: 1
                                    top: 1%
                                    left: 1%
                                    width: 98%
                                    height: 98%
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
                                        text-align: center
                                        width: 60%
                                        color: $color1
                                        margin-top: $pixel-proportion

                                > input
                                    position: relative
                                    z-index: 3
                                    transform: scale(13)
                                    opacity: 0
                                    +cursor-pointer

    @media only screen and (min-width: 1025px)
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

                > .border-bottom
                    position: absolute
                    transform: rotate(180deg)
                    bottom: $pixel-proportion * -1.5
                    left: 0
                    height: auto
                    width: 100%

                > h1
                    width: 60%
                    // margin-top: $pixel-proportion
                    margin-right: auto
                    margin-left: auto

                > h2
                    margin-bottom: $pixel-proportion * 7

                > .campos-incricoes
                    z-index: 9
                    width: 60%
                    margin-right: auto
                    margin-left: auto
                    +flex(column, n, center, center)

                    > #send-form
                        font-weight: 400
                        margin-top: $pixel-proportion * 2
                        margin-bottom: $pixel-proportion * 3

                    > .input-group
                        width: 100%
                        +flex(row, n, center, center)

                        > .input-item
                            width: 100%
                            margin: $pixel-proportion
                            +flex(column, n, center, center)

                            > .checkbox
                                &:hover
                                    color: $color1

                            > .button
                                padding-top: $pixel-proportion * 2
                                padding-bottom: $pixel-proportion
                                +flex(column, n, center, center)
                                margin-bottom: $pixel-proportion
                                height: auto

                            > input,
                            > textarea
                                width: 100%
                                margin: $pixel-proportion
                                padding: $pixel-proportion * 2
                                color: $black1
                                background-color: $white1
                                +border-box
                                +upper-case

                            > .toggle-type
                                +flex(row, n, center, center)

                                > label
                                    font-weight: 900
                                    font-size: 150%
                                    +cursor-pointer

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
                                width: $pixel-proportion * 45
                                height: $pixel-proportion * 45
                                background-color: $white1
                                +flex(row, n, center, center)

                                > .border
                                    position: absolute
                                    align-self: center
                                    width: 100%
                                    height: 100%
                                    top: 0
                                    left: 0
                                    z-index: 2

                                > .photo-container
                                    position: absolute
                                    z-index: 1
                                    top: 1%
                                    left: 1%
                                    width: 98%
                                    height: 98%
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
                                        text-align: center
                                        width: 60%
                                        color: $color1
                                        margin-top: $pixel-proportion

                                > input
                                    position: relative
                                    z-index: 3
                                    transform: scale(13)
                                    opacity: 0
                                    +cursor-pointer
    .is-transparent
        // top: 100%
        // position: absolute
        background-color: $transparent
        z-index: 9
</style>

<template lang="pug">
    section#inscricoes.hero.is-fullheight.is-transparent
        .hero-body
            h1.title.is-1 inscrições
            h2.subtitle.is-4 preencha os dados abaixo pra mostrar sua arte no rolê

            .campos-incricoes
                span.input-group
                    span.input-item
                        .photo-upload
                            input#upload-field(type="file", @change="fetchPhoto")
                            .border
                                img(src="static/moldura.png")
                            .photo-container(:style="{backgroundImage: 'url(' + form.photoURL + ')'}")
                            .camera-icon
                                i.fa(:class="loadingIcon")
                                label(v-if="!photoLoading") {{photoMessage}}
                            input#photo(v-model="form.photo", type="hidden")

                span.input-group
                    span.input-item
                        .toggle-type
                            label(:class="{ 'is-red' : type == 0 }", @click="type = 0") grupo/banda/cantor
                            i.fa(@click="changeType()", :class="toggleType")
                            label(:class="{ 'is-red' : type == 1 }", @click="type = 1") outras categorias

                span.input-group
                    span.input-item
                        label nome *
                        input#nome(v-model="form.name", maxlength="100", type="text")

                span.input-group
                    span.input-item
                        label tipo de trabalho artístico *
                        input#tipo(v-model="form.type", v-if="type == 0", maxlength="50", type="text", placeholder="BANDA, GRUPO, CANTOR, ORQUESTRA, ETC...")
                        input#tipo(v-model="form.type", v-else, maxlength="50", type="text", placeholder="FOTÓGRAFO, ARTISTA PLÁSTICO, ESCRITOR, POETA, DESENHISTA, MALABARISTA, ETC...")

                    span.input-item(v-if="type == 0")
                        label gênero *
                        input#genero(v-model="form.gender", maxlength="50", type="text", placeholder="POP, METAL, PUNK, TRASH METAL, DETH METAL, ETC...")

                    span.input-item
                        label integrantes *
                        input#integrantes(v-model="form.members", maxlength="2", type="number",  min="1", max="50", placeholder="SOMENTE NÚMEROS")

                span.input-group
                    span.input-item
                        label nome do responsável *
                        input#responsavel(v-model="form.majorName", maxlength="200", type="text")

                    span.input-item
                        label CPF/RG do responsável *
                        input#doc(v-model="form.doc", maxlength="15", type="tel", placeholder="SOMENTE NÚMEROS")

                span.input-group
                    span.input-item
                        label perfil ou fanpage no facebook *
                        input#facebook(v-model="form.facebook", maxlength="200", type="url", placeholder="HTTP://FB.COM/SUA-FAN-PAGE")

                    span.input-item
                        label site
                        input#site(v-model="form.webpage", maxlength="200", type="url", placeholder="HTTP://WWW.SITE.COM.BR")

                    span.input-item
                        label instagram
                        input#instagram(v-model="form.instagram", maxlength="200", type="url", placeholder="@SEU_PERFIL")

                span.input-group
                    span.input-item
                        label email *
                        input#email(v-model="form.email", maxlength="100", type="email", placeholder="EMAIL@DECONTATO.COM")

                    span.input-item
                        label telefone de contato *
                        input#telefone(v-model="form.telephone", maxlength="15", type="tel", placeholder="SOMENTE NÚMEROS")

                span.input-group
                    span.input-item
                        label endereço do responsável *
                        input#endereco(v-model="form.address", maxlength="200", type="text", placeholder="COMPLETO, COM NÚMERO E COMPLEMENTOS'")

                span.input-group
                    span.input-item
                        label cidade atual do responsável *
                        input#cidade(v-model="form.city", maxlength="100", type="text")

                    span.input-item
                        label estado *
                        input#estado(v-model="form.state", maxlength="2", type="text")

                span.input-group
                    span.input-item
                        label resumo da apresentação / release de imprensa (até 500 caracteres) *
                        textarea#descricao(v-model="form.resume", maxlength="500", rows="8")

                span.input-group(v-if="type == 0")
                    span.input-item
                        label vídeo no youtube *
                        input#youtube(v-model="form.video", maxlength="100", type="url", placeholder="ENSAIO, ENTREVISTA, CLIPE, PORTIFOLIO, APRESENTAÇÃO...")

                span.input-group
                    span.input-item
                        a.button.is-medium(href="static/termo-do-participante-meu-nome-e-jao.doc")
                            span.icon.is-large.is-marginless
                                i.fa.fa-file-word-o
                            span.is-marginless Fazer dowload do contrato, termos e condições do festival

                        label.checkbox
                            input(type="checkbox", v-model="form.contract")
                            | Confirmo que li o contrato, concordo com os termos e que o apresentarei assinado quando solicitado

                a#send-form.button.is-primary.is-large(:class="{ 'is-loading' : loading }", @click="fetchRegistration()") {{buttonMessage}}

            img.border-bottom(src="static/border-branco-01.svg")
</template>

<script>
    import { postPhoto as photo } from '../../services/photo'
    import { postRegistrations as registrations } from '../../services/registrations'
    import { mapState, mapActions } from 'vuex'

    export default {
        data: () => ({
            type: 0,
            loading: false,
            photoLoading: false,
            photoMessage: 'Foto oficial',
            buttonMessage: 'Enviar inscrição',
            form: {
                photo: '',
                photoURL: '',
                name: '',
                type: '',
                gender: '',
                members: '',
                majorName: '',
                doc: '',
                facebook: '',
                webpage: '',
                instagram: '',
                email: '',
                telephone: '',
                address: '',
                city: '',
                state: '',
                resume: '',
                video: '',
                contract: ''
            }
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
            },
            loadingIcon () {
                if (this.photoLoading) {
                    return 'fa-refresh fa-spin'
                } else {
                    return 'fa-camera'
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
                    this.photoLoading = true
                    this.loading = true
                    this.form.photoURL = ''
                    this.form.photo = ''
                    this.photoMessage = ''

                    photo(input.files[0])
                    .then(response => {
                        console.log(response)

                        this.form.photoURL = 'http://www.somostodosjao.com.br/api/uploads/' + response.data.file
                        this.form.photo = response.data.file
                        this.loading = false
                        this.photoMessage = ''
                    })
                    .catch((error) => {
                        if (error.response !== undefined) {
                            console.log('Upload error. HTTP Status: ' + error.response.status)
                            console.log(error.response.data)

                            if (error.response.data.Error) {
                                this.photoMessage = "Tente novamente com um arquivo do tipo '.jpg'"
                            }
                        } else {
                            console.log('Upload error. ' + error)
                            this.photoMessage = 'Não foi possível enviar sua foto. Tente novamente em breve.'
                        }

                        this.form.photo = ''
                        this.form.photoURL = ''
                        this.photoLoading = false
                        this.loading = false
                    })
                }
            },
            fetchRegistration () {
                this.loading = true

                registrations(this.form)
                .then(response => {
                    console.log(response)

                    this.form = {
                        photo: '',
                        photoURL: '',
                        name: '',
                        type: '',
                        gender: '',
                        members: '',
                        majorName: '',
                        doc: '',
                        facebook: '',
                        webpage: '',
                        instagram: '',
                        email: '',
                        telephone: '',
                        address: '',
                        city: '',
                        state: '',
                        resume: '',
                        video: '',
                        contract: ''
                    }

                    this.photoMessage = 'Foto oficial'
                    this.photoLoading = false
                    this.loading = false
                    this.buttonMessage = 'Seu cadastro foi realizado em sucesso!'
                })
                .catch((error) => {
                    if (error.hasOwnProperty('response')) {
                        console.log('aqui')
                        console.log('Post error. HTTP Status: ' + error.response.status)
                        console.log(error.response.data)
                        this.buttonMessage = error.response.data.Error
                    } else {
                        this.buttonMessage = error
                        console.log('Post error. ' + error)
                        this.buttonMessage = 'Não foi possível completar o seu cadastro. Tente novamente em breve.'
                    }
                    this.loading = false
                })
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
