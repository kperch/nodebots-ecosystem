(function(){
  libraries = {
    'johnny-five': {
      name: 'Johnny-Five',
      url: 'http://github.com/rwaldron/johnny-five'
    },
    'cylon-js': {
      name: 'CylonJS',
      url: 'http://http://cylonjs.com/'
    },
    'sphero': {
      name: 'node-sphero',
      url: 'https://www.npmjs.org/package/node-sphero'
    }
  };

  nodebot_attributes = {
    //for attributes, assign true if pros are correct, false if cons are correct
    'price-point': {
      pros: [
        'Low Price Point (<= $100)'
      ],
      cons: [
        'Expensive to get started (> $100)'
      ]
    },
    'beginners': {
      pros: [
        'Good for beginners'
      ],
      cons: [
        'Not great for beginners'
      ]
    },
    'community': {
      pros: [
        'Friendly, active community'
      ],
      cons: [
        'Less active, or fledgling, community'
      ]
    },
    'documentation': {
      pros: [
        'Easy-to-find, thourough documentation'
      ],
      cons: [
        'Non-comprehensive, or hard-to-find, documentation'
      ]
    },
    'wireless': {
      pros: [
        'Does not require a computer to be connected to the device'
      ],
      cons: [
        'Must remain connected to a computer running Node.JS or some other program- either through a USB cable or Wifi/Bluetooth'
      ]
    },
    'wifi': {
      pros: [
        'Has WiFi access out-of-the-box'
      ],
      cons: [
        'Requires extra accesories, or cannot easily access, WiFi.'
      ]
    }
  };

  platforms = {
    'arduino': {
      name: 'Arduino',
      category: 'Wrapped',
      website: 'http://arduino.cc',
      purchase_point: [
        {
          name: 'SparkFun Inventor\'s Kit',
          url: 'https://www.sparkfun.com/products/12001'
        },
        {
          name: 'Adafruit Starter Kit',
          url: 'https://www.adafruit.com/products/170'
        }
      ],
      creator: '',
      description: 'One of the de facto standards for hobbyist robotics, the Arduino represents a standard, not a particular board. Boards designed around the Arduino standard include the Uno, Mega, and Teensy. Some other NodeBots platforms are Arduino-compliant: pinoccio, for instance.',
      libraries: [
        'johnny-five',
        'cylon-js'
      ],
      cost: 'varies on the board. Uno, the most common board, goes for around $40',
      attributes: {
        'price-point': true,
        'beginners': true,
        'community': true,
        'documentation': true,
        'wireless': false,
        'wifi': false
      }
    },
    'sphero': {
      name: 'Sphero',
      category: 'Wrapped',
      website: 'http://gosphero.com',
      purchase_point: [
        {
          name: 'Sphero Shop',
          url: 'http://store.gosphero.com/'
        }
      ],
      creator: 'Orbotix',
      cost: 'v1 is $79.99, v2 is $129.99',
      description: 'A small-ish sphere with gyroscope and RGB LED technology, this sphere can roll across surfaces, light up different colors, or used as an input device for gyroscopic readings',
      libraries: [
        'sphero',
        'cylon-js'
      ],
      attributes: {
        'price-point': true,
        'beginners': true,
        'community': true,
        'documentation': true,
        'wireless': false,
        'wifi': false
      }
    },
    'espruino':{
      name: 'Espruino',
      category: 'Native',
      website: 'http://espruino.com',
      purchase_point:[
        {
          name: 'Adafruit',
          url: 'https://www.adafruit.com/products/1887'
        },
        {
          name: 'List of Distributors',
          url: 'http://www.espruino.com/Order'
        }
      ],
      cost: '$40',
      creator: 'Pur3 LTD',
      description: 'A small microcontroller, esprino runs a modified javascript interpretor, and runs JS right on the board. With a lipoly battery connector and its small size, it\'s great for wearables and wireless tech.',
      libraries: [
      ],
      attributes: {
        'price-point': true,
        'beginners': false,
        'community': true,
        'documentation': true,
        'wireless': true,
        'wifi':false
      }
    },
    'tessel': {
      name: 'Tessel',
      category: 'Native', //'Wrapped', 'Native', 'Computer', or 'Hybrid'
      purchase_point: [
        {
          name: 'Celery', //name of the online store ('sphero website', 'Adafruit')
          url: 'https://www.trycelery.com/shop/TEC' //link to the most granular store page you can find for this product
        }
      ],
      creator: 'Technical Machine. ', //Who built this? You can leave it blank.
      description: 'Tessel is a microcontroller that runs JavaScript. It\'s Node-compatible and ships with Wifi built in.', //A couple of sentences. What makes this platform unique?
      libraries: [
        'cylon-js' //see platforms.js - window.libraries (add if needed)
      ],
      cost: '$99 for the Tessel board; ~$25 for separate modules each', //be descriptive, doesn't need to be a number
      attributes: {
        'price-point': true, //see platforms.js - window.attributes
        'beginners': true,
        'community': true,
        'documentation': true,
        'wireless': true,
        'wifi': true
      },
      docs_sites: [ //add pages with docs here (even third-party blog posts)
        {
          name: 'First Run Experience',
          url: 'http://start.tessel.io/install'
        },
        {
          name: 'Forums',
          url: 'https://forums.tessel.io/'
        },
        {
          name: 'Documentation',
          url: 'https://tessel.io/docs/home'
        },
        {
          name: 'Github docs',
          url: 'https://github.com/tessel/docs'
        },
        {
          name: 'Arduino <-> Tessel communication',
          url: 'https://github.com/tessel/docs/blob/master/tutorials/connect-arduino-tessel.md'
        },
        {
          name: 'Cylon.js Tessel docs',
          url: 'http://cylonjs.com/documentation/platforms/tessel/'
        },
      ],
      website: 'https://tessel.io/' //general info website
    }
  };
}());
