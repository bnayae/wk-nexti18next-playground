import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { localeCommonNamespaces } from '../@localization';
import Layout from '../components/Layout';

interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const AboutPage = ({ data }) => {
  const { t, ready } = useTranslation();

  const title = t('screens-about:title');
  const desc = t('screens-about:desc');
  const homeCommand = t('common:home');

  if (!ready) return <></>;

  return (
    <Layout title={`About | ${title}`}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{data.title}</p>
      <p>
        <Link href="/">
          <a>{homeCommand}</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data: ITask = await res.json();

  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, [
        'screens-about',
        ...localeCommonNamespaces,
      ])),
      data,
    },
  };
};

export default AboutPage;
