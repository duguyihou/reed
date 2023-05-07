import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from 'screens/Home';
import Search from 'screens/Search';

import {
  HomeStackParamList,
  RouteName,
  SearchStackParamList,
} from './Routes.types';
import TopStories from '../screens/TopStories';
import Article from '../screens/Article';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SearchStack = createNativeStackNavigator<SearchStackParamList>();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen name={RouteName.Home} component={Home} />
        <HomeStack.Screen name={RouteName.TopStories} component={TopStories} />
        <HomeStack.Screen name={RouteName.Article} component={Article} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Group>
        <SearchStack.Screen name={RouteName.Search} component={Search} />
      </SearchStack.Group>
    </SearchStack.Navigator>
  );
}
const RootTab = createBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <RootTab.Navigator screenOptions={{headerShown: false}}>
        <RootTab.Screen
          name={RouteName.HomeStack}
          component={HomeStackScreen}
          options={{title: RouteName.Home}}
        />
        <RootTab.Screen
          name={RouteName.SearchStack}
          component={SearchStackScreen}
          options={{title: RouteName.Search}}
        />
      </RootTab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
