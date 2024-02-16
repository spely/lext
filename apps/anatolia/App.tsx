import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import { Theme, ThemeProvider, createTheme } from "@ynssenem/lext";
import _Layout from "./screens/Tabs/_Layout";

export default function App() {
  const Stack = createStackNavigator();
  const theme = createTheme({
    components: {
      BottomSheet: {
        default: {
          pressableBackgroundColor: "primary",
          pressableBackgroundOpacity: 0.8,
        },
      },
    },
  });

  return (
    <ThemeProvider gestureHandlerRootView theme={theme} reactNavigationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Tabs"
            component={_Layout}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}