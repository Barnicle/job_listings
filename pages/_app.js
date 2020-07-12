import App from 'next/app';
import '../src/styles/index.scss';
import Page from '../src/components/Page';
import data from '../src/data.json';
class MyApp extends App {
  getStaticProps = async (ctx) => {
    return {
      props: { data },
    };
  };
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default MyApp;
