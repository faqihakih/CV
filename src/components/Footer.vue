<template>
    <div class="footer">
    <footer><strong>&copy; Pelita Utama Gaharu </strong>2020</footer>
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
footer{
margin-bottom: -8px;
/* background-color: #1B1A1F; */
color: white;
/* font-weight: bold; */
font-family: "Gilroy-Light", sans-serif;
}
strong{
/* font-weight: bold; */
font-family: "Gilroy-Bold", sans-serif;
}
</style>
