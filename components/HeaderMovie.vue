<template>
 <div class="header">
   <ul>
     <li>
       <nuxt-link to="/movie/in_theaters">正在热映</nuxt-link>
     </li>
     <li>
       <nuxt-link to="/movie/coming_soon">即将上映</nuxt-link>
     </li>
     <li>
       <nuxt-link to="/movie/top250">Top250</nuxt-link>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
.header{
  height: 50px;
  width: 100vw;
}
ul{
  display: flex;
  list-style: none;
  text-align: center;
  padding: 0;
  li{
    flex: 1;
    height: 50px;
    line-height: 50px;
    background-color: sienna;
    a{
      text-decoration: none;
      font-size: 30px;
      &:hover{
        color: #fff;
      }
    }
  }
}
</style>
