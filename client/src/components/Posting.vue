<template>
  <div class="container">
  <form @submit.prevent="newArticle(newArticle)">
  <fieldset>
    <legend>New Posting Article</legend>
       <div class="form-group">
      <label for="category">Select category</label>
      <select class="form-control" id="category">
        <option value="Sport">Sport</option>
        <option value="Techonology">Techonology</option>
      </select>
    </div>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title ...">
    </div>
    <div class="form-group">
      <label for="article">Article</label>
      <textarea class="form-control" id="article" rows="3" placeholder="Create article..."></textarea>
    </div>
    </fieldset>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
</div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      category: '',
      title: '',
      article: '',
      author: '',
      createdAt: new Date()
    },
    methods: {

    }
  }
</script>