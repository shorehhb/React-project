import React, {useEffect, memo } from 'react'
import { useDispatch } from 'react-redux'

import {getTops} from "./store/actionCreators"

import HTopRanking from "./c-cpns/top-ranking"
import HRankingHeader from "./c-cpns/ranking-header"
import HRankingList from "./c-cpns/ranking-list"
import {
  RankingWrapper,
  RankingLeft,
  RankingRight
} from "./style"

export default memo(function HRanking() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTops())
  },[dispatch])
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <HTopRanking/>
      </RankingLeft>
      <RankingRight>
        <HRankingHeader/>
        <HRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
