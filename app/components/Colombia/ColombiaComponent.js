import React, {useState, useCallback} from 'react';
import {ActivityIndicator,  StyleSheet, SafeAreaView, ScrollView, RefreshControl, View} from 'react-native';
import { Text } from 'react-native-elements';
import AnimateNumber  from 'react-native-animate-number';

export default function ColombiaComponent(props){

  const {activos, loading, newCases, recovered, critical, total, deaths, newDeaths, time} = props;

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
    <View spacing={8} style={{padding:8}}>
    <View style={{flex: 1, flexDirection: 'column'}}>
        <View size={5} style={styles.orange_box} >
          <Text h5 style={styles.container}>Activos</Text>
          <Text h1 style={styles.containerTxt}>
          {activos && 
           <AnimateNumber 
           value={activos} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
           }
           </Text>
          <View>
            {!activos && <ActivityIndicator size="large" color="#FFB533" />}
          </View>
        </View>
        <View size={5} style={styles.gray_box}>
          <Text h5 style={styles.container}>criticos</Text>
          <Text h1 style={styles.containerTxt}>
          {critical && 
           <AnimateNumber 
           value={critical} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
           }
          </Text>
          <View>
            {!critical && <ActivityIndicator size="large" color="#FFB533" />}
          </View>
        </View>
        <View size={5} style={styles.gray_box}>
      <Text h5 style={styles.container}>Nuevos casos</Text>
      <Text h1 style={styles.containerTxt}>
        +{newCases && 
           <AnimateNumber 
           value={parseInt(newCases)} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
        }
        </Text>
      <View>
            {!newCases && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    <View size={5} style={styles.green_box}>
      <Text h5 style={styles.container}>Recuperados</Text>
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
            {!recovered && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    </View>
    <View style={{flex: 1, flexDirection: 'column'}}>
    <View size={5} style={styles.gray_box}>
      <Text h5 style={styles.container}>Total Casos</Text>
      <Text h1 style={styles.containerTxt}>
        {total && 
           <AnimateNumber 
           value={total} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
        }
      </Text>
      <View>
            {!total && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    <View size={5} style={styles.green_box}>
      <Text h5 style={styles.container}>Muertos</Text>
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
    </View>
    <View size={5} style={styles.green_box}>
      <Text h5 style={styles.container}>Nuevas muertes</Text>
      <Text h1 style={styles.containerTxt}>
      +{newDeaths && 
           <AnimateNumber 
           value={parseInt(newDeaths)} 
           formatter={(val) =>  parseFloat(val).toFixed(0)}
           timing = "easeIn" 
            />
        } 
      </Text>
      <View>
            {!newDeaths && <ActivityIndicator size="large" color="#FFB533" />}
      </View>
    </View>
    <View size={5} style={styles.green_box}>
      <Text h5 style={styles.container}>Actualizado: </Text>
      <Text h5 style={styles.containerTxt}>{time && time}</Text>
      <View>
            {!time && <ActivityIndicator size="large" color="#FFB533" />}
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
