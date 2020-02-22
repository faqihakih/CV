<template>
    <div>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous" />
        <b-jumbotron class="jumbotron jumbotron-fluid Kontak">
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
        margin-top: -40px;
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
    }
</style>