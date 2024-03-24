import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({borderWidth,width,color,}) => {
  return (
    <View style={{ width: width, alignItems: 'center', borderBottomWidth: borderWidth, borderBottomColor: color, marginVertical: 10 }} />
  )
}

export default Spacer

const styles = StyleSheet.create({})