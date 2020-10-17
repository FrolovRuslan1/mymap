<template>

  <div id="map">
    <MapLeftPanel :isClose="isCloseMapLeftPanel" @click.stop @drag.stop @dragstart.stop @dragenter.stop @dragover.stop @mousemove.native.stop @mouseup.native.stop @mousedown.native.stop @mouseover.native.stop></MapLeftPanel>
    <MapCloseLeftPanel @click="close"></MapCloseLeftPanel>
    <AddMarker></AddMarker>
  </div>

</template>

<script>
import MapLeftPanel from './map-leftPanel.vue'
import MapCloseLeftPanel from './map-closeLeftPanel'
import AddMarker from './map-addMarker'
export default {
  data: function () {
    return {
      isCloseMapLeftPanel: true
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
