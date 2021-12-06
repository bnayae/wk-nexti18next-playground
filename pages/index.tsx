import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = ({ locale }) => {
  const { t } = useTranslation();
  const welcome = t('home:welcome');

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
      ...(await serverSideTranslations(locale, ['home', 'common', 'footer'])),
    },
  };
};

export default IndexPage;
