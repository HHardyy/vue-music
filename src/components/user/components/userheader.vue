<template>
    <div id="selfheader">
        <div class="logoImgBox">
            <img :src="logoImgUrl" class="logoimg" alt="">
            <span class="username">hhardyy</span>
            <em>Lv.100</em>
        </div>
    </div>
</template>
<script>
export default {
  name: "selfheader",
  data() {
    return {
      logoImgUrl: "https://hhardyy.com/img/touxiang.jpg"
    };
  }
};
</script>
<style lang='stylus' scoped>

.logoImgBox {
    width: 100%;
    height: 150px;
    padding: 30px 0px;
    margin-top: 110px;
    background: #e7e7e7;
    text-align:center;
    z-index:999;

    .logoimg {
        width: 103px;
        height: 103px;
        display: block;
        border-radius: 50%;
        margin: 0 auto;
        border:2px solid #dc342a;
    }
    .username{
        display:block;
        width:100%;
        height:30px;
        line-height:30px;
        text-align:center;
        font-size:22px;
        margin-top:6px;
        color:#ffcd32;
    }
    em{
        color:#dc342a;
    }
}
</style>

