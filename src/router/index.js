import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//1. 登录
const Login = () => import("@/views/login/Longin")
//2. 注册
const Register = () => import("@/views/register/Register")
//3. 首页
const Home = () => import("@/views/home/Home")
//3.1 经营概况
const ManageCondition = () => import("@/views/home/children/manage_condition/ManageCondition")
//3.2 收费管理
const CostManage = () => import("@/views/home/children/cost_manage/CostManage")
//3.3 药品零售
const DrugSale = () => import("@/views/home/children/drug_sale/DrugSale")
//3.4 新开就诊
const NewSeeDoctor = () => import("@/views/home/children/new_see_doctor/NewSeeDoctor")
//3.5 挂号管理
const RegistrationManage = () => import("@/views/home/children/registration_manage/RegistrationManage")
//3.6 患者管理
const SinkPersonManage = () => import("@/views/home/children/sick_manage/SickManage")
//3.7 统计报表
const StatisticsTable = () => import("@/views/home/children/statistics_table/StatisticsTable")
//3.8 系统设置
const SystemSetting = () => import("@/views/home/children/system_setting/SystemSetting")
//3.9 会员管理
const VipManage = () => import("@/views/home/children/vip_manage/VipManage")
//3.10 工作空间
const WorkSpace = () => import("@/views/home/children/workspace/WorkSpace")
//3.11 药品管理
const DrugManage = () => import("@/views/home/children/drug_manage/DrugManage")

const routes = [

  {
    path: '/',
    redirect: '/login'
  },
  {
    //1.登录
    path: '/login',
    component: Login
  },
  {
    //2. 注册
    path: '/register',
    component: Register
  },
  {
    //3. 首页
    path: '/home',
    component: Home,
    children: [
      {
        //3.1 经营概况
        path: 'manageCondition/:homePart',
        component: ManageCondition
      },
      {
        //3.2 收费管理
        path: 'costManage',
        component: CostManage
      },
      {
        //3.3 药品零售
        path: 'drugSale',
        component: DrugSale
      },
      {
        //3.4 新开就诊
        path: 'newSeeDoctor/:homePart',
        component: NewSeeDoctor
      },
      {
        //3.5 挂号管理
        path: 'registrationManage',
        component: RegistrationManage
      },
      {
        //3.6 患者管理
        path: 'sinkPersonManage',
        component: SinkPersonManage
      },
      {
        //3.7 统计报表
        path: 'statisticsTable',
        component: StatisticsTable
      },
      {
        //3.8 系统设置
        path: 'systemSetting',
        component: SystemSetting
      },
      {
        //3.9 会员管理
        path: 'vipManage',
        component: VipManage
      },
      {
        //3.10 工作空间
        path: 'workSpace/:homePart',
        component: WorkSpace
      },
      {
        //3.11 药品管理
        path: 'drugManage',
        component: DrugManage
      },
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
