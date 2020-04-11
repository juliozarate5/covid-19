import React, {useState, useEffect} from 'react';
import {View, StyleSheet, RefreshControl} from 'react-native';
import {API_URL_TOTALS} from '../../../assets/config';
import Axios from 'axios';
import WorldComponent from '../../components/World/WorldComponent';
import moment from "moment";


export default function World(){

  const [resultWorld, setResultWorld] = useState({
    deaths: {},
    confirmed: {},
    recovered: {},
    lastUpdate: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  useEffect( () => {
    loadCasesWorld();
  }, [])

const loadCasesWorld = async () => {
  console.log('casos mundo...')
  setLoading(true);
  await Axios.get(API_URL_TOTALS)
  .then(resp => {  
    setLoading(false);
    setResultWorld(resp.data);
  })
  .catch(error => {
    console.log(error); 
  });
};

    return(
        <View style={styles.container}>
           <WorldComponent 
              confirmed= {resultWorld.confirmed.value} 
              deaths= {resultWorld.deaths.value}
              recovered = {resultWorld.recovered.value}
              loadCasesWorld = {loadCasesWorld}
              loading  = {loading}
              lastUpdate = {moment(resultWorld.lastUpdate).subtract('hours', 5).format('YYYY-MM-DD HH:mm')}
            />  
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#eee',
    backgroundColor: '#1f2028',
    alignItems: 'center',
    justifyContent: 'center',
  }
});