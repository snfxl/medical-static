<template>
  <sn-card-with-title>
    <div slot="title">
      <sn-title title="基本信息" :title-style="titleStyle"/>
    </div>
    <div slot="content">
      <sn-row-has-four-col>
        <sn-input slot="one-col" ref="name">
          <sn-must-text slot="title" text="患者姓名"/>
        </sn-input>
        <sn-input slot="two-col" ref="sickId">
          <sn-must-text slot="title" text="患者卡号"/>
        </sn-input>
        <sn-input-complex slot="three-col" ref="age">
          <sn-must-text slot="title" text="患者年龄"/>
        </sn-input-complex>
        <sn-date-picker slot="four-col" ref="birth">
          <sn-must-text slot="title" text="出生日期"/>
        </sn-date-picker>
      </sn-row-has-four-col>
      <sn-row-has-four-col>
        <sn-select slot="one-col" :select-data="sex" ref="sex">
          <sn-must-text text="性别" slot="title"/>
        </sn-select>
        <sn-input slot="two-col" ref="phoneNumber">
          <sn-must-text text="手机号码" slot="title"/>
        </sn-input>
        <sn-input slot="three-col">
          <sn-must-text text="证件号码" slot="title"/>
        </sn-input>
      </sn-row-has-four-col>
      <sn-row-has-two-col>
        <sn-select slot="one-col" :select-data="vipType">
          <sn-must-text text="会员类型" slot="title"/>
        </sn-select>
        <sn-date-picker slot="two-col">
          <sn-must-text text="到期时间" slot="title"/>
        </sn-date-picker>
      </sn-row-has-two-col>
      <sn-row-has-two-col class="margin-top-20">
        <sn-select-has-select slot="one-col">
          <sn-must-text text="地址" slot="title"/>
        </sn-select-has-select>
        <sn-input slot="two-col">
          <sn-must-text text="详细地址" slot="title"/>
        </sn-input>
      </sn-row-has-two-col>
    </div>
  </sn-card-with-title>
</template>

<script>
export default {
  name: "PersonBaseInfo",
  data() {
    return {
      titleStyle: {
        'color': '#21A3F1',
        'font-size': '18px'
      },
      sex: [
        {
          value: 0,
          label: '男'
        },
        {
          value: 1,
          label: '女'
        },
      ],
      vipType: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '非会员'
        },
        {
          value: 2,
          label: 'vip1'
        },
        {
          value: 3,
          label: 'vip2'
        },
        {
          value: 4,
          label: 'vip3'
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>