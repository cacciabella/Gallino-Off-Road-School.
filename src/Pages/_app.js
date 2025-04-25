// pages/_app.js
import '../components/Calendar.css';
import '../components/AboutUs.css';
import '../components/footer.css';
import '../components/header.css';
import '../components/index.css';  // E per gli altri CSS globali

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
