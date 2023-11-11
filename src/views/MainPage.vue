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
    <h1>
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
        <div class="text-block__text--downed">
          <p>
            Каждый из нас разбирается в том что делает
          </p>
        </div>
      </div>
    </div>
    <div class="whois__about-us">
      <div class="about-us__text">
        <div>
          Мы появились ещё будучи студентами
        </div>
        <div>
          <p>Первым нашим делом было внедрение IoT в лаборатории учебного заведения</p>
        </div>
        <div>
          <p>Затем пошли разные соревнования и хакатоны</p>
        </div>


      </div>
      <div class="about-us__image">
        <img src="/teamHackEkb.png" alt="Наша крутая картинка">
      </div>
    </div>
  </div>
  <div class="what-we-do">
    <h1>
      Что мы делаем ?
    </h1>
    <div class="what-we-do__blocks">
      <div class="blocks__hacks">
        <div class="blocks__hacks__page">
          <img src="/teamHackEkb.png" class="page__img">
          <div class="page__title">
            Хакатоны
          </div>
        </div>
        <div class="block__under-list">
          <ul>
            <li>TopBlog</li>
            <li>В поисках Кита</li>
            <li>SkyHack</li>
            <li>Полюс Хакатон</li>
          </ul>
        </div>
      </div>
      <div class="blocks__projects">
        <div class="blocks__projects__page">
          <img src="/teamHackEkb.png" class="page__img">
          <div class="page__title">
            Проекты
          </div>
        </div>
        <div class="block__under-list">
          <ul>
            <li>SmartLab</li>
            <li>SmartInvent</li>
          </ul>
        </div>
      </div>
      <div class="blocks__other">
        <div class="blocks__other__page">
          <img src="/teamHackEkb.png" class="page__img">
          <div class="page__title">
            Прочее
          </div>
        </div>
        <div class="block__under-list">
          <ul>
            <li>Что сюда впендюрить</li>
            <li>Спросить у Кирилла</li>
          </ul>
        </div>
      </div>
    </div>
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
  min-width: 1280px;
}

.team-title {
  background-color: #38465B;
  display: block;
  justify-content: center;

  .team-title__team-image {
    min-width: 1280px;

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
  //border-radius: 0 0 20px 20px;
  padding-top: 100px;
  padding-bottom: 10%;

  h1 {
    font-family: "Roboto", sans-serif;
    color: #FCFEFF;
    font-weight: 300;
    font-style: normal;
    font-size: 128px;

  }

  .whois__text-block {
    overflow: hidden;
    display: flex;
    gap: 10%;

    .text-block__graphics {
      background-color: gray;
      height: 500px;
      min-width: 200px;
      border-radius: 20px;
    }

    .text-block__text {
      padding-top: 0;
      word-wrap: break-word;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

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
        text-align: left;

      }

      .text-block__text--downed {
        display: flex;
        align-content: flex-end;

        p {
          color: #00A8F0;
          cursor: pointer;
        }
      }
    }
  }

  .whois__about-us {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    gap: 10px;

    .about-us__text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      font-family: "Roboto", sans-serif;
      font-size: 36px;
      font-weight: 300;
      color: #FCFEFF;
      max-width: 30vw;
      min-width: 50%;
    }

    .about-us__image {
      img {
        border-radius: 20px;
        height: auto;
        width: 100%;
      }
    }
  }
}

.what-we-do {
  @mixin block-pos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @include borders;
  margin-top: -20px;
  border-radius: 20px;
  border: solid 20px #FCFEFF;
  color: #434244;
  padding-top: 50px;

  h1 {
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 64px;
    font-weight: 500;
  }

  .what-we-do__blocks {
    margin-top: 15vh;
    @mixin block-page() {
      background-color: #38465B;
      display: flex;
      width: 384px;
      height: 374px;
      border-radius: 30px;
      align-items: flex-end;
      justify-content: center;
      flex-direction: row;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .blocks__hacks {

      .blocks__hacks__page {
        @include block-page;

        .hacks__page__img {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .hacks__page__title {
          position: absolute;
          color: #FCFEFF;
          font-size: 32px;
        }
      }
    }

    .blocks__projects {
      .blocks__projects__page {
        @include block-page();
      }
    }

    .blocks__other {
      .blocks__other__page {
        @include block-page();
      }
    }

    .page__img {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .page__title {
      position: absolute;
      color: #FCFEFF;
      font-size: 32px;
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .block__under-list {
      display: flex;
      align-items: flex-start;
      color: #434244;
      font-family: 'Montserrat', sans-serif;
      font-size: 32px;
    }
  }

}
</style>