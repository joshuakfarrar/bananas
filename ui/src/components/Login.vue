<template>
  <div class="hello">
    <h1>Birthday Sadness Avoidance System</h1>
    <h3>Safeguard your stomach, avoid recalled noms!</h3>
    <h2>Login</h2>
    <div class="error" v-show="error.message">{{ error.message }}</div>
    <vue-form :state="formstate" @submit.prevent="onSubmit">
        <validate tag="label">
          <span>Email</span>
          <input v-model="model.email" name="email" type="email" required />

          <field-messages name="email" show="$dirty && $touched">
            <div slot="required">Email is a required field</div>
            <div slot="email">Email is not valid</div>
          </field-messages>
        </validate>

        <validate tag="label">
          <span>Password</span>
          <input v-model="model.password" required name="password" type="password" />

          <field-messages name="password" show="$dirty && $touched">
            <div slot="required">Password is required</div>
          </field-messages>
        </validate>

        <button type="submit">Login</button>
      </vue-form>
  </div>
</template>

<script>
import { login, setAccessToken } from '../auth'

export default {
  name: 'Login',
  data () {
    return {
      error: {},
      formstate: {},
      model: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit: async function () {
      if (this.formstate.$invalid) {
        return
      }
      login(this.$data.model).then(data => {
        if (data.accessToken) {
          setAccessToken(data.accessToken)
          this.$router.push('birthday')
        } else {
          this.error = data
        }
      }).catch(err => {
        console.log('err', err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

input {
  display: block;
  margin: 0 auto;
  padding: 10px;
  background-image: none !important;
  font-size: 14px;
  width: 256px;
  margin: 0 auto 12px;
}

a {
  color: #42b983;
}

button {
  background-color: #42b983;
  border: none;
  color: white;
  padding: 8px 24px;
}

.error {
  color: red;
  margin: 0 0 12px;
}
</style>
