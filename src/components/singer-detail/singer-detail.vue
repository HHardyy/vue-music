<template>
<transition name="silde">
  <music-list :songs="songs" :title="title" :bgImage="bgImage"></music-list>
</transition>

</template>

<script>
import { mapGetters } from 'vuex'
import { getSingerDetail } from '../../api/singer.js'
import { ERR_OK } from '../../api/config.js'
import {createSong} from '../../common/js/song.js'
import MusicList from '../../components/music-list/music-list'

export default {
  data() {
    return {
      songs: []
    };
  },
  components:{
    MusicList
  },
  computed: {
    title(){
      return this.singer.name
    },
    bgImage(){
      return this.singer.avatar
    },
    ...mapGetters(["singer"])
  },
  created() {
    this.getSingerDetailFunc();
  },
  methods: {
    getSingerDetailFunc() {
      if (!this.singer.id) {
        this.$router.push("/singer");
        return;
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songs=this.nomallizeSongs(res.data.list)
        }
      });
    },
    nomallizeSongs(list) {
      let ret = [];
      list.forEach((item) => {
        let { musicData } = item;
        if(musicData.songid&&musicData.albummid){
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/variable';

.silde-enter-active, .silde-leaveactive {
  transition: all 0.3s;
}

.silde-enter, .silde-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
