<template>
<div class="container">
  <h2>Dummy Page</h2>
  <button @click.prevent="logIn">login</button>
</div>
</template>

<script>
export default {
  name: 'Dummy',
  methods: {
    logIn () {
      this.$cookie.set('loggedIn', true, { expires: '1h' })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
