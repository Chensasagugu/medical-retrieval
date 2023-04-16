<!--  -->
<template>
  <div class="">
    <ImageDetail :result="selectedResult"></ImageDetail>
  </div>
</template>

<script>
import ImageDetail from "@/views/retrieval/ImageDetail.vue"
export default {
  name: "test",
  components:{
    ImageDetail,
  },
  data() {
    //这里存放数据
    return {
      selectedResult: {
        name: "病例1",
        url: "/example/output/1.jpg",
        source: "test source",
        totalLayers: 300,
        currentLayer: 143,
        age: 30,
        caseName: "COVID-19肺炎",
        createDate: "2022-06-22",
      },
    };
  }
};
</script>