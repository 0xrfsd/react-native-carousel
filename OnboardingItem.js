import React from 'react';

import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default OnboardingItem = ({ item }) => {

    const windowWidth = useWindowDimensions().width;

    return (
        <View style={[{ flex: 1, paddingTop: 25, alignItems: 'center', paddingLeft: 10, paddingRight: 10 }, {windowWidth}]}>
                <Image source={item.image}style={{ flex: 0.5, width: '100%', justifyContent: 'center', borderRadius: 10, resizeMode: 'cover' }} />
                <Text>{item.description}</Text>
                <Text>{item.title}</Text>
        </View>
    )

};