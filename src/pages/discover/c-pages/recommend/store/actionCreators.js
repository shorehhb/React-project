import * as actionTypes from "./constants"

//导入对应的网络请求
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getArtistList
} from "@/services/recommend"


const changeTopBannerAction = (res) => ({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:res.banners
})

const changeHotRecommendAction = (res) => ({
  type:actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends:res.result
})

const changeNewAlbumAction = (res) => ({
  type:actionTypes.CHANGE_NEW_ALBUM,
  newAlbums:res.albums
})

const changeUpRankingAction = (res) => ({
  type:actionTypes.CHANGE_UP_RANKING,
  upRanking:res.playlist
})

const changeNewRankingAction = (res) => ({
  type:actionTypes.CHANGE_NEW_RANKING,
  newRanking:res.playlist
})

const changeOriginRankingAction = (res) => ({
  type:actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking:res.playlist
})

const changeSettleSingsAction = (res) => ({
  type:actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists
})

export const getTopBannerAction = () => {
  return dispatch => {
    // 发送网络请求
    getTopBanners().then(res => {
      console.log(res);
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
      console.log(res);
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch(idx) {
        case 0:
          dispatch(changeUpRankingAction(res));
          break;
        case 2:
          dispatch(changeNewRankingAction(res));
          break;
        case 3:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    })
  }
}

export const getSettleSingers = () => {
  return dispatch => {
    getArtistList(5,5001).then(res => {
      dispatch(changeSettleSingsAction(res))
    })
  }
}