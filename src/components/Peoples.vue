<template>
  <div class="container">

    <div class="top-part">
      <div class="label">
        <img src="../assets/Vector.svg" alt="">
      </div>
    </div>

    <div class="path"> 
      <p class="path-text orange">Star Wars</p> >
      <p class="path-text orange">Database</p> >
      <p class="path-text gray">Peoples</p>
    </div>

    <div class="main-part">

      <MyFilter />

      <div class="people">

        <div class="people-search">
          <input placeholder="Type name" type="text">
        </div>

        <Loader v-if="isLoading" />

        <div v-if="!isLoading" class="cards">
          <Card v-for="(person, i) in peoples" :key="i" :person="person" />
        </div>

        <Pagination v-if="!isLoading" :curPage="page" :countOfPeople="countOfPeople" @change="getPeoples" />
      </div>


    </div>

  </div>
</template>

<script>
import Card from './Card'
import Pagination from './Pagination'
import MyFilter from './Filter'
import Loader from './Loader'
import get from '../api/apiPeople'

export default {
  components: {
    Card,
    Pagination,
    MyFilter,
    Loader
  },

  data() {
    return {
      page: 1,
      countOfPeople: 0,
      peoples: [],
      isLoading: false,
    }
  },

  created() {
    this.getPeoples(this.page)
  },

  methods: {
    getPeoples(page) {
      this.page = page
      this.isLoading = true
      get(page)
      .then(res => {
        console.log(res.data.results);
        this.countOfPeople = res.data.count
        this.peoples = res.data.results
        this.isLoading = false
      })
      .catch(err => {
        this.isLoading = false
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  // background: brown;
  max-width: 1136px;
  margin: auto;
  padding: 25px 20px 0 20px;

  .top-part {
      // margin: 25px 0 0 0;
    .label {
      margin: 0 0 25px 0;
    }
  }

  .path {
    justify-content: left;
    display: flex;
    margin: 0 0 20px 0;

    @media screen and (max-width: 660px) {
      justify-content: center;
    }

    &-text {
      font-family: Nunito;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
    }

    .orange {
      color: #FB7363;
    }

    .gray {
      color: #BDC2C7;;
    }
  }

  .main-part {
    display: flex;

    @media screen and (max-width: 660px) {
      flex-direction: column;
    }

    .people {
      flex: 1 1 100%;

      &-search {
        // padding: 10px;
        display: flex;
        
        input {
          height: 50px;
          border: 1px solid #E1E7EC;
          border-radius: 2px;
          background: #fff;
          // width: 100%;
          flex: 1 1 100%;
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 19px;
          padding: 0 0 0 20px;

          @media screen and (max-width: 1175px) {
            flex: 0 1 667px;
          }

          @media screen and (max-width: 1004px) {
            flex: 0 1 495px;
          }
          
          @media screen and (max-width: 832px) {
            flex: 0 1 323px;
          }

          @media screen and (max-width: 660px) {
            flex: 1 1 100%;
          }


          &::placeholder {
            color: #BDC2C7;
          }
        }
      }

      .cards {
        display: flex;
        flex-wrap: wrap;
        margin: 30px 0;
      }



    }
    
  }
}
</style>