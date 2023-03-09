<template>
<base-wrapper>
  <div class="gialList">
    <section-title mainTitle="What Will You Learn?"></section-title>
    <div class="goalList__wrapper">
      <div class="goalList__content">
        <div class="goalList__item" v-for="goal in goalItem" :key="goal.number">
          <div class="goalList__numberBlock">
            <span class="goalList__num">{{ goal.number }}</span>
          </div>
          <p class="goalList__goalText">{{ goal.goalDesc }}</p>
        </div>
      </div>
      <div class="goalList__imgWrapper">
        <img src="../assets/learn.png" alt="" class="goalList__authorImg">
        <div class="goalList__yellowBlock"></div>
      </div>
    </div>
  </div>
</base-wrapper>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "GoalList",
  setup() {
    const goalItem = reactive([
      {
        number: "01",
        goalDesc: "Use HDFS & Map Reduce for storing & analyzing data at scale."
      },
      {
        number: "02",
        goalDesc: "Consume streaming data using Spark Streaming, Flink, and Storm."
      },
      {
        number: "03",
        goalDesc: "Choose an appropriate data storage technology for your application"
      },
      {
        number: "04",
        goalDesc: "Analyze non-relational data using HBase, Cassandra, and MongoDB."
      }
    ])
    return {
      goalItem
    }
  }

}
</script>

<style scoped lang="scss">
.goalList {
  &__wrapper {
    display: flex;
    margin-top: 110px;
    margin-bottom: 140px;
  }

  &__content {
    display: flex;
    max-width: 665px;
    width: 100%;
    gap: 30px;
    flex-wrap: wrap;
  }

  &__item {
    max-width: 303px;
    width: 100%;
    height: 272px;
    padding: 30px;
    background: #F4F8FF;
    box-sizing: border-box;
  }

  &__numberBlock {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #FFCA42;
    display: flex;align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }

  &__num {
    color: #1B3764;
    font-size: 23px;
    font-family: 'Cardo';
  }

  &__goalText {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #1B3764;
  }

  &__imgWrapper {
    position: relative;
    width: 100%;
    left: 200px;
  }

  &__yellowBlock {
    max-width: 500px;
    width: 100%;
    height: 590px;
    border: 10px solid #FFCA42;
  }

  &__authorImg {
    position: absolute;
    max-width: 525px;
    width: 100%;
    bottom: 48px;
    right: 306px;
  }

}

</style>