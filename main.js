let marker;
// Initialize and add the map
function initMap() {
  // The location of LearningFuze
  const learningFuze = { lat: 33.63484653051873, lng: -117.74048622526013 };
  // The map, centered at LearningFuze
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: learningFuze,
  });
  // The marker, positioned at LearningFuze
  marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    draggable: true,
    position: learningFuze,
    map: map,
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
