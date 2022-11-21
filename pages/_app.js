import "../styles/globals.css";
import { useRouter } from "next/router";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion, AnimatePresence } from "framer-motion";
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
<>
{/* Global Site Tag (gtag.js) - Google Analytics */}
<Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=4298166767`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WE9VQ42BG0', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: { opacity: 0 },
          animateState: { opacity: 1 },
          initialState: { opacity: 0 },
        }}
      >
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </motion.div>
    </AnimatePresence>
</>
  );
}

export default MyApp;
