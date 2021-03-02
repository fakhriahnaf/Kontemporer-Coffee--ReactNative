
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './router';
import {Provider, useSelector} from 'react-redux'
import store from './redux/store';
import FlashMessage from "react-native-flash-message";
import { Loading } from './components';

const MainzApp = () => {
  const {isLoading} = useSelector((state) => state.globalReducer)
  return(
    <NavigationContainer>
      <Router/>
      <FlashMessage position="top" />
      {isLoading && <Loading/>}
    </NavigationContainer>
  )
}

const App  = () => {
  return (
      <Provider store={store}>
       <MainzApp/>
       </Provider>
  );
};


export default App;
