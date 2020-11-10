import React, { memo,useCallback,useEffect,useRef,useState} from 'react'
import {shallowEqual, useDispatch,useSelector} from "react-redux"

import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrenIndexAndSongAction,
  changeCurrentLyricIndexAction
} from "../store/actionCreators"
import { Slider, message } from 'antd'

import {getSizeImage, formatDate, getPlaySong} from "@/utils/format-utils"
import { PlaybarWrapper, Control, PlayInfo, Operator} from './style'
import { NavLink } from 'react-router-dom'

export default memo(function HAppPlayerBar () {

  const [currentTime,setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

 const {currentSong,sequence,lyricList} =  useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"]),
    sequence: state.getIn(["player","sequence"]),
    lyricList: state.getIn(["player","lyricList"]),
    currentLyricIndex: state.getIn(["player","currentLyricIndex"])
  }),shallowEqual)
  
  const dispatch = useDispatch()

  const audioRef = useRef()

  useEffect(() => {
    dispatch(getSongDetailAction(1380100797))
  },[dispatch])
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  },[currentSong])

  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手"
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration,"mm:ss")
  const showCurrentTime = formatDate(currentTime,"mm:ss")
  // const progress = currentTime / duration * 100
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if(currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }
  const changeMusic = (tag) => {
    dispatch(changeCurrenIndexAndSongAction(tag))
  }
  
  const handleMusicEnde = () => {
    if(sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play()
    }else {
      dispatch(changeCurrenIndexAndSongAction(1))
    }
  }

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  },[isPlaying])

  const timeUpdate = (e) => {
    // console.log(e.target.currentTime);
    const currentTime = e.target.currentTime
    if(!isChange) {
      setCurrentTime(currentTime * 1000)
      setProgress(currentTime * 1000 / duration * 100)
    }

    //获取当前的歌词
    let currentLyricIndex = 0
    for(let i = 0; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if(currentTime * 1000 < lyricItem.time)
      {
        currentLyricIndex = i;
        break;
      }
    }
    if(currentLyricIndex !== currentLyricIndex - 1) {
      dispatch(changeCurrentLyricIndexAction(currentLyricIndex - 1))
      const content = lyricList[currentLyricIndex - 1] && lyricList[currentLyricIndex - 1].content
      message.open({
        key:"lyric",
        content:content,
        duration:0,
        className:"lyric-class"
      })
    }
    // console.log(lyricList[currentLyricIndex - 1]);
  }

  const sliderChange = useCallback((value) => {
    setIsChange(true)
    const currentTime = value / 100 * duration / 1000
    setCurrentTime(currentTime * 1000)
    setProgress(value)
  },[duration])

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime * 1000)
    console.log(value);
    setIsChange(false)

    if(!isPlaying) {
      playMusic()
    }
  },[duration,isPlaying,playMusic])
  return (
    <PlaybarWrapper className='sprite_player'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_player prev'
                  onClick={e => changeMusic(-1)}></button>
          <button className='sprite_player play' 
                  onClick={e => playMusic()}></button>
          <button className='sprite_player next'
                  onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl,35)}/>
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong.name}</span>
              <a href='#/' className='singer-name'>{singerName}</a>
            </div>
            <div className='progress'>
              <Slider defaultValue={30}
                      value={progress}
                      onChange={sliderChange}
                      onAfterChange={sliderAfterChange} />
              <div className='time'>
                <span className='now-time'>{showCurrentTime}</span>
                <span className='divider'>/</span>
                <span className='duration'>{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className='left'>
            <button className='sprite_player btn favor'></button>
            <button className='sprite_player btn share'></button>
          </div>
          <div className='right sprite_player'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop' onClick={e => changeSequence()}></button>
            <button className='sprite_player btn playlist'></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleMusicEnde}/>
    </PlaybarWrapper>
  )
})
