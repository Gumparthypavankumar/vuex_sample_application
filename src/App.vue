<template>
  <div class="container">
    <addpost></addpost>
    <posts></posts>
  </div>
</template>

<script>
import posts from './components/posts.vue';
import addpost from './components/addpost.vue'

export default {
  name: 'App',
  components: {
    posts,
    addpost
  }
}
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* text-align: center; */
  color: #2c3e50;
  margin:0px 10%;
}
</style>
