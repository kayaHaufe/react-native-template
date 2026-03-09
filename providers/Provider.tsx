import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  ThemeProvider,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as ReduxProvider } from 'react-redux';
import useColorScheme from '@/hooks/useColorScheme';
import { colors } from '@/theme';
import store from '@/utils/store';
import 'react-native-reanimated';

export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isDark } = useColorScheme();

  const paperTheme = isDark
    ? {
      ...MD3DarkTheme,
      colors: {
        ...MD3DarkTheme.colors,
        primary: colors.magent,
        secondary: colors.pink,
        background: colors.blackGray,
        surface: '#181A1A',
        onPrimary: colors.white,
        onSecondary: colors.white,
      },
    }
    : {
      ...MD3LightTheme,
      colors: {
        ...MD3LightTheme.colors,
        primary: colors.magent,
        secondary: colors.pink,
        background: colors.lightGray,
        surface: colors.white,
        onPrimary: colors.white,
        onSecondary: colors.white,
      },
    };

  const navigationTheme = isDark
    ? {
      ...NavigationDarkTheme,
      colors: {
        ...NavigationDarkTheme.colors,
        primary: colors.magent,
        background: colors.blackGray,
        card: '#181A1A',
        text: colors.white,
        border: '#2A2D2D',
        notification: colors.pink,
      },
    }
    : {
      ...NavigationLightTheme,
      colors: {
        ...NavigationLightTheme.colors,
        primary: colors.magent,
        background: colors.lightGray,
        card: colors.white,
        text: colors.black,
        border: '#E5E7EB',
        notification: colors.pink,
      },
    };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <PaperProvider theme={paperTheme}>
          <ThemeProvider value={navigationTheme}>
            {children}
          </ThemeProvider>
        </PaperProvider>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}