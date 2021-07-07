import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const peopleData = [
    {
        profileImg : require("../../assets/images/img1.jpg"),
        name: 'Rishabh Das',
        company: 'LT Corporation',
        rating: 4.5,
        desc: "Hello I'm Rishabh Das I have 10 years of experience in Stock Market.",
        lock:true,
    },
    {
        profileImg : require("../../assets/images/img2.jpg"),
        name: 'Raghav Jain',
        company: 'Zoco Pvt Ltd',
        rating: 4.5,
        desc: "Hello I'm Rishabh Das I have 10 years of experience in Stock Market.",
    },
    {
        profileImg : require("../../assets/images/img3.jpg"),
        name: 'Raghav Jain',
        company: 'Zoco Pvt Ltd',
        rating: 4.5,
        desc: "Hello I'm Rishabh Das I have 10 years of experience in Stock Market.",
    },
    {
        profileImg : require("../../assets/images/img4.jpg"),
        name: 'Raghav Jain',
        company: 'Zoco Pvt Ltd',
        rating: 4.5,
        desc: "Hello I'm Rishabh Das I have 10 years of experience in Stock Market.",
    },
    {
        profileImg : require("../../assets/images/img5.jpg"),
        name: 'Raghav Jain',
        company: 'Zoco Pvt Ltd',
        rating: 4.5,
        desc: "Hello I'm Rishabh Das I have 10 years of experience in Stock Market.",
    },
    {
        profileImg : require("../../assets/images/img1.jpg"),
        name: 'Raghav Jain',
        company: 'Zoco Pvt Ltd',
        rating: 4.5,
        desc: "Hello I'm Rishabh Das I have 10 years of experience in Stock Market.",
    },
    {
        profileImg : require("../../assets/images/img2.jpg"),
        name: 'Raghav Jain',
        company: 'Zoco Pvt Ltd',
        rating: 4.5,
        desc: "Hello I'm Rishabh Das I have 10 years of experience in Stock Market.",
    },
    {
        profileImg : require("../../assets/images/img3.jpg"),
        name: 'Raghav Jain',
        company: 'Zoco Pvt Ltd',
        rating: 4.5,
        desc: "Hello I'm Rishabh Das I have 10 years of experience in Stock Market.",
    }
]

const people = () => {
    const PeopleCard = ({ item }) => {
        return (
            <View style={{width:wp(50), backgroundColor:'white', margin:10, padding:hp(1), flex:1, overflow:'hidden',borderRadius:15, elevation:6, alignItems:'center'}} >
                <View style={{borderColor:'blue', borderWidth:2, width:wp(18), height:wp(18), margin:hp(1), borderRadius:20,alignItems:'center', justifyContent:'center' }}>
                    <Image source={item.profileImg} style={{ width:wp(15), height:wp(15), borderRadius:25}} resizeMode='cover'  />
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:18, fontWeight:'bold', paddingHorizontal:hp(1)}}>{item.name}</Text>
                    {item.lock ? 
                        <Icon name="locked" size={16} color="darkblue" />
                        :
                        null
                    }
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:12, paddingHorizontal:hp(1), color:'grey'}}>{item.company}</Text>
                    <Icon style={{marginHorizontal: 10}} name="star" size={12} color="gold" />
                    <Text>{item.rating}</Text>
                </View>
                <Text style={{ padding:hp(1), flex:1, width:'100%', textAlign:'center',color:'darkblue', fontSize:14}}>
                    "{item.desc}"
                </Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons color={item.lock ?'grey' :'cyan'} name="chatbubble-ellipses" size={25} />
                    <Text style={{color:item.lock ?'grey':'cyan', paddingHorizontal:wp(2)}}>Chat with expert</Text>
                </View>
                
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={peopleData}
                renderItem={PeopleCard}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

export default people;