import { 
  DashboardOutlined, 
  UserOutlined,
  LineChartOutlined ,
  WalletOutlined,
  ScheduleOutlined,
  FlagOutlined ,
  BarcodeOutlined,
  BankOutlined ,
  UsergroupAddOutlined ,
  SolutionOutlined ,
  ShopOutlined 

} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    //persona
  {
	  key: 'dashboards-personal',
	  path: `${APP_PREFIX_PATH}/dashboards/personal`,
	  title: 'sidenav.dashboard.personal',
	  icon: UserOutlined,
	  breadcrumb: false,
	  submenu: [
      {
        key: 'dashboards-generalbalance',
        path: `${APP_PREFIX_PATH}/dashboards/personal/general-balance`,
        title: 'sidenav.dashboard.personal.generalbalance',
        icon: LineChartOutlined ,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-revenue',
        path: `${APP_PREFIX_PATH}/dashboards/personal/revenue/revenue-monthly`,
        title: 'sidenav.dashboard.personal.revenue',
        icon: WalletOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-expenses',
        path: `${APP_PREFIX_PATH}/dashboards/personal/expense/expense-monthly`,
        title: 'sidenav.dashboard.personal.expenses',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  },
  {
    //servicios 
	  key: 'dashboards-professionalservices',
	  path: `${APP_PREFIX_PATH}/dashboards/professionalservices`,
	  title: 'sidenav.dashboard.professionalservices',
	  icon: DashboardOutlined,
	  breadcrumb: false,
	  submenu: [
      //submenu servicios
      {
        key: 'dashboards-generalbalance',
        path: `${APP_PREFIX_PATH}/dashboards/professionalservices/generalbalance`,
        title: 'sidenav.dashboard.professionalservices.generalbalance',
        icon: LineChartOutlined ,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-revenue',
        path: `${APP_PREFIX_PATH}/dashboards/professionalservices/revenue`,
        title: 'sidenav.dashboard.professionalservices.revenue',
        icon: WalletOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-cxc',
        path: `${APP_PREFIX_PATH}/dashboards/professionalservices/cxc`,
        title: 'sidenav.dashboard.professionalservices.cxc',
        icon: ScheduleOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-cxp',
        path: `${APP_PREFIX_PATH}/dashboards/professionalservices/cxp`,
        title: 'sidenav.dashboard.professionalservices.cxp',
        icon: FlagOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-cogs',
        path: `${APP_PREFIX_PATH}/dashboards/professionalservices/cogs`,
        title: 'sidenav.dashboard.professionalservices.cogs',
        icon: BarcodeOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-sga',
        path: `${APP_PREFIX_PATH}/dashboards/professionalservices/sga`,
        title: 'sidenav.dashboard.professionalservices.sga',
        icon: BankOutlined ,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-payroll',
        path: `${APP_PREFIX_PATH}/dashboards/professionalservices/payroll`,
        title: 'sidenav.dashboard.professionalservices.payroll',
        icon: UsergroupAddOutlined ,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-capitalexpenses',
        path: `${APP_PREFIX_PATH}/dashboards/professionalservices/capitalexpenses`,
        title: 'sidenav.dashboard.professionalservices.capitalexpenses',
        icon: ShopOutlined ,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-taxation',
        path: `${APP_PREFIX_PATH}/dashboards/professionalservices/taxation`,
        title: 'sidenav.dashboard.professionalservices.taxation',
        icon: SolutionOutlined ,
        breadcrumb: false,
        submenu: []
      }
      

    ]
  },
  {
    //empresa
	  key: 'dashboards-business',
	  path: `${APP_PREFIX_PATH}/dashboards/business`,
	  title: 'sidenav.dashboard.business',
	  icon: DashboardOutlined,
	  breadcrumb: false,
	  submenu: [
      //submenu empresa 
      {
        key: 'dashboards-generalbalance',
        path: `${APP_PREFIX_PATH}/dashboards/business/generalbalance`,
        title: 'sidenav.dashboard.business.generalbalance',
        icon: LineChartOutlined ,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-revenue',
        path: `${APP_PREFIX_PATH}/dashboards/business/revenue`,
        title: 'sidenav.dashboard.business.revenue',
        icon: WalletOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-cxc',
        path: `${APP_PREFIX_PATH}/dashboards/business/cxc`,
        title: 'sidenav.dashboard.business.cxc',
        icon: ScheduleOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-cxp',
        path: `${APP_PREFIX_PATH}/dashboards/business/cxp`,
        title: 'sidenav.dashboard.business.cxp',
        icon: FlagOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-cogs',
        path: `${APP_PREFIX_PATH}/dashboards/business/cogs`,
        title: 'sidenav.dashboard.business.cogs',
        icon: BarcodeOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-sga',
        path: `${APP_PREFIX_PATH}/dashboards/business/sga`,
        title: 'sidenav.dashboard.business.sga',
        icon: BankOutlined ,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-payroll',
        path: `${APP_PREFIX_PATH}/dashboards/business/payroll`,
        title: 'sidenav.dashboard.business.payroll',
        icon: UsergroupAddOutlined ,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-capitalexpenses',
        path: `${APP_PREFIX_PATH}/dashboards/business/capitalexpenses`,
        title: 'sidenav.dashboard.business.capitalexpenses',
        icon: ShopOutlined ,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'dashboards-taxation',
        path: `${APP_PREFIX_PATH}/dashboards/business/taxation`,
        title: 'sidenav.dashboard.business.taxation',
        icon: SolutionOutlined ,
        breadcrumb: false,
        submenu: []
      }
      

    ]
  }]
}]


const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;