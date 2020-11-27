<template>
    <login-or-register>
      <login-form slot="loginOrRegister"/>
    </login-or-register>
</template>

<script>
import LoginForm from "@/views/login/children/LoginForm";
import LoginOrRegister from "@/components/content/LoginOrRegister";
export default {
  name: "longin",
  components: {
    LoginForm,LoginOrRegister
  }
}
</script>

<style scoped>
</style>