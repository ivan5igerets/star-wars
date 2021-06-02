<template>
  <div class="card">
    <div class="frame">
      <img v-if="person.gender === 'male'" src="../assets/male.svg" alt="">
      <img v-else src="../assets/female.svg" alt="">
    </div>

    <div class="name">{{person.name}}</div>

    <div class="params">
      <div class="params-item">
        <div class="params-item-name">Eye color</div>
        <div class="params-item-value"> {{person.eye_color}} </div>
      </div>

      <div class="params-item">
        <div class="params-item-name">Birth year</div>
        <div class="params-item-value"> {{person.birth_year}} </div>
      </div>

      <div class="params-item">
        <div class="params-item-name">Gender</div> 
        <div v-if="person.gender==='male'" style="color: #00c4ff;" class="params-item-value"><i class="fas fa-mars"></i></div>
        <div v-if="person.gender==='female'" style="color: #e235d5;" class="params-item-value"><i class="fas fa-venus"></i></div>
        <div v-if="person.gender!=='female' && person.gender!=='male'" style="color: #6cfb63;" class="params-item-value"><i class="fab fa-android"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['person'],
}
</script>

<style lang="scss" scoped>
.card {
  flex-basis: 170px;
  height: 265px;
  background: #fff;
  border: 1px solid #F3F7FA;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 660px) {
    flex: 1 1 160px;
  }

  .frame {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    overflow: hidden;
    margin: 20px auto;
  }

  .name {
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #222222;
  }

  .params {
    

    &-item {
      display: flex;
      justify-content: space-between;
      margin: 6px 10px;
    
      &-name {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #BDC2C7;
      }

      &-value {
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        text-align: right;
        color: #222222;
      }
    }
  }

}
</style>