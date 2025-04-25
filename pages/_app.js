// pages/_app.js
import '../src/components/Calendar.css';
import '../src/components/AboutUs.css';
import '../src/components/footer.css';
import '../src/components/header.css';
import '../src/components/index.css';  // E per gli altri CSS globali

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
