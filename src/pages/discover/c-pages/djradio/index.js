import React, { memo } from 'react'

//导入相关的组件
import HRadioCategory from "./c-cpns/radio-category"
import HRadioRecommend from "./c-cpns/radio-recommend"
import HRadioRanking from "./c-cpns/radio-ranking"

import {DjRadioWrapper} from "./style"
export default memo(function HDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <HRadioCategory/>
      <HRadioRecommend/>
      <HRadioRanking/>
    </DjRadioWrapper>
  )
})
