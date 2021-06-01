<template>
  <div class="pagination">
    <button 
      :disabled="curPage === 1" 
      @click="prev"
    >PREV</button>

    <div class="pagination-text"> {{curPage}} of {{totalPages}}</div>
    
    <button 
      :disabled="curPage === totalPages"  
      @click="next"
    >NEXT</button>
  </div>
</template>

<script>
export default {
  props: ['curPage', 'countOfPeople'],
  computed: {
    totalPages: function() {
      let count = Math.trunc(this.countOfPeople / 10)
      count = (this.countOfPeople % 10) ? (count + 1) : count
      return count
    },
  },

  methods: {
    next() {
      this.$emit('change',this.curPage + 1)
    },
    prev() {
      this.$emit('change',this.curPage - 1)
    }
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  align-items: center;

  button {
    background: #FB7363;
    border-radius: 100px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    padding: 10px 44px;
    border: none;

    &:disabled {
      opacity: 0.5;
    }
  }

  &-text {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    margin: 0 10px;
  }
}
</style>