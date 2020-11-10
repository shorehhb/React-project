import React, { memo } from 'react'

import {hotRadios} from "@/common/local-data.js"
import HThemeHeaderSmall from "@/commponents/theme-header-small"
import {HotRadioWrapper} from "./style"

export default memo(function HHotAnchor() {
  return (
    <HotRadioWrapper>
      <HThemeHeaderSmall title="热门主播"/>
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/abc" className="image">
                  <img src={item.picUrl}/>
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotRadioWrapper>
  )
})
