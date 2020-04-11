import React, {useState, useEffect} from 'react';
import {View, Picker, StyleSheet} from 'react-native';
import {API_URL, API_URL_COUNTRIES, X_RAPIDAPI_HOST, X_RAPIDAPI_KEY} from '../../../assets/config';
import Axios from 'axios';
import CountriesComponent from '../../components/Countries/CountriesComponent';
import NamesCountries from '../../components/Countries/NamesCountries';
import moment from "moment";

export default function Countries(){

    useEffect( () => {
        loadCountries();
        loadCases(selectedValue)
    }, []);
    
    const [countries, setCountries] = useState([]);
    const [selectedValue, setSelectedValue] = useState("China");  

    const [result, setResult] = useState({
        time: '',
        cases: {},
        deaths: {}
    });
    const [loader, setLoader] = useState(false);
    const [loader2, setLoader2] = useState(false);

    const loadCases = async (item) => {
      setLoader2(true);
      setSelectedValue(item);
      const URL = `${API_URL}?country=${item}`;
      console.log(URL);
      await Axios.get(URL, 
        {headers: {'x-rapidapi-host': `${X_RAPIDAPI_HOST}`, 'x-rapidapi-key': `${X_RAPIDAPI_KEY}`}
      })
      .then(resp => {  
        if(resp.data.results > 0){
          setLoader2(false)
          let resultado = resp.data.response[0];
          console.log(resultado)
          if(resultado){
            setResult(resultado);
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

      const loadCountries = async () => {
        setLoader(true);
        await Axios.get(API_URL_COUNTRIES)
        .then(resp => {
          setLoader(false);  
          let vals = [];
          vals = Object.values(resp.data);
          vals.sort();
          vals = vals.filter(c => c!='Colombia');
          let countr = vals.map( (s, i) => {
            return <Picker.Item 
                style={{color: '#eee', backgroundColor: '#eee'}} 
                key={i} value={s} 
                label={s}
             />
          });
          setCountries(countr);
        })
        .catch(error => {
          console.log(error); 
        });
      };

    return(
        <View style={styles.grid}> 

        <NamesCountries 
                loadCases={loadCases} 
                countries={countries} 
                selectedValue={selectedValue}
                loading = {loader}
            />


            <CountriesComponent           
              activos={ result.cases.active } 
              newCases = { result.cases.new }
              recovered = {result.cases.recovered }
              critical = { result.cases.critical }
              total = { result.cases.total } 
              deaths = { result.deaths.total }
              newDeaths = {result.deaths.new}
              time = {moment(result.lastUpdate).subtract(5, 'hours').format('YYYY-MM-DD HH:mm')}
              loader2={loader2}
           /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f2028',
      alignItems: 'center',
      justifyContent: 'center',
    },
    grid:{
      flexDirection: "row",
      width: '100%',
      backgroundColor: '#1f2028',
      padding: 10
    }
  });