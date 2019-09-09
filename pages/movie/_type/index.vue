<template>
  <div class="page">
    <nuxt-link :to="`/movie/${$route.params.type}/${item.id}`" v-for="item in movieList" :key="item.id" class="movie-item">
      <img :src="item.images.large"/>
      <p>电影：{{item.title}}</p>
      <p>上映时间：{{item.mainland_pubdate}}</p>
      <p>类型：<el-tag v-for="item in item.genres" :key="item.index" class="success">{{item}}</el-tag></p>
    </nuxt-link>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  layout: "movie",
  async asyncData(context,callback) {
    let movieList = await axios.get(`/api/v2/movie/${context.params.type}`)
    callback(null,{
      movieList: movieList.data.subjects
    })
  },
};
</script>

<style scoped lang="less">
.page{
  display: flex;
  flex-wrap: wrap;
}
.movie-item{
  text-align: center;
  width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 10px #ccc;
  margin-top: 30px;
  padding: 20px 0px;
  border-radius: 20px;
  &:hover{
    box-shadow: 2px 20px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  p{
    line-height: 40px;
  }
  .success{
    margin-right: 10px;
  }
}
</style>
