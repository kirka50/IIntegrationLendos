<template>
  <div class="team-title">
    <div class="team-title__team-image">
      <div class="team-image__img">
        <img src="/teamHackEkb.png" alt="asd">
        <div class="img__ico">
          <img src="@/assets/teamround.svg" alt="asd">
        </div>
      </div>
    </div>
  </div>
  <div class="whois">
    <h1 class="whois__title">
      Кто мы ?
    </h1>
    <div class="whois__text-block">
      <div class="text-block__graphics">
        Графика
      </div>
      <div class="text-block__text">
        <h2>
          Группа разработчиков
        </h2>
        <p>
          Занимаемся разработкой программных продуктов с использованием нейронных сетей.
          Участвуем в соревнованиях и хакатонах. Мы нацелены на внедрение нейронных сетей в повседневную жизнь человека,
          делая наши продукты удобными и рентабельными среди пользователей.
        </p>

      </div>
    </div>
  </div>
  <div class="what-we-do">
    Контунт тут
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import "public/fonts";

@mixin borders {
  padding-left: 10%;
  padding-right: 10%;
}

.team-title {
  background-color: #38465B;
  display: block;
  justify-content: center;

  .team-title__team-image {
    .team-image__img {
      position: relative;

      img {
        max-width: 100%;
      }

      .img__ico {
        position: absolute;
        display: flex;
        justify-content: center;
        top: 80%;
        left: 0;
        width: 100%;
        pointer-events: none;

        img {
          max-width: 25%;
        }
      }
    }
  }
}

.whois {
  @include borders;
  font-weight: bold;
  background-color: #38465B;
  padding-top: 100px;
  h1{
    font-family: "Roboto", sans-serif;
    color: #FCFEFF;
    font-weight: 300;
    font-style: normal;
    font-size: 128px;

  }
  .whois__title{
  }
  .whois__text-block{
    display: flex;
    gap: 10%;
    .text-block__graphics{
      background-color: gray;
      height: 500px;
      min-width: 200px;
      border-radius: 20px;
    }
    .text-block__text{
      padding-top:0;

      h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 3em;
        color: #FCFEFF;
      }
      p {
        color: #FCFEFF;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;

        font-size: 32px;
        text-align: justify;

      }
    }
  }
}
</style>