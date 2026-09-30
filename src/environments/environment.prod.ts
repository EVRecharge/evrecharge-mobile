export const environment = {
  production: true,
  // Absolute -- unlike the web app, a packaged mobile app has no same-origin host to resolve a
  // relative path against, so this always points straight at the deployed API domain over HTTPS.
  apiUrls: {
    user: 'https://evrechargeindia.com/api/users',
    provider: 'https://evrechargeindia.com/api/providers',
    booking: 'https://evrechargeindia.com/api/bookings',
    location: 'https://evrechargeindia.com/api/locations',
    payment: 'https://evrechargeindia.com/api/payments',
  },
  // Replace with a real key from https://console.cloud.google.com/google/maps-apis
  googleMapsApiKey: 'AIzaSyC_d2XJrs7UlPHyN-iyUo95ksWK6oHkY4Y',
};
