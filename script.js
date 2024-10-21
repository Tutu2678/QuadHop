window.onload = function () {
  // Run after DOMContentLoaded
  const navButtons = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sections.forEach((section) => section.classList.remove("active")); // Hide all sections
      navButtons.forEach((otherButton) =>
        otherButton.classList.remove("active")
      ); // Remove active class from all buttons
      button.classList.add("active"); // Add active class to clicked button

      const clickedSectionId = button.dataset.section;
      const clickedSection = document.getElementById(clickedSectionId);

      if (clickedSection) {
        clickedSection.classList.add("active"); // Show the clicked section
      } else {
        clickedSection.classList.remove("active"); // Hide student timetable section
      }
    });
  });
};

// You can add other JavaScript code here, such as form handling logic (optional)

// Replace with your actual Mapbox access token
const mapboxToken =
  "pk.eyJ1IjoiZGVlcHV0dXR1IiwiYSI6ImNsdHoxdjgzMTBvZXAyb3FtdzNrd2M3ZWEifQ.9v7QMnuz-9kroqfo3fklRA";

// Simulate some ride data with origin and corresponding map coordinates
// Replace with your actual Mapbox access token

// Replace with logic to fetch van location data from your backend or API
const rides = fetchVanLocations(); // Replace with actual function call

// Initialize a Mapbox map instance
mapboxgl.accessToken = mapboxToken;
const map = new mapboxgl.Map({
  container: "map-container",
  style: "mapbox://styles/mapbox/streets-v11", // Choose a Mapbox style
  center: rides[0].coordinates, // Set initial center to first ride's location (replace if needed)
  zoom: 13, // Initial zoom level
});

// Add markers for each ride
rides.forEach((ride) => {
  const marker = new mapboxgl.Marker().setLngLat(ride.coordinates).addTo(map);

  // Optional: Add a popup to each marker showing the ride origin
  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<h3>${ride.origin}</h3>`
  );
  marker.setPopup(popup);
});

// Function to fetch van location data (replace with your actual implementation)
function fetchVanLocations() {
  // Replace with logic to make an API call or access data from your backend
  // This function should return an array of objects with properties like:
  // { origin: "Ride Origin", coordinates: [longitude, latitude] }
  return [
    { origin: "Bath University", coordinates: [-2.3264, 51.3782] },
    { origin: "James Street West", coordinates: [-2.366722, 51.384912] },
  ];
}

// Functionality for handling student timetable submissions:

const timetableForm = document.getElementById("timetable-form");

timetableForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate successful submission (no backend involved)
  alert("Timetable submitted successfully (for UI demonstration only)!");
});

// Functionality to handle ride requests and display on map (placeholder)
function handleRideRequest(origin, destination) {
  // Display a message indicating search functionality is unavailable
  alert("Ride search functionality is not available yet.");
  console.log(
    `Finding rides from ${origin} to ${destination} (for UI demonstration only)`
  );
}

// Handle form submission for ride requests (optional)
const rideRequestForm = document.getElementById("ride-request-form");

rideRequestForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;

  handleRideRequest(origin, destination);
});

// Remove references to submitTimetable function (no backend)
delete window.submitTimetable;
