import React from 'react';
import { SafeAreaView, TouchableOpacity, Text} from 'react-native';
import styles from '../styles/app.styles';
import  MapView, { Marker } from 'react-native-maps';
import zipcodes from '../data/zipcodes';
import { useActionSheet } from '@expo/react-native-action-sheet';

export default function Home({route, navigation}) {
  const {showActionSheetWithOptions} = useActionSheet();
  const zipcode = route.params.zipcode.toString();
  const locationData = zipcodes.get(zipcode);
  console.log(locationData);
  const markers = [
    {
        latitude: 34.00642244075259,
        longitude: -81.03324025194037,
        title: 'Prisma',
        description: 'General Health'
    },
    {
        latitude: 34.01219889162862,
        longitude:  -81.02572047735643,
        title: 'Prisma',
        description: 'Weight Management'
    },
    {
        latitude: 34.02890113984785, 
        longitude: -81.03388371590462,
        title: 'Prisma',
        description: 'Heart Health'
    },
    {
        latitude: 34.017694264117196, 
        longitude: -81.08477642010864,
        title: 'Prisma',
        description: 'Behavioral Health'
    },
    {
        latitude: 34.006314986023426, 
        longitude: -81.03421085352032,
        title: 'Prisma',
        description: 'Health Counseling'
    }
    ];

    const onPress = () => {
      const options = ['Prisma', 'Prisma', 'Prisma', 'Prisma', 'Prisma'];
      const destructiveButtonIndex = 0;
      const cancelButtonIndex = 2;
  
      showActionSheetWithOptions({
        options,
        cancelButtonIndex,
        destructiveButtonIndex
      }, (selectedIndex) => {
        switch (selectedIndex) {
          case 1:
            // Save
            break;
  
          case destructiveButtonIndex:
            // Delete
            break;
  
          case cancelButtonIndex:
            // Canceled
        }});
    }
  return (
    <SafeAreaView style={styles.container}>
        
        <MapView style={styles.map}
          initialRegion={{
            latitude: locationData.latitude,
            longitude: locationData.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
            {markers.map((marker, index) => (
                <Marker 
                    key={index}
                    coordinate={{ latitude: marker.latitude,
                    longitude: marker.longitude}}
                    title = {marker.title}
                    description= {marker.description}
                />
            ))}
        </MapView>
        <TouchableOpacity 
        style={styles.button}
        onPress={onPress}>
              <Text>Press to see local resources</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}