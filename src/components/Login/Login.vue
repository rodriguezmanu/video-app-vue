<template>
  <form @submit.prevent="login()">
    <input type="text" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button type="submit">Login</button>
  </form>
</template>

<script src="./Login.ts"></script>
<style src="./Login.scss"></style>
