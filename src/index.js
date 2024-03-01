import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Products from "./screens/Products";
import store from "./store";
import { Provider, useDispatch } from "react-redux";
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
import AppModal from "./components/AppModal";
import { openModal } from "./store/reducer/ui/ModalSlice";
import AddIcon from "./components/NavigationButton/AddIcon";

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
              fontFamily: "Cairo",
            }}
          >
            الرئيسية
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
            fontFamily: "Cairo",
          }}
        >
          الرئيسية
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
              fontFamily: "Cairo",
            }}
          >
            القائمة
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
            fontFamily: "Cairo",
          }}
        >
          القائمة
        </Text>
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
            التتبع
          </Text>

          {/* Bottom line */}
          <View
            style={{
              width: 30,
              height: 3,
              backgroundColor: color,
              borderRadius: 2,
              fontFamily: "Cairo",
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
            fontFamily: "Cairo",
          }}
        >
          التتبع
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
              fontFamily: "Cairo",
            }}
          >
            الإعدادات
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
            fontFamily: "Cairo",
          }}
        >
          الإعدادات
        </Text>
      </View>
    );
  };

  if (!font) {
    return <Text> loading .. </Text>;
  }

  return (
    <Provider store={store}>
      <AppModal />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              height: 64,
              zIndex: 1000,
            },
            tabBarLabelStyle: {
              display: "none",
            },
          })}
          initialRouteName="Products"
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
              headerLeft: () => (
                <AntDesign
                  name="search1"
                  size={24}
                  color="black"
                  style={{ marginLeft: 16 }}
                />
              ),
              headerTitle: "",
              headerRight: () => (
                <Text
                  style={{
                    marginRight: 16,
                    fontSize: 24,
                    fontFamily: "Cairo",
                  }}
                >
                  القائمة
                </Text>
              ),

            }}

          />
          <Tab.Screen
            name="AddIcon"
            component={AddIcon}
            listeners={({ navigation }) => ({
              tabPress: (event) => {
                event.preventDefault();
                store.dispatch(openModal({ componentName: "AddTaxi" }));
              },
            })}
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
