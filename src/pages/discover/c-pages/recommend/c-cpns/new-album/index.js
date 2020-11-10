import React, { memo, useEffect, useRef} from 'react'
import {Carousel} from "antd"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import HAlbumCover from '@/commponents/album-cover'
import  HThemeHeaderRCM from "@/commponents/theme-header-rcm"
import { getNewAlbumAction } from "../../store/actionCreators"
import {AlbumWrapper} from "./style"
export default memo(function HNewAlbum() {

  const {newAlbums} = useSelector(state => ({
    newAlbums: state.getIn(["recommend","newAlbums"])
  }),shallowEqual)
  const dispatch = useDispatch()
  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  },[dispatch])
  return (
    <AlbumWrapper>
      <HThemeHeaderRCM title="新碟上架"/>
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0,1].map((item) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item*5,(item+1)*5).map(iten => {
                        return <HAlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px"/>
                      }) 
                    }
                  </div>
              )})
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
