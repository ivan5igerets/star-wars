<template>
  <div>
    <input 
      type="checkbox" 
      class="custom-checkbox"
      :id="label" 
      v-model="flag"
      @change="$emit('change', label, flag)"
    >
    <label :for="label">{{label}}</label>
  </div>
</template>

<script>
export default {
  props: ['label', 'value'],
  data() {
    return {
      flag: this.value,
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 1px;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox:checked+label::before {
  border-color: #FB7363;
  background-color: #fff;
  background-image: url('../../assets/checkbox.svg');
  background-size: 10px;
}

/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
  border-color: #fb72636c;
}
/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active+label::before {
  background-color: #fb72636c;
  border-color: #fb72636c;
}
/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus+label::before {
  box-shadow: 0 0 0 0.2rem #fb726356;
}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked)+label::before {
  border-color: #fb72636c;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled+label::before {
  background-color: #e9ecef;
}
</style>