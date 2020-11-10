import React, { memo, useEffect } from 'react'
// import {connect, useDispatch, useSelector, shallowEqual} from "react-redux"
// import {getTopBannerAction} from './store/actionCreators'

import HTopBanner  from "./c-cpns/top-banner"
import HHotRecommend from "./c-cpns/hot-recommend"
import HNewAlbum from "./c-cpns/new-album"
import HRcmRanking from "./c-cpns/rcm-ranking"

import HUserLogin from "./c-cpns/user-login"
import HSetttlArtist from "./c-cpns/setttle-artist"
import HHOTAnchor from "./c-cpns/hot-anchor"
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style"

function HRecommend(props) {
  
  return (
    <RecommendWrapper>
      <HTopBanner>
        <RecommendLeft>
        </RecommendLeft>
        <RecommendRight>
        </RecommendRight>
      </HTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HHotRecommend/>
          <HNewAlbum/>
          <HRcmRanking/>
        </RecommendLeft>
        <RecommendRight>
          <HUserLogin/>
          <HSetttlArtist/>
          <HHOTAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default memo(HRecommend)






// function HRecommend(props) {
//   const {getBanners, topBanners} = props
//   useEffect(() =>{
//     getBanners()
//   },[getBanners])
//   return (
//     <div>
//       <h2>HRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners:() => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HRecommend))
