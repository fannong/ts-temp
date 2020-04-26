<template>
  <div class="home">
    <dash-board
      :prop-b="1"
      :prop-c='2'
      @buttonclick="handleButtonClick"
      @change-event-name="handleButtonReset"
      prop-a="dashboard页">
    </dash-board>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DashBoard from './dashboard/index.vue'
//
// import Vue from 'vue'

@Component({
  name: 'Home',
  components: {
    DashBoard
  }
})

export default class extends Vue {
  private handleButtonClick (e:any) {
    enum Color {Red, Green, Blue}
    let c = Color.Blue
    console.log(c)
  }
  handleButtonReset (e:any):void {
    console.log('handleButtonReset', e)
  }
}
</script>
