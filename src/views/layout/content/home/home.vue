<template>
  <div class="home">
    <!--1.  顶部区域布局---------- -->
    <div class="header">
      <div class="item">
        总销售额
        <div class="num">{{ totalSalesData.saleTotal | num }}</div>
        <div class="bottom">今日销售额：{{ totalSalesData.sale | num }}</div>
      </div>
      <div class="item">
        总访问量
        <div class="num">{{ totalSalesData.viewsTotal | num }}</div>
        <div class="bottom">今日访问量：{{ totalSalesData.views | num }}</div>
      </div>
      <div class="item">
        总收藏量
        <div class="num">{{ totalSalesData.collectTotal | num }}</div>
        <div class="bottom">今日收藏量：{{ totalSalesData.collect | num }}</div>
      </div>
      <div class="item">
        总支付量
        <div class="num">{{ totalSalesData.payTotal | num }}</div>
        <div class="bottom">今日支付量：{{ totalSalesData.pay | num }}</div>
      </div>
    </div>

    <!--2. 访问数据统计 ----------------->
    <div class="content">
      <div class="time-info" id="box13">
        <div class="title">月销售额</div>
        <div id="charts" style="width: 100%; height: 300px"></div>
      </div>
      <div class="area" id="box1">
        <div class="title">产品销售比例</div>
        <div id="pie" style="width: 100%; height: 300px"></div>
      </div>
    </div>

    <!-- 3.  -->
    <!-- 最新内容 -->
    <div class="home-footer">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>今日订单</span>
        </div>
        <div class="text item">
          <el-row>
            <el-col :span="8">
              <div>111</div>
            </el-col>
            <el-col :span="8">
              <div>222</div>
            </el-col>
            <el-col :span="8">
              <div>333</div>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>本月订单</span>
        </div>
        <div class="text item">
          <el-row>
            <el-col :span="8">
              <div>111</div>
            </el-col>
            <el-col :span="8">
              <div>222</div>
            </el-col>
            <el-col :span="8">
              <div>333</div>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>快捷入口</span>
        </div>
        <div class="text item">
          <el-button type="primary">产品管理</el-button>
          <el-button>消息管理</el-button>
          <el-button>内容管理</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      totalSalesData: {},
      totalOrderData: {},
    };
  },
  created() {
    this.totalInfo(), this.orderInfo();
  },
  mounted() {
    this.LineChart();
    this.PieChart();
    this.format();
  },
  methods: {
    async totalInfo() {
      let res = await this.$api.totalInfo();
      this.totalSalesData = res.data.data.list;
    },
    async orderInfo() {
      let res = await this.$api.OrderInfo();
      this.totalOrderData = res.data.list;
    },
    async format() {
      let res = await this.$api.format();
      console.log("获取图表动态数据----", res.data.result.data.sale_money);
      
    },
    LineChart() {
      var myChart = echarts.init(document.getElementById("charts"));
      myChart.setOption({
        tooltip: { trigger: "axis" },
        legend: {
          data: ["销售额", "销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: {},
        series: [
          {
            name: "销售额",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
          {
            name: "销量",
            type: "line",
            data: [5, 10, 31, 12, 10, 30],
            label: {
              show: "true",
            },
            position: "top",
            itemStyle: {
              color: "#ff5555",
            },
            smooth: true,
          },
        ],
      });
    },
    PieChart() {
      var chartDom = document.getElementById("pie");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "产品销售比例",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "审议" },
              { value: 735, name: "淘宝" },
              { value: 580, name: "京东" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },

  filters: {
    num: (val) => {
      val = "" + val; // 转换成字符串
      let int = val;
      int = int.split("").reverse().join(""); // 翻转整数
      let temp = ""; // 临时变量
      for (let i = 0; i < int.length; i++) {
        temp += int[i];
        if ((i + 1) % 3 === 0 && i !== int.length - 1) {
          temp += ","; // 每隔三个数字拼接一个逗号
        }
      }
      temp = temp.split("").reverse().join(""); // 加完逗号之后翻转
      return temp; // 返回
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  margin: 10px;
}

.header {
  display: flex;
  padding-right: 30px;

  .item {
    flex: 1;
    height: 100px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;
    color: #fff;
    // text-align: center;
    position: relative;

    .num {
      font-size: 22px;
      margin: 10px;
      color: #fff;
    }

    .bottom {
      position: absolute;
      border-top: 1px solid rgb(246, 245, 245);
      padding: 10px 20px;
      bottom: 0;
      right: 0;
      left: 0;
      color: #fff;
      font-weight: normal;
    }
  }

  .item:nth-child(1) {
    background-image: linear-gradient(#df887d, #88554d);
  }

  .item:nth-child(2) {
    background-image: linear-gradient(#409eff, #2e556e);
  }

  .item:nth-child(3) {
    background-image: linear-gradient(#b54fa8, #713c7a);
  }

  .item:nth-child(4) {
    background-image: linear-gradient(#1cd2f1, #39717a);
  }
}

// 图表

.content {
  margin: 20px;
  display: flex;
  height: 320px;

  .time-info {
    flex: 2;
    background: #fff;
    margin-right: 20px;
    padding: 10px;
  }

  .area {
    flex: 1;
    background: #fff;
    padding: 10px;
  }
}

//内容

.home-footer {
  display: flex;
  padding-left: 20px;
  margin-bottom: 20px;

  .box-card {
    flex: 1;
    margin-right: 30px;

    span {
      font-weight: 600;
    }
  }
}
</style>


