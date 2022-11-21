import Head from "next/head";
import Container from "../components/Container";
import FeaturedProjects from "../components/FeaturedProjects";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <Container>
      <Head>
        <link rel="preload" as="image" href="/images/profile.png" />
      </Head>
      <Hero />
      <FeaturedProjects></FeaturedProjects>
    </Container>
  );
}
