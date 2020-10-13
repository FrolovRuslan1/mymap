<template>
  <div @click="$emit('click-reports', { isActiveRep: isActive })" class="map__leftPanel__buttons__reports" :class="{ 'map__leftPanel__buttons__active': isActive }" >Отчеты</div>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>
