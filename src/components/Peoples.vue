<template>
  <div class="container">

    <div class="top-part">
      <div class="label">
        <img src="../assets/Vector.svg" alt="">
      </div>
    </div>

    <div class="path"> 
      <p class="path-text orange">Star Wars</p> &nbsp;
      <i class="fas fa-angle-right fa-1x" style="color: #BDC2C7; margin: 0 5px;"></i> &nbsp;
      <p class="path-text orange">Database</p> &nbsp;
      <i class="fas fa-angle-right" style="color: #BDC2C7; margin: 0 5px;"></i> &nbsp;
      <p class="path-text gray">Peoples</p>
    </div>

    <div class="main-part">

      <MyFilter @change="updateFilter" />

      <div class="people">

        <div class="people-search">
          <div class="input-wrapper">
            <img src="../assets/search-solid.svg" alt="">
            <input type="text" v-model="filterParams.search_text" placeholder="Type name">
          </div>
        </div>

        <Loader v-if="isLoading" />

        <div v-if="!isLoading" class="cards">
          <Card v-for="(person, i) in onSwow" :key="i" :person="person" />
        </div>

        <Pagination v-if="!isLoading || ! onSwow.length" :curPage="page" :countOfPeople="countOfPeople" @change="getPeoples" />
      </div>

    </div>

  </div>
</template>

<script>
import Card from './Card'
import Pagination from './Pagination'
import MyFilter from './Filter'
import Loader from './Loader'
// import get from '../api/apiPeople'

import {mapActions, mapGetters} from 'vuex'

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
      filterParams: {
        gender: [],
        eye_color: [],
        search_text: '',
      },
      onSwow: [],
    }
  },

  created() {
    this.getPeoples(this.page)
  },

  methods: {
    getPeoples(page) {
      this.page = page
      this.fetchPeoples(page)
    },

    updateFilter(params) {
      this.filterParams.gender = params.gender
      this.filterParams.eye_color = params.eye_color  
      this.updatePeoplesList()
    },

    updatePeoplesList() {
      this.filterParams.search_text = this.filterParams.search_text.trim()
      this.onSwow = 
        this.people.filter(person => {
          return (this.filterParams.eye_color.includes(person.eye_color) || !this.filterParams.eye_color.length) &&
                  (this.filterParams.gender.includes(person.gender) || !this.filterParams.gender.length) &&
                  ( (person.name.toLowerCase()).includes(this.filterParams.search_text) || !this.filterParams.search_text)
      })
    },

    ...mapActions({
      fetchPeoples: 'FETCH_PEOPLES'
    }),
  },

  watch: {
    people: function() {
      this.updatePeoplesList()
    },

    'filterParams.search_text': function() {
      this.updatePeoplesList()
    }
  },

  computed: {
    ...mapGetters({
      people: 'GET_PEOPLES',
      countOfPeople: 'GET_COUNT_PEOPLE',
      isLoading: 'GET_LOADING_STATUS',
    })
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
        
        .input-wrapper {
          height: 50px;
          border: 1px solid #E1E7EC;
          border-radius: 2px;
          background: #fff;
          // width: 100%;
          flex: 1 1 100%;
          display: flex;

          img {
            width: 42px;
            height: 17px;
            align-self: center;
            margin-right: 16px;
          }

          input {
            width: 100%;
            border: none;
            height: 100%;
            outline: none;
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;

            &::placeholder {
              color: #BDC2C7;
            }
          }

          @media screen and (max-width: 1175px) {
            flex: 0 1 687px;
          }

          @media screen and (max-width: 1004px) {
            flex: 0 1 514px;
          }
          
          @media screen and (max-width: 832px) {
            flex: 0 1 343px;
          }

          @media screen and (max-width: 660px) {
            flex: 1 1 100%;
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