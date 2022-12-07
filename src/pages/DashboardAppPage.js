import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Button from '@mui/material/Button';
// import { faker } from '@faker-js/faker';
// @mui
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';
// components
// import Iconify from '../components/iconify';
// sections
import AddNewModal from '../Reusable/Modal/AddNewModal';
import { AppWidgetSummary } from '../sections/@dashboard/app';
import ValueStoreWidget from '../sections/@dashboard/app/ValueStoreWidget';
import SliderMain from '../components/slider/SliderMain';
import ValueExpenseModal from '../Reusable/Modal/ValueExpenseModal';
// import { before } from 'lodash';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [goodDeedsModal, setGoodDeedsModal] = useState(false);
  const[expenseModal,setExpenseModal]= useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const explore = {
    position: 'relative',
  };
  const collectBtn = {
    bgcolor: '#000',
    color: '#fff',
    boxShadow: 'none',
    mt: 2,
    '&:hover': {
      bgcolor: '#000',
      color: '#fff',
    },
  };
  return (
    <>
      <Helmet>
        <title> Dashboard | Value1 </title>
      </Helmet>

      <Container maxWidth="xl">
        {/* <Typography variant="h4" sx={{ mb: 5, color: "#ccc" }}>
          Hi, Value1
        </Typography> */}

        {/* <Box
          component="img"
          src="../../banner1.png"
          sx={{ width: '100%', height: '60vh', mb: 2, borderRadius: '10px' }}
        /> */}
        <Grid className="banner" container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h2" sx={{ m: 5, color: '#ccc' }}>
              Earn <span className='contentspan'>24k 999 Gold</span>
              <br />
              On Your Every
              <br />
              <SliderMain />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="bannerimg">
            <img src="../../bannergirl.png" alt="" className="bannergirl" />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Link style={{ textDecoration: 'none' }} to="/dashboard/my-value-coins">
              <AppWidgetSummary
                sx={{ background: '#DFCA77', color: '#000' }}
                title="My Value Coins"
                type="img"
                total={500}
                icon={'icon_value'}
              />
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Link style={{ textDecoration: 'none' }} to="/dashboard/my-gold-coins">
              <AppWidgetSummary
                sx={{ background: '#DFCA77', color: '#000' }}
                title="My Gold Coins"
                total={500}
                color="info"
                icon={'ri:coins-fill'}
              />
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              sx={{ background: '#DFCA77', color: '#000' }}
              title="Today's Gold Rate"
              total={500}
              color="warning"
              icon={'tabler:coin-rupee'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              sx={{ background: '#DFCA77', color: '#000' }}
              title="Human Development Index"
              total={234}
              color="error"
              icon={'mdi:human-greeting-variant'}
            />
          </Grid>
        </Grid>
        <Typography variant="h4" sx={{ mb: 3, color: '#ccc' }} id="revenue-store">
          Revenue Store
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} className="explore">
            <img
              src="../../gold.jpg"
              alt=""
              width={200}
              height={150}
              style={{ borderRadius: '10px' }}
              className="explore-image"
            />
            <div className="overlay">
              <div className="text">
              <a 
              href="https://value1.augmont.com/" 
              target="_blank"
              rel="noreferrer"
              className="gold"
              >
              Digital Gold
              </a>
                </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className="explore">
            <img
              src="../../gold.jpg"
              alt=""
              width={200}
              height={150}
              style={{ borderRadius: '10px' }}
              className="explore-image"
            />
            <div className="overlay">
              <div className="text">
              <a 
              href="https://value1.world/" 
              target="_blank"
              rel="noreferrer"
              className="gold"
              >Travel</a></div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className="explore">
            <img
              src="../../gold.jpg"
              alt=""
              width={200}
              height={150}
              style={{ borderRadius: '10px' }}
              className="explore-image"
            />
            <div className="overlay">
              <div className="text">
              <a 
              href="https://deals.value1.in/" 
              target="_blank"
              rel="noreferrer"
              className="gold"
              >
                Deals</a></div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className="explore">
            <img
              src="../../gold.jpg"
              alt=""
              width={200}
              height={150}
              style={{ borderRadius: '10px' }}
              className="explore-image"
            />
            <div className="overlay">
              <div className="text">Loans</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="explore">
            <img
              src="../../gold.jpg"
              alt=""
              width={200}
              height={150}
              style={{ borderRadius: '10px' }}
              className="explore-image"
            />
            <div className="overlay">
              <div className="text">Stocks</div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className="explore">
            <img
              src="../../gold.jpg"
              alt=""
              width={200}
              height={150}
              style={{ borderRadius: '10px' }}
              className="explore-image"
            />
            <div className="overlay">
              <div className="text">Bill Payment</div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className="explore">
            <img
              src="../../gold.jpg"
              alt=""
              width={200}
              height={150}
              style={{ borderRadius: '10px' }}
              className="explore-image"
            />
            <div className="overlay">
              <div className="text">International Admission</div>
            </div>
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}>
            <img
              src="../../marketing.jpg"
              alt=""
              width={200}
              height={150}
              style={{ borderRadius: '10px' }}
              className="explore-image"
            />
          </Grid> */}
        </Grid>
        <Typography variant="h4" sx={{ mb: 5, mt: 5, color: '#ccc' }} id="value-store">
          Value Store
        </Typography>

        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <ValueStoreWidget
              sx={{ background: '#DFCA77', color: '#000' }}
              title="Good Deeds"
              total={714000}
              type="img"
              icon={'like'}
              onClick={() => setGoodDeedsModal(true)}
              heading="Collect Now"
            />
            {/* <Button
              variant="contained"
              className="ValueCardBtn"
              sx={collectBtn}
              onClick={() => setGoodDeedsModal(true)}
            >
              Collect Now
            </Button> */}
            <AddNewModal
              isOpen={goodDeedsModal}
              isButtonDisabled={isButtonDisabled}
              handleClose={() => setGoodDeedsModal(false)}
              submitHandler={() => {
                console.log('Storing data in db...');
                setIsButtonDisabled(true);
                setTimeout(() => {
                  setIsButtonDisabled(false);
                  setGoodDeedsModal(false);
                }, 5000);
                navigate('/dashboard/value');
              }}
            />
          </Grid>

         
          <Grid item xs={12} sm={6} md={3}>
            <ValueStoreWidget
              sx={{ background: '#DFCA77', color: '#000' }}
              title="Value Expenses"
              total={1723315}
              color="warning"
              type="img"
              icon={'expenses'}
      
              heading="Collect Now"
              onClick={() => setExpenseModal(true)}
            />
            {/* <Button
              variant="contained"
              className="ValueCardBtn"
              sx={collectBtn}
              onClick={() => {
                navigate('/dashboard/valueexpenses');
              }}
            >
              Collect Now
            </Button> */}
             <ValueExpenseModal
              isOpen={expenseModal}
              isButtonDisabled={isButtonDisabled}
              handleClose={() => setExpenseModal(false)}
              submitHandler={() => {
                console.log('Storing data in db...');
                setIsButtonDisabled(true);
                setTimeout(() => {
                  setIsButtonDisabled(false);
                  setExpenseModal(false);
                }, 5000);
                navigate('/dashboard/valueexpenses');
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ValueStoreWidget
              sx={{ background: '#DFCA77', color: '#000' }}
              title="Value Brands"
              total={1352831}
              color="info"
              type="img"
              icon={'brand'}
              heading="Collect Now"
              onClick={() => {
                navigate('/dashboard/valuebrands');
              }}
            />
            {/* <Button
              variant="contained"
              className="ValueCardBtn"
              sx={collectBtn}
              onClick={() => {
                navigate('/dashboard/valuebrands');
              }}
            >
              Collect Now
            </Button> */}
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Human Development Index"
              total={234}
              color="error"
              icon={'ant-design:bug-filled'}
            />
          </Grid> */}
        </Grid>

        {/* <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid> */}

        {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> */}

        {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
      </Container>
    </>
  );
}
