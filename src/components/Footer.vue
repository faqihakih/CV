<template>
    <div class="footer">
    <h4>Pelita Utama Gaharu 2020</h4>
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

<style >
.footer{
    margin-top: 20px;
    background-color:black;
    height: 50px;
}

h4{
    margin-top: 20px;
    color: white;
    text-align: center;
    margin-top: 20px;
}
</style>