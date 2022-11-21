import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Container = ({ children, ...customMeta }) => {
  const router = useRouter();
  const meta = {
    title: "Ali H. Zahedah Portfolio",
    description: `Ali Zahedah personal website. I'm developer, designer, and human.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://ahz-two.vercel.app${router.asPath}`}
        />
        <link rel="canonical" href={`https://ahz-two.vercel.app${router.asPath}`} />
        
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ali Zahedah" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="project:published_time" content={meta.date} />
        )}
      </Head>

      <main className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <Navigation />
          {children}
          <Footer />
        </div>
      </main>
      
    </>
  );
};

export default Container;
