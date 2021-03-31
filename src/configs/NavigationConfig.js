import { 
  DashboardOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
  {
	  key: 'dashboards-personal',
	  path: `${APP_PREFIX_PATH}/dashboards/personal`,
	  title: 'sidenav.dashboard.personal',
	  icon: DashboardOutlined,
	  breadcrumb: false,
	  submenu: [
      {
        key: 'dashboards-generalbalance',
        path: `${APP_PREFIX_PATH}/dashboards/personal/general-balance`,
        title: 'sidenav.dashboard.personal.generalbalance',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-revenue',
        path: `${APP_PREFIX_PATH}/dashboards/personal/revenue`,
        title: 'sidenav.dashboard.personal.revenue',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-expenses',
        path: `${APP_PREFIX_PATH}/dashboards/personal/expenses`,
        title: 'sidenav.dashboard.personal.expenses',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  },
  {
	  key: 'dashboards-expenses',
	  path: `${APP_PREFIX_PATH}/dashboards/professionalservices`,
	  title: 'sidenav.dashboard.professionalservices',
	  icon: DashboardOutlined,
	  breadcrumb: false,
	  submenu: []
  },
  {
	  key: 'dashboards-business',
	  path: `${APP_PREFIX_PATH}/dashboards/business`,
	  title: 'sidenav.dashboard.business',
	  icon: DashboardOutlined,
	  breadcrumb: false,
	  submenu: []
  }]
}]


/*const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
  {
	  key: 'dashboards-ingresos',
	  path: `${APP_PREFIX_PATH}/dashboards/ingresos`,
	  title: 'sidenav.dashboard.ingresos',
	  icon: DashboardOutlined,
	  breadcrumb: false,
	  submenu: []
  },
  {
	  key: 'dashboards-egresos',
	  path: `${APP_PREFIX_PATH}/dashboards/egresos`,
	  title: 'sidenav.dashboard.egresos',
	  icon: DashboardOutlined,
	  breadcrumb: false,
	  submenu: []
  }]
}]*/

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
