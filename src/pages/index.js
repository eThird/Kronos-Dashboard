import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Stack, Typography, Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewRevenue } from "src/sections/overview/overview-revenue";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";

const now = new Date();

const Page = () => {
  const [salesData, setSalesData] = useState({
    actualSales: [],
    predictedSales: [],
    actualRevenue: [],
    predictedRevenue: [],
  });

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get('/api/sales');
        const data = response.data;
        setSalesData({
          actualSales: data.actual_sales,
          predictedSales: data.predicted_sales,
          actualRevenue: data.actual_revenue,
          predictedRevenue: data.predicted_revenue,
        });
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <>
      <Head>
        <title>God View | Kronos.AI</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewRevenue difference={12} positive sx={{ height: "100%" }} value="$24k" />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalProfit sx={{ height: "100%" }} value="$15k" />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value="1.6k"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <OverviewTraffic
                title="Gender Composition"
                chartSeries={[43, 25, 32]}
                labels={["Male", "Female", "Others"]}
                sx={{ height: "100%" }}
              />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <OverviewTraffic
                title="Age Group"
                chartSeries={[15, 22, 63]}
                labels={["Under 25", "Under 40", "Under 70"]}
                sx={{ height: "100%" }}
              />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <OverviewTraffic
                title="Traffic Composition"
                chartSeries={[63, 15, 22]}
                labels={["Desktop", "Tablet", "Phone"]}
                sx={{ height: "100%" }}
              />
            </Grid>

            <Grid xs={12} lg={12}>
              <OverviewSales
                title="Sales Projection"
                chartSeries={[
                  {
                    name: "Actual Sales",
                    data: salesData.actualSales,
                  },
                  {
                    name: "Predicted Sales",
                    data: salesData.predictedSales,
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>

            <Grid xs={12} lg={12}>
              <OverviewSales
                title="Revenue Projection"
                chartSeries={[
                  {
                    name: "Actual Revenue",
                    data: salesData.actualRevenue,
                  },
                  {
                    name: "Predicted Revenue",
                    data: salesData.predictedRevenue,
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>

            <Grid xs={12} md={6} lg={6}>
              <OverviewLatestProducts
                title="High Performing Products"
                products={[
                  {
                    id: "5ece2c077e39da27658aa8a9",
                    image: "/assets/products/product-1.png",
                    name: "Cera Ve",
                    updatedAt: subHours(now, 6).getTime(),
                  },
                  {
                    id: "5ece2c0d16f70bff2cf86cd8",
                    image: "/assets/products/product-2.png",
                    name: "Self Care Kit",
                    updatedAt: subDays(subHours(now, 8), 2).getTime(),
                  },
                  {
                    id: "b393ce1b09c1254c3a92c827",
                    image: "/assets/products/product-5.png",
                    name: "Skincare Soja CO",
                    updatedAt: subDays(subHours(now, 1), 1).getTime(),
                  },
                  {
                    id: "a6ede15670da63f49f752c89",
                    image: "/assets/products/product-6.png",
                    name: "Loreal Expert Pack",
                    updatedAt: subDays(subHours(now, 3), 3).getTime(),
                  },
                  {
                    id: "bcad5524fe3a2f8f8620ceda",
                    image: "/assets/products/product-7.png",
                    name: "Tea Tree Facewash",
                    updatedAt: subDays(subHours(now, 5), 6).getTime(),
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>

            <Grid xs={12} md={6} lg={6}>
              <OverviewLatestProducts
                title="Low Performing Products"
                products={[
                  {
                    id: "5ece2c077e39da27658aa8a9",
                    image: "/assets/products/product-1.png",
                    name: "Cera Ve",
                    updatedAt: subHours(now, 6).getTime(),
                  },
                  {
                    id: "5ece2c0d16f70bff2cf86cd8",
                    image: "/assets/products/product-2.png",
                    name: "Self Care Kit",
                    updatedAt: subDays(subHours(now, 8), 2).getTime(),
                  },
                  {
                    id: "b393ce1b09c1254c3a92c827",
                    image: "/assets/products/product-5.png",
                    name: "Skincare Soja CO",
                    updatedAt: subDays(subHours(now, 1), 1).getTime(),
                  },
                  {
                    id: "a6ede15670da63f49f752c89",
                    image: "/assets/products/product-6.png",
                    name: "Loreal Expert Pack",
                    updatedAt: subDays(subHours(now, 3), 3).getTime(),
                  },
                  {
                    id: "bcad5524fe3a2f8f8620ceda",
                    image: "/assets/products/product-7.png",
                    name: "Tea Tree Facewash",
                    updatedAt: subDays(subHours(now, 5), 6).getTime(),
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>

            <Grid xs={12} md={12} lg={8}>
              <OverviewLatestOrders
                orders={[
                  {
                    id: "f69f88012978187a6c12897f",
                    ref: "DEV1049",
                    amount: 30.5,
                    customer: {
                      name: "Ekaterina Tankova",
                    },
                    createdAt: 1555016400000,
                    status: "pending",
                  },
                  {
                    id: "9eaa1c7dd4433f413c308ce2",
                    ref: "DEV1048",
                    amount: 25.1,
                    customer: {
                      name: "Cao Yu",
                    },
                    createdAt: 1555016400000,
                    status: "delivered",
                  },
                  {
                    id: "01a5230c811bd04996ce7c13",
                    ref: "DEV1047",
                    amount: 10.99,
                    customer: {
                      name: "Alexa Richardson",
                    },
                    createdAt: 1554930000000,
                    status: "refunded",
                  },
                  {
                    id: "1f4e1bd0a87cea23cdb83d18",
                    ref: "DEV1046",
                    amount: 96.43,
                    customer: {
                      name: "Anje Keizer",
                    },
                    createdAt: 1554757200000,
                    status: "pending",
                  },
                  {
                    id: "9f974f239d29ede969367103",
                    ref: "DEV1045",
                    amount: 32.54,
                    customer: {
                      name: "Clarke Gillebert",
                    },
                    createdAt: 1554670800000,
                    status: "delivered",
                  },
                  {
                    id: "ffc83c1560ec2f66a1c05596",
                    ref: "DEV1044",
                    amount: 16.76,
                    customer: {
                      name: "Adam Denisov",
                    },
                    createdAt: 1554670800000,
                    status: "delivered",
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
