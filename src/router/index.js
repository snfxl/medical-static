import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//1. 登录
const Login = () => import("@/views/login_register/login/Longin")
//2. 注册
const Register = () => import("@/views/login_register/register/Register")
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
//>1 患者统计
const SickStatistics = () => import("@/views/home/children/statistics_table/children/sick_statistics/SickStatistics")
//>2 药品统计
const DrugStatistics = () => import("@/views/home/children/statistics_table/children/drug_statistics/DrugStatistics")
//>3 收费统计
const CostStatistics = () => import("@/views/home/children/statistics_table/children/cost_statistics/CostStatistics")
//>4 检查项目统计
const CheckItemStatistics = () => import("@/views/home/children/statistics_table/children/check_item_statistics/CheckItemStatistics")


//3.8 系统设置
const SystemSetting = () => import("@/views/home/children/system_setting/SystemSetting")
//>1 基础设置
const BaseSetting = () => import("@/views/home/children/system_setting/children/base_setting/BaseSetting")
//>2 检查项目设置
const CheckItemSetting = () => import("@/views/home/children/system_setting/children/check_item_setting/CheckItemSetting")
//>3 诊所信息管理
const ClinicInfoManage = () => import("@/views/home/children/system_setting/children/clinic_info_manage/ClinicInfoManage")
//>4 费用设置
const CostSetting = () => import("@/views/home/children/system_setting/children/cost_setting/CostSetting")
//>5 字典表管理
const DictionaryTableManage = () => import("@/views/home/children/system_setting/children/dictionary_table_manage/DictionaryTableManage")
//>6 员工管理
const EmployeeManage = () => import("@/views/home/children/system_setting/children/employee_manage/EmployeeManage")
//>7 供应商管理
const SupplierManage = () => import("@/views/home/children/system_setting/children/supplier_manage/SupplierManage")
//>8 模板维护
const TemplateManage = () => import("@/views/home/children/system_setting/children/template_manage/TemplateManage")


//3.9 会员管理
const VipManage = () => import("@/views/home/children/vip_manage/VipManage")
//>1 会员信息
const VipSickInfo = () => import("@/views/home/children/vip_manage/vip_sick_info/VipSickInfo")
//>2 已收费记录
const HasCostRecord = () => import("@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/HasCostRecord")
//>3 未收费记录
const NotCostRecord = () => import("@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/NotCostRecord")
//>4 已退费记录
const ReturnCostRecord = () => import("@/views/home/children/vip_manage/vip_sick_info/children/cost_record/cost_record_detail/ReturnCostRecord")
//>5 编辑电子药方信息
const EditElectronicCase = () => import("@/views/home/children/vip_manage/vip_sick_info/children/electronic_medical_record/children/EditElectronicCase")

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
//>2.1 药品信息展示
const DrugInfoShow = () => import("@/views/home/children/drug_manage/drug_info_manage/drug_info_show/DrugInfoShow")
//>2.2 新增药品信息
const NewAddDrug = () => import("@/views/home/children/drug_manage/drug_info_manage/new_add_drug/NewAddDrug")

//>3入库管理
//>3.1 入库信息管理
const EnterStockInfo = () => import("@/views/home/children/drug_manage/enter_stock_manage/EnterStockInfo")
//>3.2 通过审核的入库信息
const EnterStockPassCheck = () => import("@/views/home/children/drug_manage/enter_stock_manage/EnterStockPassCheck")
//>3.3 未通过审核的入库信息
const EnterStockNotPassCheck = () => import("@/views/home/children/drug_manage/enter_stock_manage/EnterStockNotPassCheck")
//>3.4 未审核的入库信息
const EnterStockNotCheck = () => import("@/views/home/children/drug_manage/enter_stock_manage/EnterStockNotCheck")
//>3.5 新增入库信息
const NewAddEnterStockInfo = () => import("@/views/home/children/drug_manage/enter_stock_manage/NewAddEnterStockInfo")


//>4出库管理
//>4.1 出库信息
const OutStockInfo = () => import("@/views/home/children/drug_manage/out_stock_manage/OutStockInfo")
//>4.2 通过审核的信息
const OutStockPassCheck = () => import("@/views/home/children/drug_manage/out_stock_manage/OutStockPassCheck")
//>4.3 未通过审核的信息
const OutStockNotPassCheck = () => import("@/views/home/children/drug_manage/out_stock_manage/OutStockNotPassCheck")
//>4.4 未审核的信息
const OutStockNotCheck = () => import("@/views/home/children/drug_manage/out_stock_manage/OutStockNotCheck")
//>4.5 新增出库信息
const NewAddOutStockInfo = () => import("@/views/home/children/drug_manage/out_stock_manage/NewAddOutStockInfo")


//>5库存盘点
//>5.1 盘点记录
const StockCheckRecord = () => import("@/views/home/children/drug_manage/stock_check/StockCheckRecord")
//>5.2 盘点完成
const StockCheckFinish = () => import("@/views/home/children/drug_manage/stock_check/StockCheckFinish")
//>5.3 正在盘点
const StockCheckCurrent = () => import("@/views/home/children/drug_manage/stock_check/StockCheckCurrent")

//>6库存管理
const StockManage = () => import("@/views/home/children/drug_manage/stock_manage/StockManage")
//>6.1 库存管理详情
const StockManageDetail = () => import("@/views/home/children/drug_manage/stock_manage/children/stock_detail/StockManageDetail")

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
        //>1 新增挂号
        path: 'newAddRegistration/:homeTitleIndex',
        component: NewAddRegistration
      },
      {
        //>2 挂号记录
        path: 'registrationRecord/:homeTitleIndex',
        component: RegistrationRecord
      },
      {
        //>3 编辑挂号信息
        path: 'editRegistrationInfo/:homeTitleIndex',
        component: EditRegistrationInfo
      },


      {
        //3.6 患者管理
        path: 'sickManage/:homeTitleIndex',
        component: SickManage,
      },
      {
        //> 1编辑患者
        path: 'editSick/:homeTitleIndex',
        component: EditSick
      },
      {
        //3.7 统计报表
        path: 'statisticsTable',
        component: StatisticsTable,
        children: [
          {
            //>1 药品统计
            path: 'drugStatistics/:homeTitleIndex',
            component: DrugStatistics
          },
          {
            //>2 收费统计
            path: 'costStatistics/:homeTitleIndex',
            component: CostStatistics
          },
          {
            //>3 患者统计
            path: 'sickStatistics/:homeTitleIndex',
            component: SickStatistics
          },
          {
            //>4 检查项目统计
            path: 'checkItemStatistics/:homeTitleIndex',
            component: CheckItemStatistics
          },
        ]
      },

      {
        //3.8 系统设置
        path: 'systemSetting',
        component: SystemSetting,
        children: [
          {
            //>1 基础设置
            path: 'baseSetting/:homeTitleIndex',
            component: BaseSetting
          },
          {
            //>2 检查项目设置
            path: 'checkItemSetting/:homeTitleIndex',
            component: CheckItemSetting
          },
          {
            //>3 诊所信息管理
            path: 'clinicInfoManage/:homeTitleIndex',
            component: ClinicInfoManage
          },
          {
            // >4 费用设置
            path: 'costSetting/:homeTitleIndex',
            component: CostSetting
          },
          {
            //>5 字典表管理
            path: 'dictionaryTableManage/:homeTitleIndex',
            component: DictionaryTableManage
          },
          {
            //>6 员工管理
            path: 'employeeManage/:homeTitleIndex',
            component: EmployeeManage
          },
          {
            //>7 供应商管理
            path: 'supplierManage/:homeTitleIndex',
            component: SupplierManage
          },
          {
            //>8 模板维护
            path: 'templateManage/:homeTitleIndex',
            component:TemplateManage
          }
        ]
      },
      //3.9 会员管理
      {
        //>1 管理页面
        path: 'vipManage/:homeTitleIndex',
        component: VipManage
      },
      {
        //>2 会员信息
        path: 'vipSickInfo/:homeTitleIndex',
        component: VipSickInfo
      },
      {
        //>3 已收费记录
        path: 'hasCostRecord/:homeTitleIndex',
        component: HasCostRecord
      },
      {
        //>3 未收费记录
        path: 'notCostRecord/:homeTitleIndex',
        component: NotCostRecord
      },
      {
        //>4 已退费记录
        path: 'returnCostRecord/:homeTitleIndex',
        component: ReturnCostRecord
      },
      {
        //>4 编辑药方信息
        path: 'editElectronicCase/:homeTitleIndex',
        component: EditElectronicCase
      },

      //3.10 工作空间
      {
        path: 'workSpace/:homeTitleIndex',
        component: WorkSpace
      },
      //3.11 药品管理
      // >1 药品信息维护
      {
        // >1.1 药品信息展示
        path: 'drugInfoShow/:homeTitleIndex',
        component: DrugInfoShow
      },
      {
        // >1.2 新增药品信息
        path: 'newAddDrug/:homeTitleIndex',
        component: NewAddDrug
      },

      // >2 入库管理
      {
        //>2.1 入库信息
        path: 'enterStockInfo/:homeTitleIndex',
        component: EnterStockInfo
      },
      {
        //>2.2 审核通过入库信息
        path: 'enterStockPassCheck/:homeTitleIndex',
        component: EnterStockPassCheck
      },
      {
        //>2.3 审核未通过入库信息
        path: 'enterStockNotPassCheck/:homeTitleIndex',
        component: EnterStockNotPassCheck
      },
      {
        //>2.3 未审核入库信息
        path: 'enterStockNotCheck/:homeTitleIndex',
        component: EnterStockNotCheck
      },
      {
        //>2.4 新增入库信息
        path: 'newAddEnterStockInfo/:homeTitleIndex',
        component: NewAddEnterStockInfo
      },
      // >3 出库管理
      {
        //>3.1 出库信息
        path: 'outStockInfo/:homeTitleIndex',
        component: OutStockInfo
      },
      {
        //>3.2 审核通过信息
        path: 'outStockPassCheck/:homeTitleIndex',
        component: OutStockPassCheck
      },
      {
        //>3.3 审核未通过信息
        path: 'outStockNotPassCheck/:homeTitleIndex',
        component: OutStockNotPassCheck
      },
      {
        //>3.3 未审核信息
        path: 'outStockNotCheck/:homeTitleIndex',
        component: OutStockNotCheck
      },
      {
        //>3.4 新增出库信息
        path: 'newAddOutStockInfo/:homeTitleIndex',
        component: NewAddOutStockInfo
      },
      //>4 库存管理
      {
        path: 'stockManage/:homeTitleIndex',
        component: StockManage
      },
      {
        //>4.1 库存管理详情
        path: 'stockManageDetail/:homeTitleIndex',
        component: StockManageDetail
      },
      // >5 库存盘点
      {
        // >5.1 盘点记录
        path: 'stockCheckRecord/:homeTitleIndex',
        component: StockCheckRecord
      },
      {
        // >5.2 盘点完成
        path: 'stockCheckFinish/:homeTitleIndex',
        component: StockCheckFinish
      },
      {
        // >5.3 正在盘点
        path: 'stockCheckCurrent/:homeTitleIndex',
        component: StockCheckCurrent
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
