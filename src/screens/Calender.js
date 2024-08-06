import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import { Text } from 'react-native-animatable';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


export default function APIs() {
  const [data, setdata] = useState([])
  const [finalData, setfinalData] = useState([])
  const baseURL = 'http://3.16.186.232/api/v1';
  const getAPI = () => {
    axios({
      method: "GET",
      url: `${baseURL}/product?page=1&limit=10`,
    })
      .then(res => setdata(res.data))
      .catch(res => console.log('error', res))
      console.log(data.data.data);
      setfinalData(data?.data?.data)
  }
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity onPress={getAPI}>
        <Text style={{ fontSize: 12 }}> API</Text>
      </TouchableOpacity>
      <FlatList data={finalData}

        ListEmptyComponent={() =>

        (<Text
          style={{ fontSize: 40 }}>No Data</Text>)}
      renderItem={({item})=><View>
        <Text style={{fontSize:20, alignItems:'center'}}>id:{item.id}</Text>
      </View>}>

      </FlatList>

    </View>
  )
}
