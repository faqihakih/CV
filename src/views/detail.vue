<template>
    <div class="detail">
        <div id="detail">
        <b-card-group class="deck row">
            <div class="col-md-6">
                <b-img class="full" @click="fullWidthImage = !fullWidthImage" src="/assets/logo.png" fluid alt="Klien">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detail'
    }
</script>

<style scoped>
    * {
        background: #1B1A1F;
    }
</style>