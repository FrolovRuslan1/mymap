<template>

  <div class="map__addMarkerWrapper" >
    <MapAddMarkerTools :isShow="isShowMapAddMarkerTools" @mouseleave="isShowMapAddMarkerTools = false"></MapAddMarkerTools>
    <img class="map__addMarker" src="../img/Marker.png" @click="isShowMapAddMarkerTools = !isShowMapAddMarkerTools" @mouseover="isShowMapAddMarkerTools = true" >
  </div>

</template>

<script>
import MapAddMarkerTools from './map-addMarker-tools'

export default {
  data: function () {
    return {
      isShowMapAddMarkerTools: false
    }
  },
  components: {
    MapAddMarkerTools
  }
}
</script>

<style scoped lang="scss">
  @import "../scss/states/varibles";
  @import "../scss/states/flex/index";

  .map__addMarkerWrapper {
    @include flexRow;
    z-index: 800;
    margin: auto 10px auto auto;

    .map__addMarker {
      @include backgroundColor(white);
      border-radius: 4px;
      padding: 5px 5px 5px 5px;
      cursor: pointer;
    }
  }
</style>
