<template>
  <div>
    <el-row style="margin-bottom: 5px">
      <el-button type="primary" @click="handleAdd">添加出版社</el-button>
    </el-row>
    <el-row>
      <el-table
        :data="publishersList"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
      </el-table>
    </el-row>

    <el-dialog title="添加出版社" v-model="dialogFormVisible">
      <el-form ref="postForm" :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
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
import { getPublishers, addPublish } from "@/api/publishers";

export default {
  data() {
    return {
      publishersList: [],
      dialogFormVisible: false,
      form: {
        name: ""
      },
      formLabelWidth: "120px"

    };
  },
  name: "index",
  created() {
    this.getPublishers();
  },
  methods: {
    async getPublishers() {
      const res = await getPublishers();
      let { code, message, data } = res.data;
      if (code == 200) {
        this.publishersList = data;
        this.$message(message);
      }
    },
    async addData() {
      const formdata = this.form;
      const res = await addPublish(formdata);
      let { code, message, obj } = res.data;
      if (code == 200) {
        this.$message(message);
        this.publishersList.push(obj);
        this.dialogFormVisible = false
      }
    },

    //点击新增弹出框
    handleAdd() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        //调用resetFields方法，重置表单
        this.$refs["postForm"].resetFields();
      });
    }
  }
};
</script>
<style scoped>

</style>