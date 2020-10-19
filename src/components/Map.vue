<template>

  <div id="map">
    <div class="map__insertWrapper">
      <div class="map__leftPanel__wrapper">
        <MapLeftPanel :isClose="isCloseMapLeftPanel"></MapLeftPanel>
        <MapCloseLeftPanel @click="close"></MapCloseLeftPanel>
      </div>
      <AddMarker></AddMarker>
    </div>
  </div>

</template>

<script>
import MapLeftPanel from './map-leftPanel.vue'
import MapCloseLeftPanel from './map-closeLeftPanel'
import AddMarker from './map-addMarker'

export default {
  data: function () {
    return {
      isCloseMapLeftPanel: false
    }
  },
  components: {
    MapLeftPanel,
    MapCloseLeftPanel,
    AddMarker
  },
  methods: {
    close: function () {
      if (this.isCloseMapLeftPanel) {
        this.isCloseMapLeftPanel = false
      } else {
        this.isCloseMapLeftPanel = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../scss/states/flex/index";
  @import "../scss/states/varibles";

  .map__insertWrapper {
    @include heightWidth(100%);
    @include flexRowSpaceBetween;
    z-index: 1000;

    .map__leftPanel__wrapper {
      @include height(100%);
      @include flexRowCenter;
    }
  }
</style>
