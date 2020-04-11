import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {API_URL, X_RAPIDAPI_HOST, X_RAPIDAPI_KEY} from '../../../assets/config';
import Axios from 'axios';
import ColombiaComponent from '../../components/Colombia/ColombiaComponent';
import moment from "moment";

export default function Colombia(){

    const colombia = "Colombia";
    
    const [result, setResult] = useState({
        time: '',
        cases: {},
        deaths: {}
      });
      
      const [load, setLoad] = useState(false);
      
  useEffect( () => {
    loadCases();
  }, [])

    const loadCases = async () => {
        setLoad(true);
        const URL = `${API_URL}?country=${colombia}`;
        await Axios.get(URL, 
          {headers: {'x-rapidapi-host': `${X_RAPIDAPI_HOST}`, 'x-rapidapi-key': `${X_RAPIDAPI_KEY}`}
        })
        .then(resp => {  
          //console.log(resp.data)
          setLoad(false);
          if(resp.data.results > 0){
            let results = resp.data.response[0];
            if(results){
              setResult(results);
            }
          }else{
            setResult({
              time: '',
              cases: {
                active: 'Sin info',
                new: 'Sin info',
                recovered: 'Sin info',
                total: 'Sin info'
              },
              deaths: {
                total: 'sin info'
              }
            })
          }
        })
        .catch(error => {
          console.log(error); 
        });
      };
    return(
         <View style={styles.container}>
           <ColombiaComponent 
           activos={ result.cases.active } 
           newCases = { result.cases.new }
           recovered = {result.cases.recovered }
           critical = { result.cases.critical }
           total = { result.cases.total } 
           deaths = { result.deaths.total }
           newDeaths = {result.deaths.new}
           time = {moment(result.lastUpdate).subtract(5, 'hours').format('YYYY-MM-DD HH:mm')}
           loading={load}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f2028',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });