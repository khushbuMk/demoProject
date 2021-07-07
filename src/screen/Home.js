import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Fontisto';

const trendingNews = [
    {
        desc: 'How the news important for stock... Complete risk free',
        img: require('../../assets/images/img1.jpg')
    },
    {
        desc: 'M&M and MVML Q4 Result; Companies report..',
        img: require('../../assets/images/img2.jpg')
    },
    {
        desc: 'Free stock ...',
        img: require('../../assets/images/img3.jpg')
    },
    {
        desc: 'ETMoney Sold out...',
        img: require('../../assets/images/img4.jpg')
    },
    {
        desc: 'How the news important...',
        img: require('../../assets/images/img5.jpg')
    },
]

const Home = () => {

    const NewsComponent = (item, index) => {
        return(
            <View style={{backgroundColor:'red', flex:1}} key={index}>
                <Image style={{height:wp(40), width:wp(40)}} source={item.img} />
            </View>
        )
    }

    return (
        <View style={{flex:1,paddingHorizontal:wp(3),marginTop:hp(2)}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{flex:1, fontSize:20, fontWeight:'50'}}>Hey Mark,</Text>
                <Icon style={{padding:10}} name="bell" size={20} color="black" />
                <Icon style={{padding:10}} name="email" size={20} color="black" />                
            </View>

            <Text style={{fontWeight:'bold', fontSize:12, color:'blue',paddingTop:10}} >Trending News</Text>
            <View style={{width:'100%', height:hp(20), backgroundColor:'yellow'}}>
                <ScrollView 
                    style={{width:'100%', flex:1, backgroundColor:'yellow'}}
                    horizontal >                
                    {trendingNews.map(NewsComponent)}
                </ScrollView>
            </View>
            

            <FlatList >

            </FlatList>
        </View>
    );
};

export default Home;