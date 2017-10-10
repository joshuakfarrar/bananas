<template>
  <div class="hello">
    <h3>{{ name }}, you told us your birthday is {{ prettyDate($store.state.birthday) }}.</h3>
    <h4>You should avoid the following foods...</h4>
    <ul>
      <li v-for="food in $store.state.foodsToAvoid ">
        {{ food }}
      </li>
    </ul>
    <button type="submit" @click="$router.push('birthday')">That isn't my birthday.</button>
    <button class="logout" @click="logout">Logout</button>
  </div>
</template>

<script>
import { logout } from '../auth'
import moment from 'moment'
export default {
  name: 'EnterBirthday',
  created () {
    if (this.$store.state.birthday === '') {
      this.$router.push('birthday')
    }
    this.$store.dispatch('fetchFoodsToAvoid')
  },
  methods: {
    logout: function () {
      logout()
      this.$router.push('/')
    },
    prettyDate: (date) => {
      return moment(date).format('MMMM Do')
    }
  },
  data () {
    return {
      name: 'Joshua'
    }
  }
}
</script>

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

ul {
  list-style: none;
}

li {
  margin: 0 0 12px;
}
</style>
