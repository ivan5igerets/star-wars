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