import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/reducer/ProductsSlice";

const AddProduct = ({navigation}) => {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [taxiNumber, setTaxiNumber] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();



    const handleAddProduct = () => {
        // check if product
        if (!from || !to || !taxiNumber) {
            setError("Please fill in all fields");
            return;
        }
        
        // check if taxi number is int
        if (isNaN(taxiNumber)) {
            setError("Taxi number must be a number");
            return;
        }
        // add product
        dispatch(
          addProduct({
              from,
              to,
              taxiNumber,
              id:taxiNumber
          })
      );
      // show toast
      ToastAndroid.show("Taxi added", ToastAndroid.SHORT);
      // clear inputs
      setFrom("");
      setTo("");
      setTaxiNumber("");
      // remove error
      setError(null);
      // navigate to products
      navigation.navigate("Products");
    }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f4f4f4",
      }}
    >
      <View style={styles.form}>
      {/* Error Message */}
      {error && (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      )}
        <TextInput
          style={styles.input}
          placeholder="From"
          onChangeText={(text) => setFrom(text)}
          value={from}
        />
        <TextInput
          style={styles.input}
          placeholder="To"
          onChangeText={(text) => setTo(text)}
          value={to}
        />
        <TextInput
          style={styles.input}
          placeholder="Taxi Number"
          onChangeText={(text) => setTaxiNumber(text)}
          value={taxiNumber}
        />
        <TouchableOpacity style={styles.button}
        onPress={handleAddProduct}
        >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      </View>

      

    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "80%",
        borderRadius: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#00CD5E",
        padding: 10,
        width: "80%",
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
