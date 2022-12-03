// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'My Co-Owning Journey',
    path: '/dashboard/myco-owning',
    icon: icon('ui-user-profile'),
  },
  {
    title: 'My Value Coins',
    path: '/dashboard/my-value-coins',
    icon: icon('ic_blog'),
  },
  {
    title: 'My Gold Coins',
    path: '/dashboard/my-gold-coins',
    icon: icon('coins-fill'),
  },
  {
    title: 'Revenue Store',
    path: '/dashboard/app/#revenue-store',
    icon: icon('ic_cart'),
  },

  {
    title: 'Value Store',
    path: '/dashboard/app/#value-store',
    icon: icon('store'),
  },
];

export default navConfig;
