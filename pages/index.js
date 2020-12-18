import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <b>Billy</b>. I live in Salt Lake City, UT. I'm into hot
          walks, skiing, my German Shepherds, and Oasis.
        </p>
        <p></p>
      </section>
    </Layout>
  );
}
