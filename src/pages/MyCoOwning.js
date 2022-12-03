import Avatar from '@mui/material/Avatar';
// @mui
import { NavHashLink } from 'react-router-hash-link';
import { Grid, Container, Typography, Link } from '@mui/material';
import Card from '@mui/material/Card';
import { AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function MyCoOwning() {
  // const [openFilter, setOpenFilter] = useState(false);

  // const handleOpenFilter = () => {
  //   setOpenFilter(true);
  // };

  // const handleCloseFilter = () => {
  //   setOpenFilter(false);
  // };

  return (
    <>
      {/* <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet> */}

      <Container>
        <Typography variant="h4" sx={{ color: '#fff', mb: 5 }}>
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
          <Grid item xs={12} sm={6} md={3}>
          <NavHashLink
              to="/https://sign.zoho.in/signform?form_link=234b4d535f495623d581afcbe80394dd7569e4eccdb8f46ef67b8a076cda5da89430f4e18275b839fcec1ef5b029654f4acaf8d45092525aad60e51ff8c09faa75069ac6e9e1bf2f#"
              style={{ textDecoration: 'none' }}
            >
              <AppWidgetSummary
                sx={{ background: '#DFCA77', color: '#000', height: '100%' }}
                title="Grant Letter"
                // total={"abc1234678"}
                icon={'ant-design:android-filled'}
              />
            </NavHashLink>
          </Grid>
        </Grid>
        <Card sx={{ width: '100%', bgcolor: '#191921' }}>
          <Grid container spacing={3} sx={{ mb: 5 }}>
            <Grid item xs={12} sm={6} md={5} className="profile">
              <Avatar src="/avatar_default.jpg" sx={{ width: '100px', height: '100px', m: 2 }} />
              <Typography sx={{ color: '#fff', m: 2 }}>Arul</Typography>
              <Typography sx={{ m: 2, color: '#fff' }}>arulprakash134@gmail.com</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={7} className="profile">
              <Typography sx={{ m: 2, color: '#fff', textAlign: 'left' }}>Phone:9089700080</Typography>
              <Typography sx={{ m: 2, color: '#fff', textAlign: 'left' }}>Address:No.23,s city,chennai-7</Typography>
              <Typography sx={{ m: 2, color: '#fff', textAlign: 'left' }}>MemberShip Id:123</Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
