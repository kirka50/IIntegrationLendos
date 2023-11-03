<template>
  <div class="team-title">
    <img src="/teamHackEkb.png" alt="asd">
    <img :src="TeamRound" alt="asd">

  </div>
  <div class="whois">
    И тут тоже контент
  </div>
  <div class="what-we-do">
    Контунт тут
  </div>
</template>

<script>
import TeamRound from '@/assets/teamround.svg'
import randomSvg from '@/assets/circle-heat-svgrepo-com.svg'
export default {
  name: "MainPage",
  data(){
    return{
      TeamRound,
    }
  },
}
</script>

<style scoped lang="scss">
@import "public/fonts";
@mixin borders{
  padding-left:10% ;
  padding-right:10% ;
}
  .team-title{
    background-color: #38465B;
    display: block;
    justify-content: center;
    img {
      max-width: 100%;

      display: flex;
    }



  }
  .whois{
    @include borders;
    font-weight: bold;
  }
</style>