import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Grid, Typography } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import GoldTable from '../Reusable/Table/GoldTable';
import AppWidgetSummary from '../sections/@dashboard/app/AppWidgetSummary';

// ----------------------------------------------------------------------

export default function GoldCoins() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Gold Coins | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5, color: '#fff' }}>
          Gold Coins
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>

          </Stack>
        </Stack> */}
        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              sx={{ background: '#DFCA77', color: '#000' }}
              title="Gold Coins"
              total={500}
              icon={'ant-design:android-filled'}
            />
          </Grid>
        </Grid>
        {/* <ValueTable /> */}
        <GoldTable />
      </Container>
    </>
  );
}
