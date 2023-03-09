<template>
<base-wrapper isGray>
  <div class="visionBlock">
    <section-title mainTitle="Enhance knowledge & Vision"></section-title>
    <div class="visionBlock__chapters">
      <div class="visionBlock__chapterItem" v-for="chapter in chapters" :key="chapter.id">
        <p class="visionBlock__chapterTitle">{{ chapter.title }}</p>
        <p class="visionBlock__chapterDesc">{{ chapter.desc }}</p>
        <ul class="visionBlock__pages">
          <li class="visionBlock__pagesCount">Pages : <span class="visionBlock__count">{{ chapter.count }}pages</span></li>
          <li class="visionBlock__pagesCount">Length : <span class="visionBlock__time">{{ chapter.time }}</span></li>
        </ul>
      </div>
    </div>
    <base-btn link centered withBg btnTitle="Start a 15-Days Free Trail"></base-btn>
    <p class="visionBlock__chapterInfo">Short description about each chapter</p>
    <p class="visionBlock__questions"><router-link to="/about" class="visionBlock__link">Have any questions?</router-link> Contact us</p>
  </div>
</base-wrapper>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "VisionBlock",
  components: {},

  setup() {
    const chapters = reactive([
      {
        id: 'chapter1',
        title: "Chapter-1 Get Started Intro",
        desc: "You can double your knowledge by reading this ever needed book that can last a lifetime.",
        count: "106",
        time: "2 hours"
      },
      {
        id: 'chapter2',
        title: "Chapter-1 Get Started Intro",
        desc: "You can double your knowledge by reading this ever needed book that can last a lifetime.",
        count: "180",
        time: "3 hours"
      },
      {
        id: 'chapter3',
        title: "Chapter-1 Get Started Intro",
        desc: "You can double your knowledge by reading this ever needed book that can last a lifetime.",
        count: "250",
        time: "4 hours"
      },
      {
        id: 'chapter4',
        title: "Chapter-1 Get Started Intro",
        desc: "You can double your knowledge by reading this ever needed book that can last a lifetime.",
        count: "175",
        time: "3 hours"
      }
    ])
    return {
      chapters
    }
  }
}
</script>

<style scoped lang="scss">
.visionBlock {
  padding: 116px 70px;

  &__chapters {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 30px;
    margin-bottom: 60px;
  }

  &__chapterItem {
    max-width: 635px;
    width: 100%;
    background-color: #ffffff;
    padding: 42px;
    box-sizing: border-box;
  }

  &__chapterTitle {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #1B3764;
  }

  &__chapterDesc {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 19px;
    line-height: 32px;
    color: #969AA0;
  }

  &__chapterInfo {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #969AA0;
    margin-bottom: 0;
  }

  &__questions {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #969AA0;
    margin: 0;
  }

  &__link {
    color: #1B3764;
    text-decoration: none;
    font-weight: 600;
  }

  &__pages {
    padding: 0 0 0 15px;
    max-width: 356px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__pagesCount {
    font-family: 'Cardo';
    font-weight: 400;
    font-size: 22px;
    line-height: 31px;
    color: #1B3764;

    &::marker {
      color: #FFCA42;
      font-size: 35px;
    }
  }

  &__count,
  &__time {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;
    color: #969AA0;
  }
}

</style>