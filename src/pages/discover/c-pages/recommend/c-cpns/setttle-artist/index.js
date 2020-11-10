import React, {useEffect,memo } from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux"

import { getSettleSingers} from "../../store/actionCreators"
import {getSizeImage} from "@/utils/format-utils"
import HThemeHeaderSmall from "@/commponents/theme-header-small"
import {SetterSongerWrapper} from "./style"

export default memo(function HSetttleArtist() {
  const dispatch = useDispatch()
  const state = useSelector((state) => ({
    settleSings: state.getIn(["recommend","settleSings"])
  }),shallowEqual)
  //使用hooks派发
  useEffect(() => {
    dispatch(getSettleSingers())
  }, [dispatch])
  
  return (
    <SetterSongerWrapper>
      <HThemeHeaderSmall title="入驻歌手" more="查看全部"/>
        <div className="singer-list">
          {
            state.settleSings.map((item,index) => {
              return (
                <a href="/singer" key={item.id} className="item">
                  <img src={getSizeImage(item.img1v1Url,62)}/>
                  <div className="info">
                    <div className="title">{item.alias.join("") || item.name}</div>
                    <div className="name">{item.name}</div>
                  </div>
                </a>
              )
            })
          }
        </div>
        <div className="apply-for">
          <a href="/abc">申请成为网易音乐人</a>
        </div>
    </SetterSongerWrapper>
  )
})
