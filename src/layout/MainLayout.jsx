import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout() {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ display: "flex", backgroundColor: "#0F0F0F", minHeight: "100vh" }}>
      <Sidebar open={open} setOpen={setOpen} />

      <div style={{ 
        marginLeft: open ? "260px" : "80px", 
        width: "100%", 
        transition: "margin 0.3s ease" 
      }}>
        <Navbar />
        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;