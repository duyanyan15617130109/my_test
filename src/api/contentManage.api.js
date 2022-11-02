// 内容管理
exports.api = {
  // 菜单数据
  menuTree: { url: "/ContentRest/getContentNameList", method: "POST" },
  // 通过权限获取菜单数据
  queryMenusByToken: { url: "/MenuRest/queryMenusByToken", method: "POST" },
  // 菜单对应表格数据
  menuTableData: { url: "/ContentRest/getContentByNameAndStatus", method: "POST" },

  // 文章预览
  articlePreviewInfo: { url: "/ContentRest/getContent", method: "POST" },

  tourAct: { url: "ContentRest/waiwangGetContent", method: "POST" },

  // 文章点击数
  articleClickNumber: { url: "/ContentRest/setArticleClickNumber", method: "POST" },

  // 文章新增修改
  addAndupdateContent: { url: "/ContentRest/saveOrUpdateContent", method: "POST" },

  // 查看文章流程
  articleFlow: { url: "/approval/queryApprovalById", method: "POST" },

  // 文章发布
  publishcontent: { url: "/contentapprove/publishcontent", method: "POST" },

  // 文章删除
  deletecontent: { url: "/contentapprove/deletecontent", method: "POST" },

  // 文章撤回
  back: { url: "/contentapprove/back", method: "POST" },

  // 审批页面文章流程
  listapprovelog: { url: "/contentapprove/listapprovelog", method: "POST" },
};
