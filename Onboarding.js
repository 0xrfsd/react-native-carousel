import React, {useState, useRef} from 'react';

import { View, Text, Image, FlatList, Animated } from 'react-native';
import OnboardingItem from './OnboardingItem';

import slides from './slides'

export default Onboarding = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    return(
        <View style={{ flex: 1 }}>
            <FlatList data={slides} renderItem={({ item }) => <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x:scrollX} } }], {
                useNativeDriver: false,
            })}
            />
        </View>
    )

};