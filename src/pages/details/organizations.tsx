// Vendors
import type { ReactElement } from 'react';
import Head from 'next/head';

// Layouts
import Container from '@/layouts/landing/container/Container';
import { NextPageWithLayout } from '../_app';

// Components
import OrganizationDetail from '@/page/profile/organization/OrganizationDetail';

const OrganizationsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Organizations | John Doe | LinkedIn</title>
      </Head>
      <OrganizationDetail />
    </>
  );
};

OrganizationsPage.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

OrganizationsPage.requireAuth = true;

export default OrganizationsPage;
