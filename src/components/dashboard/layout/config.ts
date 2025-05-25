import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'التقارير', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'الموظفين', href: paths.dashboard.customers, icon: 'users' },
  { key: 'settings', title: 'الاعدادات', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'الحساب', href: paths.dashboard.account, icon: 'user' },
  { key: 'ASSTEST', title: 'ادارة الجرد', href: paths.errors.notFound, icon: 'chart-pie' },
] satisfies NavItemConfig[];
