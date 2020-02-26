<template>
    <div id="kontak">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous" />
        <b-jumbotron class="jumbotron jumbotron-fluid Kontak">
            <div class="wave">
                    <b-img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2%0D%0AaXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xh%0D%0AdGUiIHZpZXdCb3g9IjAgNDAwMCA2NjcuNzE5IDMzOS4yODMiIHdpZHRoPSI2NjcuNzE5IiBoZWln%0D%0AaHQ9IjMzOS4yODMiPjxnIGlkPSJHZWxvbWJhbmcgNiI+PGcgb3BhY2l0eT0iMC4yIj48bGluZWFy%0D%0AR3JhZGllbnQgaWQ9Il9sZ3JhZGllbnRfNCIgeDE9IjEwNC4wOTQ5NTE3MTYwODYwNyUiIHkxPSIt%0D%0AMTE0Ljg3MzI2MDczNzMyOTQ1JSIgeDI9IjM3LjQyNDIzNzgzMzc5NDQzNiUiIHkyPSIxMTIuNDkx%0D%0AOTU3NzI1NjUxMTklIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLW9wYWNpdHk9IjEiIHN0eWxlPSJz%0D%0AdG9wLWNvbG9yOnJnYigyNTUsMjU1LDI1NSkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3Atb3Bh%0D%0AY2l0eT0iMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDIzLDIzLDI5KSIvPjwvbGluZWFyR3JhZGll%0D%0AbnQ+PHBhdGggZD0iIE0gMCA0MzE2Ljk5OCBDIDE1MC41MzggNDM1NS41NjMgMjMwLjA0NyA0MzQy%0D%0ALjA5OSAzMjIuNjg2IDQyOTEuODQyIEMgNDIzLjY3NCA0MjM3LjA1OCA1MjQuOTk2IDQxMTMuMTcy%0D%0AIDU0OC4wMTggNDAzMC4wNDIgQyA1NTAuNTAzIDQwMjEuMDY4IDU1My4yNDggNDAxMS4wNDQgNTU2%0D%0ALjM1NyA0MDAwIEwgNTU2LjM1NyA0MDAwIEwgNDIzLjg4NyA0MDAwIEMgMzc2Ljk1NCA0MDYwLjY0%0D%0ANCAzMTYuNTEyIDQxMDkuOTk5IDIyNi45OCA0MTE4LjQ5OCBDIDEyNi4wMzIgNDEyOC4wODEgNjAu%0D%0AMTE4IDQxMjYuNDAzIDAgNDEzOC4yMDMgTCAwIDQzMTYuOTk4IFogIiBmaWxsPSJ1cmwoI19sZ3Jh%0D%0AZGllbnRfNCkiLz48L2c+PGcgb3BhY2l0eT0iMC4yIj48bGluZWFyR3JhZGllbnQgaWQ9Il9sZ3Jh%0D%0AZGllbnRfNSIgeDE9IjEwNC4wOTQ5NTE3MTYwODYwNyUiIHkxPSItMTE0Ljg3MzI2MDczNzMyOTQ1%0D%0AJSIgeDI9IjM3LjQyNDIzNzgzMzc5NDQzNiUiIHkyPSIxMTIuNDkxOTU3NzI1NjUxMTklIj48c3Rv%0D%0AcCBvZmZzZXQ9IjAlIiBzdG9wLW9wYWNpdHk9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyNTUs%0D%0AMjU1LDI1NSkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3Atb3BhY2l0eT0iMSIgc3R5bGU9InN0%0D%0Ab3AtY29sb3I6cmdiKDIzLDIzLDI5KSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iIE0gMCA0%0D%0AMTgyLjAwNSBRIDE5LjkwOSA0MTg4LjAxOCAzOS41MjIgNDE5OC41MDEgQyAyMTcuOTQ1IDQyOTMu%0D%0AODczIDMwNS45OTQgNDI5OC45NTEgNDEzLjQxNiA0MjU4LjE4OCBDIDUyMC44MzkgNDIxNy40MjYg%0D%0ANjM0LjA0NSA0MDk5LjIzMiA2NjQuMDk2IDQwMTAuNzEyIEMgNjY1LjI1NSA0MDA3LjI5NyA2NjYu%0D%0ANDU5IDQwMDMuNzM4IDY2Ny43MTkgNDAwMCBMIDY2Ny43MTkgNDAwMCBMIDQ4Ny4wMjUgNDAwMCBD%0D%0AIDQ0NC4xNzkgNDAzMS41MzYgMzkzLjExMyA0MDUwLjI3IDMyOS4zNDcgNDA0NC4xNzMgQyAxNzIu%0D%0ANDM2IDQwMjkuMTcyIDk5LjI1MSA0MDAxLjcxMSAwIDQwMzYuODg4IEwgMCA0MTgyLjAwNSBaICIg%0D%0AZmlsbD0idXJsKCNfbGdyYWRpZW50XzUpIi8+PC9nPjwvZz48L3N2Zz4="></b-img>
                </div>
            <b-container fluid="md">
                <h1>Hubungi Kami</h1>
                <b-row>
                    <b-col md="6">
                        <div class="deskripsi">
                            <p>Pertanyaan, konsultasi, diskusi atau sekedar berkenalan, <br>
                                silahkan hubungi nomor dibawah. Kami akan berusaha <br>
                                memberikan solusi terbaik sesuai dengan budget yang <br>
                                anda miliki <br> <br>
                                Telepon <br>
                                +62 (0283) <span>08979</span> <br>
                                +62 (0283) <span>99779</span> <br> <br>
                                Software House Tegal : <br>
                                Jl. Pantura 20, <span>Tunon, Tegal 52230</span></p>
                        </div>
                    </b-col>
                    <b-col md="6">
                        <div class="form" @submit="onSubmit">
                            <b-card class="card">
                                <b-form>
                                <h2>Hubungi Kami</h2>
                                <b-form-group class="label" id="input-group-1" label-cols="6" label-cols-lg="4" label-size="sm" label="Nama"
                                    label-for="input-1">
                                    <b-form-input id="input-1" size="sm" v-model="form.Nama"></b-form-input>
                                </b-form-group>

                                <b-form-group class="label" id="input-group-2" label-cols="6" label-cols-lg="4" label-size="sm" label="Layanan"
                                    label-for="input-2">
                                    <b-form-input id="input-2" size="sm" v-model="form.Layanan"></b-form-input>
                                </b-form-group>

                                <b-form-group class="label" id="input-group-3" label-cols="6" label-cols-lg="4" label-size="sm" label="E-mail"
                                    label-for="input-3">
                                    <b-form-input id="input-3" size="sm" type="email" v-model="form.Email"></b-form-input>
                                </b-form-group>

                                <b-form-group class="label" id="input-group-4" label-cols="6" label-cols-lg="4" label-size="sm" label="Pesan"
                                    label-for="input-4">
                                    <b-form-textarea id="input-4" v-model="form.textarea"
                                        rows="3" max-rows="6">
                                    </b-form-textarea>
                                </b-form-group>
                                <button type="submit" class="tombol">Kirim Pesan</button>
                                </b-form>
                            </b-card>
                        </div>
                    </b-col>
                </b-row>
                    <a href="https://github.com/plugintegal" target="_blank" class="fa fa-medium">
                        <span>Plugin.com</span>
                    </a>
                    <a href="https://www.instagram.com/officialplugin/" target="_blank" class="fa fa-instagram">
                        <span>Official/plugin.com</span>
                    </a>
                    <a href="https://www.youtube.com/channel/UCW0p5Y6cNZ34G1LkY46xeLg" target="_blank" class="fa fa-youtube">
                        <span>Official/plugin.com</span>
                    </a>
            </b-container>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: 'Kontak',
        props: {
            msg: String
        },
        data() {
      return {
        form: {
          Nama: '',
          Layanan: '',
          Email: '',
          textarea: ''
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Gilroy-Light";
        src: url('/assets/Gilroy-Light.otf');
    }

    @font-face {
        font-family: "Gilroy-Bold";
        src: url('/assets/Gilroy-ExtraBold.otf');
    }

    .Kontak {
        background: #232428;
        color: white;
        height: 630px;
        justify-content: center;
        text-align: center;
    }

    h1 {
        /* margin-top: 30px !important; */
        /* margin-left: -15px; */
        color: white;
        font-family: 'Gilroy-Bold', sans-serif;
        text-align: left;
    }

    .deskripsi p {
        margin-top: 8px;
        color: white;
        font-family: 'Gilroy-Light', sans-serif;
        text-align: left;
        /* letter-spacing: 1px; */
    }
    .form{
        text-align: center;
        margin-top: 5px;
        color: white;
        font-family: 'Gilroy-Bold', sans-serif;
    }
    .form .label{
        text-align: left;
        font-family: 'Gilroy-light', sans-serif;
    }
    .card {
        margin-left: auto;;
        background: #232428;
        color: white;
        height: 400px;
        width: 400px;
        -webkit-box-shadow: -1px 1px 11px 4px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 1px 11px 4px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 1px 11px 4px rgba(0, 0, 0, 0.75);
    }
    .tombol{
        margin-top: 30px;
        background: #1B1A1F;
        color: white;
        font-family: 'Gilroy-light', sans-serif;
        width: 200px;
        height: 35px;
        border: 2px solid#1B1A1F;
        border-radius: 0.6em;
    }
    span{
        font-weight: bold;
        color: white;
    }
    .fa{
        margin-top: 40px;
        justify-content: space-around;
        margin-left: 80px;
    }
    .wave{
        margin-top : -63px;
        /* margin-left : 648px; */
        position: absolute;
    }
    
    /* Mobile Css */
    @media (min-width: 186px) and (max-width: 979px) {
        * {
            text-align: center;
            /* padding-top: -40px; */
        }
        .Kontak {
        background: #232428;
        color: white;
        height: auto;
        margin-top: -43px;
        }
        .card {
        margin-left: auto;;
        background: #232428;
        color: white;
        height: auto;
        width: auto;
        -webkit-box-shadow: -1px 1px 11px 4px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -1px 1px 11px 4px rgba(0, 0, 0, 0.75);
        box-shadow: -1px 1px 11px 4px rgba(0, 0, 0, 0.75);
        }
        .tombol{
        margin-top: 30px;
        background: #1B1A1F;
        color: white;
        font-family: 'Gilroy-light', sans-serif;
        width: auto;
        height: auto;
        border: 2px solid#1B1A1F;
        border-radius: 0.6em;
        }
        .fa{
        margin-top: 10px;
        justify-content: space-around;
        margin-left: 20px;
        padding-top: 20px;
        }
        .wave{
        display: none;
    }
    }
</style>