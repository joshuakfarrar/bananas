<template>
  <div class="hello">
    <h3>Hello, {{ name }}!</h3>
    <h4>When is your birthday?</h4>
    <div class="error" v-show="error.message">{{ error.message }}</div>
    <datepicker v-model="date" :inline="true" :initial-view="'month'" :calendar-class="'calendar'"></datepicker>
    <button type="submit" @click="onSubmit">Submit</button>
    <button class="logout" @click="logout">Logout</button>
  </div>
</template>

<script>
import { logout } from '../auth'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'EnterBirthday',
  data () {
    return {
      error: {},
      name: 'Joshua',
      date: ''
    }
  },
  methods: {
    logout: function () {
      logout()
      this.$router.push('/')
    },
    onSubmit: function () {
      if (this.$data.date === '') {
        this.$data.error = { message: 'That is not a valid date!' }
        return
      }
      this.$store.commit('setBirthday', this.$data.date)
      this.$router.push('avoid')
    }
  },
  components: {
    Datepicker
  }
}
</script>

<style>
.calendar {
  margin: 0 auto;
}
</style>

<style scoped>
button {
  margin: 12px 0 0;
  background-color: #42b983;
  border: none;
  color: white;
  padding: 8px 24px;
  border: 1px solid #42b983;
}

.logout {
  background-color: white;
  color: #42b983;
  border: 1px solid #42b983;
}

.error {
  color: red;
  margin: 0 0 12px;
}
</style>
