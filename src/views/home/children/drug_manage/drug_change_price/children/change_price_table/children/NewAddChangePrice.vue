<template>
  <sn-three-col-space>
    <sn-card-with-title slot="spaceContent">
      <!-- 标题 -->
      <sn-row-has-two-col :left="20" :right="4" slot="title">
        <sn-text
            text="新增调价"
            slot="one-col"
            font-weight="bold"
            :move-down="10"
            :font-size="20"
            font-color="#666EE8"/>
        <div slot="two-col">
          <el-button type="primary" plain @click="finishDrugChangePrice">
            <sn-text text="完成调价"/>
          </el-button>
          <el-button type="primary" plain @click="returnUp">
            <sn-text text="返回"/>
          </el-button>
        </div>
      </sn-row-has-two-col>

      <!-- 调价内容-->
      <div slot="content">
        <el-table
            :data="changePriceTableData"
            :height="400"
            stripe
            style="width: 100%"
            :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
            :cell-style="{'text-align':'center'}">
          <el-table-column prop="id" label="序号"></el-table-column>
          <el-table-column prop="drugId" label="药品编码" width="110px"/>
          <el-table-column prop="name" label="药品名称"/>
          <el-table-column prop="buyId" label="采购编号"/>
          <el-table-column prop="specification" label="规格"/>
          <el-table-column prop="stock" label="库存量"/>
          <el-table-column prop="batchNumber" label="批号"/>
          <el-table-column prop="buyPrice" label="采购价(元)"/>
          <el-table-column prop="originalSale" label="原零售价(元)"/>
          <el-table-column label="现零售价(元)">
            <template slot-scope="scope">
              <sn-input :input-value-from-parent="scope.row.nowSale" class="move-up"/>
            </template>
          </el-table-column>

          <el-table-column prop="priceDifferent" label="差价"/>
          <el-table-column prop="proportion" label="比例"/>

          <el-table-column label="备注" width="160">
            <template slot-scope="scope">
              <sn-input input-placeholder="备注" class="move-up"/>
            </template>
          </el-table-column>

        </el-table>
      </div>

    </sn-card-with-title>
  </sn-three-col-space>
</template>

<script>
export default {
  name: "NewAddChangePrice",
  data() {
    return {
      changePriceTableData: [
        {
          id: '1',
          drugId: '12654',
          name: '氯化钠注射液',
          buyId: 'SP5641231654',
          specification: '6g*10袋/盒',
          stock: '300盒',
          batchNumber: '54156421',
          buyPrice: '2.0',
          originalSale: '3.0',
          nowSale: '1.5',
          priceDifferent: '0.5',
          proportion: '50%',
        }
      ]
    }
  },
  methods: {
    finishDrugChangePrice() {
      this.$router.push("/home/drugChangePrice/13")
    },
    returnUp() {
      this.$router.push("/home/drugChangePrice/13")
    }
  },
}
</script>

<style scoped>
.move-up {
  position: relative;
  bottom: 5px;
}
</style>