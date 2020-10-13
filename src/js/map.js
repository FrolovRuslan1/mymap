// eslint-disable-next-line no-undef,no-unused-vars
export default L.map('map', {
  drawControl: true,
  zoomControl: false
}).setView([55.7522, 37.6156], 13)

// eslint-disable-next-line no-undef
// const draggable = L.Draggable(document.getElementsByClassName('map__leftPanel')[0])
// draggable.disable()
// console.log(draggable)
console.log(document.getElementsByClassName('map__leftPanel')[0])
