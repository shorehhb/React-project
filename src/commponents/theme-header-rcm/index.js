import React, { memo } from 'react'
import PropTypes from "prop-types"
import {
  HeaderWrapper
} from "./style"

const HThemeHeaderRCM = memo(function (props) {
  const { title,keywords = [] } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item,index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
//当在其他地方使用时，不传入参数，会报错，使用PropTypes进行验证之后，当不传参数时，使用其默认参数
HThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
HThemeHeaderRCM.defaultProps = {
  keywords:[]
}
export default HThemeHeaderRCM;
