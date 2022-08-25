// Vendors
import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Signin from '@/page/signin/Signin';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>LinkedIn Login, Sign in | LinkedIn</title>
      </Head>
      <Signin />
      <h1>hahah</h1>
    </>
  );
};

export default IndexPage;
