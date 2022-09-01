// Vendors
import type { ReactElement } from 'react';
import Head from 'next/head';

// Layouts
import Container from '@/layouts/landing/container/Container';
import { NextPageWithLayout } from '../_app';

// Components
import ExperienceDetail from '@/page/profile/experience/ExperienceDetail';

const ExperiencesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Experiences | John Doe | LinkedIn</title>
      </Head>
      <ExperienceDetail />
    </>
  );
};

ExperiencesPage.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

ExperiencesPage.requireAuth = true;

export default ExperiencesPage;
