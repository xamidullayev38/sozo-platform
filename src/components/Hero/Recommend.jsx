import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Wrapper = styled(Box)`
  margin-top: 10px;
`;

const Row = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
`;

const Card = styled(Box)`
  height: 220px;
  border-radius: 16px;
  background: #1a1a1a;
`;

export default function Recommended() {
  return (
    <Wrapper>
      <Typography variant="h6" mb={2}>
        Recommended For You
      </Typography>

      <Row>
        {[1,2,3,4,5].map(i => <Card key={i} />)}
      </Row>
    </Wrapper>
  );
}
