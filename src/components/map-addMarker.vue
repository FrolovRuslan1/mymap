<template>
  <div class="map__addMarker">
    <img src="../img/Marker.png" alt="">
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
  @import "../scss/states/varibles";
  .map__addMarker {
  height: 100px;
    width: 100px;
    @include backgroundColor(red);
    align-self: end;
    z-index: 10000;
  }
</style>
