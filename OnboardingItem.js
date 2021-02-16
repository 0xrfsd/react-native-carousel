import React from 'react';

import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default OnboardingItem = ({ item }) => {


    return (
        <View style={{ paddingTop: 100}}>
                <Image source={item.image} style={{ height: 250, width: '100%' }} />
                <Text>{item.description}</Text>
                <Text>{item.title}</Text>
        </View>
    )

};