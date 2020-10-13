<template>
  <div class="map__leftPanel" v-bind:class="{map__leftPanel_Close: isClose}" @click.stop="" @dragexit.stop="" @dragend.stop="" @dragleave.stop="" @drop.stop="" @drag.stop="" @dragstart.stop="" @dragenter.stop="" @dragover.stop="" @mousemove.stop="" @mouseup.stop="" @mousedown.stop="" @mouseover.stop="">
    <MapLeftPanelDanger></MapLeftPanelDanger>
    <MapLeftPanelButtons @click-risks="clickRisks" @click-reports="clickReports"></MapLeftPanelButtons>
    <MapLeftPanelRisks v-show="isShowPanelRisks"></MapLeftPanelRisks>
    <MapLeftPanelReports v-show="isShowPanelReports"></MapLeftPanelReports>
  </div>
</template>
<script>
import MapLeftPanelDanger from './map-leftPanel-danger'
import MapLeftPanelButtons from './map-leftPanel-buttons'
import MapLeftPanelRisks from './map-leftPanel-risks'
import MapLeftPanelReports from './map-leftPanel-reports'

export default {
  props: {
    isClose: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data: function () {
    return {
      isShowPanelRisks: true,
      isShowPanelReports: false
    }
  },
  components: {
    MapLeftPanelDanger,
    MapLeftPanelButtons,
    MapLeftPanelRisks,
    MapLeftPanelReports
  },
  methods: {
    clickRisks: function (active) {
      const isActiveRiskButton = active
      if (isActiveRiskButton) {
        this.isShowPanelRisks = true
        this.isShowPanelReports = false
      } else {
        this.isShowPanelRisks = false
        this.isShowPanelReports = true
      }
    },
    clickReports: function (active) {
      const isActiveReportsButton = active
      if (isActiveReportsButton) {
        this.isShowPanelReports = true
        this.isShowPanelRisks = false
      } else {
        this.isShowPanelReports = false
        this.isShowPanelRisks = true
      }
    }
  }
}
</script>
