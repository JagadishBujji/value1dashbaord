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
    icon: icon('ic_cart'),
  },
  {
    title: 'My Value Coins',
    path: '/dashboard/my-value-coins',
    icon: icon('ic_blog'),
  },
  {
    title: 'My Gold Coins',
    path: '/dashboard/my-gold-coins',
    icon: icon('ic_lock'),
  },
  {
    title: 'Revenue Store',
    path: '/dashboard/revenue-store',
    icon: icon('ic_cart'),
  },

  {
    title: 'Value Store',
    path: '/dashboard/value',
    icon: icon('ic_user'),
  },
];

export default navConfig;
