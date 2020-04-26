<template>
  <div style="text-align: left;padding-left: 200px">
    <div>propa:{{ propA }}</div>
    <div>propb:{{ propB }}</div>
    <div>dataA:{{ dataA }}</div>
    <div v-for="(item, index) in dataB" :key="index">dataB:{{ item }}</div>
    <div>computedName:{{ computedName }}</div>
    <el-button @click="handleButtonClick">请点击</el-button>
    <el-button @click="handleButtonReset">重置</el-button>

    <el-input v-model="inputValue"></el-input>

    <el-form ref="inputForm" :model="formData">
      <el-form-item prop="a">
        <el-input type="number" v-model="formData.a"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch, Ref } from 'vue-property-decorator'
import { Form } from 'element-ui'
import myMixin from '../../mixin/myMixin'

export interface A {
  /**
   * interObj的注释
   */
  a: number | null,
  b: string
}

@Component({
  mixins: [ myMixin ]
})

export default class DashBoard extends Vue {
  // $refs: {
  //   inputForm: HTMLAudioElement
  // }

  private dataA:string = '通过private申明data'
  private dataB:string[] = ['a', 'bb', 'ccc']
  // private inputValue:string = 'string'
  private formData:A = {
    a: null,
    b: '123'
  }

  private data () {
    return {
      a: '1'
    }
  }

  @Prop({ default: '??' }) private propA!: string
  @Prop({ default: 'default Value' }) propB!: string | number
  @Prop([String, Number]) propC: string | number

  // @Model装饰器接收2个参数：1.event,事件名，相当于 model api中的event; 2.options {} ,该options跟@Prop的第一个参数一致
  @Model('change', { default: 'hello world' }) readonly inputValue!: string

  public created ():void {
    let a: [number, string] // 元组类型
    a = [1, '1']
    let b:Array<number> = [1, 2, 3] // 数组泛型
    b = [1, 2]
    let c:number[]
    c = [3, 4]
    console.log('created' + a)
  }

  get computedName ():string | number { /**
     * interObjde的注释
     */
    return 'computed name' /**
     * interObjde的注释
     */
  }

  @Emit('buttonclick')
  private handleButtonClick (e:any) {
    let num1:number = 1
    let num2:number = 1
    var res = num1 === num2
    this.dataA = '已通过点击按钮改变dataA的值'
    return '这是buttonclick emit的值'
  }

  // @Emit中的参数作为事件名，如果参数为空，则将方法名转化为驼峰格式的事件名
  @Emit('change-event-name')

  // @Ref() inputForm!: Form //TODO 如何定义ref指向元素或者组件

  // 方法中的参数作为事件的参数，如果方法有return值，则return值取代方法的参数作为事件的参数
  public handleButtonReset (e:any): number {
    const ref:any = this.$refs.inputForm
    ref.resetFields()
    // (this.$refs.inputForm as Form).resetFields()
    // this.$refs.inputForm.resetFields()
    return 10000
  }

  // @Watch是个对象，有键，有值
  @Watch('dataA', { immediate: true, deep: false })
  onDataAChanged (val: string, oldVal: string) {
    let tuple:[number, string, null]
    tuple = [2, 'string', null]
    const messArray: [number, string, null] = [1, 'string', null] // 元组
    console.log('onDataAChanged', tuple, messArray, val, oldVal)
  }
}
</script>
