// Vendors
import type { ReactElement } from 'react';
import Head from 'next/head';

// Layouts
import Container from '@/layouts/landing/container/Container';
import { NextPageWithLayout } from '../../_app';

// Components
import LanguageDetail from '@/page/profile/language/LanguageDetail';

const LanguagesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Languages | John Doe | LinkedIn</title>
      </Head>
      <LanguageDetail />
    </>
  );
};

LanguagesPage.getLayout = function getLayout(page: ReactElement) {
  return <Container>{page}</Container>;
};

LanguagesPage.requireAuth = true;

export default LanguagesPage;
