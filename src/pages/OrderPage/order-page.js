import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EmptyOrder} from '..';
import {Header, OrderTabSection} from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subtitle="Wait for the best thing" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content:{
      flex:1,
  },
  tabContainer: {
      flex: 1,
      marginTop: 24,
  }
});
