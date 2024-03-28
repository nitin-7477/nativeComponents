import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TextField from '../components/TextField'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Spacer from '../components/Spacer'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const HomeScreen = () => {
  const data = [
    { id: 1, title: 'Pizza', imageUrl: require('../../assets/foods/pizza.png') },
    { id: 2, title: 'Paneer', imageUrl: require('../../assets/foods/paneer.png') },
    { id: 3, title: 'Roti', imageUrl: require('../../assets/foods/roti.png') },
    { id: 4, title: 'Burger', imageUrl: require('../../assets/foods/burger.png') },
    { id: 5, title: 'Salad', imageUrl: require('../../assets/foods/salad.jpg') },
    { id: 6, title: 'Manchurian', imageUrl: require('../../assets/foods/manch.png') },
    { id: 7, title: 'Pizza', imageUrl: require('../../assets/foods/pizza.png') },
    { id: 8, title: 'Paneer', imageUrl: require('../../assets/foods/paneer.png') },
    { id: 9, title: 'Roti', imageUrl: require('../../assets/foods/roti.png') },
    { id: 10, title: 'Burger', imageUrl: require('../../assets/foods/burger.png') },
    { id: 11, title: 'Salad', imageUrl: require('../../assets/foods/salad.jpg') },
    { id: 12, title: 'Manchurian', imageUrl: require('../../assets/foods/manch.png') },

  ];
  
  const popularData = [
    { id: 1, title: 'Satkar Hotel', imageUrl: require('../../assets/restaurants/resto1.jpg'), rating: 3.5, time: '30-35 mins', subTitle: 'Salads, Snacks,Dessert' },
    { id: 2, title: 'Prem Rest..', imageUrl: require('../../assets/restaurants/resto2.jpg'), rating: 4.5, time: '20-35 mins', subTitle: 'North Indian Food ' },
    { id: 3, title: 'Couple Cafe', imageUrl: require('../../assets/restaurants/resto3.jpg'), rating: 3.3, time: '10-15 mins', subTitle: 'South India Food' },
    { id: 4, title: 'Chef King', imageUrl: require('../../assets/restaurants/resto4.jpg'), rating: 5.1, time: '30-35 mins', subTitle: 'Paneer, Snacks, Desserts' },
    { id: 5, title: 'Vanila cafe', imageUrl: require('../../assets/restaurants/resto5.jpg'), rating: 3.5, time: '20-35 mins', subTitle: 'Lajwawab, Snacks, Desserts' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ flex: 1 }}>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <View style={{ width: '90%' }}>
            <Text style={{ color: 'black', fontFamily: 'RobotoSlab-Black', fontSize: 20 }}>Nawada </Text>
            <Text>Nawada Extension, Nawada, Delhi, 110059, India</Text>
          </View>
          <View style={{ width: '10%', height: 50, width: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
            <Ionicons name='person' size={20} color={'white'} />
          </View>
        </View>
        <View style={{ marginVertical: 5 }}>
          <TextField width={'95%'} placeholder={'Search for Pizza'} icon={require('../../assets/search.png')} />
        </View>
        <View style={{ marginTop: 20, paddingHorizontal: 5, height: 160, backgroundColor: 'white' }}>
          <Text style={{ marginLeft: 10, color: 'black', fontFamily: 'RobotoSlab-Black', fontSize: 18 }}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map(item => (
              <View key={item.id} style={styles.item}>
                <Image source={item.imageUrl} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            ))}
          </ScrollView> 
        </View>
        <Spacer width={'100%'} borderWidth={3} color={'lightgrey'} />
        <View style={{ marginTop: 5, paddingHorizontal: 5, height: 260 }}>
          <Text style={{ marginLeft: 10, color: 'black', fontFamily: 'RobotoSlab-Black', fontSize: 18, marginBottom: 20 }}>Popular Products</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularData.map(item => (
              <View key={item.id} style={styles.popularItem}>
                <Image source={item.imageUrl} style={styles.popularimage} />
                <Text style={styles.title}>{item.title}</Text>
                <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                  <AntDesign name='star' size={18} color='green' style={{ marginHorizontal: 3 }} />
                  <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{item.rating} .</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}> {item.time}</Text>
                </View>
                <Text style={{ width: 200, marginVertical: 5 }}>{item.subTitle}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <Spacer width={'100%'} borderWidth={3} color={'lightgrey'} />
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{ marginLeft: 10, color: 'black', fontFamily: 'RobotoSlab-Black', fontSize: 18, marginBottom: 20 }}>1902 Restaurant available</Text>

          {
            popularData.map(item => (
              <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', width: '100%',marginVertical:10 }}>
                <View style={{width:'40%'}}>
                  <Image source={item.imageUrl} style={styles.popularimage} />
                </View>
                <View style={{width:'55%',justifyContent:'center'}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                    <AntDesign name='star' size={18} color='green' style={{ marginHorizontal: 3 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{item.rating} .</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}> {item.time}</Text>
                  </View>
                  <Text style={{ width: 250, marginVertical: 1 }}>{item.subTitle}</Text>
                  <TouchableOpacity style={{width:120,backgroundColor:'rgba(128, 0, 128, .1)',padding:5,borderRadius:10,marginVertical:5,flexDirection:'row',alignItems:'center'
                }}>
                  <FontAwesome name='bitbucket' size={14} color={'purple'} style={{marginHorizontal:5}}/>
                    <Text style={{color:'rgba(128, 0, 128, 1)',fontWeight:'bold'}}>Free Delievery</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          }

        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white'
  },
  item: {
    marginVertical: 5,
    alignItems: 'center',
    marginHorizontal: 5
  },
  popularItem: {
    marginVertical: 5,
    width: 150,
    marginHorizontal: 5
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  popularimage: {
    width: 140,
    height: 130,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
});
