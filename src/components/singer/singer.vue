<template>
    <div id="singer" class="singer">
        <list-view :data="singers" @select="selectedSinger"></list-view>
        <router-view></router-view>
    </div>
</template>

<script>
import ListView from "../../base/listview/listview";
import { getSingerList } from "../../api/singer.js";
import { ERR_OK } from "../../api/config.js";
import { from } from "zen-observable";
import Singer from "../../common/js/singer.js";

import {mapMutations} from 'vuex'

const HOT_NAME = "热门";
const HOT_SINGER_LENGTH = 10;
export default {
  name: "singer",
  data() {
    return {
      singers: []
    };
  },
  created() {
    this.getSingerList_();
  },
  methods: {
    selectedSinger(singer){
      this.$router.push({
        path:`/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    getSingerList_() {
      getSingerList().then(res => {
        if (res.code == ERR_OK) {
          this.singers = this.normalizeSinger(res.data.list);
        }
      });
    },
    normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGTH) {
          map.hot.items.push(
            new Singer({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            })
          );
        }
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push(
          new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          })
        );
      });
      // console.log(map)
      // 处理map得到有序列表
      let hot = [];
      let ret = [];
      for (let key in map) {
        let val = map[key];
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val);
        } else if (val.title === HOT_NAME) {
          hot.push(val);
        }
      }
      //a-z数组排序
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return hot.concat(ret);
    },
    ...mapMutations({
        setSinger: 'SET_SINGER'
    })
  },
  components: {
    ListView
  }
};
</script>

<style lang='stylus' scoped>
.singer {
  position: fixed;
  top: 88px;
  bottom: 0px;
  width: 100%;
}
</style>