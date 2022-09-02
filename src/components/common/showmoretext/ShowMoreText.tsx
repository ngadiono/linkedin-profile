// Vendors
import React, { memo } from 'react';
import ShowMore from 'react-show-more';

interface Props {
  children: React.ReactNode;
}

const ShowMoreText: React.FC<Props> = ({ children }) => {
  return (
    <ShowMore lines={3} more="See more" less="See less" anchorClass="">
      {children}
    </ShowMore>
  );
};

export default memo(ShowMoreText);
