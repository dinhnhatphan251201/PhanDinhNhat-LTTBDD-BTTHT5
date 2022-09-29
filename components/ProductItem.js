import { Button } from "@react-native-material/core";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductItem = ({ item }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 10,
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Image source={item.img} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15 }}>{item.name}</Text>
                    <Text style={{ color: "red" }}>Shop: {item.shop}</Text>
                </View>
            </View>
            <View>
                <Button color="red" title="Chat" />
            </View>
        </View>
    );
};

export default ProductItem;

const style = StyleSheet.create({});
