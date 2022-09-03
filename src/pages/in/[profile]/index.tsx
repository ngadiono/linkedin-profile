// Vendors
import type { ReactElement } from 'react';
import Head from 'next/head';

// Layouts
import Container from '@/layouts/landing/container/Container';
import { NextPageWithLayout } from '../../_app';

// Components
import Profile from '@/page/profile/Profile';

const ProfilePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>John Doe | LinkedIn</title>
      </Head>
      <Profile />
    </>
  );
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

// Enable protected page
// ProfilePage.requireAuth = true;

export default ProfilePage;
