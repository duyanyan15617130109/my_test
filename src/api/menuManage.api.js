exports.api = {
  // 新增菜单
  addMenu: { url: "/MenuRest/add", method: "POST" },
  // 修改
  update: { url: "/MenuRest/update", method: "POST" },
  // 查询表格树 selTree
  list: { url: "/MenuRest/allMenu", method: "POST" },
  // 新增时的 树数据
  addSelTree: { url: "/MenuRest/selTree", method: "POST" },
  // 删除传ID
  delTree: { url: "/MenuRest/del", method: "POST" },
  // 现货专栏数据
  spotMenu: { url: "/MenuRest/spotMenu", method: "POST" },

  // 查看按钮数据
  searchRowData: { url: "/MenuRest/searchOne", method: "POST" },

  //查询按钮数据
  searchMenuList: { url: "/MenuRest/getMenuNameList", method: "POST" },

  // 归属部门接口
  departmentTreeList: { url: "/OrgRest/orgTree", method: "POST" },

  // 根据归属部门ID查询负责人和审核人
  queryPeopleList: { url: "/UserAccount/searchByOrgId", method: "POST" },

  // 现货专栏设置时间
  addSpot: { url: "/spot/add", method: "POST" },

  // 现货专栏查看时间
  querySpot: { url: "/spot/query", method: "POST" },
};
