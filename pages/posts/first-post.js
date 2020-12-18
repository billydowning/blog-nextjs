import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

class FirstPost extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>This is the first post</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
          />
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a className="ui primary button">Back to home</a>
          </Link>
        </h2>
      </Layout>
    );
  }
}

export default FirstPost;
