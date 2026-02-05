import React from "react";
import { Box, styled } from "@mui/material";
import HeroBanner from "./HeroBanner";
import HotNews from "./HotNews";
import Recommended from "./Recommended";

const Layout = styled(Box)`
  display: grid;
  grid-template-columns: 2.2fr 1fr; 
  grid-template-rows: 420px auto; 
  gap: 24px;
  padding: 24px;
  background: #0b0b0b;
  min-height: 100vh;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const HeroArea = styled(Box)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const NewsArea = styled(Box)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  @media (max-width: 1100px) {
    grid-column: 1 / -1;
  }
`;

const RecommendedArea = styled(Box)`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
`;

export default function Hero() {
  return (
    <Layout>
      <HeroArea>
        <HeroBanner />
      </HeroArea>

      <NewsArea>
        <HotNews />
      </NewsArea>

      <RecommendedArea>
        <Recommended />
      </RecommendedArea>
    </Layout>
  );
}
