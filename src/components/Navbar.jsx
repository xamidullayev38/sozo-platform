import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  styled,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search,
  NotificationsNone,
  Tune,
  KeyboardArrowDown,
} from "@mui/icons-material";

const mainColor = "#e50914";

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(to bottom, #111, #0d0d0d);
  padding: 10px 24px;
  background: rgba(15, 15, 15, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 10px 24px;
`;

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const LeftMenu = styled(Box)`
  display: flex;
  gap: 22px;
  align-items: center;
`;

const NavItem = styled(Typography)(({ active }) => ({
  fontSize: 16,
  cursor: "pointer",
  color: active ? mainColor : "#aaa",
  position: "relative",
  paddingBottom: 4,
  display: "flex",
  alignItems: "center",
  gap: 4,
  transition: "color 0.2s ease",

  "&:hover": {
    color: mainColor,
  },

  ...(active && {
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -6,
      width: "100%",
      height: 2,
      background: mainColor,
      borderRadius: 2,
    },
  }),
}));

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background: #1a1a1a;
    backdrop-filter: blur(10px);
    color: #fff;
    border-radius: 10px;
    margin-top: 8px;
  }

  .MuiMenuItem-root:hover {
    background: rgba(229, 9, 20, 0.15);
  }
`;

const SearchWrapper = styled(Box)`
  flex: 1;
  max-width: 480px;
  background: #1a1a1a;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  transition: box-shadow 0.2s ease;

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(229, 9, 20, 0.5);
  }
`;

const SearchIcon = styled(Search)`
  color: #777;
  margin-right: 8px;
`;

const StyledInput = styled(InputBase)`
  flex: 1;
  color: #fff;
  font-size: 14px;
`;

const RightMenu = styled(Box)`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const iconBtnStyle = {
  color: "#aaa",
  transition: "all 0.2s ease",
  "&:hover": {
    color: mainColor,
    background: "rgba(229,9,20,0.12)",
  },
};

export default function Navbar() {
  const [active, setActive] = useState("All");
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

  return (
    <StyledAppBar position="static" elevation={0}>
      <Container>
        {/* LEFT MENU */}
        <LeftMenu>
          {["All", "Movie", "Series"].map((item) => (
            <NavItem
              key={item}
              active={active === item}
              onClick={() => setActive(item)}
            >
              {item}
            </NavItem>
          ))}

          {/* GENRES DROPDOWN */}
          <NavItem
            active={active === "Genres"}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            Genres <KeyboardArrowDown sx={{ fontSize: 18 }} />
          </NavItem>

          <StyledMenu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {genres.map((genre) => (
              <MenuItem
                key={genre}
                onClick={() => {
                  setActive("Genres");
                  setAnchorEl(null);
                }}
              >
                {genre}
              </MenuItem>
            ))}
          </StyledMenu>
        </LeftMenu>

        {/* SEARCH */}
        <SearchWrapper>
          <SearchIcon />
          <StyledInput placeholder="Search the series, movies ..." />
          <IconButton sx={{ color: "#aaa" }}>
            <Tune />
          </IconButton>
        </SearchWrapper>

        {/* RIGHT SIDE */}
        <RightMenu>
          <IconButton sx={iconBtnStyle}>
            <NotificationsNone />
          </IconButton>
          <Avatar
            src="https://i.pravatar.cc/40"
            sx={{
              width: 38,
              height: 38,
              border: `2px solid ${mainColor}`,
              cursor: "pointer",
            }}
          />
        </RightMenu>
      </Container>
    </StyledAppBar>
  );
}
