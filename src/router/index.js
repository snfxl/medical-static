import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
//药品结算
const CheckOutDrug = () => import ("@/views/home/children/drug_sale/CheckOutDrug")

//3.4 新开就诊
const NewSeeDoctor = () => import("@/views/home/children/new_see_doctor/NewSeeDoctor")
//3.5 挂号管理
//新增挂号
const NewAddRegistration = () => import("@/views/home/children/registration_manage/new_add_registration/NewAddRegistration")
//挂号记录
const RegistrationRecord = () => import("@/views/home/children/registration_manage/registration_record/RegistrationRecord")
//编辑挂号信息
const EditRegistrationInfo = () => import("@/views/home/children/registration_manage/registration_record/children/editRegistrationInfo/EditRegistrationInfo")

//3.6 患者管理
const SickManage = () => import("@/views/home/children/sick_manage/SickManage")
//编辑患者
const EditSick = () => import("@/views/home/children/sick_manage/EditSick")



//3.7 统计报表
const StatisticsTable = () => import("@/views/home/children/statistics_table/StatisticsTable")
//3.8 系统设置
const SystemSetting = () => import("@/views/home/children/system_setting/SystemSetting")
//3.9 会员管理
const VipManage = () => import("@/views/home/children/vip_manage/VipManage")
//3.10 工作空间
const WorkSpace = () => import("@/views/home/children/workspace/WorkSpace")



//3.11 药品管理
//>1 药品调价
const DrugChangePrice = () => import("@/views/home/children/drug_manage/drug_change_price/DrugChangePrice")
//>1.1 调价页面
const NewAddChangePrice = () => import("@/views/home/children/drug_manage/drug_change_price/children/change_price_table/children/NewAddChangePrice")
//>1.2 调价详情
const ChangePriceDetail = () => import("@/views/home/children/drug_manage/drug_change_price/children/change_price_table/children/ChangePriceDetail")




//>2 药品信息维护
const DrugInfoManage = () => import("@/views/home/children/drug_manage/drug_info_manage/DrugInfoManage")
//>3入库管理
const EnterStockManage = () => import("@/views/home/children/drug_manage/enter_stock_manage/EnterStockManage")
//>4出库管理
const OutStockManage = () => import("@/views/home/children/drug_manage/out_stock_manage/OutStockManage")
//>5库存盘点
const StockCheck = () => import("@/views/home/children/drug_manage/stock_check/StockCheck")
//>6库存管理
const StockManage = () => import("@/views/home/children/drug_manage/stock_manage/StockManage")

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
        path: 'manageCondition/:homeTitleIndex',
        component: ManageCondition
      },
      {
        //3.2 收费管理
        path: 'costManage/:homeTitleIndex',
        component: CostManage
      },
      {
        //3.3 药品零售
        path: 'drugSale/:homeTitleIndex',
        component: DrugSale
      },
      {
        path: 'checkOutDrug/:homeTitleIndex',
        component: CheckOutDrug
      },
      {
        //3.4 新开就诊
        path: 'newSeeDoctor/:homeTitleIndex',
        component: NewSeeDoctor
      },
      //3.5 挂号管理
      {
        //新增挂号
        path: 'newAddRegistration/:homeTitleIndex',
        component: NewAddRegistration
      },
      {
        //挂号记录
        path: 'registrationRecord/:homeTitleIndex',
        component: RegistrationRecord
      },
      {
        //编辑挂号信息
        path: 'editRegistrationInfo/:homeTitleIndex',
        component: EditRegistrationInfo
      },
      {
        //3.6 患者管理
        path: 'sickManage/:homeTitleIndex',
        component: SickManage,
      },

      {
        //编辑患者
        path: 'editSick/:homeTitleIndex',
        component: EditSick
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
        path: 'workSpace/:homeTitleIndex',
        component: WorkSpace
      },
      //3.11 药品管理
      {
        // >1 药品信息维护
        path: 'drugInfoManage/:homeTitleIndex',
        component: DrugInfoManage
      },
      {
        // >2 入库管理
        path: 'enterStockManage/:homeTitleIndex',
        component: EnterStockManage
      },
      {
        // >3 出库管理
        path: 'outStockManage/:homeTitleIndex',
        component: OutStockManage
      },
      {
        //>4 库存管理
        path: 'stockManage/:homeTitleIndex',
        component: StockManage
      },
      {
        // >5 库存盘点
        path: 'stockCheck/:homeTitleIndex',
        component: StockCheck
      },


      // >6 药品调价
      {
        path: 'drugChangePrice/:homeTitleIndex',
        component: DrugChangePrice
      },
      {
        // >6.1 新增调价
        path: 'newAddChangePrice/:homeTitleIndex',
        component: NewAddChangePrice
      },
      {
        // >6.2 调价详情
        path: 'changePriceDetail/:homeTitleIndex',
        component: ChangePriceDetail
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
