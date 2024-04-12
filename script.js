var map;

function initializeMap() {
  mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN"; // Replace with your Mapbox access token
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.5, 40], // Starting position [lng, lat]
    zoom: 9, // Starting zoom
  });

  // Add navigation control to the map
  map.addControl(new mapboxgl.NavigationControl());

  // Resize map when sidebar width changes
  var sidebar = document.getElementById("sidebar");
  var mapContainer = document.getElementById("mapContainer");
  var resizeObserver = new ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.target === sidebar && entry.contentRect.width === 0) {
        mapContainer.style.width = "100%";
        map.resize();
      }
    });
  });
  resizeObserver.observe(sidebar);
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var mapContainer = document.getElementById("mapContainer");
  if (sidebar.style.width === "0px" || sidebar.style.width === "") {
    sidebar.style.width = "250px";
    mapContainer.style.width = "calc(100% - 250px)";
    map.resize(); // Resize the map after changing its container size
  } else {
    sidebar.style.width = "0px";
    mapContainer.style.width = "100%";
    map.resize(); // Resize the map after changing its container size
  }
}

// Call initializeMap function when the page loads
document.addEventListener("DOMContentLoaded", function () {
  initializeMap();
});
