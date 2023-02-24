<template>
    <div class="search-page">
      <el-form :model="searchForm" ref="searchForm" class="search-form">
        <el-form-item label="输入图片">
          <el-upload
            action="/"
            :before-upload="beforeUpload"
            :on-success="onSuccess"
            :show-file-list="false"
          >
            <el-button type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="输出数量">
          <el-input-number v-model="outputNum" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchImages">检索</el-button>
        </el-form-item>
      </el-form>
      <el-progress v-if="showProgress" :percentage="progress"></el-progress>
      <div class="result-container" v-if="showResults">
        <h3>检索结果</h3>
        <el-card
          v-for="(result, index) in results"
          :key="index"
          class="image-card"
        >
          <div class="image-wrapper">
            <img :src="result.url" />
          </div>
          <div class="image-info">
            <span class="image-name">{{ result.name }}</span>
          </div>
        </el-card>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageSearch",
    data() {
      return {
        searchForm: {
          image: "",
        },
        outputNum: 3,
        showProgress: false,
        progress: 0,
        showResults: false,
        results: [],
      };
    },
    methods: {
      beforeUpload(file) {
        this.searchForm.image = URL.createObjectURL(file);
        return false;
      },
      onSuccess(response) {
        console.log(response);
      },
      searchImages() {
        this.showProgress = true;
        this.progress = 0;
        this.showResults = false;
        this.results = [];
        setTimeout(() => {
          let imageNames = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
          for (let i = 0; i < this.outputNum; i++) {
            this.results.push({
              url: `https://dummyimage.com/300x300/000/fff&text=${imageNames[i]}`,
              name: imageNames[i],
            });
          }
          this.showProgress = false;
          this.showResults = true;
        }, 3000);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .search-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .search-form {
    margin-bottom: 20px;
  }
  
  .result-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .image-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 20px;
  padding: 20px;
  width: 200px;
}

.image-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.image-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.image-card p {
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
}