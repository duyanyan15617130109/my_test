
<!-- 利用递归组件实现多级菜单 -->
<template>
  <div class="bgk">
    <div class="leftMenuBk" :style="isCollapse">
      <el-scrollbar class="scrollbar-wrapper">
        <div>
          <el-button type="primary" @click="isShow=!isShow">{{buttonText()}}</el-button>
          <!-- <i :class="[isShow==true? 'el-icon-s-unfold':'el-icon-s-fold']" @click="isShow=!isShow" style="font-size: 25px; color: #000;"></i> -->
        </div>
        <!-- 侧边栏菜单区域 -->
        <el-menu style="height:100vh" text-color="#000" :popper-append-to-body="true" :hide-timeout="500" class="el-menu-vertical-demo" :collapse="isShow" :unique-opened="true" v-if="sidebarList">
          <div v-for="(item, index) in sidebarList" :key="index">
            <TreeMenu :treedata="item"></TreeMenu>
          </div>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>
 
<script>
import TreeMenu from "../components/treemenu.vue";
export default {
  name: "Sidebar",
  components: {
    TreeMenu,
  },
  data() {
    return {
      // 是否折叠
      isShow: false,
    };
  },
  computed: {
    isCollapse() {
      return (params) => {
        if (isShow == true) {
          return { 'width': '200px' }
        } else {
          return { 'width': '64px' }
        }
      }
    },
    buttonText(){
      return()=>{
        if(this.isShow == false){
          return '收起菜单'
        }else{
          return '展开菜单'
        }
      }

    },
    sidebarList() {
      return [
        {
          key: "index",
          ico: "el-icon-document",
          value: "导航一",
          menuGrade:'1',
        },
        {
          key: "permission",
          ico: "el-icon-data-line",
          value: "导航二",
          menuGrade:'1',
          child: [
            {
              key: "adminlist",
              ico: "el-icon-document",
              value: "选项1",
              menuGrade:'2',
            },
            {
              key: "role",
              ico: "el-icon-document",
              value: "选项2",
              menuGrade:'2',
            },
            {
              key: "authManage",
              ico: "el-icon-document",
              value: "选项3",
              menuGrade:'2',
            },
          ],
        },
        {
          key: "member",
          ico: "el-icon-printer",
          value: "导航三",
          menuGrade:'1',
          child: [
            {
              key: "/member/memberList",
              ico: "el-icon-document",
              value: "选项1",
              menuGrade:'2',
              child: [
                {
                  key: "/member/memberList",
                  ico: "el-icon-document",
                  value: "选项1",
                  menuGrade:'3',
                },
              ]

            },
            {
              key: "/member/memberSearch",
              ico: "el-icon-document",
              value: "选项2",
              menuGrade:'2',
            },
            {
              key: "New_business",
              ico: "el-icon-document",
              value: "选项3",
              menuGrade:'2',
            },
            {
              key: "Real_name",
              ico: "el-icon-document",
              value: "选项4",
              menuGrade:'2',
            },
            {
              key: "invitation",
              ico: "el-icon-document",
              value: "选项5",
              menuGrade:'2',
            },
          ],
        },
      ];
    },
  },
  methods:{
    menuJump(){
      console.log("菜单")
    }
  }

};
</script>
<style lang="scss" scoped>
.leftMenuBk {
  /* background: none !important; */
  //background: url("../../../../../assets/knowloge/menu.png") no-repeat;
  //background-size: 100% 100%;
}
::v-deep .menuCollapse :not(:first-child) {
  display: none;
}
// ::v-deep .el-menu{
//     background: none ;
// }

::v-deep .el-menu:not(.el-menu--collapse) {
  width: 100%;
}
::v-deep .el-submenu__title:hover {
  background: none;
}
::v-deep .el-menu-item:focus,
.el-menu-item:hover {
  background: none;
}

::v-deep .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>