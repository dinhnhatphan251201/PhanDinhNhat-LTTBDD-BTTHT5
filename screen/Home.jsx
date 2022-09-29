import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Products from "../components/Products";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="back" size={24} color="#fff" />
                <Text style={{ color: "#fff" }}>Chat</Text>
                <AntDesign name="shoppingcart" size={24} color="#fff" />
            </View>
            <View style={styles.session}>
                <Products />
            </View>
            <View style={styles.footer}>
                {/* <Text style={{ color: "#fff" }}></Text> */}
                <FontAwesome name="list" size={24} color="#fff" />
                <FontAwesome name="home" size={24} color="#fff" />
                <AntDesign name="back" size={24} color="#fff" />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#1BA9FF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        height: 70,
    },
    session: {
        flex: 1,
    },
    footer: {
        backgroundColor: "#1BA9FF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        height: 50,
    },
});
