<template>
  <LoginOrRegister>
    <register-form slot="loginOrRegister"/>
  </LoginOrRegister>
</template>

<script>
import RegisterForm from "@/views/register/children/RegisterForm";
import LoginOrRegister from "@/components/content/LoginOrRegister";

export default {
  name: "register",
  components: {RegisterForm, LoginOrRegister}
}
</script>

<style scoped>
</style>