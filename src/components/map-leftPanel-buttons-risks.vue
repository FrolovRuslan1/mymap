<template>
  <div @click="$emit('click-risks', { isActiveRisk: isActive })" class="map__leftPanel__buttons__risks" :class="{ 'map__leftPanel__buttons__active': isActive }" >Риски</div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
      default: true
    }
  }
}
</script>
