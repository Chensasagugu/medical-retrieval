<template>
  <div class="image-detail">
    <h1>{{ result.name }}</h1>
    <el-row>
      <el-col :xs="24" :sm="12">
        <div class="image-container">
          <img :src="result.url" alt="Image" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12">
        <el-card>
          <div class="card-container">
            <p>
              <span class="label">来源：</span>
              <span class="value">{{ result.source }}</span>
            </p>
            <p>
              <span class="label">肺部CT总层数：</span>
              <span class="value">{{ result.totalLayers }}</span>
            </p>
            <p>
              <span class="label">当前层数：</span>
              <span class="value">{{ result.currentLayer }}</span>
            </p>
            <p>
              <span class="label">病人年龄：</span>
              <span class="value">{{ result.age }}</span>
            </p>
            <p>
              <span class="label">病例名：</span>
              <span class="value">{{ result.caseName }}</span>
            </p>
            <p>
              <span class="label">CT创建日期：</span>
              <span class="value">{{ result.createDate }}</span>
            </p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ImageDetail",
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.image-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  height: 400px;
  overflow: hidden;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: 400px;
  overflow-y: scroll;
}

.label {
  font-weight: bold;
}

.value {
  margin-left: 10px;
}
</style>
