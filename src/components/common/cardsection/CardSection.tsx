// Vendors
import React, { memo } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from 'next/link';

// Components
import Empty from '@/common/empty/Empty';

// Styles
import { Card, ShowMore } from './CardSection.style';

interface Props {
  children?: React.ReactNode;
  showMore?: boolean;
  showMoreTitle?: string;
  empty?: boolean;
  redirect?: string;
}

const CardSection: React.FC<Props> = ({
  children,
  showMore = false,
  showMoreTitle,
  empty = false,
  redirect,
}) => {
  return (
    <>
      <Card showMore={showMore}>
        {children}
        {empty && <Empty />}
      </Card>
      {showMore && (
        <>
          <Link href={`/in/johndoe/details/${redirect}`}>
            <ShowMore variant="contained" fullWidth>
              Show all {showMoreTitle} <ArrowRightAltIcon sx={{ marginLeft: '5px' }} />
            </ShowMore>
          </Link>
        </>
      )}
    </>
  );
};

export default memo(CardSection);
