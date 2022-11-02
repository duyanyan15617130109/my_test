//获取调度中心的四级菜单请求的接口
exports.api = {
    // 文章类型相关接口查询总线接口 tableFile以及tableArticle类型
    queryAllArticleByMenuId: { url: '/queryArticleInfo/queryAllArticleByMenuId', method: 'POST' },
    // 发电机组年检修计划  table类型
    checkDynamoPlanYear: { url: '/pgagemp/checkDynamoPlanYear', method: 'POST' },
    // 发电机组月检修计划  table类型    
    checkEquipmentPlanMonth2: { url: '/pgagemp/checkEquipmentPlanMonth2', method: 'POST' },
    // 发电机组周检修计划  table类型
    checkEquipmentWeek: { url: '/pgagemp/checkEquipmentWeek', method: 'POST' },
    // 发电机组日检修计划  table类型
    checkEquipmentDaily: { url: '/pgagemp/checkEquipmentDaily', method: 'POST' },
    // 线路、变电站等输变电设备日检修计划 table类型
    checkEquipmentPlanDaily: { url: '/pgagemp/checkEquipmentPlanDaily', method: 'POST' },
    // 线路、变电站等输变电设备周检修计划 table类型
    checkEquipmentPlanWeek: { url: '/pgagemp/checkEquipmentPlanWeek', method: 'POST' },
    // 线路、变电站等输变电设备月检修计划 table类型
    checkEquipmentPlanMonth1: { url: '/pgagemp/checkEquipmentPlanMonth1', method: 'POST' },
    // 线路、变电站等输变电设备年检修计划 table类型
    checkEquipmentPlanYear: { url: '/pgagemp/checkEquipmentPlanYear', method: 'POST' },
    // 必开必停发电量需求（次月）  table类型
    queryMonthRequest: { url: '/clpgar/queryMonthRequest', method: 'POST' },
    // 输变电设备检修计划执行情况  table类型
    queryEquipmentInfo1: { url: '/emas/queryEquipmentInfo1', method: 'POST' },
    // 发电机组检修计划执行情况  table类型
    queryEquipmentInfo2: { url: '/emas/queryEquipmentInfo2', method: 'POST' },
    // 非统调电厂计量电量  table类型
    queryElectricityPower: { url: '/emonurpp/queryElectricityPower', method: 'POST' },
    // 变电设备投产/退役情况（计划） table类型
    queryEquipmentPlan1: { url: '/pggepipep/queryEquipmentPlan1', method: 'POST' },
    // 输电设备投产/退役情况（计划）  table类型
    queryEquipmentPlan2: { url: '/pggepipep/queryEquipmentPlan2', method: 'POST' },
    // 线路、变电站等输变电设备投产情况（实际）  table类型
    queryEquipmentPlan3: { url: '/pggepipep/queryEquipmentPlan3', method: 'POST' },
    // 线路、变电站等输变电设备退运情况（实际）  table类型
    queryEquipmentPlan4: { url: '/pggepipep/queryEquipmentPlan4', method: 'POST' },
    // 发电总出力预测  time类型
    LoadWeekForecast: { url: '/foesad/LoadWeekForecast', method: 'POST' },
    // 日前预测供需电力差额  table类型
    dailyDLForecast1: { url: '/foesad/dailyDLForecast1', method: 'POST' },
    // 日前预测供需电量差额  table类型
    dailyDLForecast2: { url: '/foesad/dailyDLForecast2', method: 'POST' },
    // 月度预测供需电力差额  table类型
    monthDLForecast1: { url: '/foesad/monthDLForecast1', method: 'POST' },
    // 月度预测供需电量差额  table类型
    monthDLForecast2: { url: '/foesad/monthDLForecast2', method: 'POST' },
    // 年度预测供需电力差额  table类型
    yearDLForecast1: { url: '/foesad/yearDLForecast1', method: 'POST' },
    // 年度预测供需电量差额  table类型
    yearDLForecast2: { url: '/foesad/yearDLForecast2', method: 'POST' },
    // 日前负荷预测  time类型
    dailyLoadForecast: { url: '/foesad/dailyLoadForecast', method: 'POST' },
    // 周前负荷预测  time类型
    weekLoadForecast: { url: '/foesad/weekLoadForecast', method: 'POST' },
    // 光伏机组总出力预测  time类型
    queryPhotovoltaicForecast1: { url: '/neof/queryPhotovoltaicForecast1', method: 'POST' },
    // 风电机组总出力预测  time类型
    queryPhotovoltaicForecast2: { url: '/neof/queryPhotovoltaicForecast2', method: 'POST' },
    // 参与市场新能源总出力预测  time类型
    queryPhotovoltaicForecast3: { url: '/neof/queryPhotovoltaicForecast3', method: 'POST' },
    // 周前抽蓄总出力预测  time类型
    queryPhotovoltaicForecast4: { url: '/neof/queryPhotovoltaicForecast4', method: 'POST' },
    // 周前新能源总出力预测  time类型
    queryPhotovoltaicForecast5: { url: '/neof/queryPhotovoltaicForecast5', method: 'POST' },
    // 非市场光伏出力预测  time类型
    queryNoMarketForecast1: { url: '/ofonmu/queryNoMarketForecast1', method: 'POST' },
    // 非市场风电出力预测  time类型
    queryNoMarketForecast2: { url: '/ofonmu/queryNoMarketForecast2', method: 'POST' },
    // 非市场核电出力预测  time类型
    queryNoMarketForecast3: { url: '/ofonmu/queryNoMarketForecast3', method: 'POST' },
    // 非市场水电出力预测  time类型
    queryNoMarketForecast4: { url: '/ofonmu/queryNoMarketForecast4', method: 'POST' },
    // 重要通道实际输电情况  time类型
    queryFactElectricity1: { url: '/aptotic/queryFactElectricity1', method: 'POST' },
    // 联络线潮流  time类型
    queryFactElectricity2: { url: '/aptotic/queryFactElectricity2', method: 'POST' },
    // 日前抽蓄计划发电总出力预测  time类型
    queryWaterForecast1: { url: '/hof/queryWaterForecast1', method: 'POST' },
    // 日前水电计划发电总出力预测  time类型
    queryWaterForecast2: { url: '/hof/queryWaterForecast2', method: 'POST' },
    // 省内电力平衡裕度  time类型
    querySpotInformation1: { url: '/ipsi/querySpotInformation1', method: 'POST' },
    // 可再生能源富余程度  time类型
    querySpotInformation2: { url: '/ipsi/querySpotInformation2', method: 'POST' },
    // 实际负荷  time类型
    queryInformationOfRun1: { url: '/srtlfbs/queryInformationOfRun1', method: 'POST' },
    // 系统备用  time类型
    queryInformationOfRun2: { url: '/srtlfbs/queryInformationOfRun2', method: 'POST' },
    // 实时频率  time类型
    queryInformationOfRun4: { url: '/srtlfbs/queryInformationOfRun4', method: 'POST' },

    // // 日前备用辅助服务需求量  time类型
    // queryDailyServiceRequest: { url: '/tdfassabafr/queryDailyServiceRequest', method: 'POST' },
    // // 日前市场出清的输电断面约束情况  time类型
    // queryDailyMarket: { url: '/tscabc/queryDailyMarket', method: 'POST' },
    // 2022-07-14
    // 日前备用辅助服务价格  time类型
    queryServicePrice: { url: '/queryServicePrice', method: 'POST' },
    // 日前市场出清总电量  time类型
    queryDailyMarketTotalElectricity: { url: '/scepae/queryDailyMarketTotalElectricity', method: 'POST' },
    // 实时市场出清总电量  time类型
    queryRealTimeMarketTotalElectricity: { url: '/scepae/queryRealTimeMarketTotalElectricity', method: 'POST' },
    // 日前备用辅助服务需求量  time类型
    queryDailyServiceRequest1: { url: '/tdfassabafr/queryDailyServiceRequest1', method: 'POST' },
    // 实时备用辅助服务需求总量  time类型
    queryDailyServiceRequest2: { url: '/tdfassabafr/queryDailyServiceRequest2', method: 'POST' },
    // 日前调度计划开停机机组组合  time类型
    dailyDdPlanUnit: { url: '/dasptsastuc/dailyDdPlanUnit', method: 'POST' },
    // 实际发电总出力  time类型
    queryUnitOutputInfo1: { url: '/unitOutput/queryUnitOutputInfo1', method: 'POST' },
    // 非市场光伏实时总出力  time类型
    queryUnitOutputInfo2: { url: '/unitOutput/queryUnitOutputInfo2', method: 'POST' },
    // 非市场风电实时总出力  time类型
    queryUnitOutputInfo3: { url: '/unitOutput/queryUnitOutputInfo3', method: 'POST' },
    // 非市场核电实时总出力  time类型
    queryUnitOutputInfo4: { url: '/unitOutput/queryUnitOutputInfo4', method: 'POST' },
    // 非市场水电实时总出力  time类型
    queryUnitOutputInfo5: { url: '/unitOutput/queryUnitOutputInfo5', method: 'POST' },
    // 光伏发电总实时出力  time类型
    queryUnitOutputInfo6: { url: '/unitOutput/queryUnitOutputInfo6', method: 'POST' },
    // 风电总实时出力  time类型
    queryUnitOutputInfo7: { url: '/unitOutput/queryUnitOutputInfo7', method: 'POST' },
    // 水电机组总实时出力  time类型
    queryUnitOutputInfo8: { url: '/unitOutput/queryUnitOutputInfo8', method: 'POST' },
    // 非市场化机组实际出力曲线  time类型
    queryUnitOutputInfo9: { url: '/unitOutput/queryUnitOutputInfo9', method: 'POST' },
    // 日前市场出清节点电价  time类型
    querySpotClearElectricity1: { url: '/electricity/querySpotClearElectricity1', method: 'POST' },
    // 日前市场电能分量  time类型
    querySpotClearElectricity2: { url: '/electricity/querySpotClearElectricity2', method: 'POST' },
    // 日前市场阻塞分量  time类型
    querySpotClearElectricity3: { url: '/electricity/querySpotClearElectricity3', method: 'POST' },
    // 日前市场网损分量  time类型
    querySpotClearElectricity4: { url: '/electricity/querySpotClearElectricity4', method: 'POST' },
    // 日前市场出清负荷侧电价  time类型
    querySpotClearElectricity5: { url: '/electricity/querySpotClearElectricity5', method: 'POST' },
    // 实时市场出清节点电价  time类型
    querySpotClearElectricity6: { url: '/electricity/querySpotClearElectricity6', method: 'POST' },
    // 实时市场电能分量  time类型
    querySpotClearElectricity7: { url: '/electricity/querySpotClearElectricity7', method: 'POST' },
    // 实时市场阻塞分量  time类型
    querySpotClearElectricity8: { url: '/electricity/querySpotClearElectricity8', method: 'POST' },
    // 实时市场网损分量   time类型
    querySpotClearElectricity9: { url: '/electricity/querySpotClearElectricity9', method: 'POST' },
    // 实时市场出清负荷侧电价  time类型
    querySpotClearElectricity10: { url: '/electricity/querySpotClearElectricity10', method: 'POST' },
    // 日前市场计算网损  time类型
    queryDailyTimeMarket: { url: '/conlfevlis/queryDailyTimeMarket', method: 'POST' },
    // 实时市场计算网损  time类型
    queryRealTimeMarket: { url: '/conlfevlis/queryRealTimeMarket', method: 'POST' },
    // 日前市场出清的输电断面约束情况  time类型
    queryDailyMarket1: { url: '/tscabc/queryDailyMarket1', method: 'POST' },
    // 日前市场出清的输电断面阻塞情况  time类型
    queryDailyMarket2: { url: '/tscabc/queryDailyMarket2', method: 'POST' },
    // 实时市场出清阻塞情况  time类型
    queryDailyMarket3: { url: '/tscabc/queryDailyMarket3', method: 'POST' },
    // 实际运行输电断面约束情况及其影子价格  time类型
    queryDailyMarket4: { url: '/tscabc/queryDailyMarket4', method: 'POST' },
    // 非统调电厂日前市场中标信息  time类型
    queryNuDailyMarketInfo: { url: '/nuappmbibtd/queryNuDailyMarketInfo', method: 'POST' },
    // 实时调频辅助服务里程价格  time类型
    queryRealTimeServiceLCPrice: { url: '/queryRealTimeServiceLCPrice', method: 'POST' },

    // 2022-07-18
    // 实时备用辅助服务价格  time类型
    queryRealTimeServicePrice: { url: '/queryRealTimeServicePrice', method: 'POST' },
    // 实时调频辅助服务容量价格  time类型
    queryRealTimeServiceRLPrice: { url: '/queryRealTimeServiceRLPrice', method: 'POST' },
    // 实时调频辅助服务需求总量  time类型
    queryDailyServiceRequest3: { url: '/tdfassabafr/queryDailyServiceRequest3', method: 'POST' },
    // 开停机不满最小约束时间机组名单  table类型
    queryNoLimitList: { url: '/tlouwsasanswtmcct/queryNoLimitList', method: 'POST' },
    // 必开必停机组名单及原因（次月）  table类型
    queryMonthRequestReason1: { url: '/clpgar/queryMonthRequestReason1', method: 'POST' },
    // 必开必停机组名单及原因  table类型
    queryMonthRequestReason2: { url: '/clpgar/queryMonthRequestReason2', method: 'POST' },
    // 抽蓄电站蓄水水位  time类型
    queryWaterLevel: { url: '/pspswl/queryWaterLevel', method: 'POST' },
    // 省内日总发电量  table类型
    queryUnitOutputInfo10: { url: '/unitOutput/queryUnitOutputInfo10', method: 'POST' },
    // 省外日送入总电量  table类型
    queryUnitOutputInfo11: { url: '/unitOutput/queryUnitOutputInfo11', method: 'POST' },
    // 统调电厂日总发电量  table类型
    queryUnitOutputInfo12: { url: '/unitOutput/queryUnitOutputInfo12', method: 'POST' },


    // 省内华东机组日总发电量  table类型
    queryUnitOutputInfo13: { url: '/unitOutput/queryUnitOutputInfo13', method: 'POST' },
    // 统调水电日总发电量  table类型
    queryUnitOutputInfo14: { url: '/unitOutput/queryUnitOutputInfo14', method: 'POST' },
    // 统调燃煤日总发电量  table类型
    queryUnitOutputInfo15: { url: '/unitOutput/queryUnitOutputInfo15', method: 'POST' },
    // 统调燃气日总发电量  table类型
    queryUnitOutputInfo16: { url: '/unitOutput/queryUnitOutputInfo16', method: 'POST' },
    // 统调核电日总发电量   table类型
    queryUnitOutputInfo17: { url: '/unitOutput/queryUnitOutputInfo17', method: 'POST' },
    // 机组状态   time类型
    queryUnitOutputInfo18: { url: '/unitOutput/queryUnitOutputInfo18', method: 'POST' },
    // 电网安全运行的主要约束条件-关键输电断面及线路传输限额   table类型
    queryElectricityTranLimit: { url: '/ktsaltl/queryElectricityTranLimit', method: 'POST' },
    // 省间现货成交电力及成交价格   time类型
    querySpotInformation3: { url: '/ipsi/querySpotInformation3', method: 'POST' },
    // 省间市场机组执行信息   time类型
    querySpotInformation4: { url: '/ipsi/querySpotInformation4', method: 'POST' },
    // 省间市场机组中标信息   table类型
    querySpotInformation6: { url: '/ipsi/querySpotInformation6', method: 'POST' },
    
    // 日前机组组合预计划   time类型
    querySpotInformation5: { url: '/ipsi/querySpotInformation5', method: 'POST' },
    // 日前系统间联络线输电曲线预测   time类型
    queryDailyBeforeTCPForecast: { url: '/tltcp/queryDailyBeforeTCPForecast', method: 'POST' },
    // 日内系统间联络线输电曲线预测   time类型
    queryDailyDuringTCPForecast: { url: '/tltcp/queryDailyDuringTCPForecast', method: 'POST' },
    // 月前系统间联络线输电能力预测   table类型
    queryMonthBeforeElectricityEnable: { url: '/tltcf/queryMonthBeforeElectricityEnable', method: 'POST' },
    // 周前系统间联络线输电能力预测   table类型
    queryWeekBeforeElectricityEnable: { url: '/tltcf/queryWeekBeforeElectricityEnable', method: 'POST' },
    // 年前系统间联络线输电能力预测   table类型
    queryYearBeforeElectricityEnable: { url: '/tltcf/queryYearBeforeElectricityEnable', method: 'POST' },
    // 重要线路与变压器平均潮流和热稳定限值   time类型
    queryImportantLimitVal: { url: '/hapfatsloilat/queryImportantLimitVal', method: 'POST' },
    // 现货市场不平衡资金明细及每项目不平衡资金分摊方式  table类型
    queryDiffTot: { url: '/finance/queryDiffTot', method: 'POST' },
    // 现货市场年度结算付费总体情况  table类型
    queryPaymentYear: { url: '/finance/queryPaymentYear', method: 'POST' },
    // 现货市场月度结算付费总体情况  table类型
    queryPaymentMonth: { url: '/finance/queryPaymentMonth', method: 'POST' },
    // 与市场主体之间的关联关系   table类型
    queryPartInterest: { url: '/finance/queryPartInterest', method: 'POST' },
    // 营销接口
    // 现货市场年度电费结算总体情况   table类型
    queryFlowYear: { url: '/marketing/queryFlowYear', method: 'POST' },
    // 现货市场月度电费结算总体情况   table类型
    queryFlowMonth: { url: '/marketing/queryFlowMonth', method: 'POST' },


    // 新增调度菜单
    //  第三方独立主体参与电力辅助服务旋转备用需求总量   time类型
    queryTotalSpinningReserveDemand: { url: '/electricity/queryTotalSpinningReserveDemand', method: 'POST' },
    // 第三方独立主体参与电力辅助服务削峰调峰需求总量   time类型
    queryTotalDemandForPeakShaving: { url: '/electricity/queryTotalDemandForPeakShaving', method: 'POST' },
    //  第三方独立主体参与电力辅助服务填谷调峰需求总量   time类型
    queryTotalDemandValleyShaving: { url: '/electricity/queryTotalDemandValleyShaving', method: 'POST' },
    // 第三方独立主体参与电力辅助服务旋转备用价格   time类型
    queryRotatingSparePrice: { url: '/electricity/queryRotatingSparePrice', method: 'POST' },

    //  第三方独立主体参与电力辅助服务削峰调峰价格   time类型
    queryPeakShavingPrice: { url: '/electricity/queryPeakShavingPrice', method: 'POST' },
    // 第三方独立主体参与电力辅助服务填谷调峰价格   time类型
    queryGrainFillingPeakShavingPrice: { url: '/electricity/queryGrainFillingPeakShavingPrice', method: 'POST' },
    //  第三方独立主体参与电力辅助服务旋转备用中标信息   time类型
    queryRotatingStandbyBidInformation: { url: '/electricity/queryRotatingStandbyBidInformation', method: 'POST' },
    // 第三方独立主体参与电力辅助服务削峰调峰中标信息   time类型
    queryBidWinningInformationPeakShaving: { url: '/electricity/queryBidWinningInformationPeakShaving', method: 'POST' },
    // 第三方独立主体参与电力辅助服务填谷调峰中标信息   time类型
    queryBidWinningInformationValleyShaving: { url: '/electricity/queryBidWinningInformationValleyShaving', method: 'POST' },
}