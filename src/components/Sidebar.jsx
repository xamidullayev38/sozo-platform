import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  Home,
  Movie,
  Article,
  People,
  Phone,
  HelpOutline,
  Settings,
  Check
} from "@mui/icons-material";

const Wrapper = styled(Box)(({ collapsed }) => ({
  width: collapsed ? "80px" : "240px",
  height: "100vh",
  background: "#0f0f0f",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "24px 0",
  transition: "width 0.3s ease"
}));

const MenuWrapper = styled(Box)`
  width: 100%;
  padding: 0 16px;
`;

const MenuSubtitle = styled(Typography)`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
`;

const MenuButton = styled(Button)`
  justify-content: flex-start;
  gap: 14px;
  padding: 10px 16px;
  border-radius: 14px;
  text-transform: none;
  color: #cfcfcf;
  width: 100%;
  margin-bottom: 6px;
  transition: all 0.25s ease;

  &:hover {
    background: #1a1a1a;
    color: #fff;
  }

  &.active {
    background: linear-gradient(90deg, rgba(245, 197, 24, 0.15), transparent);
    color: #f5c518;
    box-shadow: 0 0 12px rgba(245, 197, 24, 0.25);
  }
`;

const IconBox = styled(Box)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  border-radius: 10px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;

  svg {
    font-size: 20px;
  }

  .active & {
    background: #f5c518;
    color: #000;
  }
`;

const Label = styled("span")(({ collapsed }) => ({
  fontSize: "15px",
  fontWeight: 500,
  whiteSpace: "nowrap",
  overflow: "hidden",
  transition: "opacity 0.2s ease, width 0.2s ease",
  ...(collapsed && {
    opacity: 0,
    width: 0
  })
}));

const PlanBox = styled(Box)(({ collapsed }) => ({
  margin: "20px 16px 0",
  padding: "18px",
  borderRadius: "16px",
  background: "#151515",
  textAlign: "center",
  display: collapsed ? "none" : "block"
}));

export default function Sidebar({ collapsed = false }) {
  const menuItems = [
    { to: "/", label: "Discover", icon: <Home /> },
    { to: "/watchlist", label: "Watchlist", icon: <Movie /> },
    { to: "/blog", label: "Blog", icon: <Article /> },
    { to: "/artists", label: "Artists", icon: <People /> }
  ];

  const bottomItems = [
    { to: "/contact", label: "Contact Us", icon: <Phone /> },
    { to: "/help", label: "Help Center", icon: <HelpOutline /> },
    { to: "/settings", label: "Setting", icon: <Settings /> }
  ];

  return (
    <Wrapper collapsed={collapsed}>
      <MenuWrapper>
        <MenuSubtitle sx={{ display: collapsed ? "none" : "block" }}>
          Menu
        </MenuSubtitle>

        {menuItems.map((item) => (
          <MenuButton
            key={item.to}
            component={NavLink}
            to={item.to}
          >
            <IconBox>{item.icon}</IconBox>
            <Label collapsed={collapsed}>{item.label}</Label>
          </MenuButton>
        ))}

        <Box sx={{ borderBottom: "1px solid #222", my: 2 }} />

        {bottomItems.map((item) => (
          <MenuButton
            key={item.to}
            component={NavLink}
            to={item.to}
          >
            <IconBox>{item.icon}</IconBox>
            <Label collapsed={collapsed}>{item.label}</Label>
          </MenuButton>
        ))}
      </MenuWrapper>

      <PlanBox collapsed={collapsed}>
        <Typography fontSize={13} color="#aaa" mb={1}>
          Click the button below to see the plans
        </Typography>
        <Button
          startIcon={<Check />}
          variant="outlined"
          sx={{
            color: "#f5c518",
            borderColor: "#f5c518",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              borderColor: "#f5c518",
              background: "rgba(245,197,24,0.1)"
            }
          }}
        >
          see plans
        </Button>
      </PlanBox>
    </Wrapper>
  );
}
