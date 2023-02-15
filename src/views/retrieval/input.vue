<template>
  <div>
    <!--输入图片-->
    <el-row>
      <el-col>
        <div id="inputBox">
          <el-upload action="#" list-type="picture-card" :auto-upload="false" :on-change="showResult">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <!--检索按钮-->
    <el-row style="margin-top:20px">
        <el-col span=24>
            <el-form :inline="true" :model="formInline">
                <el-form-item label="Please enter the number of images you want to retrieve">
                    <el-input v-model="searchNum" placeholder="topK"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search">Retrieval</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
    <!--检索结果-->
    <el-row v-show="true" :gutter="20" style="margin-top:20px">
      <el-col
        :span=4
        v-for="(o, index) in 10"
        :key="o"
        :offset="index >= 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px'}" style="margin-top:10px">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;height: 10px;">
            <span>Result Case:{{caseNames[index]}}</span>
            <div class="bottom clearfix">
              <time class="time">{{currentDate}}</time>
              <el-button type="text" class="button">Case Info</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "RetrievalInput",

  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      resultShow : false,
      searchNum: 10,
      caseNames:[
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
      ]
    };
  },
  computed:{
    currentDate:function(){
        var now = new Date();                                                                                                     
		var year = now.getFullYear(); //得到年份
		var month = now.getMonth();//得到月份
		var date = now.getDate();//得到日期
		month = month + 1;
		if (month < 10) month = "0" + month;
		if (date < 10) date = "0" + date;
		var time = year + "-" + month + "-" + date; 
        return time;
    }
  },

  mounted() {},

  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    showResult(){
        this.resultShow = !this.resultShow
    }
  },
};
</script>

<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
el-card{
    height: 50px;
    width: 50px;
}
</style>