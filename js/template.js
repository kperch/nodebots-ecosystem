{
  //COPY START HERE
  'platform-name': {
    category: '', //'Wrapped', 'Native', or 'Computer'
    purchase_point: [
      {
        name: 'store-website-name', //name of the online store ('sphero website', 'Adafruit')
        url: '' //link to the most granular store page you can find for this product
      }
    ],
    creator: '', //Who built this? You can leave it blank.
    description: '', //A couple of sentences. What makes this platform unique?
    libraries: [
      'johnny-five' //see platforms.js - window.libraries (add if needed)
    ],
    cost: '', //be descriptive, doesn't need to be a number
    attributes: {
      'price-point': true, //see platforms.js - window.attributes
      'beginners': true,
      'community': true,
      'documentation': true,
      'wireless': false,
      'wifi': false
    }
  }
  //COPY END HERE
}
