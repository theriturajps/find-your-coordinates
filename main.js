const btn = document.querySelector('#btn')
const coordinates = document.querySelector('.coordinates')
const h1 = document.querySelector('h1')
let index = 10
let bestLocation = null
let locationAttempts = 0

function fetchAndImproveLocation() {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      const currentData = location.coords.toJSON()

      // First attempt or more accurate location found
      if (!bestLocation || currentData.accuracy < bestLocation.accuracy) {
        bestLocation = currentData
        console.log(
          `Improved location accuracy: ${currentData.accuracy} meters`
        )
      }

      locationAttempts++
    },
    (error) => {
      console.warn(`Location attempt failed: ${error.message}`)
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000, // Shorter timeout to allow multiple attempts
    }
  )
}

function displayLocation() {
  if (bestLocation) {
    h1.style.display = 'none'
    const { latitude, longitude, accuracy } = bestLocation

    const dataTemplate = `
      <p class="description">Your most precise current location</p>
      <p><strong>Attempts:</strong> <span>${locationAttempts}</span></p>
      <p><strong>Accuracy:</strong> <span id="accuracy">${Math.trunc(
        accuracy
      )} meters</span></p>
      <p><strong>Latitude:</strong> <span id="latitude">${latitude}</span></p>
      <p><strong>Longitude:</strong> <span id="longitude">${longitude}</span></p>
      <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">View on Google Maps</a>
    `

    coordinates.innerHTML = dataTemplate
  } else {
    let errorMessage = 'Could not retrieve location'
    coordinates.innerHTML = errorMessage
    alert(errorMessage)
  }
}

function getLocation() {
  if (navigator.geolocation) {
    // Clear any existing intervals
    if (window.locationInterval) clearInterval(window.locationInterval)
    if (window.countdownInterval) clearInterval(window.countdownInterval)

    // Reset variables
    bestLocation = null
    locationAttempts = 0
    index = 10

    // Attempt to get location multiple times during countdown
    window.locationInterval = setInterval(fetchAndImproveLocation, 1000)

    // Countdown and final location display
    window.countdownInterval = setInterval(() => {
      h1.innerText = `Please wait ${index} sec`
      index--

      if (index < 1) {
        // Stop location attempts
        clearInterval(window.locationInterval)
        clearInterval(window.countdownInterval)

        // Display final location
        displayLocation()
      }
    }, 1000)

    btn.style.display = 'none'
  } else {
    console.warn(`Sorry! Your device does not support Geo Location`)
    alert('Geolocation is not supported by this browser.')
  }
}

btn.addEventListener('click', () => {
  h1.innerText = `Loading....`
  h1.style.marginBottom = '0'
  getLocation()
})
