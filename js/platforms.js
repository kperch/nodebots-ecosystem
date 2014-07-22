(function(){
  window.libraries = {
    'johnny-five': {
      name: 'Johnny-Five',
      url: 'http://github.com/rwaldron/johnny-five'
    },
    'cylon-js': {
      name: 'CylonJS',
      url: ''
    },
    'sphero': {
      name: 'node-sphero',
      url: 'https://www.npmjs.org/package/node-sphero'
    }
  };

  window.nodebot_attributes = {
    'price-point': {
      pros: [
        'Low Price Point'
      ],
      cons: [
        'Expensive to get started'
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
    'tethering': {
      pros: [
        'Does not require tethering'
      ],
      cons: [
        'Must remain connected to a computer running Node.JS or some other program'
      ]
    },
    'wifi': {
      pros: [
        'Has WiFi access out-of-the-box'
      ],
      cons: {
        'Requires extra accesories, or cannot access, WiFi.'
      }
    }
  }

  window.platforms = {
    'arduino': {
      category: 'Wrapped',
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
      attributes: {
        'price-point': true,
        'beginners': true,
        'community': true,
        'documentation': true,
        'tethering': false,
        'wifi': false
      }
    },
    'sphero': {
      category: 'Wrapped',
      purchase_point: [
        {
          name: 'Sphero Shop',
          url: 'http://store.gosphero.com/'
        }
      ],
      creator: 'Orbotix',
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
        'tethering': false,
        'wifi': false
      }
    }
  }
});
