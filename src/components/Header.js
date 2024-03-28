import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({title,onPress}) => {
  return (
    <View style={{height:50,width:'100%',flexDirection:'row',alignItems:'center',paddingHorizontal:10,backgroundColor:'white'}}>
      
      <Pressable onPress={onPress} style={{height:40,width:40,justifyContent:'center',alignItems:'center'}}>
        <Ionicons name='arrow-back-sharp' size={28} />
        </Pressable>
      <Text style={{fontFamily:'RobotoSlab-Black',marginLeft:20,fontSize:20}}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})