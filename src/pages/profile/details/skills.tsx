// Vendors
import type { ReactElement } from 'react';
import Head from 'next/head';

// Layouts
import Container from '@/layouts/landing/container/Container';
import { NextPageWithLayout } from '../../_app';

// Components
import SkillDetail from '@/page/profile/skill/SkillDetail';

const SkillsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Skills | John Doe | LinkedIn</title>
      </Head>
      <SkillDetail />
    </>
  );
};

SkillsPage.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

SkillsPage.requireAuth = true;

export default SkillsPage;
