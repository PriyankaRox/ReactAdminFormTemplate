import React from "react";
import Sidebar from "../Components/Sidebar";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
export default function Setup() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Setup</h1>
          <>Settings </>
        </Box>
      </Box>
    </>
  );
}
