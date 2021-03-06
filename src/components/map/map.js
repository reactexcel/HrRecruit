import React from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapView from 'react-native-maps';
import { Icon, Button } from 'native-base';
import style from './styles';


class MapMarker extends React.Component {
  render() {
    return (
      <View style={style.mainContainer}>
        <MapView
          style={style.map}
          mapType="standard"
          loadingEnabled
          scrollEnabled={false}
          initialRegion={{
            latitude: this.props.username.office_location.long,
            longitude: this.props.username.office_location.lat,
            latitudeDelta: 0.0132,
            longitudeDelta: 0.0211,
          }}
        >
          {this.props.marker.map((marker, i) => (
            <MapView.Marker
              key={i}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />),
          )}
        </MapView>
        <View style={style.openMap}>
          <TouchableOpacity onPress={() => { this.props.openMap(); }}>
            <View style={style.iconCricle}>
              <Icon name="md-locate" style={style.mapIconColor} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

module.exports = MapMarker;
