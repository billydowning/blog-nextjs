import Link from "next/link";

class FirstPost extends React.Component {
  render() {
    return (
      <div>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    );
  }
}

export default FirstPost;
