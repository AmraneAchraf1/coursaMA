import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Products from "./screens/Products";
import store from "./store";
import { Provider } from "react-redux";
import AddProduct from "./screens/AddProduct";
import Orders from "./screens/Orders";
import Settings from "./screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import getFonts from "./helpers/fonts";

const Tab = createBottomTabNavigator();

export default function App() {

  const font = getFonts();

  const HomeIcon = ({ color, size, focused }) => {
    if (focused) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Octicons name="home" size={size} color={color} />
          <Text
            style={{
              color: color,
              fontSize: 12,
            }}
          >
            Home
          </Text>

          {/* Bottom line */}
          <View
            style={{
              width: 30,
              height: 3,
              backgroundColor: color,
              borderRadius: 2,
            }}
          ></View>
        </View>
      );
    }
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          paddingVertical: 8,
        }}
      >
        <Octicons name="home" size={size} color={color} />
        <Text
          style={{
            color: color,
            fontSize: 12,
          }}
        >
          Home
        </Text>
      </View>
    );
  };

  const ListIcon = ({ color, size, focused }) => {
    if (focused) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <FontAwesome5 name="clipboard-list" size={size} color={"#00CD5E"} />
          <Text
            style={{
              color: "#00CD5E",
              fontSize: 12,
            }}
          >
            List
          </Text>

          {/* Bottom line */}
          <View
            style={{
              width: 30,
              height: 3,
              backgroundColor: "#00CD5E",
              borderRadius: 2,
            }}
          ></View>
        </View>
      );
    }
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          paddingVertical: 8,
        }}
      >
        <FontAwesome5 name="clipboard-list" size={size} color={color} />
        <Text
          style={{
            color: color,
            fontSize: 12,
          }}
        >
          List
        </Text>
      </View>
    );
  };

  const AddIcon = ({ color, size, focused }) => {
    if (focused) {
      return (
        <View
          style={{
            backgroundColor: "#00CD5E",
            height: 72,
            width: 72,
            borderRadius: 36,
            alignItems: "center",
            justifyContent: "center",
            top: -36,
          }}
        >
          {/* add icon */}
          <View
            style={{
              width: 24,
              height: 3,
              backgroundColor: "#fff",
              borderRadius: 2,
              position: "absolute",
            }}
          ></View>
          <View
            style={{
              width: 3,
              height: 24,
              backgroundColor: "#fff",
              borderRadius: 2,
              position: "absolute",
            }}
          ></View>
        </View>
      );
    }
    return (
      <View
        style={{
          backgroundColor: "#00CD5E",
          height: 72,
          width: 72,
          borderRadius: 36,
          alignItems: "center",
          justifyContent: "center",
          top: -36,
        }}
      >
        {/* add icon */}
        <View
          style={{
            width: 24,
            height: 3,
            backgroundColor: "#fff",
            borderRadius: 2,
            position: "absolute",
          }}
        ></View>
        <View
          style={{
            width: 3,
            height: 24,
            backgroundColor: "#fff",
            borderRadius: 2,
            position: "absolute",
          }}
        ></View>
      </View>
    );
  };

  const OrderIcon = ({ color, size, focused }) => {
    if (focused) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Feather name="navigation" size={size} color={color} />
          <Text
            style={{
              color: color,
              fontSize: 12,
            }}
          >
            Tracking
          </Text>

          {/* Bottom line */}
          <View
            style={{
              width: 30,
              height: 3,
              backgroundColor: color,
              borderRadius: 2,
            }}
          ></View>
        </View>
      );
    }
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          paddingVertical: 8,
        }}
      >
        <Feather name="navigation" size={size} color={color} />
        <Text
          style={{
            color: color,
            fontSize: 12,
          }}
        >
          Tracking
        </Text>
      </View>
    );
  };

  const SettingsIcon = ({ color, size, focused }) => {
    if (focused) {
      return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Feather name="settings" size={size} color={"#00CD5E"} />
          <Text
            style={{
              color: color,
              fontSize: 12,
            }}
          >
            Settings
          </Text>

          {/* Bottom line */}
          <View
            style={{
              width: 30,
              height: 3,
              backgroundColor: color,
              borderRadius: 2,
            }}
          ></View>
        </View>
      );
    }
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          paddingVertical: 8,
        }}
      >
        <Feather name="settings" size={size} color={color} />
        <Text
          style={{
            color: color,
            fontSize: 12,
          }}
        >
          Settings
        </Text>
      </View>
    );
  };

  if (!font) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              height: 64,
            },
            tabBarLabelStyle: {
              display: "none",
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <HomeIcon color={color} size={size} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Products"
            component={Products}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <ListIcon color={color} size={size} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="AddProduct"
            component={AddProduct}
            options={{
              tabBarIcon: ({ focused }) => <AddIcon focused={focused} />,
            }}
          />
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <OrderIcon color={color} size={size} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color, size, focused }) => (
                <SettingsIcon color={color} size={size} focused={focused} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
