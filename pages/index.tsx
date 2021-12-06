import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = ({locale}) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js </h1>
    <h3>{locale}</h3>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps = async ({ locale }) => ({
  props:{locale}
  // props: {
  //   ...(await serverSideTranslations(locale, [
  //     'common',
  //     'screens/main',
  //     'components/lang',
  //   ])),
  //   // Will be passed to the page component as props
  // },
  // if using the approach with the live translation download, meaning using i18next-locize-backend on server side,
  // there is a reloadInterval for i18next-locize-backend that can be used to reload resources in a specific interval: https://github.com/locize/i18next-locize-backend#backend-options
  // doing so it is suggested to also use the revalidate option, here:
  // Next.js will attempt to re-generate the page:
  // - When a request comes in
  // - At most once every hour
  // revalidate: 60 * 60, // in seconds
});

export default IndexPage
