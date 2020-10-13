<template>

  <div id="map">
    <MapLeftPanel :isClose="isCloseMapLeftPanel"></MapLeftPanel>
    <MapCloseLeftPanel @click="close"></MapCloseLeftPanel>
  </div>

</template>

<script>
import MapLeftPanel from './map-leftPanel.vue'
import MapCloseLeftPanel from './map-closeLeftPanel'

export default {
  data: function () {
    return {
      isCloseMapLeftPanel: true
    }
  },
  components: {
    MapLeftPanel,
    MapCloseLeftPanel
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
