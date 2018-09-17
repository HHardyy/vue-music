<template>
    <div class="search">
        <div class="search-box-wrapper">
            <search-box ref="searchbox" @query="onQueryChange"></search-box>
        </div>
        <div class="shortcut-wrapper">
            <div class="shortcut">
                <div class="hot-key">
                    <h1 class="title">热门搜索</h1>
                    <ul>
                        <li 
                        class="item" 
                        v-for="(item,index) in hotKey"
                        @click="addQuery(item.k)"
                        >
                            <span>{{item.k}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="search-result">
            <sugest :query="query"></sugest>
        </div>
    </div>
</template>

<script>
import SearchBox from '../../base/serchBox/serchBox'
import {getHotKey} from '../../api/search.js'
import {ERR_OK} from '../../api/config.js'
import Sugest from '../../components/sugest/sugest'

export default {
    data(){
        return {
            hotKey:[],
            query:''
        }
    },
    created(){
        this.getHotKey_()
    },
    components:{
        SearchBox,
        Sugest
    },
    methods:{
        getHotKey_(){
            getHotKey().then((res)=>{
                if(res.code===ERR_OK){
                    this.hotKey=res.data.hotkey.slice(0,10)
                }
            })
        },
        addQuery(query){
            this.$refs.searchbox.setQuery(query)
        },
        onQueryChange(query){
            this.query=query
        }
    }
}
</script>

<style lang='stylus' scoped>
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"

  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .search-result
      position: fixed
      width: 100%
      top: 178px
      bottom: 0
</style>