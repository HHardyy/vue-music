<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper"  ref="sliderWrapper">
          <slider>
            <div class="FloatL" v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img @load="loadImg" :src="item.picUrl" class="needsclick">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li 
            class="item" 
            v-for="(item,index) in discList"
            @click="selectItem(item)"
            >
              <div class="icon">
                <img  width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from "../../../src/base/scroll/scroll";
import Slider from "../../../src/base/slider/slider";
import Loading from "../../../src/base/loading/loading";
import { getRecommend, getDiscList } from "../../api/recommend.js";
import { ERR_OK } from "../../api/config.js";
import {mapMutations} from 'vuex'
export default {
  components: {
    Slider,
    Scroll,
    Loading
  },
  data() {
    return {
      recommends: [],
      discList: []
    };
  },
  created() {
    this.getRecommend_();
    this.getDiscList_();
  },
  methods: {
    getRecommend_() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider;
        }
      });
    },
    getDiscList_() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list;
        }
      });
    },
    loadImg() {
      if (!this.checkLoading) {
        this.$refs.scroll.refresh();
        this.checkLoading = true;
      }
    },
    selectItem(item){
      this.$router.push({
        path:`/recommend/${item.dissid}`
      })
      this.setDisc(item)
    },
    ...mapMutations({
      setDisc:'SET_DISC'
    })
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .FloatL{
      float:left;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
          }

          .desc {
            color: $color-text-d;
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>