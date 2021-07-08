import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchBar from "react-native-dynamic-search-bar";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';
import News from './News';
import stocks from './stocks';

const Tab = createMaterialTopTabNavigator();

const graph = () => {

    return (
        <>
            <View style={{paddingVertical:hp(2),backgroundColor:'white'}}>
                <SearchBar
                    placeholder="Search eg: Rishabh"
                    style={{elevation:8}}
                    onPress={() => {}}
                    onChangeText={(text) => console.log(text)}
                    searchIconImageStyle={{tintColor:'lightgreen'}}
                    clearIconComponent={<Icon size={20} name="options-outline"/>}
                />
            </View>
            
            <Tab.Navigator  >
                <Tab.Screen name="news" component={News} />
                <Tab.Screen name="stocks" component={stocks} />
            </Tab.Navigator>
        </>
    );
};

export default graph;