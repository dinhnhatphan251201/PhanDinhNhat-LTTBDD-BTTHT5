import React from "react";
import { FlatList, View } from "react-native";
import { data } from "../data/data.js";
import ProductItem from "./ProductItem";
import ProductItem2 from "./ProductItem2.js";

const Products = () => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={ProductItem}
                keyExtractor={(item) => item.id}
            ></FlatList>
            {/* <FlatList
                style={{ flexDirection: "row" }}
                data={data}
                renderItem={ProductItem2}
                keyExtractor={(item) => item.id}
            ></FlatList> */}
        </View>
    );
};

export default Products;
