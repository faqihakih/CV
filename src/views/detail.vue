<template>
    <div class="detail">
        <div id="detail">
            <b-container>
        <b-card-group class="deck row">
            <div class="col-md-6 full">
                <b-img @click="fullWidthImage = !fullWidthImage" src="/assets/logo.png" fluid alt="Klien">
                </b-img>
            </div>
            <div class="col-md-6">
                <div class="deskripsi">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt pariatur asperiores ullam
                        sunt, modi officia eius suscipit similique iusto dolorem. Porro aperiam hic ea molestias vitae
                        esse dignissimos dolorum vero obcaecati, ullam maxime similique officiis sint quo voluptates
                        quod,
                        deserunt quae ab reiciendis atque. Aperiam itaque quos accusantium inventore quibusdam.</p>
                </div>
            </div>
        </b-card-group>
        </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detail'
    }
</script>

<style scoped>
    @font-face {
    font-family: "Gilroy-Light";
    src: url("/assets/Gilroy-Light.otf");
    }
    * {
        background: #1B1A1F;
    }
    .deskripsi{
        color: white;
        font-family: "Gilroy-Light", sans-serif;
    }
    .full{
        text-align: center;
        justify-content: center;
        align-self: center;
    }
</style>