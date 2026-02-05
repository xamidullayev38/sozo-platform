import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";

const Banner = styled(Box)`
  position: relative;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  background: url("https://images.unsplash.com/photo-1608889175111-e0d1f5c1f2a3")
    center/cover no-repeat;
  display: flex;
  align-items: flex-end;
`;

const Overlay = styled(Box)`
  width: 100%;
  padding: 40px;
  background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
`;

export default function HeroBanner() {
  return (
    <Banner>
      <Overlay>
        <Typography variant="h4" fontWeight={700} mb={1}>
          Game of Thrones
        </Typography>
        <Typography variant="body2" color="#bbb" maxWidth={500} mb={2}>
          It's the story of the intricate and bloody battles of several noble families...
        </Typography>

        <Box display="flex" gap={2}>
          <Button variant="contained" color="error">Watch</Button>
          <Button variant="outlined" color="error">Trailer</Button>
        </Box>
      </Overlay>
    </Banner>
  );
}
