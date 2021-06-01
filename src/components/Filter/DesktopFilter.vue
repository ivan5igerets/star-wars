<template>
  <div class="filter">
    <div class="filter-header">Filter</div>

    <div class="filter-body">

      <div class="filter-body-block">
        <div class="filter-body-block-title">Gender</div>
        <div class="filter-body-block-item"><Checkbox label='Male' v-model="filter.male" @change="updateFiltr" /></div>
        <div class="filter-body-block-item"><Checkbox label='Female' :value="filter.female" @change="updateFiltr" /></div>
      </div>
          
      <div class="filter-body-block">
        <div class="filter-body-block-title">Eye color:</div>
        <div class="filter-body-block-item"><Checkbox label='Black' :value="filter.black" @change="updateFiltr" /></div>
        <div class="filter-body-block-item"><Checkbox label='Blue' :value="filter.blue" @change="updateFiltr"/></div>
        <div class="filter-body-block-item"><Checkbox label='Brown' :value="filter.brown" @change="updateFiltr"/></div>
        <div class="filter-body-block-item"><Checkbox label='Red' :value="filter.red" @change="updateFiltr"/></div>
        <div class="filter-body-block-item"><Checkbox label='Yellow' :value="filter.yellow" @change="updateFiltr"/></div>
      </div>

      <div>
        <div class="filter-sub-title"></div>
      </div>

    </div>
  </div>
</template>
<script>
import Checkbox from './Checkbox'

export default {
  components: {
    Checkbox
  },
  
  data() {
    return {
      filter: {
        male: false,
        female: false,

        black: false,
        blue: false,
        brown: false,
        red: false,
        yellow: false
      }
        
    }
  },

  methods: {
    updateFiltr(name, val) {
      switch(name) {
        case 'Male':
          this.filter.male = val
          break
        case 'Female':
          this.filter.female = val
          break

        case 'Black':
          this.filter.black = val
          break
        case 'Blue':
          this.filter.blue = val
          break
        case 'Brown':
          this.filter.brown = val
          break
        case 'Red':
          this.filter.red = val
          break
        case 'Yellow':
          this.filter.yellow = val
          break
      }
      this.$emit('change', this.filter)
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter {
      width: 246px;
      // height: 320px;
      background: #FFFFFF;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
      border-radius: 2px;
      align-self: flex-start;
      margin: 0 30px 0 0;
      // margin: 0 10px;

      // @media screen and (max-width: 590px) {
      //   width: 100%;
      //   height: 40px;
      //   margin: 0 0 10px 0;
      // }

      &-header {
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #222222;
        text-align: left;
        padding: 10px 12px;
        border-bottom: 2px solid #F3F7FA;
      }
    

      &-body {
        // background: lightcoral;
        
        &-block {
          margin: 10px 0;

          &-title {
            font-family: Nunito;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: #BDC2C7;
            margin: 10px 13px;
            text-align: left;
          }

          &-item {
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            color: #222222;
            margin: 10px 13px;
            text-align: left;
          }
        }

      }
    }
</style>