// Vendors
import React, { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/styles/mui/theme';
import createEmotionCache from '@/styles/mui/createEmotionCache';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';

// Store
import { persistor, store } from '@/store/store';

// Auth
import { AuthProvider } from '@/common/auth/AuthProvider';
import { AuthGuard } from '@/common/auth/AuthGuard';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  requireAuth?: boolean;
};

const App: React.FC = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            {/* if requireAuth property is present - protect the page */}
            {Component.requireAuth ? (
              <AuthGuard>
                <>{getLayout(<Component {...pageProps} />)}</>
              </AuthGuard>
            ) : (
              // public page
              <>{getLayout(<Component {...pageProps} />)}</>
            )}
          </AuthProvider>
        </PersistGate>
      </ThemeProvider>
    </CacheProvider>
  );
};

const makeStore = () => store;

export default withRedux(makeStore)(App);
