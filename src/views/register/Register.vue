<template>
  <LoginOrRegister>
    <register-form slot="loginOrRegister"/>
  </LoginOrRegister>
</template>

<script>
import RegisterForm from "@/views/register/children/RegisterForm";
import LoginOrRegister from "@/views/login/children/LoginOrRegister";

export default {
  name: "register",
  components: {RegisterForm, LoginOrRegister}
}
</script>

<style scoped>
</style>