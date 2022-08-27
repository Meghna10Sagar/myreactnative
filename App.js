import React ,{useEffect} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
// import url
import { listurl } from './src/utils/url';
export default function App() {
useEffect(() =>{
fetchApiData();
},[]);

const fetchApiData = async() =>{
  try{
const response = await  axios.get(listurl);
console.log(response);
  }
  catch(err){
    console.log(err);
  }
}
  return (
    <View>
      <Text>MY app is Ready
      </Text>
    </View>
  )
}