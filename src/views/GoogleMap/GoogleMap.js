import GoogleMapReact from 'google-map-react';


const GoogleMap = ({ from, to }) => {
  const values = {
    info: {
      lat: 23.7104,
      lng: 90.40744,
    },

    zoom: 12,
  };
  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA5YjggofvCXW3-2aHqTOtOdpQDiR4HMvA' }}
        defaultCenter={values.info}
        defaultZoom={values.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
