// Vendors
import type { ReactElement } from 'react';

// Layouts
import Container from '@/layouts/landing/container/Container';
import { NextPageWithLayout } from '../../../pages/_app';

const Profile: NextPageWithLayout = () => {
  return <p>haha</p>;
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

export default Profile;
