<template>
    <transition name="slide">
        <music-list 
        :title="title" 
        :bg-image="bgImage"
        :songs="songs"
        :rank="rank"
        >
        </music-list>
    </transition>
</template>

<script>
import MusicList from '../../components/music-list/music-list'
import {mapGetters} from 'vuex'
import {getMusicList} from '../../api/rank.js'
import {ERR_OK} from '../../api/config.js'
import {createSong} from '../../common/js/song.js'
import { forEach } from 'async';
export default {
    data(){
        return {
            songs:[],
            rank:true
        }
    },
    computed:{
        title(){
            return this.toplist.topTitle
        },
        bgImage(){
            return this.toplist.picUrl
        },
        ...mapGetters([
            'toplist'
        ])
    },
    components:{
        MusicList
    },
    created(){
        this.getMusicList_()
    },
    methods:{
        getMusicList_(){
            if(!this.toplist.id){
                this.$router.push('/rank')
                return
            }
            getMusicList(this.toplist.id).then((res)=>{
                if(res.code===ERR_OK){
                    this.songs=this.normalLizeSongs(res.songlist)
                }
            })
        },
        normalLizeSongs(list){
            let ret=[]
            list.forEach((item)=>{
                const musicData=item.data
                if(musicData.songid&&musicData.albumid){
                    ret.push(createSong(musicData))
                }
            })
            return ret
        }
    }
}
</script>

<style lang="stylus" scoped>
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
