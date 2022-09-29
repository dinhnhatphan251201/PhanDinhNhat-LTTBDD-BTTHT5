import { Button } from "@react-native-material/core";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductItem2 = ({ item }) => {
    return (
        <View style={{ width: 150 }}>
            <View style={{}}>
                <View>
                    <Image source={item.img} />
                </View>
                <View style={{}}>
                    <Text style={{}}>{item.name}</Text>
                    <Text style={{}}>Shop: {item.shop}</Text>
                </View>
            </View>
            <View>
                <Button color="red" title="Chat" />
            </View>
        </View>
    );
};

export default ProductItem2;
