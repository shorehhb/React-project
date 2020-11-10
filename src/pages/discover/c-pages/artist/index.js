import React, { memo } from 'react';

import HArtistCategory from './c-cpns/artist-category';
import HArtistList from './c-cpns/artist-list';
import { HArtistWrapper } from './style';

export default memo(function HYArtist() {
  return (
    <HArtistWrapper>
      <div className="content wrap-v2">
        <HArtistCategory/>
        <HArtistList/>
      </div>
    </HArtistWrapper>
  )
})
