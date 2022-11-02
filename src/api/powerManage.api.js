exports.api = {
  // 文件上传
  uploadFile: { url: "/xxpl-remoteRequest/uploadFileToOssOrObs", method: "POST", headers: { "Content-Type": "multipart/form-data" } },
  // 用电信息查询管理接口
  electTableData: { url: "/ElectricityRest/getElectricityPageBySome", method: "POST" },

  // 承诺书签订情况
  getCommitmentSigning: { url: "/MenuRest/getCommitmentSigning", method: "POST" },

  // **-- 电力用户相关接口
  // 首页最新消息
  latestInfoList: { url: "/InfoQueryRest/queryLatestInfoList", method: "POST" },
  // 首页热点消息
  hotInfoList: { url: "/InfoQueryRest/queryHotInfoList", method: "POST" },
  // 其他页面文章列表
  allInfoList: { url: "/InfoQueryRest/queryAllInfoList", method: "POST" },
  // 市场成员信息
  companyList: { url: "/InfoQueryRest/queryCompanyList", method: "POST" },

  // **结束

  // 下拉框数据字典
  queryAllDict: { url: "/InfoQueryRest/queryAllDict", method: "POST" },
  // *售电公司相关接口

  // 填报页面
  // 从注册获取企业基本信息
  querySellInfo: { url: "/InfoQueryRest/querySellInfo", method: "POST" },
  // 获取是否签订免责书
  queryDisclaimer: { url: "/InfoSubmitRest/queryDisclaimer", method: "POST" },
  // 填报页面所有下拉框的数据接口
  selDict: { url: "/MenuRest/selDict", method: "POST" },
  // 企业性质下拉框的数据
  queryChild: { url: "/CompanyTypeRest/queryChild", method: "POST" },
  // 保存免责书时间
  insertDisclaimer: { url: "/InfoSubmitRest/insertDisclaimer", method: "POST" },
  // 企业基本信息
  basicInfo: { url: "/InfoSubmitRest/querySellBasicInfo", method: "POST" },
  // 保存企业基本信息
  sellBasicInfo: { url: "/InfoSubmitRest/saveSellBasicInfo", method: "POST" },
  // 新增资产证明
  insertAsset: { url: "/InfoSubmitRest/insertAsset", method: "POST" },
  // 保存人员信息至本地库
  insertUser: { url: "/InfoSubmitRest/insertUser", method: "POST" },
  // 新增增量配电公司情况
  insertIncremental: { url: "/InfoSubmitRest/insertIncremental", method: "POST" },
  // 获取资产信息
  assetList: { url: "/InfoSubmitRest/queryAssetList", method: "POST" },
  // 获取人员信息
  staffList: { url: "/InfoSubmitRest/queryStaffList", method: "POST" },
  // 获取关联信息
  correlationList: { url: "/InfoSubmitRest/queryCorrelationList", method: "POST" },
  // 新增关联企业信息
  insertCorrelation: { url: "/InfoSubmitRest/insertCorrelation", method: "POST" },
  // 删除关联企业信息
  deleteCorrelation: { url: "/InfoSubmitRest/deleteCorrelation", method: "POST" },
  // 获取变更情况
  assetChangeList: { url: "/InfoSubmitRest/queryAssetChangeList", method: "POST" },
  // 新增变更情况信息
  insertChange: { url: "/InfoSubmitRest/insertChange", method: "POST" },
  // 删除变更情况信息
  deleteChange: { url: "/InfoSubmitRest/deleteChange", method: "POST" },
  // 获取配电公司情况
  incrementalInfo: { url: "/InfoSubmitRest/queryIncrementalInfo", method: "POST" },
  // 获取其他信息
  otherInfoList: { url: "/InfoSubmitRest/queryOtherInfoList", method: "POST" },
  // 新增其他信息
  insertOther: { url: "/InfoSubmitRest/insertOther", method: "POST" },
  // 删除其他信息
  deleteOther: { url: "/InfoSubmitRest/deleteOther", method: "POST" },
  // 获取股权信息
  stockList: { url: "/InfoSubmitRest/queryStockList", method: "POST" },
  // 发布
  releaseInfo: { url: "/InfoSubmitRest/releaseInfo", method: "POST" },
  // 查询发布记录
  logById: { url: "/InfoSubmitRest/queryLogById", method: "POST" },
  // 发布预览
  allList: { url: "/InfoSubmitRest/queryAllInfo", method: "POST" },

  // *结束

  // ****电力用户相关接口
  // 填报页面
  // 获取用电单元
  queryUnitUseInfo: { url: "/InfoQueryRest/queryUnitUseInfo", method: "POST" },
  // 从注册获取企业基本信息
  queryUserInfoFromOtherSystem: { url: "/InfoQueryRest/queryUserInfoFromOtherSystem", method: "POST" },
  // 获取电力用电基本信息
  userBasicInfo: { url: "/InfoSubmitRest/queryUserBasicInfo", method: "POST" },
  // 保存电力用户基本信息
  saveUserBasicInfo: { url: "/InfoSubmitRest/saveUserBasicInfo", method: "POST" },
  // 获取用电情况
  userPowerList: { url: "/InfoSubmitRest/queryUserPowerList", method: "POST" },
  // 新增用电情况
  insertUserPower: { url: "/InfoSubmitRest/insertUserPower", method: "POST" },
  // 删除用电情况
  deleteUserPower: { url: "/InfoSubmitRest/deleteUserPower", method: "POST" },
  // 获取大型电力用户检修计划
  userPlanOverhaulList: { url: "/InfoSubmitRest/queryUserPlanOverhaulList", method: "POST" },
  // 删除大型电力用户检修计划
  deleteOverhaul: { url: "/InfoSubmitRest/deleteUserPlanOverhaul", method: "POST" },
  // 新增大型电力用户检修计划
  insertUserPlanOverhaul: { url: "/InfoSubmitRest/insertUserPlanOverhaul", method: "POST" },

  // ****结束

  // ****发电企业相关接口
  // 填报页面
  // 获取地区数据
  queryArea: { url: "/InfoQueryRest/queryArea", method: "POST" },
  // 获取机组数据
  queryUnitInfo: { url: "/InfoQueryRest/queryUnitInfo", method: "POST" },
  // 从发电企业注册获取企业基本信息
  queryProdInfoFromOtherSystem: { url: "/InfoQueryRest/queryProdInfoFromOtherSystem", method: "POST" },
  // 获取发电企业基本信息
  prodBasicInfo: { url: "/InfoSubmitRest/queryProdBasicInfo", method: "POST" },
  // 保存发电企业基本信息
  saveProdBasicInfo: { url: "/InfoSubmitRest/saveProdBasicInfo", method: "POST" },
  // 获取电厂机组信息
  unitInfoList: { url: "/InfoSubmitRest/queryUnitInfoList", method: "POST" },
  // 新增电厂机组信息
  insertUnitInfo: { url: "/InfoSubmitRest/insertUnitInfo", method: "POST" },
  // 删除电厂机组信息
  deleteUnitInfo: { url: "/InfoSubmitRest/deleteUnitInfo", method: "POST" },
  // 获取机组发电信息
  unitGenerationList: { url: "/InfoSubmitRest/queryUnitGenerationList", method: "POST" },
  // 新增机组发电信息
  insertUnitGeneration: { url: "/InfoSubmitRest/insertUnitGeneration", method: "POST" },
  // 删除机组发电信息
  deleteUnitGeneration: { url: "/InfoSubmitRest/deleteUnitGeneration", method: "POST" },
  // 获取机组停运信息
  unitShutdownList: { url: "/InfoSubmitRest/queryUnitShutdownList", method: "POST" },
  // 新增机组停运信息
  insertUnitShutdown: { url: "/InfoSubmitRest/insertUnitShutdown", method: "POST" },
  // 删除机组停运信息
  deleteUnitShutdown: { url: "/InfoSubmitRest/deleteUnitShutdown", method: "POST" },
  // 获取机组出力受阻信息
  unitBlockList: { url: "/InfoSubmitRest/queryUnitBlockList", method: "POST" },
  // 新增机组出力受阻信息
  insertUnitBlock: { url: "/InfoSubmitRest/insertUnitBlock", method: "POST" },
  // 删除机组出力受阻信息
  deleteUnitBlock: { url: "/InfoSubmitRest/deleteUnitBlock", method: "POST" },
  // 获取机组检修及改造计划
  unitOverhaulList: { url: "/InfoSubmitRest/queryUnitOverhaulList", method: "POST" },
  // 新增机组检修及改造计划
  insertUnitOverhaul: { url: "/InfoSubmitRest/insertUnitOverhaul", method: "POST" },
  // 删除机组检修及改造计划
  deleteUnitOverhaul: { url: "/InfoSubmitRest/deleteUnitOverhaul", method: "POST" },
  // 新增股权信息
  insertStock: { url: "/InfoSubmitRest/insertStock", method: "POST" },
  // 删除股权信息
  deleteStock: { url: "/InfoSubmitRest/deleteStock", method: "POST" },
  
  // 发电企业 ----依申请披露
  // 查询表格接口
  getUserPworInfor: { url: "/ApplicationDisclosureRest/getApplicationDisclosureInfo", method: "POST" },
  // 用户信息查询
  tabMenuList: { url: "/MenuRest/queryFirstMenuByPower", method: "POST" },
  userInfoMenuList: { url: "/MenuRest/queryMenuByPower", method: "POST" },

  //获取对应所有的公司信息
  queryCompanyByType: { url: "/InfoQueryRest/queryCompanyByType", method: "POST" },

  //获取市场成员信息
  queryCompanyInfoByStatus: { url: "/InfoQueryRest/queryCompanyInfoByStatus", method: "POST" },

  // 根据表格中的查看数据查询详情数据
  getDataInfo: { url: "/ApplicationDisclosureRest/getDataInfo", method: "POST" },

  // 数据详情导出
  // dataExcel: { url: '/ApplicationDisclosureProduceRest/dataExcel', method: 'POST' },

  // 数据详情导出
  dataExcel: { url: "/ApplicationDisclosureRest/dataExcel", method: "GET" },

  // 根据户号查询户名及企业名称
  getAccountNameByNumber: { url: "/ApplicationDisclosureRest/queryCompanyAndAccountNameByNumber", method: "POST" },

  // 新增-修改用电信息查询申请
  saveDisclosureInfo: { url: "/ApplicationDisclosureRest/saveApplicationDisclosureInfo", method: "POST" },

  // 点击查看按钮获取对应数据
  getUserElectricityInfo: { url: "/ApplicationDisclosureRest/getUserElectricityInfo", method: "POST" },

  // 意见按钮
  getOpinion: { url: "/ApplicationDisclosureRest/getOpinion", method: "POST" },
  // ****结束

  // *****电力用户 表格数据查询
  powerDatas: { url: "/ApplicationDisclosureUserRest/getApplicationDisclosureInfo", method: "POST" },

  // // *****电力用户 意见按钮
  getPowerOpinion: { url: "/ApplicationDisclosureUserRest/getOpinion", method: "POST" },

  // *****电力用户 通过按钮
  getPass: { url: "/ApplicationDisclosureUserRest/applicationDisclosurePass", method: "POST" },

  // *****电力用户 拒绝按钮
  getReject: { url: "/ApplicationDisclosureUserRest/applicationDisclosureReject", method: "POST" },

  // ******查询四级菜单
  queryMenuListByName: { url: "/InfoQueryRest/queryMenuListByName", method: "POST" },
};
