<template>
    <el-aside class="aside">
      <el-menu
        :router="true"
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/authors/">
          <i class="el-icon-menu"></i>
          <template #title>作者管理</template>
        </el-menu-item>
        <el-menu-item index="/publishers/">
          <i class="el-icon-menu"></i>
          <template #title>出版社管理</template>
        </el-menu-item>
        <el-menu-item index="/books/">
          <i class="el-icon-menu"></i>
          <template #title>书籍管理</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
  name: "index"
};
</script>

<style scoped>

</style>