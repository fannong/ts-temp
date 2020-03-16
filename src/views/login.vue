<template>
  <div class="about">
    <h1>登录页用饿了么实现</h1>
    <el-input v-model="inputValue"></el-input>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'login',
  components: {
  }
})

export default class extends Vue {
    private inputValue:number = 123
}
</script>
