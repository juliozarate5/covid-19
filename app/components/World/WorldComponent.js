import React, {useState, useCallback} from 'react';
import {ActivityIndicator,  StyleSheet, SafeAreaView, ScrollView, RefreshControl, View} from 'react-native';
import { Card, Text } from 'react-native-elements';
import  Footer from '../Footer';
import AnimateNumber from 'react-native-animate-number';

export default function WorldComponent(props) {

    const {confirmed, deaths, recovered, loadCasesWorld, loading, lastUpdate} = props;

    const [refreshing, setRefreshing] = useState(loading);

    const onRefresh = useCallback(() => {

      setRefreshing(true);
      
      wait(1000).then(() => {
        setRefreshing(loading);
        loadCasesWorld();
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
        <Card containerStyle={{padding: 0, marginBottom: 1, borderRadius: 5, flex: 0.3, 
          backgroundColor: '#1f2028', padding: 5, opacity: 0.9, transform: [ { scale: 0.90 }], zIndex: 2}} >
          <Text h3 style={styles.container}>Confirmados</Text>
          <Text h1 style={styles.containerTxt}>
          {confirmed && 
           <AnimateNumber 
           value={confirmed} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
           }
          </Text>
          <View>
            {!confirmed && <ActivityIndicator size="large" color="#FFB533" />}
           </View>
        </Card>
        <Card containerStyle={{ marginBottom: 1, borderRadius: 5, flex: 0.3, 
          backgroundColor: '#1f2028', padding: 5, opacity: 0.9, transform: [ { scale: 0.90 }], zIndex: 2}} >
          <Text h3 style={styles.container}>Muertes</Text>
          <Text h1 style={styles.containerTxt}>
          {deaths && 
           <AnimateNumber 
           value={deaths} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
           } 
          </Text>
          <View>
            {!deaths && <ActivityIndicator size="large" color="#FFB533" />}
           </View>
        </Card>      
        <Card containerStyle={{marginBottom: 1, borderRadius: 5, flex: 0.3, 
          backgroundColor: '#1f2028', padding: 5, opacity: 0.9, transform: [ { scale: 0.90 }], 
          zIndex: 2, elevation: 2}} >
          <Text h3 style={styles.container}>Recuperados </Text>
           <Text h1 style={styles.containerTxt}>
           {recovered && 
           <AnimateNumber 
           value={recovered} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
           } 
           </Text>
           <View>
            {!recovered && <ActivityIndicator size="large" color="#FFB533"/>}
           </View>
        </Card>
        <Card containerStyle={{marginBottom: 1, borderRadius: 5, flex: 0.1, 
          backgroundColor: '#1f2028', padding: 1, opacity: 0.9, transform: [ { scale: 0.90 }], 
          zIndex: 2, elevation: 2}} >
          <Text style={styles.containerTxt}>Ultima actualización: {lastUpdate && lastUpdate}</Text>
        </Card>
        <Footer author="Julio Martinez Z." date={2020}/>
      </ScrollView>
    </SafeAreaView>

    );

}

const styles = StyleSheet.create({
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