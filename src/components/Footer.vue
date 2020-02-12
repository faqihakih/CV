<template>
    <div class="footer">
    <h5>&copy; Pelita Utama Gaharu <span>2020</span></h5>
    </div>
</template>

<script>
export default {
    name:'Footer',
    props:{
        msg:String
    }
}
</script>

<style>
@font-face {
  font-family: "Gilroy-Light";
  src: url("/assets/Gilroy-Light.otf");
}
@font-face {
  font-family: "Gilroy-Bold";
  src: url("/assets/Gilroy-ExtraBold.otf");
}
.footer{
    background-color: #1B1A1F;
    height: 58px;
    margin-top: -35px;
    text-align: center;
    padding-top: 18px;
}
h5{
margin-bottom: -8px;
/* background-color: #1B1A1F; */
color: white;
font-weight: bold;
font-family: "Gilroy-Bold", sans-serif;
}
span{
    font-weight: lighter;
    font-family: "Gilroy-Light", sans-serif;
}
</style>
