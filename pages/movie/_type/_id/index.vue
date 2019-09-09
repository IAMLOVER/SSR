<template>
  <div class="movie-details">
    <img :src="movieDetails.images.large" alt="">
    <p>电影时长：{{movieDetails.durations}}</p>
    <p>电影简介：{{movieDetails.summary}}</p>
    <p>主演：<el-tag v-for="item in movieDetails.casts" :key="item.index">{{item.name}}</el-tag></p>
    <p>类型：<el-tag v-for="item in movieDetails.tags" :key="item.index">{{item}}</el-tag></p>
    <div class="img-box">
      <img :src="img.cover" v-for="img in movieDetails.photos" :key="img.index">
    </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
export default {
  layout: "movie",
  async asyncData(context, callback) {
    let movieDetails = await axios.get(`/api/v2/movie/subject/${context.params.id}`);
    console.log(movieDetails)
    callback(null, {
      movieDetails: movieDetails.data
    });
  }
};
</script>

<style lang="less" scoped>
.movie-details{
  padding: 10px;
  p{
    line-height: 40px;
    .el-tag{
      margin-right: 10px;
    }
  }
  .img-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    img{
      margin-right: 20px;
      margin-top: 30px;
      border-radius: 5px;
      &:hover{
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }
  }
}
</style>
