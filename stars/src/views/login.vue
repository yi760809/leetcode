<template>
  <div class="loginTemp">
    <div class="login_box">
      <el-form ref="form" :model="userform" label-width="80px">
        <el-form-item>
          <el-input v-model="userform.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="userform.password" placeholder="密码" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      userform: {
        username: "",
        password: "",
      },
    }
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit() {},
  },
}
</script>

<style scoped lang="stylus">
.loginTemp{
  width: 100%;
  height: 100%;
  background: url('../assets/img/bg.jpg')
}
.login_box{
  width: 300px;
  height 200px;
  background: #fff
}
</style>
