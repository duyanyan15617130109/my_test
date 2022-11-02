exports.api = {
    // 置顶管理菜单数据
    menuData: { url: '/TopManagement/getTopMenu', method: 'POST' },

    // 根据菜单查询表格数据
    queryTopManagement: { url: '/TopManagement/queryTopManagement', method: 'POST' },

    // 修改是否置顶
    updateContentTop: { url: '/TopManagement/updateContentTop', method: 'POST' },
    
    // 根据四级菜单去查询
    getContentText: { url: '/TopManagement/getContentText', method: 'POST' },
}