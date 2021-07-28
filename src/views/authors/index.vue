<template>
  <div>
    <el-row style="margin-bottom: 5px">
      <el-button type="primary" @click="handleAdd">添加作者</el-button>
    </el-row>
    <el-row>
      <el-table
        :data="authorsList"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="username"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
      </el-table>
    </el-row>

    <el-dialog title="添加作者" v-model="dialogFormVisible">
      <el-form ref="postForm" :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addData">确 定</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { getAuthors, addAuthor } from "@/api/authors";

export default {
  data() {
    return {
      authorsList: [],
      dialogFormVisible: false,
      form: {
        username: "",
        email: ""
      },
      formLabelWidth: "120px"

    };
  },
  name: "index",
  created() {
    this.getAuthors();
  },
  methods: {
    async getAuthors() {
      const res = await getAuthors();
      let { code, message, data } = res.data;
      if (code == 200) {
        this.authorsList = data;
        this.$message(message);
      }
    },
    async addData() {
      const formdata = this.form;
      const res = await addAuthor(formdata);
      let { code, message, obj } = res.data;
      console.log(res.data)
      if (code == 200) {
        this.$message(message);
        this.authorsList.push(obj);
        this.dialogFormVisible = false;
      }
    },

    //点击新增弹出框
    handleAdd() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        //调用resetFields方法，重置表单
        console.log(this.$refs["postForm"]);
        this.$refs["postForm"].resetFields();
      });
    }
  }
};
</script>
<style scoped>

</style>