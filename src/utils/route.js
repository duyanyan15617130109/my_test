/*
 * @Descripttion:
 * @plugin:
 * @Author: yky
 * @Date: 2022-06-02 14:35:43
 */
// import home from '../views/fillin/index.vue'

export default [
  // {
  //     path: '/home/home',
  //     name: 'home',
  //     meta: { title: '基础样式页面', required: true, icon: 'el-icon-eleme' },
  //     component: () =>
  //         import ('@/page/home/home.vue'),
  // },
  // {
  //     path: '/platform/inforDisclosure',
  //     name: 'inforDisclosure',
  //     meta: { title: 'yky信息披露模板', required: true },
  //     component: () =>
  //         import ('@/page/platform/inforDisclosure/index.vue'),
  // },
  // {
  //     path: 'testyky',
  //     name: 'powerManage',
  //     meta: { title: 'yky测试深层路由', required: true, icon: 'el-icon-eleme' },
  //     children: [{
  //         path: '1',
  //         name: '1',
  //         meta: { title: '1级页面', required: true },
  //         children: [],
  //     }, ],
  // },
  {
    path: "/platform/tourist",
    name: "/platform/tourist",
    meta: { title: "游客页面", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/tourist/index.vue"),
  },
  {
    path: "/platform/commitmentSign",
    name: "commitmentSign",
    meta: { title: "承诺书签订情况", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/commitmentSign/index.vue"),
  },
  {
    path: "/platform/powerManage",
    name: "powerManage",
    meta: { title: "用电信息查询管理", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/home/home.vue"),
  },
  {
    path: "/platform/menuManage",
    name: "menuManage",
    meta: { title: "菜单管理", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/menuManage/index.vue"),
  },
  {
    path: "/platform/contentManage",
    name: "contentManage",
    meta: { title: "内容管理", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/contentManage/manage.vue"),
    children: [
      {
        path: "index",
        name: "contentManageIndex",
        meta: { title: "内容", required: true, icon: "el-icon-eleme" },
        component: () => import("@/page/platform/contentManage/index.vue"),
      },
    ],
  },
  {
    path: "/platform/topManage",
    name: "topManage",
    meta: { title: "置顶管理", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/topManage/manage.vue"),
    children: [
      {
        path: "index",
        name: "topManageIndex",
        meta: { title: "置顶", required: true, icon: "el-icon-eleme" },
        component: () => import("@/page/platform/topManage/index.vue"),
      },
    ],
  },
  {
    path: "/platform/approvalManage",
    name: "approvalManage",
    meta: { title: "审批管理", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/approvalManage/index.vue"),
  },
  {
    path: "/platform/dataReport",
    name: "dataReport",
    meta: { title: "监控统计", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/dataReport/manage.vue"),
    children: [
      {
        path: "index",
        name: "dataReportIndex",
        meta: { title: "数据日报", required: true, icon: "el-icon-eleme" },
        component: () => import("@/page/platform/dataReport/index.vue"),
      },
    ],
  },
  {
    path: "/platform/monitorStat",
    name: "monitorStat",
    meta: { title: "数据监控及统计", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/monitorStat/index.vue"),
  },
  {
    path: "/platform/hitsCount",
    name: "hitsCount",
    meta: { title: "数据点击量统计", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/hitsCount/index.vue"),
  },
  {
    path: "/platform/userInforService",
    name: "user-inforService",
    meta: { title: "信息查询", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/userInforService/index.vue"), //user-inforService
  },
  {
    path: "/platform/userInforFill",
    name: "user-inforFill",
    meta: { title: "填报页面", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/userInforFill/index.vue"), //user-inforFill
  },
  {
    path: "/platform/hairInforAuthor",
    name: "hair-inforAuthor",
    meta: { title: "依申请披露", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/hairInforAuthor/index.vue"), //hair-inforAuthor
  },
  {
    path: "/platform/historical",
    name: "historical",
    meta: { title: "签约用户历史电量查询", required: true, icon: "el-icon-eleme" },
    component: () => import("@/page/platform/historical/index.vue"), //hair-inforAuthor
  },
];
