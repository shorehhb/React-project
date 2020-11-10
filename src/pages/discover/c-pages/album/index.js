import React, { memo } from 'react'
import HHotAlbum from './c-cpns/hot-album';
import HTopAlbum from './c-cpns/top-album';

import {
  AblumWrapper
} from './style';
export default memo(function HAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <HHotAlbum/>
      <HTopAlbum/>
    </AblumWrapper>
  )
})
