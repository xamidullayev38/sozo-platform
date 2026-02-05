import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Card = styled(Box)`
  height: 100%;
  border-radius: 24px;
  padding: 20px;
  background: #111;
  border: 1px solid rgba(229, 9, 20, 0.4);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default function HotNews() {
  return (
    <Card>
      <img
        src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
        alt=""
        style={{ width: "100%", borderRadius: "16px" }}
      />
      <Typography color="error" fontWeight={600}>
        🔥 Hot News
      </Typography>
      <Typography variant="body2" color="#bbb">
        "Slow Horses," the popular spy drama, has been renewed for a fifth season...
      </Typography>
    </Card>
  );
}
