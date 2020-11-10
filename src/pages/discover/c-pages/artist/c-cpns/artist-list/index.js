import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import HThemeHeaderNormal from '@/commponents/theme-header-normal';
import HAlphaList from './c-cpns/alpha-list';
import HArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function HYArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <HThemeHeaderNormal title={currentType.name} />
      <HAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <HArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
