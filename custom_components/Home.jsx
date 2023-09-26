import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import styles from '../styles/app.styles';
import  MapView, { Marker } from 'react-native-maps';
import zipcodes from '../data/zipcodes';

export default function Home({route, navigation}) {
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
  return (
    <SafeAreaView style={styles.container}>
        
        <MapView style={styles.map}
          initialRegion={{
            latitude: 34.0007,
            longitude: -81.0348,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
            <Text>{JSON.stringify(locationData)}</Text>
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
    </SafeAreaView>
  );
}