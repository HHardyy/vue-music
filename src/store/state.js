import {playMode} from '../common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [], // 播放列表
  sequenceList: [], // 按钮播放列表
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {

  },
  toplist: {}
}
export default state
