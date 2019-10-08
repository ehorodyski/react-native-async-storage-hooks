
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainScreen from './src/screens/Main';
import SettingsScreen from './src/screens/Settings';
import TabBar from './src/components/TabBar';
import ThemeContextProvider from './src/components/ThemeContextProvider';

const TabNavigator = createBottomTabNavigator(
  {
    Main: { screen: MainScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
);

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
  return (
    <ThemeContextProvider>
      <AppContainer />
    </ThemeContextProvider>
  );
};
export default App;
