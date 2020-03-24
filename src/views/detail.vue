<template>
    <div class="detail" id="detail">
        <b-container>
            <b-card-group class="deck row">
                <div class="col-md-6 full">
                    <b-img @click="fullWidthImage = !fullWidthImage" src="/assets/logo.png" fluid alt="Klien">
                    </b-img>
                </div>
                <div class="col-md-6" style="border-left: 3px #232428 solid; height: auto; width: 2px;">
                    <div class="deskripsi">
                        <h1>Name of Product</h1>
                        <hr style="border-bottom:solid 3px #232428; width: 50%; margin-left: 0%"/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt pariatur asperiores ullam
                            sunt, modi officia eius suscipit similique iusto dolorem. Porro aperiam hic ea molestias vitae
                            esse dignissimos dolorum vero obcaecati, ullam maxime similique officiis sint quo voluptates
                            quod,
                            deserunt quae ab reiciendis atque. Aperiam itaque quos accusantium inventore quibusdam.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt pariatur asperiores ullam
                            sunt, modi officia eius suscipit similique iusto dolorem. Porro aperiam hic ea molestias vitae
                            esse dignissimos dolorum vero obcaecati, ullam maxime similique officiis sint quo voluptates
                            quod,
                            deserunt quae ab reiciendis atque. Aperiam itaque quos accusantium inventore quibusdam.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt pariatur asperiores ullam
                            sunt, modi officia eius suscipit similique iusto dolorem. Porro aperiam hic ea molestias vitae
                            esse dignissimos dolorum vero obcaecati, ullam maxime similique officiis sint quo voluptates
                            quod,
                            deserunt quae ab reiciendis atque. Aperiam itaque quos accusantium inventore quibusdam.
                        </p>
                    </div>
                </div>
            </b-card-group>
        </b-container>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'detail',
    
data() {
    return {
        slide: 0,
        readMoreActivated: false,
        products: [],
        imgProduct: ''
        };
    },
    methods: {
      created() {
        axios
            .get("http://192.168.18.45:8000/api/product")
            .then(response => {
            this.products = response.data.results;
            // console.log(this.products);
            })
            .catch(e => {
            console.log(e);
            });
      }
    }
}
</script>

<style scoped>
    @font-face {
    font-family: "Gilroy-Light";
    src: url("/assets/Gilroy-Light.otf");
    }
    .detail{
        background: #1B1A1F;
        height: 639px;
    }
    /* hr {
        border-bottom:solid 3px #cccccc;
    } */
    .deck{
        padding-top: 60px;
    }
    .deskripsi{
        color: white;
        font-family: "Gilroy-Light", sans-serif;
    }
    .full{
        text-align: center;
        /* justify-content:  center; */
        align-self: center;
    }
</style>