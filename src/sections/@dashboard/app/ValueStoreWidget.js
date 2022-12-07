// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

ValueStoreWidget.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function ValueStoreWidget({ heading, title, total, icon, color = 'primary', sx, ...other }) {
  const button = {
    background: '#000',
    color: '#fff',
    marginTop: '10px',
    '&:hover': {
      background: '#000',
      color: '#fff',
    },
  };
  return (
    <Card
      sx={{
        width: '100%',
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
         {other.type === 'img' ? (
          <img src={`/assets/icons/navbar/${icon}.svg`} alt="My Value Coins" width="50px" height="50px" />
        ) :(
        <Iconify sx={{ color: '#000' }} icon={icon} width="50px" height="50px" />
        )}
      </StyledIcon>

      <Typography variant="h3">{fShortenNumber(total)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72, fontFamily: 'Space Grotesk' }}>
        {title}
      </Typography>
      <Button sx={button} variant="contained">
        {heading}
      </Button>
    </Card>
  );
}
