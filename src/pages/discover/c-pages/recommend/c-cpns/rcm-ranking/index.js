import React, { memo, useEffect,} from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import  HThemeHeaderRCM from "@/commponents/theme-header-rcm"
import {getTopListAction} from "../../store/actionCreators"

import HTopRanking from "@/commponents/top-ranking"

import {RankingWrapper} from "./style"


export default memo(function HRcmRanking() {
  const {upRanking,newRanking,originRanking} = useSelector(state => ({
    upRanking: state.getIn(["recommend","upRanking"]),
    newRanking: state.getIn(["recommend","newRanking"]),
    originRanking:state.getIn(["recommend","originRanking"]),
  }),shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))

  },[dispatch])
  return (
    <RankingWrapper>
      <HThemeHeaderRCM title="榜单"/>
      <div className="tops">
        <HTopRanking info={upRanking}/>
        <HTopRanking info={newRanking}/>
        <HTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
