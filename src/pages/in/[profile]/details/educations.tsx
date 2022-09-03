// Vendors
import type { ReactElement } from 'react';
import Head from 'next/head';

// Layouts
import Container from '@/layouts/landing/container/Container';
import { NextPageWithLayout } from '../../../_app';

// Components
import EducationDetail from '@/page/profile/education/EducationDetail';

const EducationsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Educations | John Doe | LinkedIn</title>
      </Head>
      <EducationDetail />
    </>
  );
};

EducationsPage.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

// Enable protected page
// EducationsPage.requireAuth = true;

export default EducationsPage;
