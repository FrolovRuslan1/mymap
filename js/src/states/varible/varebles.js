import map from "../../map/map";

export let editorMarker = document.getElementsByClassName('mapEditor__marker')[0];
export let buttonMarker = document.getElementsByClassName('mapEditor__headerEditor__buttons__marker')[0];
export let buttonOk = document.getElementsByClassName('mapEditor__marker__button')[0];
export let mapElement = map.getContainer();
export let buttons =  document.getElementsByClassName('mapEditor__headerEditor__buttons ')[0].children;
export let inputName = document.getElementsByClassName('mapEditor__marker__name')[0];
export let inputDescription = document.getElementsByClassName('mapEditor__marker__description')[0];
export let inputLat = document.getElementsByClassName('mapEditor__marker__latitude')[0];
export let inputLng = document.getElementsByClassName('mapEditor__marker__longitude')[0];