export const environment = {
  production: false,
  // Dev builds still point at the real deployed API -- there's no meaningful "localhost" backend
  // to reach from an iOS/Android simulator or device the way there is from a desktop browser.
  apiUrls: {
    user: 'https://evrechargeindia.com/api/users',
    provider: 'https://evrechargeindia.com/api/providers',
    booking: 'https://evrechargeindia.com/api/bookings',
    location: 'https://evrechargeindia.com/api/locations',
    payment: 'https://evrechargeindia.com/api/payments',
    chatbot: 'https://evrechargeindia.com/api/chatbot',
  },
  googleMapsApiKey: 'AIzaSyC_d2XJrs7UlPHyN-iyUo95ksWK6oHkY4Y',
};
