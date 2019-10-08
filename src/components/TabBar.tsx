import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';
import { withTheme } from '../common/withTheme';

const TabBar = (props: any) => {
  return (
    <BottomTabBar
      {...props}
      activeTintColor={props.theme.backgroundColor}
      labelStyle={style.label}
    />
  );
};
export default withTheme(TabBar);

const style = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: '300',
    textTransform: 'uppercase'
  }
});