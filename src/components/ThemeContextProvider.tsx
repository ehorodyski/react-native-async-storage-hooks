import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { ThemeContext, THEMES, STORAGE_KEY } from '../common/theme.provider';

const ThemeContextProvider = ({ children }: any) => {
  const [themeID, setThemeID] = useState(THEMES[1].key);

  useEffect(() => {
    (async () => {
      const storedThemeID = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedThemeID)
        setThemeID(storedThemeID);
      else
        setThemeID(THEMES[1].key);
    })();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeID, setThemeID, }}>
      {!!themeID ? children : null}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;