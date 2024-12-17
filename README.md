# Find Your Coordinates

A simple web-based Find Your Coordinates that fetches the user's current geographic coordinates (latitude, longitude) and displays the accuracy and timestamp of the location. It also provides a link to view the location on Google Maps.

## Features

- Displays the user's current **latitude** and **longitude**.
- Shows the **accuracy** of the location (in meters).
- Displays the **timestamp** of when the location data was retrieved.
- Provides a link to view the location on **Google Maps**.
- User-friendly error handling for location permission issues or unavailability.
- Displays a loading message while fetching the location.
  
## Tech Stack

- **HTML** for the page structure.
- **CSS** for styling.
- **JavaScript** for fetching geolocation data using the browser's `navigator.geolocation` API.

## Installation

To use the Find Your Coordinates, simply clone or download the repository and open the `index.html` file in your browser.

### Steps to run:
1. Clone the repository:
    ```bash
    git clone https://github.com/theriturajps/find-your-coordinates.git
    ```

2. Open the `index.html` file in your preferred web browser.

3. Click the "Click Here" button to fetch and display your current location coordinates.

## Usage

1. Click the **Click Here** button to fetch your current latitude and longitude.
2. The location data, along with the accuracy and timestamp, will be displayed on the screen.
3. You can also view your location on Google Maps by clicking the **View on Google Maps** link.
4. If there's an error (e.g., permission denied or location unavailable), an appropriate error message will be shown.

## Error Handling

- **Permission Denied**: If the user denies permission to access location data, an alert will be shown prompting them to enable location services.
- **Position Unavailable**: If the browser is unable to fetch location data, an alert will be shown.
- **Timeout**: If the request to fetch location data takes too long, a timeout error will be displayed.

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

