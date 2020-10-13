<template>
  <div class="map__leftPanel__buttons">
    <MapLeftPanelButtonsRisks @click-risks="active" :isActive="isActiveRisks"></MapLeftPanelButtonsRisks>
    <MapLeftPanelButtonsReports @click-reports="active" :isActive="isActiveReports"></MapLeftPanelButtonsReports>
  </div>
</template>
<script>
import MapLeftPanelButtonsRisks from './map-leftPanel-buttons-risks'
import MapLeftPanelButtonsReports from './map-leftPanel-buttons-reports'

export default {
  components: {
    MapLeftPanelButtonsRisks,
    MapLeftPanelButtonsReports
  },
  data: function () {
    return {
      isActiveRisks: true,
      isActiveReports: false
    }
  },
  methods: {
    active: function (obj) {
      function checkRisks () {
        if (this.isActiveRisks && !this.isActiveReports) {
          this.isActiveRisks = false
          this.isActiveReports = true
        } else {
          this.isActiveRisks = true
          this.isActiveReports = false
        }
      }
      function checkReports () {
        if (this.isActiveReports && !this.isActiveRisks) {
          this.isActiveReports = false
          this.isActiveRisks = true
        } else {
          this.isActiveReports = true
          this.isActiveRisks = false
        }
      }

      if ('isActiveRisk' in obj) {
        this.isActiveRisks = obj.isActive
        checkRisks.call(this)
        this.$emit('click-risks', this.isActiveRisks)
      } else {
        this.isActiveReports = obj.isActive
        checkReports.call(this)
        this.$emit('click-reports', this.isActiveReports)
      }
    }
  }
}
</script>
