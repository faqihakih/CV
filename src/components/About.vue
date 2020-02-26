<template>
    <div id="about">
        <b-jumbotron class="jumbotron jumbotron-fluid">
            <b-container fluid="md">
                    <div class="About">
                        <h1>Tentang</h1>
                        <p>PLUGIN adalah perusahaan pengembangan perangkat <br>
                        lunak yang berlokasi di Tegal, Indonesia yang berfokus <br>
                        pada membantu startup untuk meningkatkan bisnis <br>
                        dengan menggunakan teknologi terbaru dan <br>
                        mengeksplorasi ide-ide baru. Layanan kami meliputi: <br>
                        membuat MVP(Produk yang layak minimum), <br>
                        membangun aplikasi seluler, memperluas tim yang ada <br>
                        dan meluncurkan fitur baru untuk startup.</p>
                    </div>
            </b-container>
        </b-jumbotron>
        <div class="wave">
            <b-img fluid src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2%0D%0AaXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhs%0D%0AaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xh%0D%0AdGUiIHZpZXdCb3g9IjU3Ny42MDEgMjEzMi4zNjcgNzAyLjM5OSAyNjcuNjMzIiB3aWR0aD0iNzAy%0D%0ALjM5OSIgaGVpZ2h0PSIyNjcuNjMzIj48ZyBpZD0iR2Vsb21iYW5nIDMiPjxnIG9wYWNpdHk9IjAu%0D%0AMiI+PGxpbmVhckdyYWRpZW50IGlkPSJfbGdyYWRpZW50XzE4IiB4MT0iMTA0LjA5NDk1MTcxNjA4%0D%0ANjA3JSIgeTE9Ii0xMTQuODczMjYwNzM3MzI5NDUlIiB4Mj0iMzcuNDI0MjM3ODMzNzk0NDM2JSIg%0D%0AeTI9IjExMi40OTE5NTc3MjU2NTExOSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3Atb3BhY2l0eT0i%0D%0AMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDI1NSwyNTUsMjU1KSIvPjxzdG9wIG9mZnNldD0iMTAw%0D%0AJSIgc3RvcC1vcGFjaXR5PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjMsMjMsMjkpIi8+PC9s%0D%0AaW5lYXJHcmFkaWVudD48cGF0aCBkPSIgTSA4NTYuNDIxIDI0MDAgQyA4ODQuMzc2IDIzODAuNzc0%0D%0AIDkxNy4wMzggMjM2Ni41NzcgOTU1Ljg5NiAyMzU5Ljc3NyBDIDExMTIuNzUyIDIzMzIuMzI4IDEx%0D%0AODUuNjYgMjMzOS4zNDcgMTI4MCAyMjc2LjQzNSBMIDEyODAgMjE1NC43NDIgQyAxMjU2Ljk2NyAy%0D%0AMTU4LjE2NiAxMjMzLjU4MyAyMTU3LjM2MiAxMjA5Ljg1MyAyMTUyLjM5MyBDIDEwMjcuNTAxIDIx%0D%0AMTQuMjA0IDk0My4yNDkgMjEzMS45MzcgODQ2Ljg3NSAyMTk0LjQ4MiBDIDc3NS40NDkgMjI0MC44%0D%0AMzYgNzA2LjgyIDIzMjUuMDQyIDY2OS40MDMgMjQwMCBMIDg1Ni40MjEgMjQwMCBaICIgZmlsbD0i%0D%0AdXJsKCNfbGdyYWRpZW50XzE4KSIvPjwvZz48ZyBvcGFjaXR5PSIwLjIiPjxsaW5lYXJHcmFkaWVu%0D%0AdCBpZD0iX2xncmFkaWVudF8xOSIgeDE9IjEwNC4wOTQ5NTE3MTYwODYwNyUiIHkxPSItMTE0Ljg3%0D%0AMzI2MDczNzMyOTQ1JSIgeDI9IjM3LjQyNDIzNzgzMzc5NDQzNiUiIHkyPSIxMTIuNDkxOTU3NzI1%0D%0ANjUxMTklIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLW9wYWNpdHk9IjEiIHN0eWxlPSJzdG9wLWNv%0D%0AbG9yOnJnYigyNTUsMjU1LDI1NSkiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3Atb3BhY2l0eT0i%0D%0AMSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDIzLDIzLDI5KSIvPjwvbGluZWFyR3JhZGllbnQ+PHBh%0D%0AdGggZD0iIE0gMTIzNC42MjkgMjQwMCBDIDEyNTAuMzI0IDIzOTEuNzU0IDEyNjUuNDkgMjM4My44%0D%0AMjIgMTI4MCAyMzc2LjAzOCBMIDEyODAgMjI3Mi4zMzkgQyAxMjMyLjM5NiAyMjg4LjY3NiAxMTg0%0D%0ALjU2IDIyODYuMzI0IDExMzYuNDk1IDIyNjUuMzAyIEMgOTUxLjEzNCAyMTg0LjIzNCA4NjIuOTU4%0D%0AIDIxODYuMDg1IDc1OS4wNjggMjIzNS4xNTYgQyA2OTAuODY2IDIyNjcuMzY5IDYyMi44MDEgMjMz%0D%0AMy4wNDQgNTc3LjYwMSAyNDAwIEwgMTIzNC42MjkgMjQwMCBaICIgZmlsbD0idXJsKCNfbGdyYWRp%0D%0AZW50XzE5KSIvPjwvZz48L2c+PC9zdmc+"></b-img>
        </div>
    </div>  
</template>

<script>
export default {
    name:'About',
    props: {
        msg: String
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
    .jumbotron{
        background-color: #1B1A1F;
        color: white;
        height: 645px;
        font-family: 'Gilroy-Light', sans-serif;
        /* padding-bottom: -50px; */
    }
    h1{
        margin-top: 50px !important;
        margin-left: -15px;
        color: white;
        font-family: 'Gilroy-Bold', sans-serif;
    }
    .About{
        font-family: 'Gilroy-Light', sans-serif;
        /* margin-left: 10px; */
        /* padding-left: 50px; */
    }
    .wave{
        margin-top : -275px;
        margin-left : 645px;
        /* padding-bottom: 50px; */
    }

    

    /* Mobile Css */
    @media (min-width: 186px) and (max-width: 979px) {
  * {
    text-align: center;
    margin-left: 0;
    }
    .About{
        margin-left: 0;
    }
    .wave{
        display: none;
    }

}


</style>