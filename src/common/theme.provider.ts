import React from 'react';
import Themes from './themes.json';

export const STORAGE_KEY = '@theme_id';
export const THEMES = Themes;
export const ThemeContext = React.createContext<any>({});