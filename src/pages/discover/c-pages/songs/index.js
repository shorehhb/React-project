import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useLocation} from "react-router-dom"
import {
  getCategory,
  getSongList,
  changeCurrentCategoryAction
} from "./store/actionCreators"

import HSongsHeader from "./c-cpns/songs-header"
import HSongsList from "./c-cpns/songs-list"

import {SongsWrapper} from "./style"
export default memo(function HSongs() {
  const dispatch = useDispatch()
  const cat = useLocation().cat;

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat))
  },[dispatch,cat])

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSongList(0));
  },[dispatch])
  return (
    <SongsWrapper className="wrap-v2">
      <HSongsHeader/>
      <HSongsList/>
    </SongsWrapper>
  )
})
