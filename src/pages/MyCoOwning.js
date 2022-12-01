import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Grid, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function MyCoOwning() {
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
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          My Co-Owning Journey
        </Typography>
        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              sx={{ background: '#DFCA77', color: '#000' }}
              title="MemberShip Id"
              total={123}
              icon={'ant-design:android-filled'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <AppWidgetSummary
              sx={{ background: '#DFCA77', color: '#000', height: '100%' }}
              title="Grant Letter"
              // total={"abc1234678"}
              icon={'ant-design:android-filled'}
            />
          </Grid>
        </Grid>
        <Card sx={{ width: '100%' }}>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} sm={6} md={5}>
              <Typography >Hello</Typography>
              <Typography >Hello</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
            <Typography >Hello</Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
