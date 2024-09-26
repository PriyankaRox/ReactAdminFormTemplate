import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "./Dashboard.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccordianDashboard from "../Components/AccordianDashboard";
import BarChart from "../charts/BarChart";

export default function Dashboard() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{
                      minWidth: 49 + "%",
                      height: 150,
                      background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                    }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="iconStyle">
                        <CreditCardIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $500.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      minWidth: 49 + "%",
                      height: 150,
                      background: "linear-gradient(to right,#2193b0, #6dd5ed)",
                    }}
                    className="gradientLight"
                  >
                    <CardContent>
                      <div className="iconStyle">
                        <ShoppingBagIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $900.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      background: "linear-gradient(to right, #f64f59, #ff9a44)",
                    }}
                    className="gradientLight"
                  >
                    <Stack spacing={2} direction="row">
                      <div className="iconStyle">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingAll">
                        <span className="priceTitle">$203k</span>
                        <br />
                        <span className="priceSubTitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card
                    sx={{
                      maxWidth: 345,
                      background: "linear-gradient(to right, #f64f59, #ff9a44)",
                    }}
                  >
                    <Stack spacing={2} direction="row">
                      <div className="iconStyleBlack">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingAll">
                        <span className="priceTitle">$203k</span>
                        <br />
                        <span className="priceSubTitle">Total Orders</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className="paddingAll">
                      <span className="priceTitle">Popular Products</span>
                    </div>
                    <AccordianDashboard />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
