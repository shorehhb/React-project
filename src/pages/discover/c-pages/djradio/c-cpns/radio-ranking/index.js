import React, { memo,useEffect,useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  getRadios
} from "../../store/actionCreators"

import HThemeHeaderNormal from '@/commponents/theme-header-normal';
import HRadioRankingCover from '@/commponents/radio-ranking-cover';
import HPagination from '@/commponents/pagination';

import {
  RankingWraper
} from "./style";

export default memo(function HRadioRanking() {
  const [currentPage, setCurrentPage] = useState(1)

  const {currentId, radios} = useSelector(state => ({
    currentId: state.getIn(["djradio","currentId"]),
    radios: state.getIn(["djradio","radios"])
  }),shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadios(currentId, 0))
  },[dispatch, currentId])

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getRadios(currentId, page * 30));
  }
  
  return (
    <RankingWraper>
      <HThemeHeaderNormal title="电台排行榜"/>
      <div className="ranking-list">
        {
          radios.map((item, index) => {
            return (<HRadioRankingCover key={item.id} radio={item}/>)
          })
        }
      </div>
      <HPagination currentPage={currentPage} 
                    total={1000} 
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </RankingWraper>
  )
})
