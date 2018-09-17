<template>
  <div class="progress-bar" ref="progressBar" @click="clickBarFunc">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div 
      class="progress-btn-wrapper" 
      ref="progressBtn"
      @touchstart.prevent="touchstartFunc"
      @touchmove.prevent="touchmoveFunc"
      @touchend.prevent="touchendFunc"
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {prefixStyle} from '../../common/js/dom.js'
const proBtnwidth = 16;
const transform = prefixStyle('transform')
export default {
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  created(){
      this.touch={}
  },
  methods:{
      clickBarFunc(e){
          const react=this.$refs.progressBar.getBoundingClientRect()
          const offseWidth=e.pageX-react.left
          this.offset(offseWidth)
        //   this.offset(e.offsetX)，点bar的时候，e.offsetX获取不对
          this.trigPrec()
      },
      touchstartFunc(e){
          this.touch.inited=true
          this.touch.startX=e.touches[0].pageX
          this.touch.left=this.$refs.progress.clientWidth
      },
      touchmoveFunc(e){
          if(!this.touch.inited){
              return 
          }
          const delX=e.touches[0].pageX-this.touch.startX
          const ofWidth=Math.min(this.$refs.progressBar.clientWidth - proBtnwidth,Math.max(0,this.touch.left+delX))
          this.offset(ofWidth)
      },
      touchendFunc(){
          this.touch.inited=false
          this.trigPrec()
      },
      offset(offwidth){
        this.$refs.progress.style.width = `${offwidth}px`;
        this.$refs.progressBtn.style[transform]=`translate3d(${offwidth}px,0,0)`
      },
      trigPrec(){
          const barWidth=this.$refs.progressBar.clientWidth-proBtnwidth
          const per=this.$refs.progress.clientWidth/barWidth
          this.$emit('perChange',per)
      }
  },
  watch: {
    percent(newPercent) {
      if (newPercent >= 0&&!this.inited) {
        const barWidth = this.$refs.progressBar.clientWidth - proBtnwidth;
        const offwidth = newPercent * barWidth;
        this.offset(offwidth)
      }
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/variable';

.progress-bar {
    height: 30px;

    .bar-inner {
        position: relative;
        top: 13px;
        height: 4px;
        background: rgba(0, 0, 0, 0.3);

        .progress {
            position: absolute;
            height: 100%;
            background: $color-theme;
        }

        .progress-btn-wrapper {
            position: absolute;
            left: -8px;
            top: -13px;
            width: 30px;
            height: 30px;

            .progress-btn {
                position: relative;
                top: 7px;
                left: 7px;
                box-sizing: border-box;
                width: 16px;
                height: 16px;
                border: 3px solid $color-text;
                border-radius: 50%;
                background: $color-theme;
            }
        }
    }
}
</style>
