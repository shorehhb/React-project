import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  getRadioRecommend
} from "../../store/actionCreators"

import HThemeHeaderNormal from '@/commponents/theme-header-normal';
import HRadioRecomendCover from '@/commponents/radio-recommend-cover';
import {RecommendWrapper} from "./style"

export default memo(function HRadioRecommend() {

  const {currentId, recommends} = useSelector(state => ({
    currentId: state.getIn(["djradio","currentId"]),
    recommends:state.getIn(["djradio","recommends"])
  }),shallowEqual);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRadioRecommend(currentId))
  }, [dispatch, currentId])
  return (
    <RecommendWrapper>
      <HThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          recommends.slice(0, 5).map((item) => {
            return (<HRadioRecomendCover info={item} key={item.id}/>)
          })
        }
      </div>
    </RecommendWrapper>
  )
})
