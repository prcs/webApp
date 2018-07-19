<template>
    <div>
      <form action="/action_page.php">
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" v-model="email" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" v-model="password" class="form-control" id="pwd">
        </div>
        <div class="checkbox">
          <label><input type="checkbox"> Remember me</label>
        </div>
        <button type="submit" class="btn btn-default" @click="login()">Submit</button>
        <button type="submit" class="btn btn-default" @click="register()">Register</button>
      </form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted () {
    console.log('oak', process.env.NODE_ENV)
  },
  methods: {
    login: function () {
      let user = {
        email: 'john.doe@domain.com',
        password: 'pass123456'
      }
      this.$auth.login(user).then(function (response) {
        console.log(response)
      })
    },
    register: function () {
      this.$auth.register({ name, email, password }).then(function () {
        // Execute application logic after successful registration
      })
    }
  }
}
</script>
