<template>
  <div class="container">
    <h2>{{article.title}}</h2>
    <p>{{article.article}}</p>
    <p>{{article.Author}}</p>
    <i>{{article.createdAt}}</i>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    props: ['id'],
    computed: {
      ...mapState(['article'])
    },
    methods: {
      ...mapActions(['getArticle'])
    },
    created () {
      this.getArticle(this.id)
    }
  }
</script>