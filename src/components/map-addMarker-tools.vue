<template>

  <div class="map__addMarker__tools" v-show="isShow" @mouseleave="$emit('mouseleave', $event)">
    <div class="map__addMarker__tools_edit">edit</div>
    <div class="map__addMarker__tools_add">add</div>
  </div>

</template>

<script>
export default {
  props: {
    isShow: {
      required: true,
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/states/flex/index';
  @import "../scss/states/varibles";

  .map__addMarker__tools {
    @include flexRow;

    .map__addMarker__tools_edit, .map__addMarker__tools_add {
      @include backgroundColor(#383838);
      padding: 5px 10px;
      border: 2px solid #747474;
      border-radius: 2px;
      color: white;
      cursor: pointer;
    }
  }

</style>
