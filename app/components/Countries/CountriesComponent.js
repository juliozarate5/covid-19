import React, {useState, useCallback} from 'react';
import {ActivityIndicator,  StyleSheet, SafeAreaView, ScrollView, RefreshControl, View, ToastAndroid} from 'react-native';
import { Card, Text } from 'react-native-elements';
import AnimateNumber from 'react-native-animate-number';


export default function CountriesComponent(props){

  const {activos, newCases, recovered, critical, total, deaths, newDeaths, time, loader2} = props;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {

        setRefreshing(true);
    
    wait(1000).then(() => {
      setRefreshing(false);
    });
  }, [refreshing]);

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }


  return(
    <SafeAreaView style={styles.grid}>
    <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
    <View spacing={8} style={{padding:8}}>
    <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.orange_box} >
          <Text h5 style={styles.container}>Activos</Text>
          <Text h1 style={styles.containerTxt}>
          {(parseInt(activos)>=0 && !isNaN(activos)) ? 
           <AnimateNumber 
           value={activos} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
           :'??'}
           </Text>
          <View>
            {loader2 && <ActivityIndicator size="large" color="#FFB533" />}
          </View>
        </View>
        <View size={5} style={styles.gray_box}>
          <Text h5 style={styles.container}>criticos</Text>
          <Text h1 style={styles.containerTxt}>
          {(parseInt(critical)>=0 && !isNaN(critical))? 
           <AnimateNumber 
           value={critical} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
           :'??'}
          </Text>
          <View>
            {loader2 && <ActivityIndicator size="large" color="#FFB533" />}
          </View>
        </View>
        <View size={5} style={styles.gray_box}>
      <Text h5 style={styles.container}>Nuevos casos</Text>
      <Text h1 style={styles.containerTxt}>
        +{(parseInt(newCases)>=0 && !isNaN(parseInt(newCases)))?
           <AnimateNumber 
           value={parseInt(newCases)} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
          />
        :'??'}
        </Text>
      <View>
            {loader2 && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    <View size={5} style={styles.green_box}>
      <Text h5 style={styles.container}>Recuperados</Text>
      <Text h1 style={styles.containerTxt}>
        {(parseInt(recovered)>=0 && !isNaN(recovered))?
           <AnimateNumber 
           value={recovered} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
        :'??'}
      </Text>
      <View>
            {loader2 && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    </View>
    <View style={{flex: 1, flexDirection: 'column'}}>
    <View size={5} style={styles.gray_box}>
      <Text h5 style={styles.container}>Total Casos</Text>
      <Text h1 style={styles.containerTxt}>
        {(parseInt(total)>=0 && !isNaN(total))?
           <AnimateNumber 
           value={total} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
        :'??'}
      </Text>
      <View>
            {loader2 && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    <View size={5} style={styles.green_box}>
      <Text h5 style={styles.container}>Muertos</Text>
      <Text h1 style={styles.containerTxt}>
      {(parseInt(deaths)>=0 && !isNaN(deaths))?
           <AnimateNumber 
           value={deaths} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
        :'??'}
      </Text>
      <View>
            {loader2 && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    <View size={5} style={styles.green_box}>
      <Text h5 style={styles.container}>Nuevas muertes</Text>
      <Text h1 style={styles.containerTxt}>
      +{(parseInt(newDeaths)>=0 && !isNaN(parseInt(newDeaths)) )?
           <AnimateNumber 
           value={parseInt(newDeaths)} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
        :'??'} 
      </Text>
      <View>
            {loader2 && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    <View size={5} style={styles.green_box}>
      <Text h5 style={styles.container}>Actualizado: </Text>
      <Text h5 style={styles.containerTxt}>{time && time}</Text>
      <View>
            {loader2 && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  orange_box: {
    backgroundColor: '#1f2028',
    borderRadius: 5,
    flex: 1, flexDirection: 'row'
  },
  green_box: {
    backgroundColor: '#1f2028',
    borderRadius: 5,flex: 1, flexDirection: 'row'
  },
  gray_box: {
    backgroundColor: '#1f2028',
    borderRadius: 5,flex: 1, flexDirection: 'row'
  },
  container: {
    color: '#eee',
    justifyContent: 'center'
  },
  containerTxt:{
    color: '#FFB533',
    justifyContent: 'center',
  },
  grid:{
    flexDirection: "row",
    width: '100%',
  }
});