import React from 'react';
import {StyleSheet, Picker, View, Text} from 'react-native';


export default function NamesCountries(props){

  const {selectedValue, countries, loadCases, loading} = props;
  
  return(
    <View >
        <Text style={styles.container}>Selecciona un país</Text>
        <Text></Text>
        <Picker style={styles.grid}
        enabled={!loading}
        selectedValue={selectedValue}
        itemStyle={{ backgroundColor: "grey", color: "#eee"}}
        onValueChange={
        (itemValue, itemIndex) => loadCases(itemValue)
        }
        >
        {countries}
        </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#eee',
    padding: 3
  },
  grid:{
    width: '100%',
    paddingLeft: 30,
    height: 25, backgroundColor: '#fff'
  }
});