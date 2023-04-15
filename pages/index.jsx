import CardSection from "@/components/CardSection";
import GallerySection from "@/components/GallerySection";
import HeaderComponent from "@/components/HeaderComponent";
import Layout from "@/components/Layout";
import TimeLineSection from "@/components/TimeLineSection";
import confetti from "canvas-confetti";
import Head from "next/head";
import React, { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    confetti();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Happy Birthday Camila</title>
      </Head>
      <div id="header"></div>
      <HeaderComponent />
      <div id="timeline"></div>
      <br /> <br /> <br />
      <TimeLineSection />
      <div id="gallery"></div>
      <br /> <br /> <br />
      <GallerySection />
      <div id="cardmessage"></div>
      <CardSection />
    </Layout>
  );
};

export default Index;
