import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

const postFeed = [
    {
        author: 'Rishabh Das',
        post: "Loerem Torem Loerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem Torem ",
        rating: 4.5,
        authorImg: require('../../assets/images/img5.jpg'),
        postTime: '23s',
        liked: true,
        company: 'L&T'
    },
    {
        author: 'Albert',
        post: "Loerem Torem Loerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem Torem ",
        rating: 4.5,
        authorImg: require('../../assets/images/img5.jpg'),
        postTime: '23s',
        liked: false,
        company: 'Microsoft'
    },
    {
        author: 'Khusbhu',
        post: "Loerem Torem Loerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem Torem ",
        rating: 5,
        authorImg: require('../../assets/images/img5.jpg'),
        postTime: '23s',
        liked: false,
        company: 'Reliance'
    },
    {
        author: 'Albert',
        post: "Loerem Torem Loerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem ToremLoerem Torem ",
        rating: 4.5,
        authorImg: require('../../assets/images/img5.jpg'),
        postTime: '5h',
        liked: false,
        company: 'Apple'
    },
]

const Home = () => {

    const NewsComponent = (item, index) => {
        return(
            <View style={{ flex:1,  margin:5,borderRadius:20,overflow:'hidden',elevation:5 }} key={index}>
                <Image style={{height:wp(40), width:wp(40), }} source={item.img} />
                <Text style={{fontSize:10, fontWeight:'500',position:'absolute', padding:5, color:'white',bottom:0, textAlign:'center',shadowColor:'grey' }}>{item.desc}</Text>
            </View>
        )
    }

    const FeedComponent = ({item,index}) => {
        return (
            <View key={index} style={{marginVertical:hp(1.5), paddingHorizontal:hp(1)}}>
                <View style={{flexDirection:'row'}} >
                    <Image style={{borderRadius:hp(3), height:hp(6), width:hp(6), elevation: 5 }} source={item.authorImg} />
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
                    <EntypoIcon style={{alignSelf:'center'}} name="dots-three-vertical" size={18} color="black" />
                </View>
                
                <Text style={{marginVertical:hp(1), fontSize:10}}>
                    {item.post}
                </Text>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                {
                    item.liked ? 
                    <EntypoIcon   name="heart" size={18} color="red" />
                    :
                    <EntypoIcon  name="heart-outlined" size={18} color="black" />
                }
                    <AntDesign style={{marginLeft:12}}  name="message1" size={15} color="black" />
                    <FontAwesome style={{marginLeft:12}}  name="send-o" size={15} color="black" />
                </View>
            </View>
        )
    }

    return (
        <View style={{flex:1,paddingHorizontal:wp(3),marginTop:hp(2)}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{flex:1, fontSize:20, fontWeight:'100'}}>Hey Mark,</Text>
                <Icon style={{padding:10}} name="bell" size={20} color="black" />
                <Icon style={{padding:10}} name="email" size={20} color="black" />                
            </View>

            <ScrollView>
                <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold', fontSize:14, color:'darkblue',paddingTop:10}} >Trending News</Text>
                    <Text style={{fontSize:10, color:'darkgrey',paddingTop:10}} >See More</Text>
                </View>            

                <View style={{width:'100%', height:hp(21)}}>
                    <ScrollView 
                        style={{width:'100%', flex:1}}
                        horizontal >                
                        {trendingNews.map(NewsComponent)}
                    </ScrollView>
                </View>
                
                <FlatList
                    data = {postFeed} 
                    renderItem = {FeedComponent}
                    style={{flex:1, marginVertical:hp(2)}}
                    keyExtractor={(item, index)=>index}
                />
                {/* <EntypoIcon style={{position:'absolute',alignSelf:'flex-end',marginTop:hp(98)}}  name="circle-with-plus" size={50} color="skyblue" /> */}
            </ScrollView>
            <EntypoIcon style={{position:'absolute',alignSelf:'flex-end',marginTop:hp(80),right:10}}  name="circle-with-plus" size={60} color="skyblue" />
        </View>
    );
};

export default Home;