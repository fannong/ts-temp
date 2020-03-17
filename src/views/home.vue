<template>
  <div class="home">
    <dash-board
      :prop-b="1"
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
  private handleButtonClick (e) {
    console.log('home', e)
  }
  handleButtonReset (e) {
    console.log('handleButtonReset', e)
  }
}
</script>
