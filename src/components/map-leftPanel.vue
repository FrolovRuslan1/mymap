<template>
  <transition name="map__leftPanel">
    <div class="map__leftPanel" v-show="!isClose">
      <MapLeftPanelDanger></MapLeftPanelDanger>
      <MapLeftPanelButtons @click-risks="clickRisks" @click-reports="clickReports"></MapLeftPanelButtons>
      <MapLeftPanelRisks v-show="isShowPanelRisks"></MapLeftPanelRisks>
      <MapLeftPanelReports v-show="isShowPanelReports"></MapLeftPanelReports>
    </div>
  </transition>
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
      default: false
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

<style scoped lang="scss">
  .map__leftPanel-enter-active{
    transition: all 0.2s;
  }
  .map__leftPanel-leave-active {
    transition: all 0.2s;
  }
  .map__leftPanel-enter, .map__leftPanel-leave-to {
    transform: translateX(-346px);
  }
</style>
