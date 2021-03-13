<template>
  <el-row class="container">
    <el-col :span="24" class="header"> </el-col>
    <el-col :span="24" class="main">
      <aside style="background:#2F4051;padding-top:0;overflow-y: auto;" :class="collapsed ? 'menu-collapsed' : 'menu-expanded'"></aside>
      <section style="margin:10px 10px 10px 0" :class="$route.path == '/home/home' ? 'content-container-home' : 'content-container'">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      collapsed: false,
    }
  },
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="stylus">
widthHeight = 100%
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: widthHeight;
  .header{
    height:60px
  }
  .main {
    display: flex;
    background: #f2f2f2;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 236px;
      width: 236px;
      background: #fff;
      margin-right: 10px;
    }
  }
}
</style>
