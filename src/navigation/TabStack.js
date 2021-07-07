import * as React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Home from './../screen/Home';
import Search from './../screen/Search';
import { createStackNavigator } from '@react-navigation/stack';
import people from './../screen/people';
import reels from './../screen/reels';
import graph from './../screen/graph';
import profile from '../screen/profile';

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

// const ScreenOptions = {
//     headerStyle: {
//         backgroundColor: ColorConstant.WHITE,
//         elevation: 10,
//         shadowOpacity: 0.9,
//         borderBottomWidth: 0
//     },
//     headerTintColor: ColorConstant.GREY,
//     headerTitleStyle: {
//         fontSize: FontSize.FontSize.medium,
//         fontWeight: '500',
//     },
//     headerTitleAlign: 'center',
//     headerTransparent: false,
// }

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator initialRouteName="Home" headerMode={'none'}  >
            <HomeStack.Screen name={'Home'} component={Home} />
        </HomeStack.Navigator>
    )
}

const SearchStackNavigator = () => {
    return(
        <SearchStack.Navigator initialRouteName="Search" headerMode={'none'}  >
            <SearchStack.Screen name={'Search'} component={Search} />
            {/* <SearchStack.Screen name={'people'} component={people} />
            <SearchStack.Screen name={'reels'} component={reels} /> */}
        </SearchStack.Navigator>
    )
}

export const  TabStackNavigator = ()  => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'Home') {
                            iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        } else if (route.name === 'Search') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }
            
                        // You can return any component that you like here!
                        return <View style={{alignItems:'center'}}>
                            <Image style={[styles.tabIcon, {tintColor:"black"}]} source={
                                route.name === 'Home' ? require('../../assets/icons/home.png') :
                                route.name === 'Search' ? require('../../assets/icons/search.png') :
                                route.name === 'graph' ? require('../../assets/icons/graph.png') :
                                route.name === 'profile' ? require('../../assets/icons/user.png') :
                                require('../../assets/icons/home.png')
                            } />
                            <View style={{backgroundColor:color, width:hp(5), height:hp(0.5), marginTop:hp(1), bottom:0}} />
                        </View>
                        
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'cyan',
                    inactiveTintColor: 'transparent',
                    showLabel: false,
                }}
            >
                <Tab.Screen name="Home" component={HomeStackNavigator} />
                <Tab.Screen name="Search" component={SearchStackNavigator} />
                <Tab.Screen name="graph" component={graph} />
                <Tab.Screen name="profile" component={profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabIcon: {
        height: hp(2.5),
        width: hp(2.5),
        // marginBottom: hp(0.6)
    }
})

export default TabStackNavigator