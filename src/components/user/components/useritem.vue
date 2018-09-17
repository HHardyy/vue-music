<template>
    <div class="myItem">
        <div class="Mybox">
            <div class="myBoxItem">
                <span class="iconfont">&#xe64c;</span>
                <strong>收藏</strong>
            </div>
             <div class="myBoxItem">
                 <span class="iconfont">&#xe638;</span>
                 <strong>历史</strong>
            </div>
            <div class="myBoxItem">
                 <span class="iconfont">&#xe608;</span>
                <strong>积分</strong>
            </div>
             <div class="myBoxItem">
                 <span class="iconfont">&#xe635;</span>
                 <strong>活动中心</strong>
             </div>
        </div>

        <div class="Mybox">
            <div class="myBoxItem">
                <span class="iconfont">&#xe647;</span>
                <strong>对唱</strong>
            </div>
             <div class="myBoxItem">
                  <span class="iconfont">&#xe6bd;</span>
                 <strong>免流量特权</strong>
            </div>
            <div class="myBoxItem">
                 <span class="iconfont">&#xe646;</span>
                <strong>下载/离线</strong>
            </div>
             <div class="myBoxItem">
                  <span class="iconfont">&#xe680;</span>
                 <strong>扫一扫</strong>
            </div>
        </div>
        <div class="Mybox">
            <div class="myBoxItem">
                 <span class="iconfont">&#xe662;</span>
                <strong>查违章</strong>
            </div>
            <div class="myBoxItem">
                <span class="iconfont">&#xe60f;</span>
                <strong>疫苗查询</strong>
            </div>
            <div class="myBoxItem">
                 <span class="iconfont">&#xe648;</span>
                <strong>皮肤中心</strong>
            </div>
             <div class="myBoxItem">
                 <span class="iconfont">&#xe615;</span>
                 <strong>清理缓存</strong>
            </div>
        </div>
        <div class="line"></div>
        <div class="Mybox about">
            <div class="myBoxItem own">关于我</div>
        </div>
        <div class="line"></div>
    </div>
</template>
<script>
export default {
};
</script>
<style lang='stylus' scoped>


.Mybox {
    width: 100%;
    height: 80px;
    background: #ffffff;
    display: flex;

    .myBoxItem {
        flex: 1;
        height: 80px;
        text-align: center;
        padding-top:3px;

        span {
            width: 100%;
            display: inline-block;
            font-size: 26px;
            padding: 2px auto;
            margin-top: 10px;
            color: #dc342a;
        }

        strong {
            font-weight: 200;
            font-size: 12px;
            font-family: '微软雅黑';
            color:#dc342a;
        }
    }
}

.line {
    width: 100%;
    height: 9px;
    background: #e7e7e7;
}

.about {
    height: 50px;
    line-height: 50px;
    .own{
            color:#585858;
     }
     position:fixed;
     bottom:0px;
     left:0px;
}
</style>