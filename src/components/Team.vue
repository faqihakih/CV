<template>
    <div class="Team">
        <div class="container">
            <div class="card">
                <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left>
                    <b-card-text class="text">
                        <h3>Dhiya</h3>
                        <h5>Reksa</h5>
                        <p>CEO</p>
                    </b-card-text>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Team',
  props: {
    msg: String
  }
}
</script>

<style scoped>
@font-face {
font-family: "Gilroy-Light";
src: url('../assets/Gilroy-Light.otf');
}
@font-face {
font-family: "Gilroy-Bold";
src: url('../assets/Gilroy-ExtraBold.otf');
}

.Team{
    margin-top: -33px;
    background-color: #232428;
    height: 500px;
}
.card{
    background-color: #232428;
    border: none;
}
h3{
    margin-left: -15px;
    color: white;
    font-family: 'Gilroy-Bold', sans-serif;
    margin-top: 8px !important;
}
h5{
    margin-left: -15px;
    color: white;
    font-family: 'Gilroy-Bold', sans-serif;
    margin-top: 8px !important;
}

p{
    margin-left: -15px;
    font-size: 16px;
    color: white;
    font-family: 'Gilroy-Light', sans-serif;
}
.text{
    margin-top: 50px;
}
img{
    border-radius: 10px !important;
    opacity: 0.3;
    filter: alpha(opacity=30); /* For IE8 and earlier */
}
</style>