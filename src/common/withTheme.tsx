import React, { useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ThemeContext, THEMES, STORAGE_KEY } from './theme.provider';

export function withTheme(Component: any) {
  return (props: any) => {
    const { themeID, setThemeID } = useContext(ThemeContext);
    const getTheme = (themeID: string) => THEMES.find(theme => theme.key === themeID);
    const setTheme = (themeID: string) => { AsyncStorage.setItem(STORAGE_KEY, themeID); setThemeID(themeID); };

    return (
      <Component
        {...props}
        themes={THEMES}
        theme={getTheme(themeID)}
        setTheme={setTheme}
      />);
  };
};