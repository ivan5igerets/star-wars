<template>
  <div>

    <Mobile v-if="isMobile" @change="updateFiltr" />
    <Desktop v-else @change="updateFiltr" />

  </div>
</template>
<script>
import Mobile from './Filter/MobileFilter'
import Desktop from './Filter/DesktopFilter'

export default {
  data() {
    return {
      isOpenFilter: null,
      isMobile: null,
    }
  },

  components: {
    Mobile,
    Desktop,
  },

  mounted() {
    const mediaQuery = window.matchMedia('(max-width: 660px)')
    this.isMobile = mediaQuery.matches

    mediaQuery.addListener(() => {
      this.isMobile = window.matchMedia('(max-width: 660px)').matches
    })
  },

  methods: {
    updateFiltr(params) {
      let gender = [],
        eye_color = [],
        arr = Object.entries(params)

      for(let i = 0; i < 2; ++i) {
        if (arr[i][1]) {
          gender.push(arr[i][0])
        }
      }

      for(let i = 2; i < arr.length; ++i) {
        if (arr[i][1]) {
          eye_color.push(arr[i][0])
        }
      }

      this.$emit('change', {gender, eye_color})
    }
  }
}
</script>

<style lang="scss" scoped>
  // .filter {
  //     width: 246px;
  //     // height: 320px;
  //     background: #FFFFFF;
  //     box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
  //     border-radius: 2px;
  //     align-self: flex-start;
  //     margin: 0 30px 0 0;
  //     // margin: 0 10px;

  //     // @media screen and (max-width: 590px) {
  //     //   width: 100%;
  //     //   height: 40px;
  //     //   margin: 0 0 10px 0;
  //     // }

  //     &-header {
  //       font-family: Nunito;
  //       font-style: normal;
  //       font-weight: 600;
  //       font-size: 14px;
  //       line-height: 19px;
  //       color: #222222;
  //       text-align: left;
  //       padding: 10px 12px;
  //       border-bottom: 2px solid #F3F7FA;
  //     }
    

  //     &-body {
  //       // background: lightcoral;
        
  //       &-block {
  //         margin: 10px 0;

  //         &-title {
  //           font-family: Nunito;
  //           font-style: normal;
  //           font-weight: 600;
  //           font-size: 12px;
  //           line-height: 16px;
  //           color: #BDC2C7;
  //           margin: 10px 13px;
  //           text-align: left;
  //         }

  //         &-item {
  //           font-family: Nunito;
  //           font-style: normal;
  //           font-weight: normal;
  //           font-size: 14px;
  //           line-height: 19px;
  //           color: #222222;
  //           margin: 10px 13px;
  //           text-align: left;
  //         }
  //       }

  //     }
  //   }
</style>