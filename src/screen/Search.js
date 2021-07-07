import React from 'react';
import { View, Text } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import people from './people';
import reels from './reels';

const Tab = createMaterialTopTabNavigator();
const Search = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="people" component={people} />
            <Tab.Screen name="reels" component={reels} />
        </Tab.Navigator>
    );
};

export default Search;