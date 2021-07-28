<template>
  <div>
    <el-row style="margin-bottom: 5px">
      <el-button type="primary" @click="handleAdd">添加书籍</el-button>
    </el-row>
    <el-row>
      <el-table
        :data="booksList"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="title"
          label="书籍名称">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格">
        </el-table-column>
        <el-table-column
          prop="publish_date"
          label="出版日期">
        </el-table-column>
        <el-table-column label="作者">
          <template #default="scope">
            {{ scope.row.authors.username }}
          </template>
        </el-table-column>

        <el-table-column label="出版社">
          <template #default="scope">
            <el-tag v-for="(item, index) in scope.row.publishs" :key="index"
                    :type="themeList[Math.floor(Math.random() * 4)]">{{ item.name }}
            </el-tag>

          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-dialog title="添加书籍" v-model="dialogFormVisible">
      <el-form ref="postForm" :model="form">
        <el-form-item label="书籍名称" :label-width="formLabelWidth" prop="title">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth" prop="price">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="作者" :label-width="formLabelWidth" prop="authors">
          <el-select v-model="form.authors" placeholder="请选择作者">
            <el-option v-for="( obj,index ) in authorsList" :label="obj.username" :value="obj.id"
                       :key="index"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出版社" :label-width="formLabelWidth" prop="publishers">
          <el-select v-model="form.publishers" placeholder="请选择出版社" multiple collapse-tags>
            <el-option v-for="( obj,index ) in publishersList" :label="obj.name" :value="obj.id"
                       :key="index"></el-option>
          </el-select>
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
import { getBooks, addBook } from "@/api/books";
import { getAuthors } from "@/api/authors";
import { getPublishers } from "@/api/publishers";

export default {
  data() {
    return {
      booksList: [],
      authorsList: [],
      publishersList: [],
      dialogFormVisible: false,
      form: {
        title: "",
        price: "",
        authors: "",
        publishers: []
      },
      themeList: ["success", "info", "warning", "danger"],
      formLabelWidth: "120px"

    };
  },
  name: "index",
  created() {
    this.getBooks();
    this.getAuthors();
    this.getPublishers();
  },
  methods: {
    async getBooks() {
      const res = await getBooks();
      let { code, message, data } = res.data;
      if (code == 200) {
        this.booksList = data;
        this.$message(message);
      }
    },
    async addData() {
      const formdata = this.form;
      let data = {};
      data["book"] = {"title":formdata.title,"price":formdata.price};
      data["publish_id_list"] = formdata.publishers;
      const res = await addBook(formdata.authors, data);
      let { code, message,obj } = res.data;
      if (code == 200) {
        this.$message(message);
        this.booksList.push(obj);
        this.dialogFormVisible = false;
      }
    },
    async getAuthors() {
      const res = await getAuthors();
      let { code, message, data } = res.data;
      if (code == 200) {
        this.authorsList = data;
      }
    },
    async getPublishers() {
      const res = await getPublishers();
      let { code, message, data } = res.data;
      if (code == 200) {
        this.publishersList = data;
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
.el-select {
  position: relative;
  line-height: 40px;
  width: 100%;
}
</style>