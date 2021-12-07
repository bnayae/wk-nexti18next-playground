import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { localeCommonNamespaces } from '../@localization';
import Layout from '../components/Layout';

const useTest = (): string | undefined => {
  const { query } = useRouter();

  const test = useMemo(() => {
    if (!process.browser) return undefined;
    const t = query['test'];
    if (t == null) return sessionStorage?.getItem('test');

    const result = Array.isArray(t) ? t[0] : t;
    sessionStorage?.setItem('test', result);
    return result;
  }, [query, process.browser]);

  return test;
};

const IndexPage = ({ locale }) => {
  const test = useTest();
  const { t } = useTranslation();
  const welcome = useMemo(
    () => t('screens-home:welcome', { context: test }),
    [test]
  );

  return (
    <Layout title={`Home | ${welcome}`}>
      <h1>{welcome} </h1>
      <h3>{locale}</h3>
      <p>
        <Link href="/about">
          <a>{t('common:about')}</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, [
        'screens-home',
        ...localeCommonNamespaces,
      ])),
    },
  };
};

export default IndexPage;
