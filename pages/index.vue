<template>
  <div class="container">
     <header-movie></header-movie>
     <h1>欢迎查看电影，请点击上方导航</h1>
  </div>
</template>

<script>
import HeaderMovie from '~/components/HeaderMovie.vue'

export default {
  components: {
    HeaderMovie
  }
}
</script>
