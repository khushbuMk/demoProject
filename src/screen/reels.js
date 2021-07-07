import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const reelsData = [
    {
        author: 'Rishabh Das',
        post: "Loerem Torem Loerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem Torem ",
        rating: 4.5,
        authorImg: require('../../assets/images/img2.jpg'),
        postTime: '23s',
        liked: true,
        company: 'L&T Infocity'
    },
    {
        author: 'Rishabh Das',
        post: "Loerem Torem Loerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem Torem ",
        rating: 4.5,
        authorImg: require('../../assets/images/img5.jpg'),
        postTime: '23s',
        liked: true,
        company: 'L&T Infocity'
    },
    {
        author: 'Rishabh Das',
        post: "Loerem Torem Loerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem Torem ",
        rating: 4.5,
        authorImg: require('../../assets/images/img4.jpg'),
        postTime: '23s',
        liked: true,
        company: 'L&T Infocity'
    },
    {
        author: 'Rishabh Das',
        post: "Loerem Torem Loerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem Torem ",
        rating: 4.5,
        authorImg: require('../../assets/images/img3.jpg'),
        postTime: '23s',
        liked: true,
        company: 'L&T Infocity'
    },
    {
        author: 'Rishabh Das',
        post: "Loerem Torem Loerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem Torem ",
        rating: 4.5,
        authorImg: require('../../assets/images/img1.jpg'),
        postTime: '23s',
        liked: true,
        company: 'L&T Infocity'
    }
]

const reels = () => {
    const ReelsComponent = ({item}) => {
        return (
            <View style={{width:wp(90), backgroundColor:'white', margin:wp(5), padding:hp(1), flex:1, overflow:'hidden',borderRadius:15, elevation:6, alignItems:'center'}}>
                
                <View style={{flexDirection:'row'}} >
                    <Image style={{borderRadius:hp(1), height:hp(4), width:hp(4), elevation: 5 }} source={item.authorImg} />
                    <View style={{marginLeft: 10,flex:1}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{fontWeight:'bold', fontSize:16}}>{item.author}</Text>
                            <Text style={{marginLeft: 10, fontSize:10, color:'grey'}}>{item.postTime}</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{fontSize:10}}>{item.company}</Text>
                            <Icon style={{marginLeft: 10}} name="star" size={12} color="gold" />
                            <Text style={{marginLeft: 10, fontSize:10}}>{item.rating}</Text>
                        </View>
                    </View>
                </View>

                <Image style={{height:hp(30), width:wp(90), marginVertical:hp(1) }} source={item.authorImg} />
                <AntDesign size={50} color="white" name="play" style={{position:'absolute', top:hp(18)}} />
                
                <View style={{flexDirection:'row',alignItems:'center', height:hp(4),alignSelf:'flex-start',justifyContent:'space-evenly', width:wp(40)}}>
                    <EntypoIcon  name="heart-outlined" size={20} color="black" />
                    <AntDesign style={{marginLeft:15}}  name="message1" size={18} color="black" />
                    <FontAwesome style={{marginLeft:15}}  name="send-o" size={18} color="black" />
                </View>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={reelsData}
                renderItem={ReelsComponent}
                //Setting the number of column
                numColumns={1}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

export default reels;