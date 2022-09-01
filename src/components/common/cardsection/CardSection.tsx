// Vendors
import React, { memo } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// Components
import Empty from '@/common/empty/Empty';

// Styles
import { Card, ShowMore } from './CardSection.style';

interface Props {
  children?: React.ReactNode;
  showMore?: boolean;
  showMoreTitle?: string;
  empty?: boolean;
}

const CardSection: React.FC<Props> = ({ children, showMore = true, showMoreTitle, empty = false }) => {
  return (
    <>
      <Card showMore={showMore}>{children}</Card>
      {showMore && (
        <ShowMore variant="contained" fullWidth>
          Show all {showMoreTitle} <ArrowRightAltIcon sx={{ marginLeft: '5px' }} />
        </ShowMore>
      )}
      {empty && <Empty />}
    </>
  );
};

export default memo(CardSection);
