import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { IcHomeOff, IcHomeOn, IcProfileOff, IcProfileOn, IcOrderOff, IcOrderOn} from '../../../assets';
import { Gap } from '../../part/part';

const Icon = ({label, focus}) => {
    switch(label) {
        case 'Home' :
            return focus ? <IcHomeOn/> : <IcHomeOff/>;
        case 'Order':
            return focus ? <IcOrderOn/> : <IcOrderOff/>;
        case 'Profile':
           return focus ? <IcProfileOn/> : <IcProfileOff/>;
        default:  
            return <IcHomeOn/>;
    }
}

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View
      style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={{alignContent:'center'}}>
            <Icon label={label} focus={isFocused}/>
            <Gap height={4}/>
            <Text style={{textAlign:'center' ,alignContent:'center', fontFamily:'Poppins-Regular'}}>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
   container:  {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 22,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
    },
});
