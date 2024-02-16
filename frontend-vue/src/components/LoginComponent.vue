<script>
import axios from 'axios'

export default {
    data() {
        return {
            username: '',
            password: '',
            errorMessage:''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('/api/Auth/Login', {
                UserName: this.username,
                Password: this.password
                });
                const token = response.data.token;
                localStorage.setItem('token', token);
            } catch (error) {
                this.errorMessage = 'Invalid username or password';
            }
        }
    }
};
</script>

<template>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </form>
  </template>