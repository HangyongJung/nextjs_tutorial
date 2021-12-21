import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Top from '../src/component/Top';
import Footer from '../src/component/Footer';

function MyApp({ Component, pageProps }) {
    return (
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Top />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
