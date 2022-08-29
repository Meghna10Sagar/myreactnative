import React ,{useEffect, useState} from 'react';
import { View, Text ,StyleSheet,ScrollView} from 'react-native';
import axios from 'axios';
// import url
import { listurl } from './src/utils/url';
export default function App() {
  const[postData,setPostData] = useState([]);

useEffect(() =>{
fetchApiData();
},[]);

const fetchApiData = async() =>{
  try{
const response = await  axios.get(listurl);
console.log(response.data);
setPostData(response.data);
  }
  catch(err){
    console.log(err);
  }
}
  return (
    <View style={styles.container}> 
    <ScrollView>
      {postData.map((list,index)=>{
        console.log(list);
        return(
<Text style={styles.myConatiner}>
  {
    list.name
  }
</Text>
        );
      })}

</ScrollView>
    </View>
    
  
  );
}
const styles = StyleSheet.create({
  container: {
flex : 1,

  },
  myConatiner:{
marginVertical:20,
textAlign:'center',
  }
});
