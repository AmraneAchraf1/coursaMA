import React, { useEffect } from "react";
import {
  Button,
  FlatList,
  Image,
  Linking,
  PixelRatio,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { SIZES } from "../helpers/constants";

const Products = ({ navigation }) => {
  const data = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [products, setProducts] = React.useState(data);

  console.log(products);

  useEffect(() => {
    // dispatch(getProducts());
  }, []);

  const Item = ({ item, index }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.taxi_number}>
        <Text style={styles.taxi_numberText}> {item.taxiNumber} </Text>
      </View>

      <View style={styles.body}>
        {/* Order */}
        <View style={styles.order}>
          <Text style={styles.taxiOrder}>{index + 1}</Text>
        </View>

        {/* dierection */}
        <View style={styles.direction}>
          {/* dierection  Text*/}
          <View style={styles.directionText}>
            <Text style={styles.taxiDirection1}>{item.from}</Text>
            <Text style={styles.taxiDirection2}>{item.to}</Text>
          </View>

          {/* Arrows */}
          <View style={styles.directionArrow}>
            <View style={styles.circelOut1}>
              <View style={styles.circelIn1} />
            </View>

            <View style={styles.arrow} />

            <View style={styles.circelOut2}>
              <View style={styles.circelIn2} />
            </View>
          </View>
        </View>

        {/* Drag Icon */}
        <View style={styles.drag}>
          <MaterialIcons name="drag-indicator" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );

  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setProducts([]);
              setTimeout(() => {
                setRefreshing(false);
                setProducts(data);
              }, 2000);
            }}
          />
        }
        refreshing={refreshing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 50,
    gap: 16,
  },

  card: {
    borderRadius: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  taxi_number: {
    backgroundColor: "#00CD5E",
    width: 100,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  taxi_numberText: {
    color: "#fff",
    fontSize: SIZES.md,
    fontFamily: "Poppins700",
  },
  body: {
    backgroundColor: "#fff",
    width: "95%",
    height: 72,
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 16,
    borderWidth: 1,
  },
  order: {
    backgroundColor: "#f4f4f4",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  taxiOrder: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  direction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    flex: 1,
    gap: 8,
  },
  directionArrow: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  circelOut1: {
    backgroundColor: "#1c1c1c",
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  circelIn1: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  circelOut2: {
    backgroundColor: "#1c1c1c",
    width: 14,
    height: 14,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  circelIn2: {
    backgroundColor: "#000",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  arrow: {
    width: 2,
    height: 21,
    backgroundColor: "#000",
  },
  directionText: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",
    height: "100%",
  },
  taxiDirection1: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Cairo500",
  },
  taxiDirection2: {
    color: "#000",
    fontSize: 18,
    fontWeight: "800",
  },
  drag: {
    backgroundColor: "#f4f4f4",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Products;
