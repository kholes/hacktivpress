<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h2>Articles</h2>
        <ul>
          <li v-for="val in articles">
            <router-link :to="{name: 'Article', params: {id: val._id}}">{{ val.article }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-8">
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapState(['articles'])
    },
    methods: {
      ...mapActions(['getArticles'])
    },
    created () {
      this.getArticles()
    }
  }
</script>