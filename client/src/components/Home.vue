<template>
  <div>
    <NavBar></NavBar>
    <Mainpage></Mainpage>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Mainpage from '@/components/Mainpage'
export default {
  components: {
    NavBar,
    Mainpage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
