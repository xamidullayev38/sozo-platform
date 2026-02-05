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
  Check,
} from "@mui/icons-material";

const mainColor = "#e50914"; // to'q qizil

const Wrapper = styled(Box)(({ collapsed }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: collapsed ? "20%" : "100%",
  minHeight: "100vh",
  background: "#0b0b0b",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px 0",
  transition: "width 0.25s ease",
  borderRight: "1px solid #161616",
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
  gap: 12px;
  padding: 8px 14px;
  border-radius: 12px;
  text-transform: none;
  color: #9e9e9e;
  width: 100%;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
    background: transparent;
  }

  &.active {
    color: ${mainColor};
  }

  &.active::before {
    content: "";
    position: absolute;
    left: -16px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 22px;
    border-radius: 4px;
    background: ${mainColor};
  }
`;

const IconBox = styled(Box)`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a8a8a;
  transition: color 0.2s ease;

  svg {
    font-size: 18px;
  }

  .active & {
    color: ${mainColor};
  }
`;

const Label = styled("span")(({ collapsed }) => ({
  fontSize: "14px",
  fontWeight: 500,
  whiteSpace: "nowrap",
  transition: "0.2s",
  ...(collapsed && {
    opacity: 0,
    width: 0,
  }),
}));

export default function Sidebar({ collapsed = false }) {
  const menuItems = [
    { to: "/", label: "Discover", icon: <Home /> },
    { to: "/watchlist", label: "Watchlist", icon: <Movie /> },
    { to: "/blog", label: "Blog", icon: <Article /> },
    { to: "/artists", label: "Artists", icon: <People /> },
  ];

  const bottomItems = [
    { to: "/contact", label: "Contact Us", icon: <Phone /> },
    { to: "/help", label: "Help Center", icon: <HelpOutline /> },
    { to: "/settings", label: "Setting", icon: <Settings /> },
  ];

  return (
    <Wrapper collapsed={collapsed}>
      <MenuWrapper>
        <MenuSubtitle sx={{ display: collapsed ? "none" : "block" }}>
          Menu
        </MenuSubtitle>

        {menuItems.map((item) => (
          <MenuButton
            disableRipple
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
            disableRipple
            key={item.to}
            component={NavLink}
            to={item.to}
          >
            <IconBox>{item.icon}</IconBox>
            <Label collapsed={collapsed}>{item.label}</Label>
          </MenuButton>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}
