import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function WorldComponent(props) {

    const {author, date} = props;

    return(
      <View style={styles.container}>
        <Text style={styles.container}>By: {author} - {date}</Text>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      color: '#eee',
      justifyContent: 'center',
      padding: 25,
    }
  });