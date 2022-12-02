import PropTypes from 'prop-types';
// import { NavLink as RouterLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={NavHashLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: '#191921',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon sx={{ color: '#fabb04' }}>{icon && icon}</StyledNavItemIcon>

      <ListItemText sx={{ color: '#ccc' }} disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
