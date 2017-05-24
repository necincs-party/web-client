import React from 'react';

class Dashboard extends React.Component {
    map: HTMLDivElement;

    componentDidMount() {
        if (window.google) {
            new window.google.maps.Map(this.map, {
                center: {
                    lat: 40.674,
                    lng: -73.945
                },
                zoom: 12,
                styles: MapStyles
            });
        } else {
            setTimeout(() => {
                this.componentDidMount();
            }, 100);
        }
    }

    registerMapReference = (mapDOMNode: HTMLDivElement) => {
        this.map = mapDOMNode;
    }

    render() {
        return (
            <div className = "dashboard" >
                <div ref={this.registerMapReference} className="dashboard__map"> </div>
                <div className = "dashboard__data">
                    <div className = "dashboard__data_wrapper dashboard__data_register">
                    </div>
                </div>
            </div>  
        );
    }
};

export default Dashboard;

window.initMap = () => {};

const MapStyles = [{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#444444"
      },
      {
        "lightness": "-0"
      },
      {
        "gamma": "1"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "color": "#f2f2f2"
    }]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
        "visibility": "on"
      },
      {
        "color": "#4a2d00"
      },
      {
        "saturation": "-85"
      },
      {
        "lightness": "88"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{
        "visibility": "simplified"
      },
      {
        "lightness": "-53"
      },
      {
        "weight": "1.00"
      },
      {
        "gamma": "0.98"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
        "saturation": -100
      },
      {
        "lightness": 45
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
      "saturation": "-18"
    }]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "road",
    "elementType": "labels.text",
    "stylers": [{
        "visibility": "on"
      },
      {
        "hue": "#ff0000"
      },
      {
        "lightness": "-0"
      },
      {
        "gamma": "1.00"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [{
        "visibility": "on"
      },
      {
        "lightness": "-32"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
      "visibility": "on"
    }]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [{
        "visibility": "on"
      },
      {
        "hue": "#ff0000"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [{
      "visibility": "on"
    }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [{
      "visibility": "on"
    }]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "visibility": "on"
    }]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
        "color": "#407a5b"
      },
      {
        "visibility": "on"
      },
      {
        "saturation": "-34"
      }
    ]
  }
]
