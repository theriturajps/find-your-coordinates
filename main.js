const btn = document.querySelector('#btn')
const coordinates = document.querySelector('.coordinates')
const h1 = document.querySelector('h1')
let index = 10

function fetchAndAnalyseCoord() {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      const data = location.coords.toJSON()

      h1.style.display = 'none'

      const latitude = data.latitude
      const longitude = data.longitude
      const accuracy = data.accuracy

      const dataTemplate = `<p class="description">Your current latitude and longitude values</p>
																	<p><strong>Accuracy:</strong> <span id="accuracy">${Math.trunc(
                                    accuracy
                                  )} meters</span></p>
																	<p><strong>Latitude:</strong> <span id="latitude">${latitude}</span></p>
																	<p><strong>Longitude:</strong> <span id="longitude">${longitude}</span></p>
																	<a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">View on Google Maps</a>`

      coordinates.insertAdjacentHTML('beforeend', dataTemplate)

      console.log(data)
    },
    (error) => {
      let errorMessage = ''
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'Permission denied. Please enable location services.'
          break
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Position unavailable. Please try again later.'
          break
        case error.TIMEOUT:
          errorMessage = 'Request timed out. Please try again.'
          break
        default:
          errorMessage = 'An unknown error occurred.'
      }
      coordinates.innerHTML = errorMessage
      alert(errorMessage)
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 15000, // 15 sec
    }
  )

  clearInterval(waitAndAnalyse)
}

function getLocation() {
  if (navigator.geolocation) {
    waitAndAnalyse = setInterval(() => {
      fetchAndAnalyseCoord()
    }, 10000)

    let loading = setInterval(() => {
      h1.innerText = `Please wait ${index} sec`
      index--

      if (index < 1) {
        clearInterval(loading)
      }
    }, 1000)

    btn.style.display = 'none'
  } else {
    console.warn(`Sorry! your device does not support Geo Location`)
  }
}

btn.addEventListener('click', () => {
  h1.innerText = `Loading....`
  h1.style.marginBottom = '0'
  getLocation()
})
