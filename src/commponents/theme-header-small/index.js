import React, { memo } from 'react'
//类型判定验证
import PropTypes from "prop-types"

import {HeaderWrapper} from "./style"

const HThemeHeaderSmall = memo(function (props) {
  //其组件的参数数不是确定的，可以在使用组件的时候，通过props传入
  const {title, more} = props
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  )
})

//当不传入参数时，可能会报错，为了防止这种情况，可以传入默认值
HThemeHeaderSmall.defaultProps = {

}
HThemeHeaderSmall.prototype = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default HThemeHeaderSmall;
