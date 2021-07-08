import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { VictoryLine, VictoryBar, VictoryChart, VictoryTheme, VictoryAxis  } from 'victory-native';

const peopleData = [
    {
        profileImg : require("../../assets/images/img1.jpg"),
        company: 'LT Corporation',
        data: [
            {quarter: 1, earnings: 1000},
            {quarter: 2, earnings: 5000},
            {quarter: 3, earnings: 1450},
            {quarter: 4, earnings: 12000},
            {quarter: 5, earnings: 14250},
        ],
        currentPrice: 4000,
        profit_loss: "+0.45 (0.05%)",
        profit: true
    },
    {
        profileImg : require("../../assets/images/img2.jpg"),
        company: 'Zoco Pvt Ltd',
        data: [
            {quarter: 5, earnings: 14250},
            {quarter: 6, earnings: 2000},
            {quarter: 7, earnings: 13000},
            {quarter: 8, earnings: 16500},
            {quarter: 9, earnings: 14250},
            {quarter: 10, earnings: 19000}
        ],
        currentPrice: 4000,
        profit_loss: "-0.45 (0.05%)",
        profit: false
    },
    {
        profileImg : require("../../assets/images/img3.jpg"),
        company: 'Zoco Pvt Ltd',
        data: [
            {quarter: 3, earnings: 1450},
            {quarter: 4, earnings: 12000},
            {quarter: 5, earnings: 14250},
            {quarter: 6, earnings: 2000},
            {quarter: 7, earnings: 13000},
            {quarter: 8, earnings: 16500},
        ],
        currentPrice: 4000,
        profit_loss: "+0.45 (0.05%)",
        profit: true
    },
    {
        profileImg : require("../../assets/images/img4.jpg"),
        company: 'Zoco Pvt Ltd',
        data: [
            {quarter: 1, earnings: 1000},
            {quarter: 2, earnings: 5000},
            {quarter: 3, earnings: 1450},
            {quarter: 4, earnings: 12000},
            {quarter: 5, earnings: 14250},
            {quarter: 6, earnings: 2000},
            {quarter: 7, earnings: 13000},
            {quarter: 8, earnings: 16500},
            {quarter: 9, earnings: 14250},
            {quarter: 10, earnings: 19000}
        ],
        currentPrice: 4000,
        profit_loss: "+0.45 (0.05%)",
        profit: true
    },
    {
        profileImg : require("../../assets/images/img5.jpg"),
        company: 'Zoco Pvt Ltd',
        data: [
            {quarter: 1, earnings: 1000},
            {quarter: 2, earnings: 5000},
            {quarter: 3, earnings: 1450},
            {quarter: 4, earnings: 12000},
            {quarter: 5, earnings: 14250},
            {quarter: 6, earnings: 2000},
            {quarter: 7, earnings: 13000},
            {quarter: 8, earnings: 16500},
            {quarter: 9, earnings: 14250},
            {quarter: 10, earnings: 19000}
        ],
        currentPrice: 4000,
        profit_loss: "-0.45 (0.35%)",
        profit: false
    },
    {
        profileImg : require("../../assets/images/img1.jpg"),
        company: 'Zoco Pvt Ltd',
        data: [
            {quarter: 1, earnings: 1000},
            {quarter: 2, earnings: 5000},
            {quarter: 3, earnings: 1450},
            {quarter: 4, earnings: 12000},
            {quarter: 5, earnings: 14250},
            {quarter: 6, earnings: 2000},
            {quarter: 7, earnings: 13000},
            {quarter: 8, earnings: 16500},
            {quarter: 9, earnings: 14250},
            {quarter: 10, earnings: 19000}
        ],
        currentPrice: 4000,
        profit_loss: "-0.45 (0.20%)",
        profit: false
    },
    {
        profileImg : require("../../assets/images/img2.jpg"),
        company: 'Zoco Pvt Ltd',
        data: [
            {quarter: 1, earnings: 1000},
            {quarter: 2, earnings: 5000},
            {quarter: 3, earnings: 1450},
            {quarter: 4, earnings: 12000},
            {quarter: 5, earnings: 14250},
            {quarter: 6, earnings: 2000},
            {quarter: 7, earnings: 13000},
            {quarter: 8, earnings: 16500},
            {quarter: 9, earnings: 14250},
            {quarter: 10, earnings: 19000}
        ],
        currentPrice: 4000,
        profit_loss: "+0.45 (0.05%)",
        profit: true
    },
    {
        profileImg : require("../../assets/images/img3.jpg"),
        company: 'Zoco Pvt Ltd',
        data: [
            {quarter: 1, earnings: 1000},
            {quarter: 2, earnings: 5000},
            {quarter: 3, earnings: 1450},
            {quarter: 4, earnings: 12000},
            {quarter: 5, earnings: 14250},
            {quarter: 6, earnings: 2000},
            {quarter: 7, earnings: 13000},
            {quarter: 8, earnings: 16500},
            {quarter: 9, earnings: 14250},
            {quarter: 10, earnings: 19000}
        ],
        currentPrice: 4000,
        profit_loss: "-0.45 (0.015%)",
        profit: false
    }
]

const data = [
    {quarter: 1, earnings: 1000},
    {quarter: 2, earnings: 5000},
    {quarter: 3, earnings: 1450},
    {quarter: 4, earnings: 12000},
    {quarter: 5, earnings: 14250},
    {quarter: 6, earnings: 2000},
    {quarter: 7, earnings: 13000},
    {quarter: 8, earnings: 16500},
    {quarter: 9, earnings: 14250},
    {quarter: 10, earnings: 19000}
];

const stocks = () => {
    const StockCard = ({ item, index }) => {
        return (
            <View style={{width:wp(90), backgroundColor:'white', flexDirection:'row', marginVertical:wp(1.5),marginHorizontal:wp(5), padding:hp(1), flex:1, overflow:'hidden',borderRadius:15, elevation:6}} >
                
                <View style={{margin:hp(1),alignItems:'center', justifyContent:'center' }}>
                    <Image source={item.profileImg} style={{ width:wp(18), height:wp(10)}} resizeMode='cover'  />
                </View>

                <View style={{flex:1, alignItems:'center', alignSelf:'center'}}>
                <VictoryChart width={wp(40)} height={hp(15)} theme={VictoryTheme.material}>
                    <VictoryLine 
                        width={wp(40)} 
                        height={hp(4.5)} 
                        style={{
                            data: {stroke: index %2 ? 'red' : 'darkcyan'},
                            // strokeWidth: 1, 
                            // strokeLinecap: "round",
                            
                        }}
                        interpolation="natural"
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        data={item.data? item.data : data} 
                        x="quarter" 
                        y="earnings" />
                    <VictoryAxis 
                        crossAxis={false}  
                        style={{
                            grid:{stroke: "transparent" },
                            ticks: {stroke: "transparent", size: 0},
                            tickLabels: {color:'transparent'},
                            axis: {stroke: "transparent"},
                        }} 
                        dependentAxis={false} 
                        standalone={false}/>
                </VictoryChart>
                </View>

                <View style={{flexDirection:'column', alignItems:'center', alignSelf:'center'}}>                    
                    <Text style={{ fontSize:20, fontWeight:'bold', color:'black'}}>₹ {item.currentPrice}</Text>
                    <Text style={{ paddingHorizontal:wp(2), color:item.profit? 'green':'red'}}>{item.profit_loss}</Text>
                </View>
                
            </View>
        )
    }
    return (
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:hp(5), marginTop:hp(2)}}>
                <Text style={{color:'black', fontSize:hp(2), fontWeight:'bold'}}>Company</Text>
                <Text style={{color:'grey', fontSize:hp(2), fontWeight:'bold'}}>Price (INR %)</Text>
            </View>
            <FlatList
                data={peopleData}
                renderItem={StockCard}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

export default stocks;