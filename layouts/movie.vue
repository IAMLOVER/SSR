<template>
 <div class="page">
   <header-movie/>
   <nuxt/>
 </div>
</template>

<script>
 import HeaderMovie from '~/components/HeaderMovie'
 export default {
   components: {
     HeaderMovie,
   }
 }
</script>
