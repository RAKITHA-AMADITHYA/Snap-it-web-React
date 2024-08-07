import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./Header";
import Footer from "./Footer";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

function ScrollTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <Fade in={trigger}>
      <Box
        onClick={() => handleClick()}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Layout = () => {
  const handleBestWeb = () => {
    window.location.href = "https://www.vote.bestweb.lk/site/rukmadura_lk/";
  };

  return (
    <div style={{ backgroundColor: "#ffff" }}>
      {/* Wrap MainHeader in a div with fixed positioning */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <MainHeader />
      </div>

      {/* Adjust the Box to start below the MainHeader */}
      <Box sx={{ marginTop: '20px' }} minHeight={"60vh"}>
        <Outlet />
      </Box>

      <Footer />

      <ScrollTop>
        <Fab size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Layout;
